// ─── Centralized Translation Dictionary ───────────────────────────────────────
// All user-facing strings for English (en) and Arabic (ar).
// Property data (titles, prices, specs) remain unchanged – translations are mapped cleanly.

const translations = {
  en: {
    // ── Navbar ───────────────────────────────────────────────────────────────
    nav: {
      home:       'Home',
      properties: 'Properties',
      about:      'About Us',
      services:   'Services',
      contact:    'Contact',
      cta:        'Free Consultation',
      langSwitch: 'العربية',
      ariaMain:   'Main navigation',
      ariaToggle: 'Toggle mobile menu',
      ariaLogo:   'Legacy Real Estate Home',
      logoName:   'Legacy Real Estate',
      logoTagline:'Premium Properties',
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      badge:    'Legacy Real Estate Platform',
      titleLine1: 'Find Your Next Property in',
      titleSpan:  'Legacy Real Estate',
      subtitle:   'Discover exclusive villas, luxury apartments, and premium investments in Sheikh Zayed & 6th October\'s most sought-after compounds.',
      explorBtn:  'Explore Properties',
      consultBtn: 'Free Consultation',
    },

    // ── Trust Bar ─────────────────────────────────────────────────────────────
    trust: {
      listings:     '580+ Active Listings',
      listingsSub:  'Updated daily',
      verified:     'Verified Properties',
      verifiedSub:  'All listings inspected',
      consultants:  'Expert Consultants',
      consultantsSub: '50+ licensed agents',
      secure:       'Secure Transactions',
      secureSub:    'Legal & financial support',
    },

    // ── Featured Properties (Home) ────────────────────────────────────────────
    featured: {
      label:       'Verified Portfolio',
      titleMain:   'Selected ',
      titleSpan:   'Sheikh Zayed Residences',
      subtitle:    'Curated luxury apartments, garden residences, and signature penthouses in ZED West and prime compounds.',
      viewAllBtn:  'View All Properties (6)',
      detailsLink: 'Details →',
      priceLabel:  'PURCHASE VALUATION',
    },

    // ── Categories ────────────────────────────────────────────────────────────
    categories: {
      label:     'Browse by Type',
      titleMain: 'Explore Our ',
      titleSpan: 'Property Types',
      villas:       'Villas',
      apartments:   'Apartments',
      penthouses:   'Penthouses',
      townhouses:   'Townhouses',
      chalets:      'Chalets',
      villasCount:      '145 listings',
      apartmentsCount:  '234 listings',
      penthousesCount:  '48 listings',
      townhousesCount:  '89 listings',
      chaletsCount:     '62 listings',
      ariaBrowse:       'Browse',
    },

    // ── About Section ─────────────────────────────────────────────────────────
    about: {
      label:      'About Legacy Real Estate Properties',
      titleMain:  'Your Trusted Real Estate ',
      titleSpan:  'Partner',
      desc1: 'Since 2009, we have been the leading real estate agency in Sheikh Zayed and 6th October City. We offer an unparalleled portfolio of residential and investment properties, backed by a team of passionate experts who understand the local market inside out.',
      desc2: "Whether you're searching for your family's forever home, a luxurious upgrade, or a high-yield investment property, we have the expertise and network to make it happen.",
      contactBtn: 'Contact Us',
      yearsStrong: '15+',
      yearsLabel:  'Years of Excellence',
      features: {
        award:   { icon: '🏆', title: 'Award-Winning Agency',   desc: 'Recognized as top real estate firm in Greater Cairo for 5 consecutive years.' },
        keys:    { icon: '🔑', title: 'Exclusive Listings',     desc: 'Access to off-market and premium-only properties not found elsewhere.' },
        market:  { icon: '📊', title: 'Market Expertise',       desc: 'Data-driven insights to help you buy, sell, or invest at the right time.' },
        service: { icon: '🤝', title: 'End-to-End Service',     desc: 'Full support from property search through legal contracts and handover.' },
      },
    },

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonials: {
      label:    'Client Stories',
      titleMain:'What Our ',
      titleSpan:'Clients Say',
      subtitle: 'Join thousands of satisfied clients who found their perfect home through our expert guidance.',
      items: [
        {
          stars: 5, initials: 'MH',
          text: '"The team at Sheikh Zayed Properties helped us find our dream villa within just 2 weeks. Their local knowledge is unmatched and the process was completely seamless."',
          name: 'Mohamed Hassan', role: 'Villa Owner, Beverly Hills',
        },
        {
          stars: 5, initials: 'SA',
          text: '"As an investor, I appreciated the detailed market insights and the professional guidance on ROI. We secured 3 units in Sheikh Zayed with exceptional returns."',
          name: 'Sara Al-Ashmawy', role: 'Property Investor',
        },
        {
          stars: 5, initials: 'KM',
          text: '"From viewing properties to signing contracts, every step was handled with care and precision. I am now enjoying my luxury apartment with a stunning view."',
          name: 'Karim Mansour', role: 'Apartment Owner, Zayed City',
        },
      ],
    },

    // ── CTA / Contact Section ─────────────────────────────────────────────────
    cta: {
      label:     'Get In Touch',
      title:     'Looking for Your Next Property?',
      subtitle:  'Our expert consultants are ready to guide you through every step — from browsing listings to signing the contract. Book your free consultation today.',
      callLabel:  'Call Us',
      emailLabel: 'Email Us',
      visitLabel: 'Visit Us',
      callVal:    '0151 417 4050 / 01027880569',
      emailVal:   'info@szproperties.com',
      visitVal:   'Beverly Hills Mall, Sheikh Zayed, Giza',
      formTitle:  'Book Free Consultation',
      formSub:    'Fill out the form and our expert will reach out shortly.',
      nameLabel:  'Your Name',
      namePlaceholder: 'Ahmed Mohamed',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+20 100 000 0000',
      emailLabel2: 'Email Address',
      emailPlaceholder: 'ahmed@example.com',
      msgLabel:   'Your Message',
      msgPlaceholder: 'Tell us what you\'re looking for…',
      sendBtn:    'Send Message',
      successTitle: 'Message Sent!',
      successSub:   'Our team will contact you within 24 hours.',
    },

    // ── Footer ────────────────────────────────────────────────────────────────
    footer: {
      logoName:    'Legacy Real Estate',
      logoTagline: 'Premium Properties',
      desc: "Your trusted partner for premium real estate in Sheikh Zayed and 6th October City. Find your dream property with Egypt's most experienced team.",
      quickLinks:  'Quick Links',
      propTypes:   'Property Types',
      contactUs:   'Contact Us',
      types: ['Villas', 'Apartments', 'Penthouses', 'Townhouses', 'Chalets', 'Commercial'],
      address:     'Beverly Hills Mall, Sheikh Zayed, Giza, Egypt',
      copyright:   '© 2026 Legacy Real Estate. All rights reserved.',
      privacy:     'Privacy Policy',
      terms:       'Terms of Service',
      sitemap:     'Sitemap',
    },

    // ── Properties Page ───────────────────────────────────────────────────────
    properties: {
      breadHome:   'Home',
      breadProps:  'Properties',
      pageTitle:   'Our Properties',
      pageSubtitle:'Explore selected residential properties for sale and rental opportunities in Sheikh Zayed.',
      verifiedBadge: 'Legacy Real Estate Properties',
      tabAll:      'ALL',
      tabSale:     'FOR SALE',
      tabRent:     'FOR RENT (BY INQUIRY)',
      showing:     'SHOWING',
      of:          'OF',
      verifiedProps: 'VERIFIED PROPERTIES',
      reset:       'RESET',
      searchPlaceholder: 'Search residences by title, project, specs, or keyword...',
      searchAriaLabel: 'Search properties',
      clearSearch: 'Clear search',
      filterPropType:     'PROPERTY TYPE',
      filterCommunity:    'PROJECT / COMMUNITY',
      filterBedrooms:     'BEDROOMS',
      filterPrice:        'PRICE RANGE',
      allTypes:           'All Types',
      gardenRes:          'Garden Residence',
      apartment:          'Apartment',
      signatureRes:       'Signature Residence',
      terraceSuite:       'Terrace Suite',
      executiveRes:       'Executive Residence',
      twinHouse:          'Twin House / Villa',
      allProps:           'All Properties',
      anyBedrooms:        'Any Bedrooms',
      bed1:               '1 Bedroom',
      bed2:               '2 Bedrooms',
      bed3:               '3 Bedrooms',
      bed4Plus:           '4+ Bedrooms',
      anyPrice:           'Any Price',
      under10:            'Under 10,000,000 EGP',
      price10to13:        '10,000,000 – 13,000,000 EGP',
      price13to15:        '13,000,000 – 15,000,000 EGP',
      over15:             '15,000,000+ EGP',
      emptyTitle:         'No Properties Match Your Selection',
      emptyDesc:          'Try adjusting your search criteria or resetting filters to see available residences.',
      resetFilters:       'Reset All Filters',
      rentalBannerTag:    'PRIVATE RENTAL PORTFOLIO',
      rentalBannerTitle:  'Looking for Rental Inventory in Sheikh Zayed?',
      rentalBannerDesc:   'We represent private landlords across Beverly Hills, Westown, New Giza, and ZED West. Contact our advisory desk with your preferred move-in date to receive off-market executive leases.',
      submitRental:       'SUBMIT RENTAL REQUEST',
      callDesk:           'CALL DESK',
    },

    // ── Property Card ─────────────────────────────────────────────────────────
    card: {
      photos:           'Photos',
      purchaseValuation:'PURCHASE VALUATION',
      rentalValuation:  'RENTAL VALUATION',
      viewDetails:      'VIEW DETAILS',
      viewAriaLabel:    'View details of',
      cardAriaLabel:    'View details for',
      currency:         'EGP',
    },

    // ── Property Details ──────────────────────────────────────────────────────
    details: {
      breadHome:    'Home',
      breadProps:   'Properties',
      backBtn:      'Back to Listings',
      forRent:      'FOR RENT',
      forSale:      'FOR SALE',
      totalArea:    'TOTAL AREA',
      bedrooms:     'BEDROOMS',
      bathrooms:    'BATHROOMS',
      propType:     'PROPERTY TYPE',
      completeSpecs:'Complete Property Specifications',
      projectCommunity: 'Project / Community',
      location:     'Location',
      price:        'Price',
      propertyType: 'Property Type',
      area:         'Area',
      bedroomsLabel:'Bedrooms',
      bathroomsLabel:'Bathrooms',
      floorLevel:   'Floor Level',
      finishing:    'Finishing Status',
      delivery:     'Delivery Date',
      privateGarden:'Private Garden',
      terrace:      'Terrace',
      parking:      'Parking',
      propDescription: 'Property Description',
      amenities:    'Key Residence Amenities & Features',
      rentalValuation:   'RENTAL VALUATION',
      purchaseValuation: 'PURCHASE VALUATION',
      privateAdvisory:   'PRIVATE ADVISORY DESK',
      requestDetails:    'Request Property Details',
      ctaDesc:           'Receive the complete architectural floor plan, legal dossier, and schedule a private viewing for this residence in',
      successLogged:     'Request Logged Successfully',
      successMsg:        'Our senior consultant for',
      successMsg2:       'will contact you shortly on',
      submitAnother:     'Submit Another Inquiry',
      fullName:          'Full Name',
      phoneWhatsApp:     'Phone / WhatsApp',
      notes:             'Notes / Questions (Optional)',
      namePlaceholder:   'e.g. Tarek Mansour',
      phonePlaceholder:  '+20 100 000 0000',
      notesPlaceholder:  'Preferred time for viewing or questions...',
      requestBtn:        'Request Property Details',
      orConnect:         'OR CONNECT DIRECTLY',
      whatsappBtn:       'WhatsApp Advisory Desk',
      scheduleBtn:       'Schedule Private Viewing',
      directLine:        'DIRECT LINE',
      notFound:          'Property Not Found',
      notFoundDesc:      'The requested residence could not be found or has been moved.',
      backToAll:         '← Back to All Properties',
    },

    // ── Rental Modal ──────────────────────────────────────────────────────────
    rentalModal: {
      tag:       'PRIVATE RENTAL INVENTORY',
      title:     'Submit Rental Request',
      desc:      'Tell us your preferred move-in window and unit specifications in Sheikh Zayed.',
      namePlaceholder:  'Full Name',
      phonePlaceholder: 'Phone Number / WhatsApp',
      compoundZed:      'Preferred Compound: ZED West',
      compoundSodic:    'Preferred Compound: SODIC Beverly Hills',
      compoundGiza:     'Preferred Compound: New Giza',
      compoundGuezly:   "Preferred Compound: joulz",
      moveinPlaceholder:'Preferred Move-in Date',
      submitBtn:        'Submit Advisory Request',
      alertMsg:         'Thank you! Your rental request has been logged. Our advisory desk will curate available off-market options for you.',
    },

    // ── Call Desk Modal ───────────────────────────────────────────────────────
    callDesk: {
      title:    'Sheikh Zayed Advisory Desk',
      subtitle: 'Direct consultation for verified executive sales & leases',
      phone:    '0151 417 4050 / 01027880569',
      callBtn:  'Direct Call',
      copyBtn:  'Copy Number',
      copyAlert:'Phone numbers copied to clipboard: 0151 417 4050 - 01027880569',
    },

    // ── Schedule Viewing Modal ────────────────────────────────────────────────
    scheduleModal: {
      tag:          'EXCLUSIVE APPOINTMENT',
      title:        'Schedule Private Viewing',
      descPrefix:   'Arrange a private on-site inspection of',
      descMid:      'in',
      namePlaceholder:   'Full Name',
      phonePlaceholder:  'Phone Number / WhatsApp',
      timeMorning:  'Preferred Time: Morning (10:00 AM – 1:00 PM)',
      timeAfternoon:'Preferred Time: Afternoon (1:00 PM – 4:00 PM)',
      timeSunset:   'Preferred Time: Sunset / Evening (4:00 PM – 7:00 PM)',
      confirmBtn:   'Confirm Viewing Request',
      alertPrefix:  'Viewing request confirmed for',
      alertSuffix:  '. Our consultant will call to coordinate gate access.',
    },

    // ── Inquiry Form ──────────────────────────────────────────────────────────
    inquiry: {
      successTitle: 'Inquiry Logged Successfully',
      successMsg1:  'Thank you,',
      successMsg2:  '. Our senior property consultant for',
      successMsg3:  'will reach out shortly on',
      submitAnother:'Submit Another Inquiry',
    },

    // ── Projects Dictionary ───────────────────────────────────────────────────
    projects: {
      'ZED West': 'ZED West',
      'SODIC Beverly Hills': 'SODIC Beverly Hills',
      'Beverly Hills': 'SODIC Beverly Hills',
      'New Giza': 'New Giza',
      "Guezly's": "joulz",
      "Guezly’s": "joulz",
      'joulz': "joulz",
      'Allegria': 'Allegria',
      'Courtyard Beverly Hills': 'Courtyard Beverly Hills',
      'Westown Courtyard': 'Westown Courtyard',
    },
  },

  ar: {
    // ── Navbar ───────────────────────────────────────────────────────────────
    nav: {
      home:       'الرئيسية',
      properties: 'العقارات',
      about:      'من نحن',
      services:   'خدماتنا',
      contact:    'تواصل معنا',
      cta:        'استشارة مجانية',
      langSwitch: 'English',
      ariaMain:   'التنقل الرئيسي',
      ariaToggle: 'تبديل قائمة الهاتف',
      ariaLogo:   'الرئيسية ليجاسي للعقارات',
      logoName:   'ليجاسي للعقارات',
      logoTagline:'عقارات متميزة',
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      badge:    'منصة ليجاسي العقارية',
      titleLine1: 'اعثر على عقارك القادم في',
      titleSpan:  'ليجاسي للعقارات',
      subtitle:   'اكتشف فيلات حصرية وشققاً فاخرة واستثمارات متميزة في أرقى كمبوندات الشيخ زايد والسادس من أكتوبر.',
      explorBtn:  'استكشف العقارات',
      consultBtn: 'استشارة مجانية',
    },

    // ── Trust Bar ─────────────────────────────────────────────────────────────
    trust: {
      listings:     '+٥٨٠ عقار نشط',
      listingsSub:  'تحديث يومي',
      verified:     'عقارات موثقة',
      verifiedSub:  'فحص كامل لجميع الوحدات',
      consultants:  'مستشارون خبراء',
      consultantsSub: '+٥٠ وكيلاً معتمداً',
      secure:       'معاملات آمنة',
      secureSub:    'دعم قانوني ومالي متكامل',
    },

    // ── Featured Properties (Home) ────────────────────────────────────
    featured: {
      label:       'محفظة موثقة',
      titleMain:   'مختارات ',
      titleSpan:   'مساكن الشيخ زايد',
      subtitle:    'شقق فاخرة مختارة، وحدات بحديقة خاصة وبنتهاوسات في زيد ويست وأرقى المجمعات السكنية.',
      viewAllBtn:  'عرض جميع العقارات (٦)',
      detailsLink: 'التفاصيل ←',
      priceLabel:  'تقييم الشراء',
    },

    // ── Categories ────────────────────────────────────────────────────────────
    categories: {
      label:     'تصفح حسب النوع',
      titleMain: 'استكشف أنواع ',
      titleSpan: 'عقاراتنا',
      villas:       'فيلات',
      apartments:   'شقق',
      penthouses:   'بنتهاوس',
      townhouses:   'تاون هاوس',
      chalets:      'شاليهات',
      villasCount:      '١٤٥ عقاراً',
      apartmentsCount:  '٢٣٤ عقاراً',
      penthousesCount:  '٤٨ عقاراً',
      townhousesCount:  '٨٩ عقاراً',
      chaletsCount:     '٦٢ عقاراً',
      ariaBrowse:       'تصفح',
    },

    // ── About Section ─────────────────────────────────────────────────────────
    about: {
      label:      'عن ليجاسي للعقارات',
      titleMain:  'شريكك العقاري ',
      titleSpan:  'الموثوق',
      desc1: 'منذ عام ٢٠٠٩، نحن الوكالة العقارية الرائدة في الشيخ زايد ومدينة السادس من أكتوبر. نقدم محفظة لا مثيل لها من العقارات السكنية والاستثمارية، يدعمنا فريق من الخبراء الشغوفين الذين يعرفون السوق المحلي عن كثب.',
      desc2: 'سواء كنت تبحث عن منزل العمر لعائلتك، أو ترقية فاخرة، أو عقار استثماري بعائد مجزٍ، فإننا نملك الخبرة وشبكة العلاقات لتحقيق ذلك.',
      contactBtn: 'تواصل معنا',
      yearsStrong: '+١٥',
      yearsLabel:  'عاماً من التميز',
      features: {
        award:   { icon: '🏆', title: 'وكالة حائزة على جوائز', desc: 'صُنفت كأفضل شركة عقارية في القاهرة الكبرى لمدة ٥ سنوات متتالية.' },
        keys:    { icon: '🔑', title: 'عروض حصرية',            desc: 'وصول إلى عقارات حصرية ومتميزة لا توجد في أي مكان آخر.' },
        market:  { icon: '📊', title: 'خبرة بالسوق المحلي',   desc: 'رؤى مبنية على البيانات لمساعدتك على الشراء أو البيع أو الاستثمار في الوقت المناسب.' },
        service: { icon: '🤝', title: 'خدمة شاملة متكاملة',   desc: 'دعم كامل يبدأ من البحث عن العقار وحتى العقود القانونية والاستلام.' },
      },
    },

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonials: {
      label:    'قصص العملاء',
      titleMain:'ماذا يقول ',
      titleSpan:'عملاؤنا',
      subtitle: 'انضم إلى آلاف العملاء الراضين الذين وجدوا منزلهم المثالي من خلال إرشاداتنا المتخصصة.',
      items: [
        {
          stars: 5, initials: 'مح',
          text: '"ساعدنا فريق الشيخ زايد للعقارات في العثور على فيلا أحلامنا خلال أسبوعين فقط. معرفتهم بالسوق المحلي لا تضاهى وكانت العملية سلسة تماماً."',
          name: 'محمد حسن', role: 'مالك فيلا، بيفرلي هيلز',
        },
        {
          stars: 5, initials: 'سع',
          text: '"كمستثمرة، قدرت الرؤى التفصيلية للسوق والإرشاد المهني بشأن العائد على الاستثمار. حصلنا على ٣ وحدات في الشيخ زايد بعوائد استثنائية."',
          name: 'سارة العشماوي', role: 'مستثمرة عقارية',
        },
        {
          stars: 5, initials: 'كم',
          text: '"من معاينة العقارات وحتى توقيع العقود، تمت كل خطوة بعناية ودقة فائقة. أستمتع الآن بشقتي الفاخرة بإطلالة رائعة."',
          name: 'كريم منصور', role: 'مالك شقة، مدينة زايد',
        },
      ],
    },

    // ── CTA / Contact Section ─────────────────────────────────────────────────
    cta: {
      label:     'تواصل معنا',
      title:     'هل تبحث عن عقارك القادم؟',
      subtitle:  'مستشارونا الخبراء جاهزون لإرشادك في كل خطوة — من تصفح العروض وحتى توقيع العقد. احجز استشارتك المجانية اليوم.',
      callLabel:  'اتصل بنا',
      emailLabel: 'راسلنا',
      visitLabel: 'زورنا',
      callVal:    '0151 417 4050 / 01027880569',
      emailVal:   'info@szproperties.com',
      visitVal:   'بيفرلي هيلز مول، الشيخ زايد، الجيزة',
      formTitle:  'احجز استشارة مجانية',
      formSub:    'املأ النموذج وسيتواصل معك خبيرنا في أقرب وقت.',
      nameLabel:  'اسمك الكامل',
      namePlaceholder: 'أحمد محمد',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+20 100 000 0000',
      emailLabel2: 'البريد الإلكتروني',
      emailPlaceholder: 'ahmed@example.com',
      msgLabel:   'رسالتك',
      msgPlaceholder: 'أخبرنا عما تبحث عنه…',
      sendBtn:    'إرسال الرسالة',
      successTitle: 'تم إرسال الرسالة!',
      successSub:   'سيتواصل معك فريقنا خلال ٢٤ ساعة.',
    },

    // ── Footer ────────────────────────────────────────────────────────────────
    footer: {
      logoName:    'ليجاسي للعقارات',
      logoTagline: 'عقارات متميزة',
      desc: 'شريكك الموثوق للعقارات المتميزة في الشيخ زايد ومدينة السادس من أكتوبر. اعثر على عقار أحلامك مع أكثر فريق ذي خبرة في مصر.',
      quickLinks:  'روابط سريعة',
      propTypes:   'أنواع العقارات',
      contactUs:   'تواصل معنا',
      types: ['فيلات', 'شقق', 'بنتهاوسات', 'تاون هاوس', 'شاليهات', 'تجاري'],
      address:     'بيفرلي هيلز مول، الشيخ زايد، الجيزة، مصر',
      copyright:   '© ٢٠٢٦ ليجاسي للعقارات. جميع الحقوق محفوظة.',
      privacy:     'سياسة الخصوصية',
      terms:       'شروط الخدمة',
      sitemap:     'خريطة الموقع',
    },

    // ── Properties Page ───────────────────────────────────────────────────────
    properties: {
      breadHome:   'الرئيسية',
      breadProps:  'العقارات',
      pageTitle:   'عقاراتنا',
      pageSubtitle:'استعرض العقارات السكنية المختارة للبيع والإيجار في الشيخ زايد.',
      verifiedBadge: 'ليجاسي لعقارات الحقيقية',
      tabAll:      'الكل',
      tabSale:     'للبيع',
      tabRent:     'للإيجار (بالاستفسار)',
      showing:     'عرض',
      of:          'من',
      verifiedProps: 'عقار موثق',
      reset:       'إعادة ضبط',
      searchPlaceholder: 'ابحث بالعنوان أو المشروع أو المواصفات...',
      searchAriaLabel: 'البحث في العقارات',
      clearSearch: 'مسح البحث',
      filterPropType:     'نوع العقار',
      filterCommunity:    'المشروع / المجمع',
      filterBedrooms:     'غرف النوم',
      filterPrice:        'نطاق السعر',
      allTypes:           'جميع الأنواع',
      gardenRes:          'شقة حديقة',
      apartment:          'شقة',
      signatureRes:       'وحدة سيجنتشر',
      terraceSuite:       'تيراس سويت',
      executiveRes:       'وحدة إيجزيكيوتيف',
      twinHouse:          'تاون هاوس / فيلا',
      allProps:           'جميع العقارات',
      anyBedrooms:        'أي عدد غرف',
      bed1:               'غرفة نوم واحدة',
      bed2:               'غرفتا نوم',
      bed3:               '٣ غرف نوم',
      bed4Plus:           '٤ غرف فأكثر',
      anyPrice:           'أي سعر',
      under10:            'أقل من ١٠,٠٠٠,٠٠٠ ج.م',
      price10to13:        '١٠,٠٠٠,٠٠٠ – ١٣,٠٠٠,٠٠٠ ج.م',
      price13to15:        '١٣,٠٠٠,٠٠٠ – ١٥,٠٠٠,٠٠٠ ج.م',
      over15:             '١٥,٠٠٠,٠٠٠+ ج.م',
      emptyTitle:         'لا توجد عقارات تطابق اختيارك',
      emptyDesc:          'حاول تعديل معايير البحث أو إعادة ضبط الفلاتر لعرض الوحدات المتاحة.',
      resetFilters:       'إعادة ضبط الفلاتر',
      rentalBannerTag:    'محفظة الإيجار الخاصة',
      rentalBannerTitle:  'تبحث عن وحدات إيجار في الشيخ زايد؟',
      rentalBannerDesc:   'نمثل ملاك خاصين في بيفرلي هيلز وويستاون ونيو جيزة وزيد ويست. تواصل مع مكتبنا بتاريخ التسكين المفضل لديك لتلقي عروض إيجار حصرية خارج السوق.',
      submitRental:       'تقديم طلب إيجار',
      callDesk:           'اتصل بالمكتب',
    },

    // ── Property Card ─────────────────────────────────────────────────────────
    card: {
      photos:           'صور',
      purchaseValuation:'تقييم الشراء',
      rentalValuation:  'تقييم الإيجار',
      viewDetails:      'عرض التفاصيل',
      viewAriaLabel:    'عرض تفاصيل',
      cardAriaLabel:    'عرض تفاصيل',
      currency:         'ج.م',
    },

    // ── Property Details ──────────────────────────────────────────────────────
    details: {
      breadHome:    'الرئيسية',
      breadProps:   'العقارات',
      backBtn:      'العودة إلى القائمة',
      forRent:      'للإيجار',
      forSale:      'للبيع',
      totalArea:    'المساحة الإجمالية',
      bedrooms:     'غرف النوم',
      bathrooms:    'دورات المياه',
      propType:     'نوع العقار',
      completeSpecs:'المواصفات الكاملة للعقار',
      projectCommunity: 'المشروع / المجمع',
      location:     'الموقع',
      price:        'السعر',
      propertyType: 'نوع العقار',
      area:         'المساحة',
      bedroomsLabel:'غرف النوم',
      bathroomsLabel:'دورات المياه',
      floorLevel:   'الطابق',
      finishing:    'حالة التشطيب',
      delivery:     'تاريخ التسليم',
      privateGarden:'حديقة خاصة',
      terrace:      'تراس',
      parking:      'موقف سيارة',
      propDescription: 'وصف العقار',
      amenities:    'المرافق والمميزات الرئيسية',
      rentalValuation:   'تقييم الإيجار',
      purchaseValuation: 'تقييم الشراء',
      privateAdvisory:   'المكتب الاستشاري الخاص',
      requestDetails:    'طلب تفاصيل العقار',
      ctaDesc:           'احصل على المخطط المعماري الكامل، الملف القانوني، وجدولة معاينة خاصة لهذه الوحدة في',
      successLogged:     'تم تسجيل الطلب بنجاح',
      successMsg:        'سيتواصل معك مستشارنا الأول لمشروع',
      successMsg2:       'قريباً على رقم',
      submitAnother:     'تقديم استفسار آخر',
      fullName:          'الاسم الكامل',
      phoneWhatsApp:     'الهاتف / واتساب',
      notes:             'ملاحظات / أسئلة (اختياري)',
      namePlaceholder:   'مثال: طارق منصور',
      phonePlaceholder:  '+20 100 000 0000',
      notesPlaceholder:  'الوقت المفضل للمعاينة أو أي أسئلة...',
      requestBtn:        'طلب تفاصيل العقار',
      orConnect:         'أو تواصل مباشرة',
      whatsappBtn:       'واتساب المكتب الاستشاري',
      scheduleBtn:       'جدولة معاينة خاصة',
      directLine:        'خط مباشر',
      notFound:          'العقار غير موجود',
      notFoundDesc:      'تعذر العثور على الوحدة المطلوبة أو ربما تم نقلها.',
      backToAll:         '← العودة إلى جميع العقارات',
    },

    // ── Rental Modal ──────────────────────────────────────────────────────────
    rentalModal: {
      tag:       'محفظة الإيجار الخاصة',
      title:     'تقديم طلب إيجار',
      desc:      'أخبرنا بنافذة التسكين المفضلة ومواصفات الوحدة في الشيخ زايد.',
      namePlaceholder:  'الاسم الكامل',
      phonePlaceholder: 'رقم الهاتف / واتساب',
      compoundZed:      'المجمع المفضل: زيد ويست',
      compoundSodic:    'المجمع المفضل: سوديك بيفرلي هيلز',
      compoundGiza:     'المجمع المفضل: نيو جيزة',
      compoundGuezly:   "المجمع المفضل: جولز",
      moveinPlaceholder:'تاريخ التسكين المفضل',
      submitBtn:        'تقديم طلب استشاري',
      alertMsg:         'شكراً! تم تسجيل طلب الإيجار. سيعمل مكتبنا الاستشاري على انتقاء الخيارات المتاحة خارج السوق لك.',
    },

    // ── Call Desk Modal ───────────────────────────────────────────────────────
    callDesk: {
      title:    'المكتب الاستشاري في الشيخ زايد',
      subtitle: 'استشارة مباشرة للمبيعات والإيجارات التنفيذية الموثقة',
      phone:    '0151 417 4050 / 01027880569',
      callBtn:  'اتصال مباشر',
      copyBtn:  'نسخ الرقم',
      copyAlert:'تم نسخ أرقام الهاتف: 0151 417 4050 - 01027880569',
    },

    // ── Schedule Viewing Modal ────────────────────────────────────────────────
    scheduleModal: {
      tag:          'موعد حصري',
      title:        'جدولة معاينة خاصة',
      descPrefix:   'رتّب معاينة خاصة في الموقع لـ',
      descMid:      'في',
      namePlaceholder:   'اسمك الكامل',
      phonePlaceholder:  'رقم الهاتف / واتساب',
      timeMorning:  'الوقت المفضل: صباحاً (١٠:٠٠ ص – ١:٠٠ م)',
      timeAfternoon:'الوقت المفضل: بعد الظهر (١:٠٠ م – ٤:٠٠ م)',
      timeSunset:   'الوقت المفضل: مساءً (٤:٠٠ م – ٧:٠٠ م)',
      confirmBtn:   'تأكيد موعد المعاينة',
      alertPrefix:  'تم تأكيد طلب المعاينة لـ',
      alertSuffix:  '. سيتصل بك مستشارنا لتنسيق الوصول.',
    },

    // ── Inquiry Form ──────────────────────────────────────────────────────────
    inquiry: {
      successTitle: 'تم تسجيل الطلب بنجاح',
      successMsg1:  'شكراً،',
      successMsg2:  '. سيتواصل معك مستشارنا الأول لمشروع',
      successMsg3:  'قريباً على رقم',
      submitAnother:'تقديم استفسار آخر',
    },

    // ── Projects Dictionary (Requirement 6: joulz, New Giza, SODIC Beverly Hills, ZED West)
    projects: {
      'ZED West': 'زيد ويست',
      'SODIC Beverly Hills': 'سوديك بيفرلي هيلز',
      'Beverly Hills': 'بيفرلي هيلز',
      'New Giza': 'نيو جيزة',
      "Guezly's": 'جولز',
      "Guezly’s": 'جولز',
      'joulz': 'جولز',
      'Allegria': 'أليجريا',
      'Courtyard Beverly Hills': 'كورت يارد بيفرلي هيلز',
      'Westown Courtyard': 'ويستاون كورت يارد',
    },

    // ── Property Types ────────────────────────────────────────────────────────
    propertyTypes: {
      'Garden Residence': 'شقة حديقة',
      'Apartment': 'شقة',
      'Signature Residence': 'وحدة سيجنتشر',
      'Terrace Suite': 'تيراس سويت',
      'Executive Residence': 'وحدة إيجزيكيوتيف',
      'Twin House / Villa': 'توين هاوس / فيلا',
      'Twin house': 'توين هاوس',
      'Twin House': 'توين هاوس',
      'Villa': 'فيلا',
      'villa': 'فيلا',
      'garden': 'شقة حديقة',
      'suite': 'تيراس سويت',
      'executive': 'وحدة إيجزيكيوتيف',
      'signature': 'وحدة سيجنتشر',
      'duplex': 'دوبلكس',
      'penthouse': 'بنتهاوس',
    },

    // ── Finishing Status ──────────────────────────────────────────────────────
    finishing: {
      'Fully Finished': 'تشطيب كامل',
      'Ultra Super Lux': 'ألترا سوبر لوكس',
      'Core & Shell': 'نصف تشطيب (محارة وحلوق)',
      'Fully Finished with furniture and appliances': 'تشطيب كامل بالفرش والأجهزة',
    },

    // ── Badges ────────────────────────────────────────────────────────────────
    badges: {
      'ZED WEST': 'زيد ويست',
      'SODIC BEVERLY HILLS': 'سوديك بيفرلي هيلز',
      'BEVERLY HILLS': 'بيفرلي هيلز',
      'NEW GIZA': 'نيو جيزة',
      'JOULZ': 'جولز',
      "GUEZLY'S": 'جولز',
      "GUEZLY’S": 'جولز',
      'ALLEGRIA': 'أليجريا',
      'WESTOWN COURTYARD': 'ويستاون كورت يارد',
      'GROUND FLOOR': 'الطابق الأرضي',
      '1ST FLOOR': 'الدور الأول',
      '2ND FLOOR': 'الدور الثاني',
      '3RD FLOOR': 'الدور الثالث',
      '4TH FLOOR': 'الدور الرابع',
      '8TH FLOOR': 'الدور الثامن',
      '9TH FLOOR': 'الدور التاسع',
      '1TH FLOOR': 'الدور الأول',
      '2TH FLOOR': 'الدور الثاني',
      '3TH FLOOR': 'الدور الثالث',
      'HIGH FLOOR': 'طابق مرتفع',
      'MID FLOOR': 'طابق متوسط',
      'TOWER Y': 'برج Y',
      'TWIN HOUSE': 'توين هاوس',
      'VILLA': 'فيلا',
      'GARDEN DUPLEX': 'دوبلكس حديقة',
      'RESIDENCE': 'وحدة سكنية',
      'UNDERGROUND PARKING': 'موقف سيارات تحت الأرض',
      'INCLUDES NANNY ROOM': 'تشمل غرفة مربية',
      'OPEN PARK VISTA': 'إطلالة حديقة مفتوحة',
      '13M² OPEN TERRACE': 'تراس مفتوح ١٣ م²',
      'CENTRAL ACS INSTALLED': 'تكييف مركزي راكب',
      'PRIVATE ROOFTOP': 'روف خاص',
      'GOLF & HORIZON VIEW': 'إطلالة جولف وأفق مفتوح',
      'PRIVATE GARDEN': 'حديقة خاصة',
      'VERIFIED ASSET': 'عقار موثق',
      'FEATURED ASSET': 'عقار مميز',
      'EXCLUSIVE LISTING': 'عرض حصري',
    },

    // ── Spec Labels ───────────────────────────────────────────────────────────
    specLabels: {
      'M² (BLD)': 'م² (مباني)',
      'M² (BLT)': 'م² (مباني)',
      'M² (BLT + GARDEN)': 'م² (مباني + حديقة)',
      'M² (BLD + TERR)': 'م² (مباني + تراس)',
      'M² (DUPLEX)': 'م² (دوبلكس)',
      'M² (BLT + ROOF)': 'م² (مباني + روف)',
      'M² (BLT + Roof)': 'م² (مباني + روف)',
      'M²': 'م²',
      'BEDS': 'غرف نوم',
      'BEDROOM': 'غرفة نوم',
      'BEDROOMS': 'غرف نوم',
      'BATHS': 'حمامات',
      'BATHROOM': 'حمام',
      'BATHROOMS': 'حمامات',
    },

    // ── Specific Property Item Translations (IDs 1 to 20) ────────────────────
    propertyItems: {
      1: {
        title: 'شقة حديقة - الطابق الأرضي',
        project: 'زيد ويست',
        location: 'زيد ويست، الشيخ زايد',
        type: 'شقة حديقة',
        compoundBadge: 'زيد ويست',
        floorBadge: 'الطابق الأرضي',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'وحدة سكنية فاخرة تشطيب كامل مع تكييفات راكبة، خزائن مطبخ إيطالية مدمجة، وحديقة خاصة.',
        priceFormatted: '٦,٣٠٠,٠٠٠',
        specs: [
          { val: '57 + 30', label: 'م² (مباني + حديقة)' },
          { val: '1', label: 'غرفة نوم' },
          { val: '1', label: 'حمام' },
        ],
      },
      2: {
        title: 'شقة بإطلالة الياسمين',
        project: 'زيد ويست',
        location: 'زيد ويست، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'زيد ويست',
        floorBadge: 'الدور الأول',
        highlightBadge: 'تشمل غرفة مربية',
        featuredBadge: null,
        description: 'وحدة راقية بالدور الأول تطل على مساحات خضراء هادئة، مزودة بغرفة مربية ومنطقة معيشة مفتوحة.',
        priceFormatted: '١٠,٥٠٠,٠٠٠',
        specs: [
          { val: '135', label: 'م² (مباني)' },
          { val: '2 + غرفة مربية', label: 'غرف نوم' },
          { val: '2', label: 'حمامات' },
        ],
      },
      3: {
        title: 'وحدة سيجنتشر بإطلالة الحديقة',
        project: 'زيد ويست',
        location: 'سنترال بارك فيستا، الشيخ زايد',
        type: 'وحدة سيجنتشر',
        compoundBadge: 'زيد ويست',
        floorBadge: 'طابق مرتفع',
        highlightBadge: 'إطلالة حديقة مفتوحة',
        featuredBadge: null,
        description: 'ملاذ فاخر بطابق مرتفع مع إطلالات بانورامية على الحديقة المركزية، ٣ أجنحة رئيسية واستقبال بأسقف مزدوجة الارتفاع.',
        priceFormatted: '١٣,٩١٨,٠٠٠',
        specs: [
          { val: '181', label: 'م² (مباني)' },
          { val: '3 + غرفة مربية', label: 'غرف نوم' },
          { val: '3', label: 'حمامات' },
        ],
      },
      4: {
        title: 'وحدات متاحة للبيع في زيد ويست',
        project: 'زيد ويست',
        location: 'زيد ويست، الشيخ زايد',
        compoundBadge: 'زيد ويست',
        finishing: 'تشطيب كامل',
        description: 'شقة للبيع، ١٨١ م² (إطلالة بارك)، السعر (١٣ مليون)\n\nشقة للبيع، ١٢٩ م²، غرفتان، بمقدم (٤.٣ مليون)\n\nشقة للبيع، ١٠٥ م²، غرفتان، مع أثاث (٩ مليون)\n\nللبيع شقة ١٣٥ م²، غرفتان (١٠.٥ مليون)\n\nللبيع ستوديو ٦٣ م² أرضي (٧.٥ مليون)\n\nللبيع ستوديو أرضي، استلام فوري (٦,٣٠٠,٠٠٠)\n\nللبيع شقة ١٠٥ م² بإطلالة مميزة (٩.٢ مليون)\n\nللبيع لوفت غرفتان بمقدم (٦.٣٤٠ مليون)\n\nشقة للبيع، ١١١ م²، غرفتان (٨.١٠٠ مليون)\n\nشقة غرفتان في (G+20) (١١.٧٥٠ مليون)\n\nستوديو للبيع في (G+20) (٨ مليون بالتشطيب)',
        fullDescription: 'شقة للبيع، ١٨١ م² (إطلالة بارك)، السعر (١٣ مليون)\n\nشقة للبيع، ١٢٩ م²، غرفتان، بمقدم (٤.٣ مليون)\n\nشقة للبيع، ١٠٥ م²، غرفتان، مع أثاث (٩ مليون)\n\nللبيع شقة ١٣٥ م²، غرفتان (١٠.٥ مليون)\n\nللبيع ستوديو ٦٣ م² أرضي (٧.٥ مليون)\n\nللبيع ستوديو أرضي، استلام فوري (٦,٣٠٠,٠٠٠)\n\nللبيع شقة ١٠٥ م² بإطلالة مميزة (٩.٢ مليون)\n\nللبيع لوفت غرفتان بمقدم (٦.٣٤٠ مليون)\n\nشقة للبيع، ١١١ م²، غرفتان (٨.١٠٠ مليون)\n\nشقة غرفتان في (G+20) (١١.٧٥٠ مليون)\n\nستوديو للبيع في (G+20) (٨ مليون بالتشطيب)',
        specs: [],
      },
      5: {
        title: 'وحدات متاحة للبيع في أبراج زيد G+20',
        project: 'زيد ويست',
        location: 'زيد، الشيخ زايد',
        type: 'وحدة إيجزيكيوتيف',
        compoundBadge: 'زيد ويست',
        floorBadge: 'برج Y',
        highlightBadge: 'تكييف مركزي راكب',
        featuredBadge: null,
        description: 'جناح رئيسي بغرفة ملابس مصممة خصيصاً، غرفة نوم إضافية، غرفة مربية بحمام خاص، وتكييف مركزي VRF.',
        fullDescription: 'وحدة إيجزيكيوتيف في أبراج زيد G+20 توفر جناحاً رئيسياً فاخراً بغرفة ملابس مصممة، غرفة نوم مرافقة، غرفة مربية بحمام خاص، تكييف مركزي VRF عالي الكفاءة، وموقفين سيارات مغطيين تحت الأرض.',
        priceFormatted: '١١,٢٠٠,٠٠٠',
        specs: [
          { val: '132', label: 'م² (مباني)' },
          { val: '2 + غرفة مربية', label: 'غرف نوم' },
          { val: '2', label: 'حمامات' },
        ],
      },
      6: {
        title: 'توين فيلا مميزة في سوديك بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'بيفرلي هيلز، الشيخ زايد',
        type: 'توين هاوس / فيلا',
        compoundBadge: 'سوديك بيفرلي هيلز',
        floorBadge: 'توين هاوس',
        highlightBadge: 'روف خاص',
        featuredBadge: null,
        description: 'مساحة مباني واسعة ٢٨٠ م² مع حديقة خاصة، روف بانورامي للضيافة، وخصوصية تامة بموقع ناصية.',
        priceFormatted: '١٨,٥٠٠,٠٠٠',
        specs: [
          { val: '280', label: 'م² (مباني)' },
          { val: '4', label: 'غرف نوم' },
          { val: '4', label: 'حمامات' },
        ],
      },
      7: {
        title: 'وحدة هيلتوب هورايزون في نيو جيزة',
        project: 'نيو جيزة',
        location: 'ويستريدج، نيو جيزة',
        type: 'شقة',
        compoundBadge: 'نيو جيزة',
        floorBadge: 'الدور الثالث',
        highlightBadge: 'إطلالة جولف وأفق مفتوح',
        featuredBadge: null,
        description: 'وحدة راقية في نيو جيزة تطل على ملاعب الجولف العالمية مع تراس خاص ورخام إيطالي فاخر.',
        priceFormatted: '١٤,٨٠٠,٠٠٠',
        specs: [
          { val: '175', label: 'م² (مباني)' },
          { val: '3', label: 'غرف نوم' },
          { val: '3', label: 'حمامات' },
        ],
      },
      8: {
        title: 'شقق وتاونهاوس للبيع في جولز تشطيب كامل ونصف تشطيب',
        project: 'جولز',
        location: 'جولز، الشيخ زايد',
        type: 'شقة / تاونهاوس',
        compoundBadge: 'جولز',
        floorBadge: 'دوبلكس حديقة',
        highlightBadge: 'حديقة خاصة',
        featuredBadge: 'عرض حصري',
        description: 'شقق وتاونهاوس فاخرة للبيع في مجمع جولز، تشطيب كامل ونصف تشطيب، بحديقة خاصة منسقة ومدخل خاص وأسقف مرتفعة.',
        priceFormatted: '١٦,٢٠٠,٠٠٠',
        specs: [
          { val: '215', label: 'م² (دوبلكس)' },
          { val: '3', label: 'غرف نوم' },
          { val: '3', label: 'حمامات' },
        ],
      },
      9: {
        title: 'شقة مفروشة بالكامل',
        project: 'زيد ويست',
        location: 'زيد ويست، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'زيد ويست',
        floorBadge: 'الدور الرابع',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة فاخرة بالدور الرابع مفروشة بالكامل مع أجهزة وتكييفات راكبة وموقف سيارات تحت الأرض.',
        priceFormatted: '٩,٠٠٠,٠٠٠',
        specs: [
          { val: '105', label: 'م² (مباني)' },
          { val: '2', label: 'غرفتان' },
          { val: '2', label: 'حمامان' },
        ],
      },
      10: {
        title: 'شقة بإطلالة مفتوحة',
        project: 'زيد ويست',
        location: 'زيد ويست، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'زيد ويست',
        floorBadge: 'الدور الثامن',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة بإطلالة بانورامية مفتوحة وتراس ١٣ م² مع تكييفات راكبة وموقف سيارات تحت الأرض.',
        priceFormatted: 'مقدم: ٤,٣٠٠,٠٠٠ | المتبقي: ٤,٧٣٨,٠٠٠ | صيانة: ٣٠٤,٠٠٠ ج.م',
        specs: [
          { val: '129', label: 'م² (مباني)' },
          { val: '2', label: 'غرفتان' },
          { val: '2', label: 'حمامان' },
        ],
      },
      11: {
        title: 'شقة فاخرة في برج Y',
        project: 'زيد ويست',
        location: 'برج Y، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'زيد ويست',
        floorBadge: 'الدور التاسع',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة فاخرة بالدور التاسع في برج Y مع تشطيبات راقية وتكييفات وخزائن مطبخ مدمجة.',
        priceFormatted: '١١,٧٥٠,٠٠٠',
        specs: [
          { val: '132', label: 'م² (مباني)' },
          { val: '2', label: 'غرفتان' },
          { val: '2', label: 'حمامان' },
        ],
      },
      12: {
        title: 'توين هاوس في أليجريا، بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'أليجريا، بيفرلي هيلز، الشيخ زايد',
        type: 'توين هاوس',
        compoundBadge: 'أليجريا',
        floorBadge: 'توين هاوس',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'توين هاوس فاخر تشطيب كامل في أليجريا بيفرلي هيلز مع حديقة خاصة وتكييفات راكبة.',
        priceFormatted: '٣٥,٠٠٠,٠٠٠',
        specs: [
          { val: '261', label: 'م² (مباني + حديقة)' },
          { val: '3', label: '٣ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      13: {
        title: 'فيلا مستقلة في بيفرلي هيلز – المرحلة الأولى',
        project: 'سوديك بيفرلي هيلز',
        location: 'بيفرلي هيلز، الشيخ زايد',
        type: 'فيلا',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'فيلا',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'فيلا مستقلة فسيحة ٥٠٠ م² مع حديقة خاصة كبيرة، روف ترفيهي بانورامي وخصوصية موقع ناصية.',
        priceFormatted: '٤٥,٠٠٠,٠٠٠',
        specs: [
          { val: '500', label: 'م² (مباني + حديقة)' },
          { val: '5', label: '٥ غرف نوم' },
          { val: '4', label: '٤ حمامات' },
        ],
      },
      14: {
        title: 'شقة في كورت يارد بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'كورت يارد، بيفرلي هيلز، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'الدور الأول',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة مميزة بمساحة ٢٩٧ م² في كورت يارد بيفرلي هيلز نصف تشطيب بموقع متميز.',
        priceFormatted: '١٦,٠٠٠,٠٠٠',
        specs: [
          { val: '297', label: 'م² (مباني)' },
          { val: '4', label: '٤ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      15: {
        title: 'شقة في بيفرلي هيلز – المرحلة الثانية',
        project: 'سوديك بيفرلي هيلز',
        location: 'بيفرلي هيلز، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'الدور الأول',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة راقية بمساحة ٢٤١ م² في بيفرلي هيلز المرحلة الثانية بتشطيب كامل وإطلالة مميزة.',
        priceFormatted: '١١,٥٠٠,٠٠٠',
        specs: [
          { val: '241', label: 'م² (مباني)' },
          { val: '3', label: '٣ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      16: {
        title: 'بنتهاوس في كازا بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'كازا، بيفرلي هيلز، الشيخ زايد',
        type: 'بنتهاوس',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'بنتهاوس',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'بنتهاوس فاخر بمساحة ٢٩٩ م² في كازا بيفرلي هيلز مع روف واسع وإطلالة مفتوحة.',
        priceFormatted: '١٦,٨٠٠,٠٠٠',
        specs: [
          { val: '299', label: 'م² (مباني + روف)' },
          { val: '3', label: '٣ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      17: {
        title: 'دوبلكس أرضي بحديقة في ويستاون سوديك، بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'ويستاون، بيفرلي هيلز، الشيخ زايد',
        type: 'دوبلكس بحديقة',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'الطابق الأرضي',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'دوبلكس أرضي بمساحة ٢٤٠ م² مع حديقة خاصة ٩٠ م² في ويستاون سوديك بيفرلي هيلز.',
        priceFormatted: '١٧,٥٠٠,٠٠٠',
        specs: [
          { val: '240 + 90', label: 'م² (مباني + حديقة)' },
          { val: '4', label: '٤ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      18: {
        title: 'شقة أرضي في كورت يارد بيفرلي هيلز',
        project: 'سوديك بيفرلي هيلز',
        location: 'كورت يارد، بيفرلي هيلز، الشيخ زايد',
        type: 'شقة أرضي',
        compoundBadge: 'بيفرلي هيلز',
        floorBadge: 'الطابق الأرضي',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقة أرضي فاخرة بمساحة ٢٥٦ م² في كورت يارد بيفرلي هيلز بتشطيب كامل.',
        priceFormatted: '٢٢,٠٠٠,٠٠٠',
        specs: [
          { val: '256', label: 'م²' },
          { val: '4', label: '٤ غرف نوم' },
          { val: '3', label: '٣ حمامات' },
        ],
      },
      19: {
        title: 'شقق للبيع في ويستاون وكورت يارد',
        project: 'سوديك بيفرلي هيلز',
        location: 'ويستاون كورت يارد، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'ويستاون كورت يارد',
        floorBadge: 'الطابق الأرضي',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقق راقية للبيع في ويستاون وكورت يارد بمساحات مختلفة وتشطيبات متميزة وحديقة خاصة.',
        priceFormatted: '١٨,٣٠٠,٠٠٠',
        specs: [
          { val: '201 + 86', label: 'م² (مباني + حديقة)' },
          { val: '3', label: 'غرف نوم' },
          { val: '2', label: 'حمامان' },
        ],
      },
      20: {
        title: 'شقق متاحة للبيع في كازا بيفرلي هيلز، المرحلة الأولى والثانية',
        project: 'سوديك بيفرلي هيلز',
        location: 'بيفرلي هيلز، الشيخ زايد',
        type: 'شقة',
        compoundBadge: 'بيفرلي هيلز',
        highlightBadge: 'موقف سيارات تحت الأرض',
        featuredBadge: null,
        description: 'شقق متنوعة للبيع في كازا بيفرلي هيلز، المرحلة الأولى والثانية، بتشطيب كامل ومساحات مختلفة تبدأ من ١٢٠ م² مع روف خاص ٣٣ م².',
        priceFormatted: '٩,٤٥٠,٠٠٠',
        specs: [
          { val: '120 + 33', label: 'م² (مباني + روف)' },
          { val: '2', label: 'غرفتان' },
          { val: '2', label: 'حمامان' },
        ],
      },
    },
  },
}

// ── Property Data Localization Helper ─────────────────────────────────────────
// Normalizes and translates all property fields according to active language (en/ar)
// Preserves original IDs, raw values, image URLs, and specs for business logic.
export function translatePropertyData(prop, lang = 'en') {
  if (!prop) return null

  // ── ENGLISH MODE ──
  if (lang !== 'ar') {
    // Project display: ensure consistent four projects (joulz, New Giza, SODIC Beverly Hills, ZED West)
    let projDisplay = prop.project || 'ZED West'
    const projLower = String(projDisplay).toLowerCase()
    if (projLower.includes('joulz') || projLower.includes('guezly')) {
      projDisplay = "joulz"
    } else if (projLower.includes('giza')) {
      projDisplay = 'New Giza'
    } else if (projLower.includes('beverly') || projLower.includes('sodic')) {
      projDisplay = prop.project === 'Allegria' ? 'Allegria' : (prop.project === 'Courtyard Beverly Hills' ? 'Courtyard Beverly Hills' : (prop.project === 'Beverly Hills' ? 'Beverly Hills' : 'SODIC Beverly Hills'))
    } else if (projLower.includes('zed')) {
      projDisplay = 'ZED West'
    }

    const compoundBadgeDisplay = prop.compoundBadge
      ? (String(prop.compoundBadge).toLowerCase().includes('joulz') || String(prop.compoundBadge).toLowerCase().includes('guezly') ? "JOULZ" : prop.compoundBadge)
      : projDisplay.toUpperCase()

    // Ensure specs have fallback values if not populated
    let specs = Array.isArray(prop.specs) && prop.specs.length > 0 ? prop.specs : []
    if (specs.length === 0) {
      if (prop.area) specs.push({ val: String(prop.area).replace(/\s*m²?/i, ''), label: 'M² (BLD)' })
      if (prop.bedrooms !== undefined) specs.push({ val: String(prop.bedrooms), label: 'BEDS' })
      if (prop.bathrooms !== undefined) specs.push({ val: String(prop.bathrooms), label: 'BATHS' })
    }

    return {
      ...prop,
      title: prop.title || 'Exclusive Residence',
      project: projDisplay,
      location: prop.location || `${projDisplay}, Sheikh Zayed`,
      type: prop.type || 'Apartment',
      description: prop.description || `Luxury residence situated in prime ${projDisplay}.`,
      compoundBadge: compoundBadgeDisplay,
      floorBadge: prop.floorBadge || prop.floor || 'RESIDENCE',
      highlightBadge: prop.highlightBadge || null,
      featuredBadge: prop.featuredBadge || null,
      finishing: prop.finishing || 'Fully Finished',
      specs,
      priceFormatted: prop.priceFormatted || prop.price || '',
      currency: 'EGP',
      valuationLabel: prop.listingType === 'rent' ? 'RENTAL VALUATION' : 'PURCHASE VALUATION',
    }
  }

  // ── ARABIC MODE ──
  const arDict = translations.ar
  const propItem = arDict.propertyItems?.[prop.id]

  // 1. Project translation (strictly consistent: joulz -> جولز, New Giza -> نيو جيزة, SODIC Beverly Hills -> سوديك بيفرلي هيلز, ZED West -> زيد ويست)
  let projectAr = propItem?.project
  if (!projectAr) {
    const projLower = String(prop.project || '').toLowerCase()
    if (projLower.includes('joulz') || projLower.includes('guezly')) {
      projectAr = 'جولز'
    } else if (projLower.includes('giza')) {
      projectAr = 'نيو جيزة'
    } else if (projLower.includes('beverly') || projLower.includes('sodic')) {
      projectAr = prop.project === 'Allegria' ? 'أليجريا' : (prop.project === 'Courtyard Beverly Hills' ? 'كورت يارد بيفرلي هيلز' : (prop.project === 'Westown Courtyard' ? 'ويستاون كورت يارد' : 'سوديك بيفرلي هيلز'))
    } else if (projLower.includes('zed')) {
      projectAr = 'زيد ويست'
    } else {
      projectAr = arDict.projects[prop.project] || prop.project
    }
  }

  // 2. Badges translation
  let compoundBadgeAr = propItem?.compoundBadge
  if (!compoundBadgeAr) {
    const badgeKey = String(prop.compoundBadge || prop.project || '').toUpperCase().trim()
    compoundBadgeAr = arDict.badges[badgeKey] || arDict.projects[prop.compoundBadge] || projectAr
  }

  let floorBadgeAr = propItem?.floorBadge
  if (!floorBadgeAr) {
    const floorKey = String(prop.floorBadge || prop.floor || '').toUpperCase().trim()
    floorBadgeAr = arDict.badges[floorKey] || prop.floorBadge || prop.floor
  }

  let highlightBadgeAr = propItem?.highlightBadge
  if (!highlightBadgeAr && prop.highlightBadge) {
    const hlKey = String(prop.highlightBadge).toUpperCase().trim()
    highlightBadgeAr = arDict.badges[hlKey] || prop.highlightBadge
  }

  let featuredBadgeAr = propItem?.featuredBadge
  if (!featuredBadgeAr && prop.featuredBadge) {
    const featKey = String(prop.featuredBadge).toUpperCase().trim()
    featuredBadgeAr = arDict.badges[featKey] || prop.featuredBadge
  }

  // 3. Location translation
  let locationAr = propItem?.location
  if (!locationAr && prop.location) {
    locationAr = prop.location
      .replace(/ZED West/g, 'زيد ويست')
      .replace(/SODIC Beverly Hills/g, 'سوديك بيفرلي هيلز')
      .replace(/Beverly Hills/g, 'بيفرلي هيلز')
      .replace(/New Giza/g, 'نيو جيزة')
      .replace(/Westridge/g, 'ويستريدج')
      .replace(/Central Park Vista/g, 'سنترال بارك فيستا')
      .replace(/Tower Y/g, 'برج Y')
      .replace(/Courtyard/g, 'كورت يارد')
      .replace(/Westown/g, 'ويستاون')
      .replace(/Allegria/g, 'أليجريا')
      .replace(/Casa/g, 'كازا')
      .replace(/Caza/g, 'كازا')
      .replace(/Phase 1|Phase One/gi, 'المرحلة الأولى')
      .replace(/Phase 2|Phase Two/gi, 'المرحلة الثانية')
      .replace(/Sheikh Zayed/g, 'الشيخ زايد')
      .replace(/joulz|Guezly'?s|Guezly’s/gi, 'جولز')
  }

  // 4. Specs translation
  let specsAr = propItem?.specs
  if (!specsAr) {
    const sourceSpecs = Array.isArray(prop.specs) && prop.specs.length > 0
      ? prop.specs
      : [
          { val: prop.area ? String(prop.area).replace(/\s*m²?/i, '') : '—', label: 'M² (BLD)' },
          { val: prop.bedrooms !== undefined ? String(prop.bedrooms) : '—', label: 'BEDS' },
          { val: prop.bathrooms !== undefined ? String(prop.bathrooms) : '—', label: 'BATHS' },
        ]

    specsAr = sourceSpecs.map(s => {
      const labelKey = String(s.label || '').toUpperCase().trim()
      const translatedLabel = arDict.specLabels[labelKey] || arDict.specLabels[s.label] || s.label
      let translatedVal = String(s.val || '')
      if (translatedVal.includes('Maid') || translatedVal.includes('maid')) {
        translatedVal = translatedVal.replace(/\+\s*Maid/gi, '+ غرفة مربية')
      }
      return { val: translatedVal, label: translatedLabel }
    })
  }

  // 5. Price breakdown translation
  let priceFormattedAr = propItem?.priceFormatted
  if (!priceFormattedAr) {
    let pStr = String(prop.priceFormatted || prop.price || '')
    if (pStr.includes('Down payment')) {
      pStr = pStr
        .replace(/Down payment:/gi, 'مقدم:')
        .replace(/Remaining amount:/gi, 'المتبقي:')
        .replace(/Maintenance fees:/gi, 'صيانة:')
      if (!pStr.includes('ج.م')) pStr += ' ج.م'
      priceFormattedAr = pStr
    } else {
      priceFormattedAr = pStr.replace(/EGP/gi, 'ج.م').trim()
    }
  }

  // 6. Finishing and Property Type
  const typeAr = propItem?.type || arDict.propertyTypes[prop.type] || prop.type
  const finishingAr = propItem?.finishing || arDict.finishing[prop.finishing] || prop.finishing

  return {
    ...prop,
    title: propItem?.title || prop.titleAr || prop.title,
    project: projectAr,
    location: locationAr,
    type: typeAr,
    description: propItem?.description || prop.descriptionAr || prop.description,
    fullDescription: propItem?.fullDescription || prop.fullDescriptionAr || propItem?.description || prop.descriptionAr || prop.fullDescription || prop.description,
    compoundBadge: compoundBadgeAr,
    floorBadge: floorBadgeAr,
    highlightBadge: highlightBadgeAr,
    featuredBadge: featuredBadgeAr,
    finishing: finishingAr,
    specs: specsAr,
    priceFormatted: priceFormattedAr,
    currency: 'ج.م',
    valuationLabel: prop.listingType === 'rent' ? arDict.card.rentalValuation : arDict.card.purchaseValuation,
  }
}

export default translations
