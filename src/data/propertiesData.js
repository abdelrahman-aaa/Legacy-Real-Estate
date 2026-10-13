// ── Centralized Property Data Store ──────────────────────────────────────────
// Projects strictly limited to the four authorized projects:
// 1. joulz
// 2. New Giza
// 3. SODIC Beverly Hills
// 4. ZED West

export const PROJECTS = [
  "joulz",
  "New Giza",
  "SODIC Beverly Hills",
  "ZED West",
];

export const PLACEHOLDER_IMAGE = "/images/placeholder-property.svg";

// Helper to normalize any incoming property object to ensure scalable schema
export function normalizeProperty(prop) {
  if (!prop) return null;

  // Ensure images array with at least fallback
  const rawImages =
    Array.isArray(prop.images) && prop.images.length > 0
      ? prop.images
      : prop.image
        ? [prop.image]
        : [PLACEHOLDER_IMAGE];

  // Normalize project name to one of the 4 exact projects if close match
  let normalizedProject = prop.project || "ZED West";
  const projLower = (prop.project || prop.compoundBadge || "").toLowerCase();
  if (projLower.includes("joulz")) {
    normalizedProject = "joulz";
  } else if (projLower.includes("giza")) {
    normalizedProject = "New Giza";
  } else if (projLower.includes("beverly") || projLower.includes("sodic")) {
    normalizedProject = "SODIC Beverly Hills";
  } else if (projLower.includes("zed")) {
    normalizedProject = "ZED West";
  } else if (projLower.includes("zayed")) {
    // If legacy Sheikh Zayed, map to SODIC Beverly Hills unless specified
    normalizedProject = "SODIC Beverly Hills";
  }

  // Parse numeric price if not provided
  let numericPrice = prop.priceNumber;
  if (!numericPrice && prop.price) {
    const digitsOnly = String(prop.price).replace(/[^0-9]/g, "");
    numericPrice = digitsOnly ? parseInt(digitsOnly, 10) : 0;
  }

  // Format price string if not provided
  const priceFormatted =
    prop.priceFormatted ||
    (numericPrice
      ? numericPrice.toLocaleString("en-US")
      : String(prop.price || ""));

  // Auto-generate specs if not provided
  let specs = prop.specs;
  if (!specs || !Array.isArray(specs) || specs.length === 0) {
    specs = [];
    if (prop.area) {
      specs.push({
        val: String(prop.area).replace(/\s*m²?/i, ""),
        label: "M² (BLD)",
      });
    }
    if (prop.bedrooms !== undefined) {
      specs.push({ val: String(prop.bedrooms), label: "BEDS" });
    }
    if (prop.bathrooms !== undefined) {
      specs.push({ val: String(prop.bathrooms), label: "BATHS" });
    }
  }

  return {
    ...prop,
    id: prop.id || `prop-${Math.random().toString(36).substr(2, 9)}`,
    title: prop.title || "Exclusive Residence",
    project: normalizedProject,
    location: prop.location || `${normalizedProject}, Sheikh Zayed`,
    type:
      prop.type ||
      (prop.propertyType
        ? prop.propertyType.charAt(0).toUpperCase() + prop.propertyType.slice(1)
        : "Apartment"),
    price: prop.price || `${priceFormatted} EGP`,
    priceNumber: numericPrice,
    priceFormatted,
    area: prop.area || (specs[0]?.val ? `${specs[0].val} m²` : ""),
    bedrooms: prop.bedrooms !== undefined ? prop.bedrooms : specs[1]?.val || 2,
    bathrooms:
      prop.bathrooms !== undefined ? prop.bathrooms : specs[2]?.val || 2,
    floor: prop.floor || prop.floorBadge || "Mid Floor",
    finishing: prop.finishing || "Fully Finished",
    delivery: prop.delivery || "Ready for Delivery",
    images: rawImages,
    description:
      prop.description ||
      prop.fullDescription ||
      `Luxury residence situated in prime ${normalizedProject}.`,
    fullDescription:
      prop.fullDescription ||
      prop.description ||
      `Luxury residence situated in prime ${normalizedProject}, offering verified premium finishes and serene community living.`,
    features:
      Array.isArray(prop.features) && prop.features.length > 0
        ? prop.features
        : [
            "Fully Finished",
            "Prime Location",
            "24/7 Security",
            "Covered Parking",
          ],
    compoundBadge: prop.compoundBadge || normalizedProject.toUpperCase(),
    floorBadge:
      prop.floorBadge || (prop.floor ? prop.floor.toUpperCase() : "RESIDENCE"),
    highlightBadge: prop.highlightBadge || "VERIFIED ASSET",
    featuredBadge: prop.featuredBadge || null,
    listingType: prop.listingType || "sale",
    propertyType: prop.propertyType || "apartment",
    specs,
    isDarkButton: Boolean(prop.isDarkButton),
  };
}

