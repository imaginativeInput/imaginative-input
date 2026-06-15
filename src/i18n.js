import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import pl from './locales/pl.js'
import de from './locales/de.js'

export const SUPPORTED = ['en', 'pl', 'de']
const STORAGE_KEY = 'locale'

function detectLocale() {
  // 1. Explicit, remembered choice wins.
  let stored
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch (e) {
    stored = null
  }
  if (stored && SUPPORTED.includes(stored)) return stored

  // 2. Otherwise auto-detect from the browser (pl* -> pl, de* -> de, else en).
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
  const code = nav.toLowerCase().slice(0, 2)
  return SUPPORTED.includes(code) ? code : 'en'
}

const initialLocale = detectLocale()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  // Messages intentionally contain trusted HTML rendered via v-html (terminal output,
  // accent spans in headings); suppress the per-message HTML warning.
  warnHtmlMessage: false,
  messages: { en, pl, de },
})

export function setLocale(code) {
  if (!SUPPORTED.includes(code)) return false
  i18n.global.locale.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch (e) {
    /* storage unavailable — keep in-memory locale only */
  }
  document.documentElement.lang = code
  return true
}

// Reflect the resolved locale on first load.
document.documentElement.lang = initialLocale

export default i18n
