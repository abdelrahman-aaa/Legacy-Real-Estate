import { useState, useEffect } from 'react'
import './Navbar.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Navbar({ currentPage = 'home', activeSection = 'home', onNavigate }) {
  const { t, toggleLang, lang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { id: 'home',       label: t('nav.home') },
    { id: 'properties', label: t('nav.properties') },
    { id: 'about',      label: t('nav.about') },
    { id: 'services',   label: t('nav.services') },
    { id: 'contact',    label: t('nav.contact') },
  ]

  const handleLinkClick = (id) => {
    setMenuOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Determine which nav link is active
  const isLinkActive = (id) => {
    if (currentPage === 'properties') {
      return id === 'properties'
    }
    return activeSection === id
  }

  // For properties page, always keep solid dark background so it's readable over light page
  const navBgClass = currentPage === 'properties'
    ? 'solid-dark'
    : (scrolled ? 'scrolled' : 'transparent')

  return (
    <nav
      className={`navbar ${navBgClass}`}
      role="navigation"
      aria-label={t('nav.ariaMain')}
    >
      <div className="navbar-inner">

        {/* ── Logo ── */}
        <a
          className="navbar-logo"
          onClick={() => handleLinkClick('home')}
          id="nav-logo"
          aria-label={t('nav.ariaLogo')}
          style={{ cursor: 'pointer' }}
        >
          <div className="navbar-logo-icon"><img src="/images/WhatsApp Image 2026-10-09 at 1.09.44 AM.jpeg" alt="logo" /></div>
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">{t('nav.logoName')}</span>
            <span className="navbar-logo-tagline">{t('nav.logoTagline')}</span>
          </div>
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className="navbar-nav" role="list">
          {navLinks.map(link => {
            const active = isLinkActive(link.id)
            return (
              <li key={link.id}>
                <button
                  id={`nav-${link.id}`}
                  className={`nav-link ${active ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* ── Desktop Actions ── */}
        <div className="navbar-actions">
          {/* Language Toggle */}
          <button
            className="navbar-lang-toggle"
            id="nav-lang-toggle"
            onClick={toggleLang}
            aria-label={`Switch language to ${t('nav.langSwitch')}`}
            title={`Switch language to ${t('nav.langSwitch')}`}
          >
            <span className="lang-toggle-icon">🌐</span>
            <span>{t('nav.langSwitch')}</span>
          </button>

          <button
            className="navbar-cta"
            id="nav-cta"
            onClick={() => handleLinkClick('contact')}
          >
            {t('nav.cta')}
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={t('nav.ariaToggle')}
          aria-expanded={menuOpen}
          id="nav-mobile-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map(link => {
            const active = isLinkActive(link.id)
            return (
              <button
                key={link.id}
                id={`nav-mobile-${link.id}`}
                className={`navbar-mobile-link ${active ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            )
          })}

          {/* Mobile Language Toggle */}
          <button
            className="navbar-mobile-lang-toggle"
            id="nav-mobile-lang-toggle"
            onClick={() => { toggleLang(); setMenuOpen(false) }}
          >
            🌐 {t('nav.langSwitch')}
          </button>

          <button
            className="navbar-mobile-cta"
            onClick={() => handleLinkClick('contact')}
          >
            {t('nav.cta')}
          </button>
        </div>
      )}
    </nav>
  )
}