export const initialProperties = [
  {
    id: 1,
    title: "Ground Floor Garden Residence",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    type: "Garden Residence",
    price: "6,300,000 EGP",
    priceNumber: 6300000,
    priceFormatted: "6,300,000",
    area: "57 + 30 m²",
    bedrooms: 1,
    bathrooms: 1,
    floor: "Ground Floor",
    finishing: "Fully Finished",
    delivery: "2026",
    garden: "30 m² Landscaped Garden",
    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
    ],
    description:
      "Fully finished luxury residence with installed AC units, bespoke integrated kitchen cabinets, and private garden.",
    fullDescription:
      "Fully finished luxury residence with installed VRF AC units, bespoke integrated kitchen cabinets, private 30 m² landscaped garden terrace, and premium imported porcelain finishing throughout. Walking distance from Central Park and boutique retail promenade.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "57 + 30", label: "M² (BLT + GARDEN)" },
      { val: "1", label: "BEDROOM" },
      { val: "1", label: "BATHROOM" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "GROUND FLOOR",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "garden",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 2,
    title: "Jasmine View Apartment",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    type: "Apartment",
    price: "10,500,000 EGP",
    priceNumber: 10500000,
    priceFormatted: "10,500,000",
    area: "135 m²",
    bedrooms: 2,
    bathrooms: 2,
    floor: "1st Floor",
    finishing: "Fully Finished",
    delivery: "2027",
    parking: "1 Underground Parking Slot",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg",
    ],
    description:
      "Refined first-floor residence overlooking quiet garden greens, accompanied by private nanny quarters and open living zone.",
    fullDescription:
      "Refined first-floor residence overlooking quiet garden greens in ZED West. Accompanied by private nanny quarters, open-concept living zone, high acoustic insulation glazing, and smart intercom system. Exceptional layout maximizing ambient natural lighting.",
    features: [
      "Fully Finished",
      "Includes Nanny Quarters",
      "Garden View Orientation",
      "Acoustic Soundproofing Glass",
      "Smart Intercom System",
      "Underground Parking Space",
    ],
    specs: [
      { val: "135", label: "M² (BLD)" },
      { val: "2 + Maid", label: "BEDS" },
      { val: "2", label: "BATHS" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "1ST FLOOR",
    highlightBadge: "INCLUDES NANNY ROOM",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 4,
    title: " Units available for sale in Zed West",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    finishing: "Fully Finished",
    delivery: "2026",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
    ],
    description: `
    Apartment for sale, 181 square meters (View Park), price (13 million)
Apartment for sale, 129 square meters, two rooms, with a down payment (4.3 million)
Apartment for sale, 105 square meters, two rooms, with furniture (9 million)
For sale, a 135-square-meter, two-room apartment for (10.5 million)
For sale, a 63-meter ground floor studio (7.5 million)
For sale, a ground floor studio, immediate receipt, for (6,300)
For sale, a 105-room apartment with a generous view (9.2 million)
For sale, two-room loft for sale with a down payment (6.340 million)
Apartment for sale, 111 square meters, two rooms, B (8.100 million)
Two-room apartment for sale in (G+20) (11.750 million)
Studio for sale in (G+20).  (8 million with brushes) 
    `,
    fullDescription: `
"Apartment for sale, 181 square meters (View Park), price (13 million)"
"Apartment for sale, 129 square meters, two rooms, with a down payment (4.3 million)"
"Apartment for sale, 105 square meters, two rooms, with furniture (9 million)"
"For sale, a 135-square-meter, two-room apartment for (10.5 million)"
"For sale, a 63-meter ground floor studio (7.5 million)"
"For sale, a ground floor studio, immediate receipt, for (6,300)"
"For sale, a 105-room apartment with a generous view (9.2 million)"
"For sale, two-room loft for sale with a down payment (6.340 million)"
"Apartment for sale, 111 square meters, two rooms, B (8.100 million)"
"Two-room apartment for sale in (G+20) (11.750 million)"
"Studio for sale in (G+20).  (8 million with brushes)" 
   `,
    compoundBadge: "ZED WEST",
  },
  {
    id: 5,
    title: "Units available for sale in Zed G+20 Towers",
    project: "ZED West",
    location: "Zed, Sheikh Zayed",
    type: "Executive Residence",
    price: "11,200,000 EGP",
    priceNumber: 11200000,
    priceFormatted: "11,200,000",
    area: "132 m²",
    bedrooms: 2,
    bathrooms: 2,
    floor: "Zed G+20",
    finishing: "Fully Finished",
    delivery: "2026",
    parking: "2 Covered Underground Slots",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg",
    ],
    description:
      "Master suite with bespoke dressing room, companion bedroom, en-suite maid quarters, and VRF cooling.",
    fullDescription:
      "Tower Y executive residence offering an opulent master suite with bespoke dressing room, companion bedroom, en-suite maid quarters, state-of-the-art VRF central cooling, and two covered underground parking slots.",
    features: [
      "Master Suite Dressing Room",
      "VRF Central Cooling Installed",
      "En-suite Maid Quarters",
      "2 Covered Underground Parking Slots",
      "Private Residents Lobby & Lounge",
      "24/7 Concierge & Security Desk",
    ],
    specs: [
      { val: "132", label: "M² (BLD)" },
      { val: "2 + Maid", label: "BEDROOMS" },
      { val: "2", label: "BATHROOMS" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "TOWER Y",
    highlightBadge: "CENTRAL ACS INSTALLED",
    featuredBadge: null,
    propertyType: "executive",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 6,
    title: "SODIC Beverly Hills Signature Twin Villa",
    project: "SODIC Beverly Hills",
    location: "Beverly Hills, Sheikh Zayed",
    type: "Twin House / Villa",
    price: "18,500,000 EGP",
    priceNumber: 18500000,
    priceFormatted: "18,500,000",
    area: "280 m²",
    bedrooms: 4,
    bathrooms: 4,
    floor: "G + 1st + Private Rooftop",
    finishing: "Fully Finished",
    delivery: "Immediate Delivery",
    garden: "120 m² Private Landscaped Garden",
    terrace: "45 m² Panoramic Roof Terrace",
    parking: "Private 2-Car Garage & Driveway",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM.jpeg",
    ],
    description:
      "Generous 280 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 280 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "120 m² Private Landscaped Garden",
      "45 m² Rooftop Entertaining Deck",
      "Private 2-Car Garage & Driveway",
      "Corner Plot Privacy",
      "Immediate Delivery & Move-In",
      "Full Access to Beverly Hills Club",
    ],
    specs: [
      { val: "280", label: "M² (BLD)" },
      { val: "4", label: "BEDROOMS" },
      { val: "4", label: "BATHROOMS" },
    ],
    compoundBadge: "SODIC BEVERLY HILLS",
    floorBadge: "TWIN HOUSE",
    highlightBadge: "PRIVATE ROOFTOP",
    featuredBadge: null,
    propertyType: "villa",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 7,
    title: "Units for sale and rent are available in New Giza",
    project: "New Giza",
    location: "Westridge, New Giza",
    type: "Apartment",
    price: "14,800,000 EGP",
    priceNumber: 14800000,
    priceFormatted: "14,800,000",
    area: "175 m²",
    bedrooms: 3,
    bathrooms: 3,
    floor: "3rd Floor",
    finishing: "Fully Finished",
    delivery: "2026",
    terrace: "22 m² Golf & Horizon View Terrace",
    parking: "2 Underground Parking Slots",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.17.44 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.17.45 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.17.45 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.17.46 PM.jpeg",
    ],
    description:
      "Elevated New Giza residence overlooking championship golf fairways with private terrace and premium Italian marble.",
    fullDescription:
      "Positioned on the highest plateau in New Giza with expansive views overlooking championship golf courses and horizon vistas. Features 175 m² of sophisticated living, 3 en-suite bedrooms, open dining and salon, custom Italian kitchen, and 2 designated underground parking spaces.",
    features: [
      "Championship Golf Course Views",
      "22 m² Panoramic Vista Terrace",
      "Italian Marble Reception Flooring",
      "2 Underground Parking Slots",
      "Clubhouse & Sports Club Access",
      "Central High-Efficiency VRV System",
    ],
    specs: [
      { val: "175", label: "M² (BLD)" },
      { val: "3", label: "BEDROOMS" },
      { val: "3", label: "BATHROOMS" },
    ],
    compoundBadge: "NEW GIZA",
    floorBadge: "3RD FLOOR",
    highlightBadge: "GOLF & HORIZON VIEW",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 8,
    title:
      "Apartment and townhouse available for sale in Jules, finished and semi-finished",
    project: "joulz",
    location: "joulz, Sheikh Zayed",
    type: "Garden Residence",
    price: "16,200,000 EGP",
    priceNumber: 16200000,
    priceFormatted: "16,200,000",
    area: "215 m²",
    bedrooms: 3,
    bathrooms: 3,
    floor: "Ground & 1st Floor",
    delivery: "Ready to Move",
    garden: "65 m² Private Landscaped Garden",
    parking: "Private Gated Driveway",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.59 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.11.02 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.11.02 PM.jpeg",
    ],
    description:
      "Spacious two-level garden duplex in joulz with private landscaped entrance, soaring ceilings, and tranquil atmosphere.",
    fullDescription:
      "A boutique luxury duplex residence within joulz Sheikh Zayed. Spanning 215 m² across ground and first level, featuring direct private access to a 65 m² lush manicured garden, soaring 3.4m ceiling heights, floor-to-ceiling glass doors, and bespoke acoustic isolation.",
    features: [
      "65 m² Private Landscaped Garden",
      "Two-Level Duplex Layout",
      "Soaring 3.4m Ceiling Heights",
      "Private Gated Driveway",
      "Ultra Super Lux Finishes",
      "Ready for Immediate Move-in",
    ],
    specs: [
      { val: "215", label: "M² (DUPLEX)" },
      { val: "3", label: "BEDROOMS" },
      { val: "3", label: "BATHROOMS" },
    ],
    compoundBadge: "joulz",
    floorBadge: "GARDEN DUPLEX",
    highlightBadge: "PRIVATE GARDEN",
    featuredBadge: "EXCLUSIVE LISTING",
    propertyType: "garden",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 9,
    title: "Fully furnished apartment",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    type: "Apartment",
    price: "9,000,000 EGP",
    priceNumber: 9000000,
    priceFormatted: "9,000,000",
    area: "105 m²",
    bedrooms: 2,
    bathrooms: 2,
    floor: "4th floor ",
    finishing: "Fully Finished with furniture and appliances",
    delivery: "Ready to move",
    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
    ],
    description:
      "Fully finished luxury residence with installed AC units, bespoke integrated kitchen cabinets, and private garden.",
    fullDescription:
      "Fully finished luxury residence with installed VRF AC units, bespoke integrated kitchen cabinets, private 30 m² landscaped garden terrace, and premium imported porcelain finishing throughout. Walking distance from Central Park and boutique retail promenade.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "105", label: "M² (BLT)" },
      { val: "2", label: "BEDROOM" },
      { val: "2", label: "BATHROOM" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "4th FLOOR",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 10,
    title: "Apartment with an open view",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    type: "Apartment",
    price:
      "Down payment: 4,300,000 | Remaining amount: 4,738,000 | Maintenance fees: 304,000",
    priceNumber: 9000000,
    priceFormatted:
      "Down payment: 4,300,000 | Remaining amount: 4,738,000 | Maintenance fees: 304,000",
    area: "(129 m² + 13 m² terrace)",
    bedrooms: 2,
    bathrooms: 2,
    floor: "8th Floor",
    finishing: "Fully Finished",
    delivery: "2027",
    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
    ],
    description:
      "Fully finished luxury residence with installed AC units, bespoke integrated kitchen cabinets, and private garden.",
    fullDescription:
      "Fully finished luxury residence with installed VRF AC units, bespoke integrated kitchen cabinets, private 30 m² landscaped garden terrace, and premium imported porcelain finishing throughout. Walking distance from Central Park and boutique retail promenade.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "129", label: "M² (BLT)" },
      { val: "2", label: "BEDROOM" },
      { val: "2", label: "BATHROOM" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "8th FLOOR",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "garden",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 11,
    title: "Luxury apartment in Tower Y",
    project: "ZED West",
    location: "ZED West, Sheikh Zayed",
    type: "Apartment",
    price: "11,750,000 EGP",
    priceNumber: 11750000,
    priceFormatted: "11,750,000",
    area: "132 m²",
    bedrooms: 2,
    bathrooms: 2,
    floor: "9th Floor",
    finishing: "Fully Finished",
    delivery: "2026",

    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.27 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.10.30 PM.jpeg",
    ],
    description:
      "Fully finished luxury residence with installed AC units, bespoke integrated kitchen cabinets, and private garden.",
    fullDescription:
      "Fully finished luxury residence with installed VRF AC units, bespoke integrated kitchen cabinets, private 30 m² landscaped garden terrace, and premium imported porcelain finishing throughout. Walking distance from Central Park and boutique retail promenade.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "132", label: "M² (BLT + GARDEN)" },
      { val: "2", label: "BEDROOM" },
      { val: "2", label: "BATHROOM" },
    ],
    compoundBadge: "ZED WEST",
    floorBadge: "9th FLOOR",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },

  {
    id: 13,
    title: "Detached Villa in Beverly Hills – Phase 1",
    project: "Beverly Hills",
    location: "Beverly Hills, Sheikh Zayed",
    type: "Villa",
    price: "45,000,000 EGP",
    priceNumber: 13700000,
    priceFormatted: "45,000,000",
    area: "500 m²",
    bedrooms: 5,
    bathrooms: 4,
    floor: "Villa",
    finishing: "Fully Finished",
    delivery: "2026",

    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM.jpeg",
    ],
    description:
      "Generous 500 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 500 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "500", label: "M² (BLT + GARDEN)" },
      { val: "5", label: "BEDROOM" },
      { val: "4", label: "BATHROOM" },
    ],
    compoundBadge: "Beverly Hills",
    floorBadge: "villa",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "Villa",
    listingType: "sale",
    isDarkButton: false,
  },

  {
    id: 16,
    title: "Penthouse in Casa Beverly Hills, Sheikh Zayed",
    project: "Beverly Hills",
    location: "Beverly Hills, Sheikh Zayed",
    type: "Apartment",
    price: "16,800,000 EGP",
    priceNumber: 16800000,
    priceFormatted: "16,800,000",
    area: "299 m²",
    bedrooms: 3,
    bathrooms: 3,
    finishing: "Fully Finished",
    delivery: "2026",

    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM (1).jpeg",
    ],
    description:
      "Generous 299 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 299 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "30 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "299", label: "M² (BLT + GARDEN)" },
      { val: "3", label: "BEDROOM" },
      { val: "3", label: "BATHROOM" },
    ],
    compoundBadge: "Beverly Hills",
    floorBadge: "1th Floor",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 17,
    title: "Ground-floor duplex with a garden in Westown SODIC, Beverly Hills.",
    project: "Beverly Hills",
    location: "Beverly Hills, Sheikh Zayed",
    type: "Apartment",
    price: "17,500,000 EGP",
    priceNumber: 17500000,
    priceFormatted: "17,500,000",
    area: "240 m²",
    bedrooms: 4,
    bathrooms: 3,
    finishing: "Fully Finished",
    delivery: "2026",

    parking: "Underground Parking",
    images: [
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (1).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (3).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.04 PM.jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM (2).jpeg",
      "/images/WhatsApp Image 2026-10-02 at 11.14.03 PM.jpeg",
    ],
    description:
      "Generous 240 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 240 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "90 m² Private Landscaped Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "240 + 90", label: "M² (BLT + GARDEN)" },
      { val: "4", label: "BEDROOM" },
      { val: "3", label: "BATHROOM" },
    ],
    compoundBadge: "Beverly Hills",
    floorBadge: "Ground Floor",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },

  {
    id: 19,
    title: "Apartments for sale in Westown and Courtyard",
    project: "Westown Courtyard",
    location: "Westown Courtyard, Sheikh Zayed",
    type: "Apartment",
    price: "18,300,000 EGP",
    priceNumber: 18300000,
    priceFormatted: "18,300,000",
    area: "201 m²",
    bedrooms: 3,
    bathrooms: 2,
    delivery: "2026",

    parking: "Underground Parking",
    images: ["/images/WhatsApp Image 2026-10-12 at 7.19.31 PM.jpeg"],
    description:
      "Generous 240 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 240 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "86 m² Private Garden",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "201 + 86", label: "M² (BLT + GARDEN)" },
      { val: "3", label: "BEDROOM" },
      { val: "2", label: "BATHROOM" },
    ],
    compoundBadge: "Westown Courtyard",
    floorBadge: "Ground Floor",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
  {
    id: 20,
    title: "Apartments available for sale in Casa Beverly Hills, Phase 1 and 2",
    project: "Beverly Hills",
    location: "Beverly Hills, Sheikh Zayed",
    type: "Apartment",
    price: "9,450,000 EGP",
    priceNumber: 9450000,
    priceFormatted: "9,450,000",
    area: "120 m²",
    bedrooms: 2,
    bathrooms: 2,
    finishing: "Fully Finished",
    delivery: "2026",
    parking: "Underground Parking",
    images: ["/images/WhatsApp Image 2026-10-12 at 7.20.28 PM.jpeg"],
    description:
      "Generous 120 m² built-up footprint with private garden parcel, panoramic rooftop entertaining deck, and corner plot privacy.",
    fullDescription:
      "Generous 120 m² built-up footprint situated in prime SODIC Beverly Hills. Features an expansive 120 m² private landscaped garden parcel, 45 m² panoramic rooftop entertaining deck with outdoor barbecue setup, private swimming pool capability, and corner plot privacy.",
    features: [
      "Fully Finished",
      "Installed Central AC Units",
      "33 m² Private roof",
      "Underground Dedicated Parking",
      "Integrated Italian Kitchen",
      "Central Park Proximity",
    ],
    specs: [
      { val: "120 + 33", label: "M² (BLT + Roof)" },
      { val: "2", label: "BEDROOM" },
      { val: "2", label: "BATHROOM" },
    ],
    compoundBadge: "Beverly Hills",
    highlightBadge: "UNDERGROUND PARKING",
    featuredBadge: null,
    propertyType: "apartment",
    listingType: "sale",
    isDarkButton: false,
  },
];
