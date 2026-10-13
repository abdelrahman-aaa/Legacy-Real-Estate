import { useState, useEffect, useMemo } from 'react'
import './Properties.css'
import { initialProperties, PROJECTS, normalizeProperty } from '../../data/propertiesData'
import PropertyCard from './PropertyCard'
import PropertyDetails from './PropertyDetails'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Properties({ onNavigate }) {
  const { t, lang } = useLanguage()

  // Normalize all properties from centralized data store
  const allProperties = useMemo(() => {
    return initialProperties.map(normalizeProperty)
  }, [])

  // Filters state
  const [activeTab, setActiveTab] = useState('ALL') // 'ALL' | 'SALE' | 'RENT'
  const [propertyType, setPropertyType] = useState('all')
  const [selectedProject, setSelectedProject] = useState('all') // ONLY 4 projects or 'all'
  const [bedrooms, setBedrooms] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // View Details state (Dedicated Property Details View)
  const [selectedProperty, setSelectedProperty] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash.startsWith('property/')) {
      const propId = hash.replace('property/', '')
      const found = allProperties.find(p => String(p.id) === String(propId))
      return found || null
    }
    return null
  })

  // Modals state (Rental Request & Call Desk)
  const [rentalModalOpen, setRentalModalOpen] = useState(false)
  const [deskCallOpen, setDeskCallOpen] = useState(false)

  // Listen to hash changes for browser back / forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash.startsWith('property/')) {
        const propId = hash.replace('property/', '')
        const found = allProperties.find(p => String(p.id) === String(propId))
        if (found) setSelectedProperty(found)
      } else if (hash === 'properties') {
        setSelectedProperty(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [allProperties])

  // Open property details view
  const handleViewDetails = (prop) => {
    setSelectedProperty(prop)
    window.location.hash = `property/${prop.id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Return from details to listing
  const handleBackToList = () => {
    setSelectedProperty(null)
    window.location.hash = 'properties'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Reset all filters
  const handleReset = () => {
    setActiveTab('ALL')
    setPropertyType('all')
    setSelectedProject('all')
    setBedrooms('all')
    setPriceRange('all')
    setSearchQuery('')
  }

  // Dynamic Filtering Logic
  const filteredProperties = useMemo(() => {
    return allProperties.filter(item => {
      // 1. Tab filter (ALL, SALE, RENT)
      if (activeTab === 'SALE' && item.listingType !== 'sale') return false
      if (activeTab === 'RENT' && item.listingType !== 'rent') return false

      // 2. Project filter (Strictly limited to the 4 projects)
      if (selectedProject !== 'all' && item.project !== selectedProject) {
        return false
      }

      // 3. Property Type
      if (propertyType !== 'all') {
        const itemType = (item.propertyType || item.type || '').toLowerCase()
        if (propertyType === 'garden' && !itemType.includes('garden')) return false
        if (propertyType === 'apartment' && !itemType.includes('apartment')) return false
        if (propertyType === 'suite' && !itemType.includes('suite')) return false
        if (propertyType === 'executive' && !itemType.includes('executive')) return false
        if (propertyType === 'villa' && !itemType.includes('villa') && !itemType.includes('twin')) return false
        if (propertyType === 'signature' && !itemType.includes('signature')) return false
      }

      // 4. Bedrooms
      if (bedrooms !== 'all') {
        const itemBeds = String(item.bedrooms || '')
        if (bedrooms === '1' && !itemBeds.startsWith('1')) return false
        if (bedrooms === '2' && !itemBeds.startsWith('2')) return false
        if (bedrooms === '3' && !itemBeds.startsWith('3')) return false
        if (bedrooms === '4+' && !itemBeds.match(/[4-9]|\+/)) return false
      }

      // 5. Price range
      if (priceRange !== 'all') {
        const priceNum = item.priceNumber || 0
        if (priceRange === 'under10' && priceNum >= 10000000) return false
        if (priceRange === '10to13' && (priceNum < 10000000 || priceNum > 13000000)) return false
        if (priceRange === '13to15' && (priceNum < 13000000 || priceNum > 15000000)) return false
        if (priceRange === 'over15' && priceNum <= 15000000) return false
      }

      // 6. Search keyword
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchTitle = item.title?.toLowerCase().includes(q)
        const matchProject = item.project?.toLowerCase().includes(q)
        const matchLocation = item.location?.toLowerCase().includes(q)
        const matchDesc = item.description?.toLowerCase().includes(q) || item.fullDescription?.toLowerCase().includes(q)
        if (!matchTitle && !matchProject && !matchLocation && !matchDesc) return false
      }

      return true
    })
  }, [allProperties, activeTab, selectedProject, propertyType, bedrooms, priceRange, searchQuery])

  return (
    <div className="properties-page">
      <div className="properties-container">

        {/* ── CONDITIONAL RENDERING: PROPERTY DETAILS VIEW vs PROPERTIES LIST ── */}
        {selectedProperty ? (
          <PropertyDetails
            property={selectedProperty}
            onBack={handleBackToList}
            onNavigate={onNavigate}
          />
        ) : (
          <>
            {/* ── Breadcrumb ── */}
            <nav className="properties-breadcrumb" aria-label="Breadcrumb">
              <button
                className="breadcrumb-link"
                onClick={() => onNavigate && onNavigate('home')}
              >
                {t('properties.breadHome')}
              </button>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{t('properties.breadProps')}</span>
            </nav>

            {/* ── Page Header ── */}
            <div className="properties-header">
              <div className="properties-header-left">
                <h1 className="properties-title">{t('properties.pageTitle')}</h1>
                <p className="properties-subtitle">
                  {t('properties.pageSubtitle')}
                </p>
              </div>

              <div className="properties-verified-badge">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span> {t('properties.verifiedBadge')}</span>
              </div>
            </div>

            {/* ── Filter Toolbar ── */}
            <section className="properties-filter-section" aria-label="Filter Properties">
              <div className="filter-top-row">

                {/* Left Tabs */}
                <div className="filter-tabs" role="tablist">
                  <button
                    role="tab"
                    aria-selected={activeTab === 'ALL'}
                    className={`filter-tab ${activeTab === 'ALL' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ALL')}
                  >
                    {t('properties.tabAll')}
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 'SALE'}
                    className={`filter-tab ${activeTab === 'SALE' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SALE')}
                  >
                    {t('properties.tabSale')}
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 'RENT'}
                    className={`filter-tab ${activeTab === 'RENT' ? 'active' : ''}`}
                    onClick={() => setActiveTab('RENT')}
                  >
                    {t('properties.tabRent')}
                  </button>
                </div>

                {/* Right Status & Reset */}
                <div className="filter-top-actions">
                  <div className="filter-verified-counter">
                    <span className="counter-dot" />
                    <span>
                      {t('properties.showing')} {filteredProperties.length} {t('properties.of')} {allProperties.length} {t('properties.verifiedProps')}
                    </span>
                  </div>

                  <button
                    className="filter-reset-btn"
                    onClick={handleReset}
                    title={t('properties.reset')}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 4v6h-6"/>
                      <path d="M1 20v-6h6"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                    {t('properties.reset')}
                  </button>
                </div>
              </div>

              {/* Search Box Row */}
              <div className="filter-search-row">
                <div className="filter-search-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('properties.searchPlaceholder')}
                    className="filter-search-input"
                    aria-label={t('properties.searchAriaLabel')}
                  />
                  {searchQuery && (
                    <button
                      className="filter-search-clear"
                      onClick={() => setSearchQuery('')}
                      aria-label={t('properties.clearSearch')}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 4 Dropdowns Grid */}
              <div className="filter-dropdowns-row">

                {/* 1. Property Type */}
                <div className="filter-field">
                  <label htmlFor="filter-prop-type">{t('properties.filterPropType')}</label>
                  <div className="select-wrapper">
                    <select
                      id="filter-prop-type"
                      className="filter-select"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="all">{t('properties.allTypes')}</option>
                      <option value="garden">{t('properties.gardenRes')}</option>
                      <option value="apartment">{t('properties.apartment')}</option>
                      <option value="signature">{t('properties.signatureRes')}</option>
                      <option value="suite">{t('properties.terraceSuite')}</option>
                      <option value="executive">{t('properties.executiveRes')}</option>
                      <option value="villa">{t('properties.twinHouse')}</option>
                    </select>
                    <div className="select-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Project / Community (ONLY the four authorized projects) */}
                <div className="filter-field">
                  <label htmlFor="filter-compound">{t('properties.filterCommunity')}</label>
                  <div className="select-wrapper">
                    <select
                      id="filter-compound"
                      className="filter-select"
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                    >
                      <option value="all">{t('properties.allProps')}</option>
                      {PROJECTS.map((proj) => {
                        let label = proj
                        if (lang === 'ar') {
                          if (proj === 'joulz' || proj.toLowerCase().includes('guezly')) label = 'جولز'
                          else if (proj.toLowerCase().includes('giza')) label = 'نيو جيزة'
                          else if (proj.toLowerCase().includes('beverly') || proj.toLowerCase().includes('sodic')) label = 'سوديك بيفرلي هيلز'
                          else if (proj.toLowerCase().includes('zed')) label = 'زيد ويست'
                        } else {
                          if (proj === 'joulz') label = 'joulz'
                        }
                        return (
                          <option key={proj} value={proj}>
                            {label}
                          </option>
                        )
                      })}
                    </select>
                    <div className="select-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 3. Bedrooms */}
                <div className="filter-field">
                  <label htmlFor="filter-bedrooms">{t('properties.filterBedrooms')}</label>
                  <div className="select-wrapper">
                    <select
                      id="filter-bedrooms"
                      className="filter-select"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    >
                      <option value="all">{t('properties.anyBedrooms')}</option>
                      <option value="1">{t('properties.bed1')}</option>
                      <option value="2">{t('properties.bed2')}</option>
                      <option value="3">{t('properties.bed3')}</option>
                      <option value="4+">{t('properties.bed4Plus')}</option>
                    </select>
                    <div className="select-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 4. Price Range */}
                <div className="filter-field">
                  <label htmlFor="filter-price">{t('properties.filterPrice')}</label>
                  <div className="select-wrapper">
                    <select
                      id="filter-price"
                      className="filter-select"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="all">{t('properties.anyPrice')}</option>
                      <option value="under10">{t('properties.under10')}</option>
                      <option value="10to13">{t('properties.price10to13')}</option>
                      <option value="13to15">{t('properties.price13to15')}</option>
                      <option value="over15">{t('properties.over15')}</option>
                    </select>
                    <div className="select-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Properties Grid ── */}
            {filteredProperties.length === 0 ? (
              <div className="properties-empty-state">
                <h3>{t('properties.emptyTitle')}</h3>
                <p>{t('properties.emptyDesc')}</p>
                <button className="btn-view-details-outline" onClick={handleReset}>
                  {t('properties.resetFilters')}
                </button>
              </div>
            ) : (
              <div className="properties-cards-grid">
                {filteredProperties.map(prop => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}

            {/* ── Rental Portfolio Banner ── */}
            <section className="properties-rental-banner">
              <div className="rental-banner-content">
                <span className="rental-banner-tag">{t('properties.rentalBannerTag')}</span>
                <h2 className="rental-banner-title">
                  {t('properties.rentalBannerTitle')}
                </h2>
                <p className="rental-banner-desc">
                  {t('properties.rentalBannerDesc')}
                </p>
              </div>

              <div className="rental-banner-actions">
                <button
                  className="btn-rental-request"
                  onClick={() => setRentalModalOpen(true)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  {t('properties.submitRental')}
                </button>

                <button
                  className="btn-call-desk"
                  onClick={() => setDeskCallOpen(true)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                  {t('properties.callDesk')}
                </button>
              </div>
            </section>
          </>
        )}

      </div>

      {/* ── Rental Request Modal ── */}
      {rentalModalOpen && (
        <div className="property-modal-overlay" onClick={() => setRentalModalOpen(false)}>
          <div className="property-modal-card" style={{ maxWidth: 540 }} onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setRentalModalOpen(false)}>✕</button>
            <div className="modal-body" style={{ paddingTop: 36 }}>
              <span className="rental-banner-tag">{t('rentalModal.tag')}</span>
              <h2 className="modal-title" style={{ fontSize: 24 }}>{t('rentalModal.title')}</h2>
              <p className="modal-desc">
                {t('rentalModal.desc')}
              </p>

              <form onSubmit={(e) => {
                e.preventDefault()
                alert(t('rentalModal.alertMsg'))
                setRentalModalOpen(false)
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                  <input
                    type="text"
                    placeholder={t('rentalModal.namePlaceholder')}
                    required
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                  <input
                    type="tel"
                    placeholder={t('rentalModal.phonePlaceholder')}
                    required
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                  <select style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}>
                    <option>{t('rentalModal.compoundZed')}</option>
                    <option>{t('rentalModal.compoundSodic')}</option>
                    <option>{t('rentalModal.compoundGiza')}</option>
                    <option>{t('rentalModal.compoundGuezly')}</option>
                  </select>
                  <input
                    type="text"
                    placeholder={t('rentalModal.moveinPlaceholder')}
                    style={{ padding: '12px 14px', border: '1px solid #d9d5cb', borderRadius: 6, fontSize: 14 }}
                  />
                </div>
                <button type="submit" className="modal-primary-btn" style={{ width: '100%' }}>
                  {t('rentalModal.submitBtn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ── Call Desk Modal ── */}
      {deskCallOpen && (
        <div className="property-modal-overlay" onClick={() => setDeskCallOpen(false)}>
          <div className="property-modal-card" style={{ maxWidth: 460, textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setDeskCallOpen(false)}>✕</button>
            <div className="modal-body" style={{ padding: 40 }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%', background: '#f2f7f4',
                color: '#173f32', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
              </div>

              <h2 className="modal-title" style={{ fontSize: 22, marginBottom: 8 }}>
                {t('callDesk.title')}
              </h2>
              <p style={{ fontSize: 14, color: '#68736d', marginBottom: 20 }}>
                {t('callDesk.subtitle')}
              </p>

              <div style={{
                background: '#f8f6f2', padding: '16px', borderRadius: 8,
                fontSize: 18, fontWeight: 800, color: '#142a22', letterSpacing: 0.5,
                marginBottom: 24, direction: 'ltr', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'
              }}>
                <a href="tel:01514174050" style={{ color: 'inherit', textDecoration: 'none' }}>0151 417 4050</a>
                <a href="tel:01027880569" style={{ color: 'inherit', textDecoration: 'none' }}>01027880569</a>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="tel:01514174050"
                  className="modal-primary-btn"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  📞 0151 417 4050
                </a>
                <a
                  href="tel:01027880569"
                  className="modal-primary-btn"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  📞 01027880569
                </a>
                <button
                  className="modal-secondary-btn"
                  onClick={() => {
                    navigator.clipboard.writeText('0151 417 4050 - 01027880569')
                    alert(t('callDesk.copyAlert'))
                  }}
                >
                  {t('callDesk.copyBtn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
