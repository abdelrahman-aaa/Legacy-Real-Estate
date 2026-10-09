import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations, { translatePropertyData } from './translations'

// ─── Language Context ──────────────────────────────────────────────────────────
const LanguageContext = createContext(null)

const STORAGE_KEY = 'legacy-re-lang'
const DEFAULT_LANG = 'en'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'ar' || saved === 'en') return saved
    } catch (_) {}
    return DEFAULT_LANG
  })

  // Apply dir + lang to document root whenever lang changes
  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const setLang = useCallback((newLang) => {
    if (newLang !== 'ar' && newLang !== 'en') return
    try { localStorage.setItem(STORAGE_KEY, newLang) } catch (_) {}
    setLangState(newLang)
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en')
  }, [lang, setLang])

  // t(keyPath) – dot-separated path into translations[lang]
  // e.g. t('nav.home')  → 'Home' or 'الرئيسية'
  const t = useCallback((keyPath) => {
    const keys = keyPath.split('.')
    let node = translations[lang]
    for (const k of keys) {
      if (node == null) return keyPath
      node = node[k]
    }
    return node ?? keyPath
  }, [lang])

  // Helper to translate any property object according to active language
  const translateProperty = useCallback((property) => {
    return translatePropertyData(property, lang)
  }, [lang])

  const isRTL = lang === 'ar'

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRTL, translateProperty }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
