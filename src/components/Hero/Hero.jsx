import heroBg from '../../assets/hero_bg.jpg'
import './Hero.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Hero({ onExplore, onConsult }) {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Luxury properties in Sheikh Zayed" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {t('hero.badge')}
          </div>

          <h1 className="hero-title">
            {t('hero.titleLine1')}
            <span>{t('hero.titleSpan')}</span>
          </h1>

          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          <div className="hero-actions">
            <button
              className="hero-btn-primary"
              id="hero-explore-btn"
              onClick={onExplore}
            >
              {t('hero.explorBtn')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              className="hero-btn-secondary"
              id="hero-consult-btn"
              onClick={onConsult}
            >
              {t('hero.consultBtn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
