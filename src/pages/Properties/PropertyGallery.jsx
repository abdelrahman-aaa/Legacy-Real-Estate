import { useState, useEffect } from 'react'
import { PLACEHOLDER_IMAGE } from '../../data/propertiesData'

export default function PropertyGallery({ images = [], title = 'Property Image' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Filter out invalid items or fallback
  const validImages = Array.isArray(images) && images.length > 0
    ? images
    : [PLACEHOLDER_IMAGE]

  const mainImage = validImages[0]
  const secondaryImages = validImages.slice(1, 4)

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % validImages.length)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxIndex, validImages.length])

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % validImages.length)
  }

  return (
    <div className="property-gallery-container">
      {/* ── Visual Gallery Grid ── */}
      <div className={`gallery-grid gallery-count-${Math.min(validImages.length, 4)}`}>
        {/* Main Featured Photo */}
        <div
          className="gallery-item gallery-item-main"
          onClick={() => openLightbox(0)}
          role="button"
          tabIndex={0}
          aria-label={`Enlarge main photo of ${title}`}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(0)}
        >
          <img
            src={mainImage}
            alt={`${title} - Primary view`}
            className="gallery-img"
            onError={(e) => {
              if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
                e.currentTarget.src = PLACEHOLDER_IMAGE
              }
            }}
          />
          <div className="gallery-hover-overlay">
            <span className="gallery-zoom-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              Click to view full photo
            </span>
          </div>
        </div>

        {/* Secondary Photos Stack / Grid */}
        {secondaryImages.length > 0 && (
          <div className="gallery-secondary-col">
            {secondaryImages.map((img, idx) => {
              const actualIndex = idx + 1
              return (
                <div
                  key={actualIndex}
                  className="gallery-item gallery-item-sub"
                  onClick={() => openLightbox(actualIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge photo ${actualIndex + 1} of ${title}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(actualIndex)}
                >
                  <img
                    src={img}
                    alt={`${title} - View ${actualIndex + 1}`}
                    className="gallery-img"
                    onError={(e) => {
                      if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
                        e.currentTarget.src = PLACEHOLDER_IMAGE
                      }
                    }}
                  />
                  <div className="gallery-hover-overlay">
                    <span className="gallery-sub-index">{actualIndex + 1} / {validImages.length}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Gallery Action / Counter Strip */}
      <div className="gallery-footer-bar">
        <div className="gallery-total-counter">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Showing all {validImages.length} verified photographs</span>
        </div>
        <button
          className="gallery-view-all-btn"
          onClick={() => openLightbox(0)}
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
          Open Interactive Lightbox
        </button>
      </div>

      {/* ── Interactive Lightbox Modal ── */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            {/* Lightbox Header Bar */}
            <div className="lightbox-header">
              <div className="lightbox-info">
                <span className="lightbox-title">{title}</span>
                <span className="lightbox-counter">
                  Photo {lightboxIndex + 1} of {validImages.length}
                </span>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close photo view"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Lightbox Stage */}
            <div className="lightbox-stage">
              {validImages.length > 1 && (
                <button
                  className="lightbox-nav-btn lightbox-prev-btn"
                  onClick={prevImage}
                  aria-label="Previous photograph"
                  title="Previous (Left Arrow)"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
              )}

              <div className="lightbox-image-wrap">
                <img
                  src={validImages[lightboxIndex] || PLACEHOLDER_IMAGE}
                  alt={`${title} - Large view ${lightboxIndex + 1}`}
                  className="lightbox-active-img"
                  onError={(e) => {
                    if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
                      e.currentTarget.src = PLACEHOLDER_IMAGE
                    }
                  }}
                />
              </div>

              {validImages.length > 1 && (
                <button
                  className="lightbox-nav-btn lightbox-next-btn"
                  onClick={nextImage}
                  aria-label="Next photograph"
                  title="Next (Right Arrow)"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnail Strip */}
            {validImages.length > 1 && (
              <div className="lightbox-thumbnails">
                {validImages.map((img, i) => (
                  <button
                    key={i}
                    className={`lightbox-thumb-btn ${i === lightboxIndex ? 'active' : ''}`}
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Select photo ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onError={(e) => {
                        if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
                          e.currentTarget.src = PLACEHOLDER_IMAGE
                        }
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
