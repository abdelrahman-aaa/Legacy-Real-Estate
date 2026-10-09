import { useState } from 'react'
import PropertyGallery from './PropertyGallery'
import { useLanguage } from '../../i18n/LanguageContext'

export default function PropertyDetails({ property, onBack, onNavigate }) {
  const { t, lang, translateProperty } = useLanguage()
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [inquiryNotes, setInquiryNotes] = useState('')
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)

  if (!property) {
    return (
      <div className="properties-empty-state" style={{ margin: '60px 0' }}>
        <h3>{t('details.notFound')}</h3>
        <p>{t('details.notFoundDesc')}</p>
        <button className="btn-view-details-outline" onClick={onBack}>
          {t('details.backToAll')}
        </button>
      </div>
    )
  }

  const p = translateProperty ? translateProperty(property) : property

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setInquirySubmitted(true)
  }

  const encodedWhatsAppText = encodeURIComponent(
    `Hello Legacy Real Estate, I am interested in inquiring about "${property.title}" in ${property.project} (${property.priceFormatted || property.price}). Could you provide detailed brochures and current viewing availability?`
  )

  const compoundBadgeClass = property.compoundType === 'blue'
    ? 'badge-blue-compound'
    : 'badge-dark-compound'

  const currencySymbol = p.currency || (lang === 'ar' ? 'ج.م' : 'EGP')

  return (
    <div className="property-details-view" id="property-details-view">
      {/* ── Navigation Breadcrumbs & Back Button ── */}
      <div className="details-top-nav">
        <nav className="properties-breadcrumb" aria-label="Breadcrumb">
          <button
            className="breadcrumb-link"
            onClick={() => onNavigate && onNavigate('home')}
          >
            {t('details.breadHome')}
          </button>
          <span className="breadcrumb-sep">/</span>
          <button
            className="breadcrumb-link"
            onClick={onBack}
          >
            {t('details.breadProps')}
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{p.title}</span>
        </nav>

        <button
          className="details-back-btn"
          onClick={onBack}
          aria-label="Return to all listings"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          {t('details.backBtn')}
        </button>
      </div>

      {/* ── Title & Meta Header ── */}
      <header className="details-header-section">
        <div className="details-badges-row">
          <span className={compoundBadgeClass}>{p.compoundBadge || p.project}</span>
          {(p.floorBadge || p.floor) && <span className="badge-sand-floor">{p.floorBadge || p.floor}</span>}
          {p.featuredBadge && <span className="badge-featured-gold">{p.featuredBadge}</span>}
          {p.highlightBadge && (
            <span className="media-badge-bottom-right" style={{ position: 'static' }}>
              {p.highlightBadge}
            </span>
          )}
          <span className="badge-listing-type">
            {property.listingType === 'rent' ? t('details.forRent') : t('details.forSale')}
          </span>
        </div>

        <div className="details-title-row">
          <div>
            <h1 className="details-main-title">{p.title}</h1>
            <div className="details-location-text">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{p.location || `${p.project}, Sheikh Zayed`}</span>
            </div>
          </div>

          <div className="details-price-badge">
            <span className="details-price-label">
              {property.listingType === 'rent' ? t('details.rentalValuation') : t('details.purchaseValuation')}
            </span>
            <div className="details-price-number">
              {p.priceFormatted || p.price}
              {!String(p.priceFormatted || '').includes('EGP') &&
               !String(p.priceFormatted || '').includes('ج.م') &&
               !String(p.price || '').includes('EGP') &&
               !String(p.price || '').includes('ج.م') && (
                <span className="details-price-currency">{currencySymbol}</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Image Gallery (All 4 Images + Lightbox) ── */}
      <section className="details-gallery-section" aria-label="Property Photograph Gallery">
        <PropertyGallery images={property.images} title={property.title} />
      </section>

      {/* ── Main Details & Sidebar Layout ── */}
      <div className="details-content-grid">
        {/* Left Column: Comprehensive Property Information */}
        <div className="details-main-column">

          {/* Quick Metric Bar */}
          <div className="details-specs-banner">
            {p.area && (
              <div className="details-metric-item">
                <div className="details-metric-val">{p.area}</div>
                <div className="details-metric-lbl">{t('details.totalArea')}</div>
              </div>
            )}
            {p.bedrooms !== undefined && (
              <div className="details-metric-item">
                <div className="details-metric-val">{p.bedrooms}</div>
                <div className="details-metric-lbl">{t('details.bedrooms')}</div>
              </div>
            )}
            {p.bathrooms !== undefined && (
              <div className="details-metric-item">
                <div className="details-metric-val">{p.bathrooms}</div>
                <div className="details-metric-lbl">{t('details.bathrooms')}</div>
              </div>
            )}
            {p.type && (
              <div className="details-metric-item">
                <div className="details-metric-val">{p.type}</div>
                <div className="details-metric-lbl">{t('details.propType')}</div>
              </div>
            )}
          </div>

          {/* Complete Property Specifications Table */}
          <div className="details-card-block">
            <h2 className="details-section-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              {t('details.completeSpecs')}
            </h2>

            <div className="details-specs-table">
              {p.project && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.projectCommunity')}</span>
                  <span className="spec-value highlight-project">{p.project}</span>
                </div>
              )}
              {p.location && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.location')}</span>
                  <span className="spec-value">{p.location}</span>
                </div>
              )}
              {(p.priceFormatted || p.price) && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.price')}</span>
                  <span className="spec-value highlight-price">{p.priceFormatted || p.price}</span>
                </div>
              )}
              {p.type && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.propertyType')}</span>
                  <span className="spec-value">{p.type}</span>
                </div>
              )}
              {p.area && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.area')}</span>
                  <span className="spec-value">{p.area}</span>
                </div>
              )}
              {p.bedrooms !== undefined && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.bedroomsLabel')}</span>
                  <span className="spec-value">{p.bedrooms}</span>
                </div>
              )}
              {p.bathrooms !== undefined && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.bathroomsLabel')}</span>
                  <span className="spec-value">{p.bathrooms}</span>
                </div>
              )}
              {(p.floorBadge || p.floor) && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.floorLevel')}</span>
                  <span className="spec-value">{p.floorBadge || p.floor}</span>
                </div>
              )}
              {p.finishing && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.finishing')}</span>
                  <span className="spec-value">{p.finishing}</span>
                </div>
              )}
              {property.delivery && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.delivery')}</span>
                  <span className="spec-value">{property.delivery}</span>
                </div>
              )}
              {property.garden && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.privateGarden')}</span>
                  <span className="spec-value">{property.garden}</span>
                </div>
              )}
              {property.terrace && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.terrace')}</span>
                  <span className="spec-value">{property.terrace}</span>
                </div>
              )}
              {property.parking && (
                <div className="spec-row">
                  <span className="spec-name">{t('details.parking')}</span>
                  <span className="spec-value">{property.parking}</span>
                </div>
              )}
            </div>
          </div>

          {/* Dedicated Property Description Section */}
          <div className="details-card-block">
            <h2 className="details-section-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              {t('details.propDescription')}
            </h2>
            <div className="details-description-body">
              <p>{p.fullDescription || p.description}</p>
            </div>
          </div>

          {/* Features and Amenities */}
          {Array.isArray(property.features) && property.features.length > 0 && (
            <div className="details-card-block">
              <h2 className="details-section-heading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t('details.amenities')}
              </h2>
              <div className="details-features-grid">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="details-feature-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#256e54" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Contact & Advisory CTA */}
        <aside className="details-sidebar-column">
          <div className="details-sticky-cta-card">
            <div className="cta-card-header">
              <span className="cta-subtitle">{t('details.privateAdvisory')}</span>
              <h3 className="cta-card-title">{t('details.requestDetails')}</h3>
              <p className="cta-card-desc">
                {t('details.ctaDesc')} {property.project}.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="cta-success-message">
                <div className="success-icon">✓</div>
                <h4>{t('inquiry.successTitle')}</h4>
                <p>
                  {t('inquiry.successMsg1')} <strong>{inquiryName || 'Client'}</strong>{t('inquiry.successMsg2')} {property.project} {t('inquiry.successMsg3')} <strong>{inquiryPhone || '...'}</strong>.
                </p>
                <button
                  className="btn-view-details-outline"
                  style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}
                  onClick={() => setInquirySubmitted(false)}
                >
                  {t('inquiry.submitAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="cta-inquiry-form">
                <div className="form-group">
                  <label htmlFor="inquiry-name">{t('details.fullName')}</label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder={t('details.namePlaceholder')}
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="cta-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-phone">{t('details.phoneWhatsApp')}</label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder={t('details.phonePlaceholder')}
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="cta-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-notes">{t('details.notes')}</label>
                  <textarea
                    id="inquiry-notes"
                    rows="2"
                    placeholder={t('details.notesPlaceholder')}
                    value={inquiryNotes}
                    onChange={(e) => setInquiryNotes(e.target.value)}
                    className="cta-textarea"
                  />
                </div>

                <button type="submit" className="cta-submit-btn">
                  {t('details.requestBtn')}
                </button>
              </form>
            )}

            <div className="cta-divider-or">
              <span>{t('details.orConnect')}</span>
            </div>

            <div className="cta-direct-actions">
              <a
                href={`https://wa.me/201001234567?text=${encodedWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.42 5.82c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                </svg>
                {t('details.whatsappBtn')}
              </a>

              <button
                className="cta-schedule-btn"
                onClick={() => setScheduleModalOpen(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {t('details.scheduleBtn')}
              </button>

              <div className="cta-phone-box">
                <span className="cta-phone-icon">📞</span>
                <div>
                  <span className="cta-phone-tag">{t('details.directLine')}</span>
                  <a href="tel:+201001234567" className="cta-phone-val" style={{ direction: 'ltr', display: 'block' }}>+20 100 123 4567</a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Schedule Viewing Modal ── */}
      {scheduleModalOpen && (
        <div className="property-modal-overlay" onClick={() => setScheduleModalOpen(false)}>
          <div className="property-modal-card" style={{ maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setScheduleModalOpen(false)}>✕</button>
            <div className="modal-body" style={{ paddingTop: 32 }}>
              <span className="rental-banner-tag">{t('scheduleModal.tag')}</span>
              <h3 className="modal-title" style={{ fontSize: 24 }}>{t('scheduleModal.title')}</h3>
              <p className="modal-desc" style={{ marginBottom: 20 }}>
                {t('scheduleModal.descPrefix')} <strong>{property.title}</strong> {t('scheduleModal.descMid')} {property.project}.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault()
                alert(`${t('scheduleModal.alertPrefix')} ${property.title}${t('scheduleModal.alertSuffix')}`)
                setScheduleModalOpen(false)
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                  <input
                    type="text"
                    placeholder={t('scheduleModal.namePlaceholder')}
                    required
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                  <input
                    type="tel"
                    placeholder={t('scheduleModal.phonePlaceholder')}
                    required
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                  <input
                    type="date"
                    required
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                  <select style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}>
                    <option>{t('scheduleModal.timeMorning')}</option>
                    <option>{t('scheduleModal.timeAfternoon')}</option>
                    <option>{t('scheduleModal.timeSunset')}</option>
                  </select>
                </div>
                <button type="submit" className="modal-primary-btn" style={{ width: '100%' }}>
                  {t('scheduleModal.confirmBtn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
