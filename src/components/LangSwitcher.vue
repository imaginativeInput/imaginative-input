<template>
  <div class="lang-switcher" role="group" :aria-label="$t('nav.language')">
    <template v-for="(code, i) in SUPPORTED" :key="code">
      <span v-if="i > 0" class="lang-sep" aria-hidden="true">/</span>
      <button
        class="lang-opt"
        :class="{ active: locale === code }"
        :aria-pressed="locale === code"
        @click="choose(code)"
      >
        {{ code.toUpperCase() }}
      </button>
    </template>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED, setLocale } from '@/i18n'

const emit = defineEmits(['changed'])
const { locale } = useI18n()

function choose(code) {
  setLocale(code)
  emit('changed', code)
}
</script>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.lang-opt {
  background: none;
  border: none;
  padding: 2px 2px;
  cursor: pointer;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  transition: color var(--transition);
}
.lang-opt:hover { color: var(--text); }
.lang-opt.active {
  color: var(--accent);
  font-weight: 600;
}

.lang-sep {
  color: var(--text-muted);
  opacity: 0.4;
  user-select: none;
}

@media (max-width: 768px) {
  .lang-switcher { font-size: 1rem; gap: 10px; }
  .lang-opt { font-size: 1rem; padding: 4px; }
}
</style>
