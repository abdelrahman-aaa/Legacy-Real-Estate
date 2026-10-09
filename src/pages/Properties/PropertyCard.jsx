import { PLACEHOLDER_IMAGE } from '../../data/propertiesData'
import { useLanguage } from '../../i18n/LanguageContext'

export default function PropertyCard({ property, onViewDetails }) {
  const { t, lang, translateProperty } = useLanguage()

  if (!property) return null

  // Localize property according to active language (en/ar) while preserving underlying data
  const p = translateProperty ? translateProperty(property) : property

  const images = Array.isArray(property.images) && property.images.length > 0
    ? property.images
    : (property.image ? [property.image] : [PLACEHOLDER_IMAGE])

  const primaryImage = images[0] || PLACEHOLDER_IMAGE
  const photoCount = images.length

  // Derive specs
  const specs = Array.isArray(p.specs) && p.specs.length > 0
    ? p.specs
    : [
        { val: p.area ? String(p.area).replace(/\s*m²?/i, '') : '—', label: lang === 'ar' ? 'م² (مباني)' : 'M² (BLD)' },
        { val: p.bedrooms !== undefined ? String(p.bedrooms) : '—', label: lang === 'ar' ? 'غرف نوم' : 'BEDS' },
        { val: p.bathrooms !== undefined ? String(p.bathrooms) : '—', label: lang === 'ar' ? 'حمامات' : 'BATHS' },
      ]

  const compoundBadgeClass = property.compoundType === 'blue'
    ? 'badge-blue-compound'
    : 'badge-dark-compound'

  const valuationLabel = p.valuationLabel || (
    property.listingType === 'rent'
      ? t('card.rentalValuation')
      : t('card.purchaseValuation')
  )

  const currencySymbol = p.currency || (lang === 'ar' ? 'ج.م' : 'EGP')

  return (
    <article
      className="property-card-item"
      id={`property-card-${property.id}`}
    >
      {/* Media Section */}
      <div
        className="property-card-media"
        onClick={() => onViewDetails && onViewDetails(property)}
        role="button"
        tabIndex={0}
        aria-label={`${t('card.cardAriaLabel')} ${p.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onViewDetails && onViewDetails(property)
          }
        }}
      >
        <img
          src={primaryImage}
          alt={p.title}
          className="property-card-img"
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
              e.currentTarget.src = PLACEHOLDER_IMAGE
            }
          }}
        />

        {/* Top Badges (Compound & Floor) */}
        <div className="media-badges-top-left">
          <span className={compoundBadgeClass}>
            {p.compoundBadge || p.project}
          </span>
          {(p.floorBadge || p.floor) && (
            <span className="badge-sand-floor">
              {p.floorBadge || p.floor}
            </span>
          )}
        </div>

        {/* Photo Count Indicator */}
        <div className="media-photo-counter-badge" title={`${photoCount} ${t('card.photos')}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
          <span>{photoCount} {t('card.photos')}</span>
        </div>

        {/* Featured Badge if applicable */}
        {p.featuredBadge && (
          <span className="badge-featured-gold">
            {p.featuredBadge}
          </span>
        )}

        {/* Bottom Highlight Badge */}
        {p.highlightBadge && (
          <span className="media-badge-bottom-right">
            {p.highlightBadge}
          </span>
        )}
      </div>

      {/* Body Section */}
      <div className="property-card-content">
        <div className="property-card-location-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{p.project}{p.location && p.location !== p.project ? ` · ${p.location}` : ''}</span>
        </div>

        <h2
          className="property-card-title"
          onClick={() => onViewDetails && onViewDetails(property)}
        >
          {p.title}
        </h2>

        <p className="property-card-desc">
          {p.description}
        </p>

        {/* 3-Column Metrics */}
        <div className="property-card-specs">
          {specs.map((s, idx) => (
            <div key={idx} className="spec-column">
              <div className="spec-number">{s.val}</div>
              <div className="spec-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Valuation & Details Action */}
        <div className="property-card-footer">
          <div className="footer-valuation">
            <span className="valuation-label">
              {valuationLabel}
            </span>
            <div className="valuation-amount">
              {p.priceFormatted || p.price}
              {!String(p.priceFormatted || '').includes('EGP') &&
               !String(p.priceFormatted || '').includes('ج.م') &&
               !String(p.price || '').includes('EGP') &&
               !String(p.price || '').includes('ج.م') && (
                <span className="valuation-curr">{currencySymbol}</span>
              )}
            </div>
          </div>

          <button
            className={property.isDarkButton ? 'btn-view-details-filled' : 'btn-view-details-outline'}
            onClick={() => onViewDetails && onViewDetails(property)}
            aria-label={`${t('card.viewAriaLabel')} ${p.title}`}
          >
            {t('card.viewDetails')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
