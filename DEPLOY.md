# Deployment — OVHcloud VPS (Ubuntu 24.04) + nginx

Static Vue 3 / Vite site. **GitHub Actions builds it and rsyncs `dist/` to the
VPS over SSH. The server only runs nginx** — no Node, no app process, no database.

```
  git push main ─► GitHub Actions ─► npm ci + vite build ─► rsync dist/ ──► /var/www/imaginative-input.pl
                                                              (SSH)              ▲
  browser ──────────────────── HTTPS ─────────────────────────────────────► nginx
```

---

## Fill these in

Domain is already wired in (`imaginative-input.pl`) across the nginx config and
this guide. You still substitute these as you go:

| Placeholder      | Meaning                     | Example      |
| ---------------- | --------------------------- | ------------ |
| `YOUR_SERVER_IP` | VPS public IPv4 (and IPv6)  | `51.210.x.x` |
| `ADMIN`          | Your sudo admin user        | `piotr`      |

(`deploy` is the CI user name — keep it or rename consistently everywhere.)

---

## Part A — One-time VPS setup

### A1. Create the VPS & DNS

1. OVHcloud panel → order a **VPS** → image **Ubuntu 24.04**. Note the public
   **IPv4** (and **IPv6** if provided) and the initial root/ubuntu credentials.
2. At your DNS provider (OVH **Domain → DNS zone**, or wherever the domain lives),
   create records pointing at the VPS:

   | Type   | Name  | Value            |
   | ------ | ----- | ---------------- |
   | `A`    | `@`   | `YOUR_SERVER_IP` |
   | `A`    | `www` | `YOUR_SERVER_IP` |
   | `AAAA` | `@`   | `YOUR_SERVER_IPv6` (if you have one) |
   | `AAAA` | `www` | `YOUR_SERVER_IPv6` (if you have one) |

   Verify before continuing (DNS must resolve before certbot will issue a cert):
   ```bash
   dig +short imaginative-input.pl
   dig +short www.imaginative-input.pl
   ```

### A2. First login & system update

```bash
ssh root@YOUR_SERVER_IP        # or: ssh ubuntu@YOUR_SERVER_IP
apt update && apt -y upgrade
```

### A3. Admin user, SSH hardening, firewall

Create a sudo admin (skip if OVH already gave you a non-root `ubuntu` user — just
`usermod -aG sudo ubuntu`):

```bash
adduser ADMIN
usermod -aG sudo ADMIN
rsync --archive --chown=ADMIN:ADMIN ~/.ssh /home/ADMIN   # copy your SSH key in
```

Firewall (allow SSH + web before enabling, or you will lock yourself out):

```bash
apt -y install ufw
ufw allow OpenSSH
ufw allow 'Nginx Full'        # opens 80 + 443
ufw --force enable
ufw status
```

Harden SSH — disable root login and passwords (confirm key login as `ADMIN`
works in a **second** terminal first):

```bash
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/'        /etc/ssh/sshd_config
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo systemctl restart ssh
```

Optional but recommended: `sudo apt -y install fail2ban` (sane defaults).

### A4. Install nginx

```bash
sudo apt -y install nginx
systemctl status nginx --no-pager
```

Visiting `http://YOUR_SERVER_IP` should show the nginx welcome page.

### A5. Web root + deploy user + CI SSH key

The deploy user is intentionally minimal: **no sudo**, owns only the web root.
CI logs in as this user to rsync files.

```bash
# dedicated CI user
sudo adduser --disabled-password --gecos "" deploy

# web root, owned by deploy, readable by nginx (www-data)
sudo mkdir -p /var/www/imaginative-input.pl
sudo chown -R deploy:www-data /var/www/imaginative-input.pl
sudo chmod -R 755 /var/www/imaginative-input.pl
```

