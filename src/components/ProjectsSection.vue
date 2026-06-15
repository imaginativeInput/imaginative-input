<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <p class="section-label reveal">{{ $t('projects.label') }}</p>
      <h2 class="section-title reveal reveal-delay-1" v-html="$t('projects.title')"></h2>
      <p class="section-subtitle reveal reveal-delay-1">
        {{ $t('projects.subtitle') }}
      </p>

      <div class="projects-grid">
        <article
          class="project-card reveal"
          :class="`reveal-delay-${(i % 2) + 1}`"
          v-for="(p, i) in projects"
          :key="i"
        >
          <div class="card-top">
            <span class="p-icon" aria-hidden="true" v-html="icons[p.icon]"></span>
            <span class="p-status" :class="{ 'status-completed': p.completed }">
              <span class="status-dot" :class="{ 'dot-completed': p.completed }"></span>
              {{ p.completed ? $t('projects.statusCompleted') : $t('projects.statusInProgress') }}
            </span>
          </div>

          <h3 class="p-title">{{ p.title }}</h3>
          <p class="p-desc">{{ p.description }}</p>

          <ul class="p-features">
            <li v-for="(f, fi) in p.features" :key="fi">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>

          <div class="p-tags">
            <span class="tag" v-for="t in p.stack" :key="t">{{ t }}</span>
          </div>

          <a v-if="p.link" :href="p.link" target="_blank" rel="noopener noreferrer" class="p-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            {{ $t('projects.visit') }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Language-independent metadata, merged with translated copy by index.
const projectsMeta = [
  { icon: 'house',   completed: true,  link: 'https://domekrzepiska.pl/', stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'FastAPI'] },
  { icon: 'utensils', completed: false, link: 'https://szamma-mia.pl/',     stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'FastAPI', 'PostgreSQL'] },
  { icon: 'gamepad',  completed: false, link: null,                          stack: ['Python', 'Pygame', 'TaichiLang', 'Procedural Generation'] },
  { icon: 'bot',      completed: false, link: null,                          stack: ['Python', 'JavaScript', 'Tampermonkey', 'FastAPI', 'PostgreSQL'] },
]

const projects = computed(() =>
  projectsMeta.map((m, i) => ({ ...m, ...tm('projects.items')[i] }))
)

const icons = {
  house: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9.5 21v-6h5v6"/></svg>`,
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v6a2 2 0 0 0 4 0V3"/><path d="M7 9v12"/><path d="M17 3c-1.7 0-3 2-3 5s1 4.5 3 5v8"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11.5v3"/><path d="M5.5 13h3"/><circle cx="16" cy="11.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="18.5" cy="14" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M12 8V5"/><circle cx="12" cy="3.6" r="1.3" fill="currentColor" stroke="none"/><path d="M2 12.5v3"/><path d="M22 12.5v3"/><circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none"/></svg>`,
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 52px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.025);
  opacity: 0;
  transition: opacity var(--transition);
  pointer-events: none;
}

.project-card:hover {
  border-color: var(--border-bright);
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
}
.project-card:hover::after { opacity: 1; }
.project-card:hover .p-icon {
  color: var(--accent);
  border-color: var(--border-bright);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.p-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  flex-shrink: 0;
  transition: var(--transition);
}
.p-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.p-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--terminal-green);
  background: rgba(74, 222, 128, 0.07);
  border: 1px solid rgba(74, 222, 128, 0.2);
  padding: 4px 10px;
  border-radius: 999px;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--terminal-green);
  border-radius: 50%;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.p-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
}

.p-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.72;
  margin-bottom: 22px;
}

.p-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  flex: 1;
}

.p-features li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.p-features li svg {
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.p-tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}

.status-completed {
  color: var(--text-muted) !important;
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: var(--hairline) !important;
}

.dot-completed {
  background: var(--text-muted) !important;
  animation: none !important;
}

.p-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 16px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-decoration: none;
  transition: var(--transition);
  padding: 6px 0;
}

.p-link:hover {
  color: #86efac;
}

.p-link svg {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-card { padding: 26px; }
}
</style>
