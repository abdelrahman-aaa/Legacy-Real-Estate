import { useState, useEffect } from 'react'
import './App.css'

// Modular Components & Pages
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Properties from './pages/Properties/Properties'

// i18n
import { useLanguage } from './i18n/LanguageContext'

// Assets
import prop1 from './assets/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg'
import prop2 from './assets/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg'
import prop3 from './assets/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg'
import prop4 from './assets/WhatsApp Image 2026-10-02 at 11.17.45 PM (1).jpeg'
import prop5 from './assets/WhatsApp Image 2026-10-02 at 11.14.03 PM (3).jpeg'
import prop6 from './assets/WhatsApp Image 2026-10-02 at 11.14.03 PM (2).jpeg'

// ── Icons (inline SVG helpers) ──────────────────────────────────────────────
const Icon = {
  MapPin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Bed: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 16h20M6 8v4"/>
    </svg>
  ),
  Bath: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6L9 2a1 1 0 011-1h4a1 1 0 011 1v4"/><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 14h20"/>
    </svg>
  ),
  Area: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
    </svg>
  ),
  Phone: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  Heart: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Email: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
}

// ── Home Featured Preview Data (property data never changes) ──────────────────
const featuredPreview = [
  {
    id: 1,
    img: prop1,
    badge: 'ZED West',
    badgeAr: 'زيد ويست',
    floor: 'Ground Floor',
    floorAr: 'الطابق الأرضي',
    title: 'Ground Floor Garden Residence',
    titleAr: 'شقة حديقة - الطابق الأرضي',
    location: 'ZED West, Sheikh Zayed',
    locationAr: 'زيد ويست، الشيخ زايد',
    specs: '57 + 30 m² · 1 Bed · 1 Bath',
    specsAr: '٥٧ + ٣٠ م² · ١ غرفة نوم · ١ حمام',
    price: '6,300,000 EGP',
    priceAr: '٦,٣٠٠,٠٠٠ ج.م',
  },
  {
    id: 2,
    img: prop3,
    badge: 'ZED West',
    badgeAr: 'زيد ويست',
    floor: '1st Floor',
    floorAr: 'الدور الأول',
    title: 'Jasmine View Apartment',
    titleAr: 'شقة بإطلالة الياسمين',
    location: 'ZED West, Sheikh Zayed',
    locationAr: 'زيد ويست، الشيخ زايد',
    specs: '135 m² · 2 + Maid · 2 Baths',
    specsAr: '١٣٥ م² · ٢ + غرفة مربية · ٢ حمام',
    price: '10,500,000 EGP',
    priceAr: '١٠,٥٠٠,٠٠٠ ج.م',
  },
  {
    id: 3,
    img: prop2,
    badge: 'ZED West',
    badgeAr: 'زيد ويست',
    floor: 'High Floor',
    floorAr: 'طابق مرتفع',
    title: 'Park View Signature Residence',
    titleAr: 'وحدة سيجنتشر بإطلالة الحديقة',
    location: 'ZED West, Central Park Vista',
    locationAr: 'سنترال بارك فيستا، الشيخ زايد',
    specs: '181 m² · 3 + Maid · 3 Baths',
    specsAr: '١٨١ م² · ٣ + غرفة مربية · ٣ حمامات',
    price: '13,918,000 EGP',
    priceAr: '١٣,٩١٨,٠٠٠ ج.م',
  },
]

