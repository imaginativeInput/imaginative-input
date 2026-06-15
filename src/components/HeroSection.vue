<template>
  <section id="home" class="hero">
    <!-- Background -->
    <div class="hero-bg" aria-hidden="true">
      <div class="stars"></div>
      <div class="glow g1"></div>
      <div class="glow g2"></div>
    </div>

    <div class="container hero-body">
      <div class="hero-left">
        <div class="hero-badge reveal">
          <span class="badge-dot"></span>
          {{ $t('hero.badge') }}
        </div>

        <h1 class="hero-name reveal reveal-delay-1">
          Piotr<br>
          <span class="accent-text">Łatyński</span>
        </h1>

        <p class="hero-role reveal reveal-delay-2">
          <span class="role-prefix">$ whoami&nbsp;&gt;&nbsp;</span>
          <span class="role-value">{{ displayedRole }}</span>
          <span class="cursor" :class="{ blink: !isTyping }">▋</span>
        </p>

        <p class="hero-tagline reveal reveal-delay-2">
          {{ $t('hero.tagline') }}
        </p>

        <div class="hero-actions reveal reveal-delay-3">
          <button class="btn btn-primary" @click="$emit('navigate', 'projects')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            {{ $t('hero.viewProjects') }}
          </button>
          <button class="btn btn-secondary" @click="$emit('navigate', 'contact')">
            {{ $t('hero.getInTouch') }}
          </button>
        </div>

        <div class="hero-stack reveal reveal-delay-3">
          <span class="stack-label">{{ $t('hero.stackLabel') }}</span>
          <div class="stack-tags">
            <span class="tag" v-for="t in stack" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>

      <!-- Profile picture -->
      <div class="hero-right reveal reveal-delay-2">
        <div class="pic-frame">
          <div class="pic-inner">
            <img
              :src="profilePic"
              :alt="$t('hero.imgAlt')"
              class="pic-img"
              loading="eager"
            />
            <div class="pic-overlay" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>

    <button class="scroll-cue" @click="$emit('navigate', 'about')" :aria-label="$t('hero.scrollAria')">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
    </button>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import profilePic from '@/assets/profile-pic.webp'

defineEmits(['navigate'])

const { tm, locale } = useI18n()
const roles = computed(() => tm('hero.roles'))
const stack = ['Python', 'Vue.js', 'FastAPI', 'Playwright', 'PostgreSQL']

const displayedRole = ref('')
const isTyping = ref(true)
let roleIdx = 0
let charIdx = 0
let dir = 1
let timeout = null

function tick() {
  const word = roles.value[roleIdx]
  if (dir === 1) {
    isTyping.value = true
    displayedRole.value = word.slice(0, charIdx)
    charIdx++
    if (charIdx > word.length) {
      isTyping.value = false
      timeout = setTimeout(() => { dir = -1; tick() }, 2200)
      return
    }
    timeout = setTimeout(tick, 80)
  } else {
    displayedRole.value = word.slice(0, charIdx)
    charIdx--
    if (charIdx < 0) {
      roleIdx = (roleIdx + 1) % roles.value.length
      dir = 1
      charIdx = 0
      timeout = setTimeout(tick, 200)
      return
    }
    timeout = setTimeout(tick, 42)
  }
}

const prefersReduced = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function startTyping() {
  clearTimeout(timeout)
  roleIdx = 0
  charIdx = 0
  dir = 1
  if (prefersReduced()) {
    displayedRole.value = roles.value[0]
    isTyping.value = false
    return
  }
  displayedRole.value = ''
  isTyping.value = true
  tick()
}

onMounted(startTyping)
// Re-type the role list in the newly selected language on a locale switch.
watch(locale, startTyping)
onUnmounted(() => clearTimeout(timeout))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 90px 80px, rgba(74, 222, 128, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 150px 50px, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(1px 1px at 210px 120px, rgba(255, 255, 255, 0.45), transparent),
    radial-gradient(1px 1px at 260px 30px, rgba(74, 222, 128, 0.4), transparent),
    radial-gradient(1px 1px at 50px 160px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1.5px 1.5px at 130px 200px, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 230px 190px, rgba(168, 198, 178, 0.4), transparent),
    radial-gradient(1px 1px at 300px 100px, rgba(74, 222, 128, 0.35), transparent);
  background-size: 320px 320px;
  background-repeat: repeat;
  opacity: 0.7;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 35%, transparent 80%);
  mask-image: radial-gradient(ellipse at center, #000 35%, transparent 80%);
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
}
.g1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, #22c55e 0%, transparent 70%);
  opacity: 0.04;
  top: -250px;
  right: -150px;
}
.g2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #0f5132 0%, transparent 70%);
  opacity: 0.05;
  bottom: 0;
  left: -50px;
}

/* Two-column layout */
.hero-body {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 64px;
}

/* Left side */
.hero-left {
  min-width: 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--hairline);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-bottom: 28px;
  letter-spacing: 0.05em;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: var(--terminal-green);
  border-radius: 50%;
  animation: dot-pulse 2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}

.hero-name {
  font-family: var(--font-heading);
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  color: var(--text-muted);
  margin-bottom: 20px;
}
.role-prefix { color: var(--accent); }
.role-value  { color: var(--terminal-green); }
.cursor {
  color: var(--terminal-green);
  font-weight: 700;
  font-size: 0.9em;
}
.cursor.blink { animation: blink 1s step-end infinite; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-tagline {
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  color: var(--text-muted);
  max-width: 460px;
  line-height: 1.75;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}

.hero-stack {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.stack-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
  flex-shrink: 0;
}
.stack-tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}

/* Right side — profile picture */
.hero-right {
  flex-shrink: 0;
}

.pic-frame {
  position: relative;
  display: inline-block;
}

.pic-inner {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--hairline);
  box-shadow: var(--shadow-lg);
}

.pic-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: brightness(0.97) contrast(1.02) saturate(0.95);
}

/* Subtle vignette overlay */
.pic-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 70%, rgba(6, 6, 14, 0.45) 100%);
  pointer-events: none;
}

/* Scroll cue */
.scroll-cue {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: 1px solid var(--border-bright);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  animation: float 2.5s ease-in-out infinite;
  z-index: 1;
  border-radius: 2px;
}
.scroll-cue:hover { border-color: var(--accent); color: var(--accent); }

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(7px); }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-body {
    grid-template-columns: 1fr;
    text-align: left;
    gap: 40px;
  }
  .hero-right {
    display: flex;
    justify-content: flex-start;
    order: -1;
  }
  .pic-inner { width: 200px; height: 200px; }
}

@media (max-width: 640px) {
  .scroll-cue { display: none; }
  .hero { padding-bottom: 48px; }
  .hero-right { display: none; }
}
</style>
