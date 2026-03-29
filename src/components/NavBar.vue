<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <div class="nav-logo" @click="$emit('navigate', 'home')">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">piotr.dev</span>
        <span class="logo-bracket">/&gt;</span>
      </div>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        aria-controls="nav-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="nav-links" :class="['nav-links', { open: menuOpen }]" role="navigation">
        <a
          v-for="s in sections"
          :key="s"
          class="nav-link"
          @click="navigate(s)"
        >
          {{ s }}
        </a>
        <a
          href="mailto:imaginative.input@gmail.com"
          class="nav-cta btn btn-primary"
          @click="menuOpen = false"
        >
          Hire me
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({ sections: Array })
const emit = defineEmits(['navigate'])

const isScrolled = ref(false)
const menuOpen = ref(false)

function navigate(s) {
  emit('navigate', s)
  menuOpen.value = false
}

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  padding: 22px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  background: rgba(9, 9, 11, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(63, 63, 70, 0.4);
  padding: 14px 0;
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity var(--transition);
  flex-shrink: 0;
}
.nav-logo:hover { opacity: 0.75; }

.logo-bracket { color: var(--accent); }
.logo-name { color: var(--text); margin: 0 2px; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: color var(--transition);
  position: relative;
  padding-bottom: 2px;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gradient);
  transition: width var(--transition);
}
.nav-link:hover { color: var(--text); }
.nav-link:hover::after { width: 100%; }

.nav-cta {
  margin-left: 8px;
  padding: 8px 18px;
  font-size: 0.8rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 600;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    position: fixed;
    inset: 0;
    background: rgba(9, 9, 11, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition);
    z-index: 550;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }
  .nav-link {
    font-size: 1.4rem;
    color: var(--text);
  }
  .nav-cta {
    margin-left: 0;
    padding: 12px 32px;
    font-size: 1rem;
  }
}
</style>