// ── Component: Trust Bar ─────────────────────────────────────────────────────
function TrustBar() {
  const { t } = useLanguage()
  const items = [
    { icon: '🏅', title: t('trust.listings'),    sub: t('trust.listingsSub') },
    { icon: '✅', title: t('trust.verified'),    sub: t('trust.verifiedSub') },
    { icon: '💼', title: t('trust.consultants'), sub: t('trust.consultantsSub') },
    { icon: '🔐', title: t('trust.secure'),      sub: t('trust.secureSub') },
  ]
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map((item, i) => (
          <div key={item.title} style={{ display: 'contents' }}>
            <div className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-text">
                <strong>{item.title}</strong>
                <span>{item.sub}</span>
              </div>
            </div>
            {i < items.length - 1 && <div className="trust-divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Component: Home Featured Properties Showcase ──────────────────────────────
function HomeFeaturedShowcase({ onExplore }) {
  const { t, lang } = useLanguage()

  return (
    <section id="properties" className="section" style={{ backgroundColor: '#ffffff', padding: '90px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-label">{t('featured.label')}</div>
            <h2 className="section-title">
              {t('featured.titleMain')}<span>{t('featured.titleSpan')}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, marginTop: 8, maxWidth: 600 }}>
              {t('featured.subtitle')}
            </p>
          </div>

          <button
            className="btn-primary"
            onClick={onExplore}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px' }}
          >
            View All 20 Properties <Icon.Arrow />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {featuredPreview.map(prop => (
            <div
              key={prop.id}
              onClick={onExplore}
              style={{
                background: '#ffffff',
                border: '1px solid #e7e2d7',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(18, 43, 36, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                <img
                  src={prop.img}
                  alt={prop.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                  <span style={{ background: '#2c2825', color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 4 }}>
                    {lang === 'ar' ? prop.badgeAr : prop.badge}
                  </span>
                  <span style={{ background: '#eedecb', color: '#3f3122', fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 4 }}>
                    {lang === 'ar' ? prop.floorAr : prop.floor}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 19, color: '#172c24', marginBottom: 6 }}>
                  {lang === 'ar' ? prop.titleAr : prop.title}
                </h3>
                <div style={{ fontSize: 13, color: '#68736d', marginBottom: 14 }}>
                  {lang === 'ar' ? prop.specsAr : prop.specs}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #eee9e0', paddingTop: 14 }}>
                  <div>
                    <span style={{ fontSize: 10, color: '#88918c', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>
                      {t('featured.priceLabel')}
                    </span>
                    <strong style={{ fontSize: 17, color: '#142822', fontWeight: 800 }}>
                      {lang === 'ar' ? prop.priceAr : prop.price}
                    </strong>
                  </div>
                  <span style={{ color: '#153a2f', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                    {t('featured.detailsLink')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Component: Categories ────────────────────────────────────────────────────
function CategoriesSection({ onSelectCategory }) {
  const { t } = useLanguage()

  const categories = [
    { name: t('categories.villas'),     count: t('categories.villasCount'),     img: prop1, key: 'villas' },
    { name: t('categories.apartments'), count: t('categories.apartmentsCount'), img: prop2, key: 'apartments' },
    { name: t('categories.penthouses'), count: t('categories.penthousesCount'), img: prop3, key: 'penthouses' },
    { name: t('categories.townhouses'), count: t('categories.townhousesCount'), img: prop4, key: 'townhouses' },
    { name: t('categories.chalets'),    count: t('categories.chaletsCount'),    img: prop6, key: 'chalets' },
  ]

  return (
    <section className="section bg-alt" id="categories">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 40 }}>
          <div className="section-header-left">
            <div className="section-label">{t('categories.label')}</div>
            <h2 className="section-title">{t('categories.titleMain')}<span>{t('categories.titleSpan')}</span></h2>
          </div>
        </div>
        <div className="categories-grid" id="categories-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.key}
              className="category-card"
              id={`category-${i + 1}`}
              role="button"
              tabIndex={0}
              aria-label={`${t('categories.ariaBrowse')} ${cat.name}`}
              onClick={onSelectCategory}
            >
              <img src={cat.img} alt={cat.name} loading="lazy" />
              <div className="category-overlay">
                <div className="category-name">{cat.name}</div>
                <div className="category-count">{cat.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Component: About Section ─────────────────────────────────────────────────
function AboutSection({ onContact }) {
  const { t } = useLanguage()

  const aboutFeatures = [
    { icon: t('about.features.award.icon'), title: t('about.features.award.title'), desc: t('about.features.award.desc') },
    { icon: t('about.features.keys.icon'),  title: t('about.features.keys.title'),  desc: t('about.features.keys.desc') },
    { icon: t('about.features.market.icon'),title: t('about.features.market.title'),desc: t('about.features.market.desc') },
    { icon: t('about.features.service.icon'),title: t('about.features.service.title'),desc: t('about.features.service.desc') },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <div className="about-image-wrap">
            <div className="about-image-main">
              <img src={prop5} alt="Luxury property in Sheikh Zayed" />
            </div>
            <div className="about-image-float">
              <img src={prop4} alt="Sheikh Zayed compound" loading="lazy" />
            </div>
            <div className="about-badge-float">
              <strong>{t('about.yearsStrong')}</strong>
              <span>{t('about.yearsLabel')}</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <div className="section-label">{t('about.label')}</div>
            <h2 className="section-title">{t('about.titleMain')}<span>{t('about.titleSpan')}</span></h2>
            <p style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.9, color: 'var(--text-body)' }}>
              {t('about.desc1')}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-muted)' }}>
              {t('about.desc2')}
            </p>

            <div className="about-features-list" id="about-features">
              {aboutFeatures.map(feat => (
                <div key={feat.title} className="about-feature">
                  <div className="about-feature-icon">{feat.icon}</div>
                  <div className="about-feature-text">
                    <strong>{feat.title}</strong>
                    <span>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
              <button className="btn-primary" id="about-discover-btn" onClick={onContact}>
                {t('about.contactBtn')} <Icon.Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Component: Testimonials ──────────────────────────────────────────────────
function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = t('testimonials.items')

  return (
    <section className="testimonials-section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>{t('testimonials.label')}</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            {t('testimonials.titleMain')}<span style={{ color: 'var(--accent-gold)' }}>{t('testimonials.titleSpan')}</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto', fontSize: 16 }}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid" id="testimonials-grid">
          {Array.isArray(testimonials) && testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card" id={`testimonial-${idx + 1}`}>
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar-placeholder">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Component: Contact / CTA ─────────────────────────────────────────────────
function CTASection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData(d => ({ ...d, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactItems = [
    { icon: '📞', label: t('cta.callLabel'),  val: t('cta.callVal') },
    { icon: '✉️', label: t('cta.emailLabel'), val: t('cta.emailVal') },
    { icon: '📍', label: t('cta.visitLabel'), val: t('cta.visitVal') },
  ]

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="section-label" style={{ color: 'rgba(201,168,76,0.9)' }}>{t('cta.label')}</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: 'clamp(28px,3.5vw,42px)', marginBottom: 20, lineHeight: 1.2 }}>
              {t('cta.title')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              {t('cta.subtitle')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactItems.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 15, color: 'var(--white)', fontWeight: 600 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 20,
            padding: 40,
            backdropFilter: 'blur(20px)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: 8 }}>{t('cta.successTitle')}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
                  {t('cta.successSub')}
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-dark)', marginBottom: 6 }}>
                  {t('cta.formTitle')}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 28 }}>
                  {t('cta.formSub')}
                </p>
                <form onSubmit={handleSubmit} id="contact-form">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{t('cta.nameLabel')}</label>
                      <input
                        type="text" name="name" id="form-name" required
                        value={formData.name} onChange={handleChange}
                        placeholder={t('cta.namePlaceholder')}
                        style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text-dark)', background: 'var(--white)', transition: 'border-color 0.25s ease', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{t('cta.phoneLabel')}</label>
                      <input
                        type="tel" name="phone" id="form-phone"
                        value={formData.phone} onChange={handleChange}
                        placeholder={t('cta.phonePlaceholder')}
                        style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text-dark)', background: 'var(--white)', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{t('cta.emailLabel2')}</label>
                    <input
                      type="email" name="email" id="form-email" required
                      value={formData.email} onChange={handleChange}
                      placeholder={t('cta.emailPlaceholder')}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text-dark)', background: 'var(--white)', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{t('cta.msgLabel')}</label>
                    <textarea
                      name="message" id="form-message" rows={4}
                      value={formData.message} onChange={handleChange}
                      placeholder={t('cta.msgPlaceholder')}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text-dark)', background: 'var(--white)', resize: 'vertical', fontFamily: 'var(--font-body)', boxSizing: 'border-box', outline: 'none' }}
                    />
                  </div>
                  <button type="submit" id="form-submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 15 }}>
                    {t('cta.sendBtn')} <Icon.Arrow />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Component: Footer ─────────────────────────────────────────────────────────
function Footer({ onNavigate }) {
  const { t } = useLanguage()

  const handleLink = (id) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'home',       label: t('nav.home') },
    { id: 'properties', label: t('nav.properties') },
    { id: 'about',      label: t('nav.about') },
    { id: 'services',   label: t('nav.services') },
    { id: 'contact',    label: t('nav.contact') },
  ]

  const propTypes = t('footer.types')

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => handleLink('home')} style={{ cursor: 'pointer' }}>
              <div className="footer-logo-icon"><img src="/images/WhatsApp Image 2026-10-09 at 1.09.44 AM.jpeg" alt="logo" /></div>
              <div>
                <div className="footer-logo-name">{t('footer.logoName')}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>{t('footer.logoTagline')}</div>
              </div>
            </div>
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
            <div className="footer-socials">
              {['f', 'in', 'tw', 'ig', 'yt'].map(s => (
                <button key={s} className="footer-social" id={`social-${s}`} aria-label={`Follow on ${s}`}>
                  {s === 'f' ? '📘' : s === 'in' ? '💼' : s === 'tw' ? '🐦' : s === 'ig' ? '📷' : '▶️'}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">{t('footer.quickLinks')}</div>
            <ul className="footer-links">
              {navLinks.map(l => (
                <li key={l.id}>
                  <button
                    className="footer-link"
                    id={`footer-link-${l.id}`}
                    onClick={() => handleLink(l.id)}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <div className="footer-col-title">{t('footer.propTypes')}</div>
            <ul className="footer-links">
              {Array.isArray(propTypes) && propTypes.map((type, idx) => (
                <li key={idx}>
                  <span
                    className="footer-link"
                    onClick={() => handleLink('properties')}
                    style={{ cursor: 'pointer' }}
                  >
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">{t('footer.contactUs')}</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">{t('footer.address')}</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span className="footer-contact-text" style={{ direction: 'ltr' }}>
                <a href="tel:01514174050" style={{ color: 'inherit', textDecoration: 'none' }}>0151 417 4050</a>
                <br />
                <a href="tel:01027880569" style={{ color: 'inherit', textDecoration: 'none' }}>01027880569</a>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">{t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            {[
              { label: t('footer.privacy'), key: 'privacy' },
              { label: t('footer.terms'),   key: 'terms' },
              { label: t('footer.sitemap'), key: 'sitemap' },
            ].map(l => (
              <button key={l.key} className="footer-bottom-link" id={`footer-legal-${l.key}`}>{l.label}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return hash === 'properties' || hash.startsWith('property/') ? 'properties' : 'home'
  })
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = ['home', 'properties', 'about', 'services', 'contact']

  const navigateTo = (target) => {
    if (target === 'properties') {
      setCurrentPage('properties')
      window.location.hash = 'properties'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (target === 'home') {
      setCurrentPage('home')
      window.location.hash = 'home'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // It is a section on home (about, services, contact)
      if (currentPage !== 'home') {
        setCurrentPage('home')
        window.location.hash = target
        setTimeout(() => {
          const el = document.getElementById(target)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      } else {
        const el = document.getElementById(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'properties' || hash.startsWith('property/')) {
        setCurrentPage('properties')
        if (hash === 'properties') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (hash === 'home' || !hash) {
        setCurrentPage('home')
      } else {
        setCurrentPage('home')
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Section observer for Home page
  useEffect(() => {
    if (currentPage !== 'home') return
    const sections = navLinks.map(l => document.getElementById(l)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [currentPage])

  return (
    <>
      <Navbar
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigate={navigateTo}
      />
      <main>
        {currentPage === 'properties' ? (
          <Properties onNavigate={navigateTo} />
        ) : (
          <>
            <Hero
              onExplore={() => navigateTo('properties')}
              onConsult={() => navigateTo('contact')}
            />
            <TrustBar />
            <HomeFeaturedShowcase onExplore={() => navigateTo('properties')} />
            <CategoriesSection onSelectCategory={() => navigateTo('properties')} />
            <AboutSection onContact={() => navigateTo('contact')} />
            <TestimonialsSection />
            <CTASection />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </>
  )
}