Generate a **dedicated CI keypair** (on your laptop, not the server):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/portfolio_deploy -C "github-actions-deploy" -N ""
```

Install the **public** half for the deploy user on the server:

```bash
sudo install -d -m 700 -o deploy -g deploy /home/deploy/.ssh
# paste the contents of ~/.ssh/portfolio_deploy.pub on the next line:
echo 'ssh-ed25519 AAAA... github-actions-deploy' | sudo tee -a /home/deploy/.ssh/authorized_keys
sudo chown deploy:deploy /home/deploy/.ssh/authorized_keys
sudo chmod 600 /home/deploy/.ssh/authorized_keys
```

Keep the **private** half (`~/.ssh/portfolio_deploy`) — it goes into a GitHub
secret in Part B. Test it:

```bash
ssh -i ~/.ssh/portfolio_deploy deploy@YOUR_SERVER_IP 'echo ok && ls -la /var/www/imaginative-input.pl'
```

### A6. nginx site config

Copy the repo's `deploy/nginx/portfolio.conf` to the server (domain is already
set), enable it, and reload:

```bash
# from your laptop, in the repo:
scp deploy/nginx/portfolio.conf ADMIN@YOUR_SERVER_IP:/tmp/

# on the server:
sudo mv /tmp/portfolio.conf /etc/nginx/sites-available/imaginative-input.pl
sudo ln -sf /etc/nginx/sites-available/imaginative-input.pl /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default     # drop the welcome page
sudo nginx -t && sudo systemctl reload nginx
```

> Put a placeholder file in the web root so nginx has something to serve before
> the first CI deploy: `echo '<h1>soon</h1>' | sudo -u deploy tee /var/www/imaginative-input.pl/index.html`

### A7. TLS with Let's Encrypt (certbot)

```bash
sudo apt -y install certbot python3-certbot-nginx
sudo certbot --nginx -d imaginative-input.pl -d www.imaginative-input.pl \
     --non-interactive --agree-tos -m imaginative.input@gmail.com --redirect
```

certbot rewrites the site config to serve HTTPS on 443 and adds an HTTP→HTTPS
redirect. Renewal is automatic (a systemd timer). Verify:

```bash
sudo certbot renew --dry-run
```

### A8. Enable HSTS (after HTTPS is confirmed working)

Edit `/etc/nginx/sites-available/imaginative-input.pl`, and **inside the `server`
block that listens on 443**, add:

```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
```

Then `sudo nginx -t && sudo systemctl reload nginx`. (Only do this once HTTPS
works — HSTS makes browsers refuse plain HTTP for your domain.)

---

## Part B — GitHub setup

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret           | Value                                                      |
| ---------------- | --------------------------------------------------------- |
| `DEPLOY_SSH_KEY` | full contents of `~/.ssh/portfolio_deploy` (private key)  |
| `SSH_HOST`       | `YOUR_SERVER_IP` (or `imaginative-input.pl`)                   |
| `SSH_USER`       | `deploy`                                                  |
| `DEPLOY_PATH`    | `/var/www/imaginative-input.pl`                                |
| `SSH_PORT`       | *(optional)* SSH port if not 22                           |

The workflow lives at `.github/workflows/deploy.yml`.

---

## Part C — Deploy & verify

Deploy happens on every push to `main`, or manually from **Actions → Deploy to
VPS → Run workflow**.

```bash
git push origin main
```

Watch it under the repo's **Actions** tab. When green, check:

```bash
curl -I https://imaginative-input.pl                       # 200, security headers
curl -sI https://imaginative-input.pl/assets/ | head       # immutable cache on assets
curl -I http://imaginative-input.pl                        # 301 -> https
```

Then open `https://imaginative-input.pl` and confirm the page, fonts, and profile
image all load (DevTools console should be clean — watch for CSP violations).

---

## Maintenance

- **Redeploy:** push to `main`, or re-run the workflow. rsync `--delete` keeps the
  web root an exact mirror of the latest build.
- **TLS renewal:** automatic. Force a check: `sudo certbot renew --dry-run`.
- **Logs:** `sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log`
- **Rollback:** check out the previous good commit and re-run the workflow
  (`git checkout <sha> -- .` then push, or use Actions → Run workflow on that ref).
- **Config change:** edit `deploy/nginx/portfolio.conf` in the repo, re-copy to the
  server, `sudo nginx -t && sudo systemctl reload nginx`.

## Local reference

```bash
nvm use            # Node 22 (see .nvmrc)
npm ci
npm run dev        # local dev server
npm run build      # outputs dist/
npm run preview    # serve the production build locally
```
