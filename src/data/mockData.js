// Authentic Wedding Data for Harshith & Nidhi
// Theme: "Where the Sea Meets the Forest"
// Connecting Coastal Karnataka (Groom) with Dandeli Western Ghats (Bride)

export const WEDDING_DETAILS = {
  couple: "Harshith & Nidhi",
  groomName: "Harshith",
  groomFamilyTitle: "Prabhu Family",
  groomParents: "Sri Ramachandra Prabhu & Smt. Sumangala Prabhu",
  groomGrandparents: "Late Sri Vittal and Late Krishna bai Shanbhag • Late Vasudev Prabhu & Sarojini Prabhu",
  groomRoots: "Coastal Karnataka (GSB Konkani Lineage, Kundapura & Udupi)",
  groomSideContact: {
    name: "Deekshith Prabhu (Groom's Coordinator)",
    role: "Kundapura / Mangalore logistics & rituals",
    phone: "+91 98765 43210"
  },

  brideName: "Nidhi",
  brideFamilyTitle: "Khambadkone Family",
  brideParents: "Sri Ravi K & Smt. Rashmi K",
  brideGrandparents: "Late Sri Dayanand K & Smt. Saraswathi K",
  brideRoots: "Dandeli & Western Ghats Heritage",
  brideSideContact: {
    name: "Ananth K (Bride's Coordinator)",
    role: "Dandeli outstation guest guidance",
    phone: "+91 98765 43210"
  },
  brideFamilyCoordinator: {
    name: "Vikram Prabhu (Bride's Coordinator)",
    phone: "+91 98765 12345"
  },

  accommodationCoordinator: {
    name: "Pavan DJ (Hospitality Desk)",
    role: "Room allocations, resort check-in & check-out",
    phone: "+91 98765 43210"
  },

  weddingDate: "2026-12-13T12:30:00",
  displayDates: "Sunday, 13 December 2026 • 12:30 PM",
  shloka: "॥ श्री महागणपतये नमः • श्री कुलदेवतायै नमः ॥",
  tagline: "Rooted in tradition, blessed by the sea, united in love.",
  secondaryTagline: "From the Coast to the Ghats, One Beautiful Journey",
  themeName: "Where the Sea Meets the Forest",
  themeConcept: "A love story connecting the coastal heritage of Karnataka with the lush forests of the Western Ghats.",
  
  city: "Nagoor / Kundapura, Karnataka",
  primaryVenue: "Shri Gopal Krishna Kalamandir",
  venueAddress: "Adjacent to MVSSN, Nagoor, Kundapura Taluk, Udupi District, Karnataka 576219",
  mapUrl: "https://share.google/DyDrvV1ta8c0rMIScP",
  hashtag: "#FromCoastToGhats • #HarshithWedsNidhi",
  liveStreamUrl: "https://www.youtube.com/embed/live_stream_placeholder",
  cardImage: "/nidhi-harshith-invite.jpg",
  logoImage: "/wedding-logo.png",
  
  // Logistics for outstation guests
  travelGuidance: {
    airports: [
      { name: "Mangalore International Airport (IXE)", dist: "95 km (~2 hrs drive via NH 66 Coastal Highway)" },
      { name: "Goa Dabolim / Mopa Airport (GOI/GOX)", dist: "185 km (~3.5 hrs drive along scenic coast)" },
      { name: "Hubballi Airport (HBX)", dist: "210 km (~4.5 hrs drive connecting Dandeli & coast)" }
    ],
    railway: [
      { name: "Kundapura Railway Station (KUDA)", dist: "22 kms" },
      { name: "Byndoor Mookambika Road (BYNR)", dist: "10 kms" },
      { name: "Udupi Railway Station (UD)", dist: "42 kms" }
    ],
    parking: "Dedicated Parking for up to 50 vehicles at Kalamandir Premises.",
    hotels: [
      { 
        name: "Parichaya Hotel, Nandanavana", 
        area: "Nandanavana, Near Nagoor (3 km)", 
        phone: "+91 8254 260111", 
        mapUrl: "https://maps.google.com/?q=Parichaya+Hotel+Nandanavana",
        tag: "Closest to Venue"
      },
      { 
        name: "Hotel Ambica International Byndoor", 
        area: "Byndoor (10 km)", 
        phone: "+91 8254 251222", 
        mapUrl: "https://maps.google.com/?q=Hotel+Ambica+International+Byndoor",
        tag: "Premium Town Stay"
      },
      { 
        name: "Fortune Fisherman's Wharf & Coastal Resort", 
        area: "Kundapura (22 km)", 
        phone: "+91 8254 230001",
        mapUrl: "https://maps.google.com/?q=Fortune+Fishermans+Wharf+Kundapura",
        tag: "Beachfront Luxury"
      }
    ]
  }
};

export const INITIAL_WEDDING_DETAILS = WEDDING_DETAILS;

// Palette & Cultural Thematic Profiles
export const THEMES_DATA = {
  coastal: {
    id: "coastal",
    name: "Coastal Karnataka",
    badge: "🌊 Coastal Roots",
    tagline: "Arabian Sea, Temple Chariots & GSB Heritage",
    primaryColor: "#0F4C81", // Ocean Blue
    accentColor: "#D4AF37", // Temple Gold
    bgGradient: "from-[#0F4C81]/30 via-slate-950 to-[#0F4C81]/10",
    description: "Born into the rich GSB Konkani traditions of Coastal Karnataka, surrounded by the Arabian Sea, temple culture, and family values.",
    icons: ["🌊", "🛕", "🌴", "🪔"],
    visuals: [
      { title: "Arabian Sea & Kodi Beach", desc: "Golden coastal sunsets and shimmering azure waters.", icon: "🌊" },
      { title: "Udupi Sri Krishna Temple", desc: "Centuries-old spiritual devotion, Kanakana Kindi, and Vedic culture.", icon: "🛕" },
      { title: "Maravanthe Beach Highway", desc: "Where the Arabian Sea flows on the left and the Souparnika River on the right.", icon: "🛣️" },
      { title: "Traditional GSB Motifs", desc: "Holy Tulsi katte, deepa stambhas, and fragrant coastal jasmine cascades.", icon: "🪔" }
    ]
  },
  forest: {
    id: "forest",
    name: "Dandeli Rainforest",
    badge: "🌿 Dandeli Wilds",
    tagline: "Kali River, Western Ghats & Untamed Nature",
    primaryColor: "#2E6F40", // Forest Green
    accentColor: "#D4AF37", // Temple Gold
    bgGradient: "from-[#2E6F40]/30 via-slate-950 to-[#2E6F40]/10",
    description: "Raised amidst the breathtaking forests and rivers of Dandeli, where nature, adventure, and simplicity shaped her journey.",
    icons: ["🌿", "🌊", "🦜", "⛰️"],
    visuals: [
      { title: "River Kali Waterfalls & Rapids", desc: "Gushing wild white-water river carving through rocky granite gorges.", icon: "🌊" },
      { title: "Syntheri Rocks & Gorges", desc: "Majestic 300-foot monolith granite rock enveloped in pristine mist.", icon: "⛰️" },
      { title: "Malabar Pied Hornbill Canopy", desc: "The regal feathered jewel of the Western Ghats jungle trails.", icon: "🦜" },
      { title: "Dense Western Ghats Woods", desc: "Ancient teak, misty bamboo groves, and peaceful mountain air.", icon: "🌲" }
    ]
  }
};

// Section 2: Two Journeys, One Destination - Timeline
export const STORY_TIMELINE = [
  {
    step: "01",
    phase: "Coastal Karnataka",
    emoji: "🌊",
    title: "Roots by the Arabian Sea",
    side: "Groom's Homeland",
    desc: "Harshith grew up with the roar of coastal tides, temple bells of Udupi, holy festivals, and the warmth of close-knit GSB Konkani family ties."
  },
  {
    step: "02",
    phase: "First Meeting",
    emoji: "🏙️",
    title: "Where Paths Converged",
    side: "A Serendipitous Spark",
    desc: "Two distinct worlds met in Bangalore. Shared smiles over filter coffee turned into long conversations about Dandeli river trails and coastal memories."
  },
  {
    step: "03",
    phase: "Engagement (Phool Muddi)",
    emoji: "❤️",
    title: "The Ring & Floral Vows",
    side: "Sacred Konkani Engagement",
    desc: "Surrounded by family, elders exchanged traditional betel leaves and fragrant flowers, sealing the promise of eternal union with the auspicious Phool Muddi."
  },
  {
    step: "04",
    phase: "The Sacred Vivah",
    emoji: "💍",
    title: "Muhurtham at Kalamandir",
    side: "13 December 2026",
    desc: "Under the holy wedding mandap, with sacred Vedic chants, Kanyadaan, Mangalasutra Dharane, and Saptapadi, two families unite as one."
  },
  {
    step: "05",
    phase: "New Journey Together",
    emoji: "🌿",
    title: "Sea & Forest Entwined",
    side: "Forever & Always",
    desc: "Carrying forward the wisdom of our ancestors, the calm of coastal waters, and the enduring strength of ancient forests into a blissful life together."
  }
];

// Wedding Events with Culture-Inspired Karnataka Icons
export const INITIAL_EVENTS = [
  {
    id: "evt-mehendi",
    name: "Mehendi Ceremony",
    icon: "🌿",
    badge: "Henna & Melodies",
    day: "Day 1 - Afternoon",
    date: "Saturday, 12 December 2026",
    time: "02:30 PM - 05:30 PM",
    venue: "Courtyard Mandap, Shri Gopal Krishna Kalamandir",
    address: "Adjacent to MVSSN, Nagoor, Karnataka",
    mapUrl: "https://maps.google.com/?q=Shri+Gopal+Krishna+Kalamandir+Nagoor",
    dressCode: "Coastal Teal & Forest Fern Green (Traditional Festive)",
    description: "Intricate herbal henna designs inspired by coconut fronds and forest leaves, accompanied by folk Konkani geeths and laughter.",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    highlights: ["Artisan Mehendi Artists", "Traditional Coastal High-Tea & Snacks", "Live Konkani Folk Harmonies"]
  },
  {
    id: "evt-haldi",
    name: "Haldi & Shringara",
    icon: "🌼",
    badge: "Golden Blessings",
    day: "Day 1 - Evening",
    date: "Saturday, 12 December 2026",
    time: "05:45 PM - 07:30 PM",
    venue: "Cultural Open Lawns, Kalamandir",
    address: "Adjacent to MVSSN, Nagoor, Karnataka",
    mapUrl: "https://maps.google.com/?q=Shri+Gopal+Krishna+Kalamandir+Nagoor",
    dressCode: "Temple Turmeric Yellow & Kasavu Cream",
    description: "Sacred turmeric paste infused with coastal sandalwood and river water applied with blessings by aunts and elders amidst floral showers.",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    highlights: ["Floral Rain Shower", "Sandalwood & Turmeric Ritual", "Family Garba & Coastal Dance"]
  },
  {
    id: "evt-phool-muddi",
    name: "Phool Muddi (Engagement)",
    icon: "🪔",
    badge: "Traditional GSB Ritual",
    day: "Day 1 - Night",
    date: "Saturday, 12 December 2026",
    time: "07:45 PM Onwards",
    venue: "Main Kalamandir Royal Hall",
    address: "Adjacent to MVSSN, Nagoor, Karnataka",
    mapUrl: "https://maps.google.com/?q=Shri+Gopal+Krishna+Kalamandir+Nagoor",
    dressCode: "Regal Silk & Traditional Zari Sarees / Kurta Pajama",
    description: "The auspicious Konkani ring exchange ceremony with exchange of flowers, coconuts, fruit baskets, and traditional music by Chande & Flute.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    highlights: ["Ring Ceremony & Elder Blessings", "Interactive Previous-Day Sangeet & Games", "Grand Festive Dinner Feast"]
  },
  {
    id: "evt-muhurtham",
    name: "The Auspicious Muhurtham",
    icon: "💐",
    badge: "Sacred Vivah",
    day: "Day 2 - Main Wedding Day",
    date: "Sunday, 13 December 2026",
    time: "Muhurtham: 10:15 AM - 11:45 AM",
    venue: "Central Vivah Mandap, Shri Gopal Krishna Kalamandir",
    address: "Adjacent to MVSSN, Nagoor, Karnataka",
    mapUrl: "https://maps.google.com/?q=Shri+Gopal+Krishna+Kalamandir+Nagoor",
    dressCode: "Kanjeevaram Silk & Kasavu Zari Dhoti with Angavastram",
    description: "The sacred Vedic vivah: Kanyadaan, Mangalasutra Dharane, Saptapadi around the holy fire, and blessings from family priests and elders.",
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
    highlights: ["Nadaswaram & Chande Melam", "Kanyadaan & Mangalasutra Dharane", "Traditional GSB Banana-Leaf Lunch"]
  },
  {
    id: "evt-reception",
    name: "Grand Wedding Reception",
    icon: "✨",
    badge: "Evening Gala",
    day: "Day 2 - Evening",
    date: "Sunday, 13 December 2026",
    time: "07:00 PM Onwards",
    venue: "Open Star-lit Grand Lawns, Kalamandir",
    address: "Adjacent to MVSSN, Nagoor, Karnataka",
    mapUrl: "https://maps.google.com/?q=Shri+Gopal+Krishna+Kalamandir+Nagoor",
    dressCode: "Royal Evening Elegance & Indo-Western Couture",
    description: "An enchanting evening of music, cake cutting, congratulations, candid photography, and a lavish celebratory royal feast.",
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    highlights: ["Couple Grand Entry", "Musical Performances & Live Band", "Multi-Cuisine Royal Banquet"]
  }
];

// Section 6: Konkani Traditions (GSB Heritage)
export const KONKANI_TRADITIONS = [
  {
    title: "Kanyadaan",
    sanskrit: "कन्यादानम्",
    desc: "The heartfelt sacred offering where the bride's parents bestow their beloved daughter's hand into the groom's with sacred holy water, tender coconut, and Vedic mantras, seeking Vishnu's blessings.",
    icon: "🥥"
  },
  {
    title: "Mangalasutra Dharane",
    sanskrit: "माङ्गल्यसूत्रधारणम्",
    desc: "To the resonant beats of the Nadaswaram and showering of akshata pearls, the groom ties the sacred gold mangalsutra with three sacred knots, symbolizing love, duty, and eternal companionship.",
    icon: "📿"
  },
  {
    title: "Saptapadi",
    sanskrit: "सप्तपदी",
    desc: "The seven sacred steps taken hand-in-hand around the sacred Agni. With every step, the couple pledges vows for nourishment, strength, prosperity, joy, lineage, harmony, and eternal lifelong friendship.",
    icon: "🔥"
  },
  {
    title: "Tulsi & Family Blessings",
    sanskrit: "तुलसी पूजनम्",
    desc: "The newlywed couple circumambulates the sacred Tulsi plant and touches the feet of parents and grandparents to receive heartfelt blessings for a serene and devoted family life.",
    icon: "🌿"
  },
  {
    title: "Traditional Konkani Wedding Feast",
    sanskrit: "पारम्परिक पङ्क्ति भोजनम्",
    desc: "Served traditionally on fresh green banana leaves in long rows ('Pangath') with pure steaming ghee, hot red rice, fragrant Dalitoy, and an array of coastal sweet delicacies.",
    icon: "🍌"
  }
];

// Section 7: Traditional GSB Wedding Feast Menu
export const WEDDING_FEAST_MENU = [
  {
    name: "Dalitoy",
    kannada: "ದಾಳಿತೊಯ್",
    category: "Signature Konkani Dal",
    desc: "The pride and soul of GSB Konkani cuisine. Creamy slow-simmered yellow toor dal tempered with mustard, hing, green chillies, and fresh curry leaves in pure cow's ghee.",
    tag: "Crown Jewel",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Saaru (Rasam)",
    kannada: "ಸಾರು",
    category: "Aromatic Broth",
    desc: "Fragrant, tangy tomato and tamarind broth boiled with freshly roasted coastal spices, coriander seeds, and cumin to awaken the palate.",
    tag: "Digestive & Aromatic",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Batata Song",
    kannada: "ಬಟಾಟೆ ಸಾಂಗ್",
    category: "Spicy Coastal Curry",
    desc: "Tender baby potatoes slow-cooked in a fiery, deep-red Byadgi chilli paste, lots of caramelised onions, and tangy tamarind extract.",
    tag: "Fiery & Tangy",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Tendle Bibbe Upkari",
    kannada: "ತೆಂಡೆ ಬಿಬ್ಬೆ ಉಪಕಾರಿ",
    category: "Traditional Stir-Fry",
    desc: "Crunchy ivy gourds (tendle) tossed with tender, milky wet cashews (bibbe), grated coconut, and mustard seeds. An authentic coastal wedding delicacy.",
    tag: "Wedding Classic",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Pineapple Sasam",
    kannada: "ಅನಾನಸ್ ಸಾಸಂ",
    category: "Sweet & Savoury Relish",
    desc: "Juicy ripe pineapple chunks folded into a ground mustard seed, red chilli, and fresh coconut gravy, sweetened with organic jaggery.",
    tag: "Sweet-Savory Harmony",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Happolu & Vodi",
    kannada: "ಹಪ್ಪಳ & ವೊಡಿ",
    category: "Crispy Accompaniments",
    desc: "Sun-dried urad dal papads, spiced jackfruit crackers (Pelakai Happolu), and crisp rice vodi fried to perfection.",
    tag: "Crunchy Delights",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Chana Dal Payasam",
    kannada: "ಕಡಲೆ ಬೇಳೆ ಪಾಯಸ",
    category: "Auspicious Dessert",
    desc: "Rich dessert cooked with Bengal gram lentils, dense coconut milk, organic jaggery, cardamom, and ghee-roasted cashews and raisins.",
    tag: "Festive Sweet",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Godshe (Sweet Porridge)",
    kannada: "ಗೋಡ್ಶೆ",
    category: "Konkani Tradition",
    desc: "A warm, soul-soothing festive Konkani pudding made with wheat semolina or moong dal, coconut milk, and crushed green cardamom.",
    tag: "Soul-Soothing",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Steaming Rice & Pure Ghee",
    kannada: "ಅನ್ನ & ತುಪ್ಪ",
    category: "The Foundation",
    desc: "Piping hot fragrant coastal boiled/white rice served with a generous pour of aromatic desi cow's ghee.",
    tag: "Sacred Base",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
  }
];

// Explore Karnataka & Dandeli - Outstation Guest Guide
export const KARNATAKA_DESTINATIONS = {
  coastal: [
    {
      name: "Udupi Sri Krishna Temple & Kanakana Kindi",
      distance: "40 km from Kalamandir",
      desc: "World-renowned temple established by Sri Madhvacharya. View the deity through the sacred silver Kanakana Kindi window.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Maravanthe Beach & Souparnika River",
      distance: "16 km from Kalamandir",
      desc: "One of India's most scenic highways: the roaring Arabian Sea on one side and the calm Souparnika River on the other.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kollur Sri Mookambika Temple",
      distance: "48 km from Kalamandir",
      desc: "Nestled in the lush Kodachadri hill foothills, a sacred Shakti Peetha revered by millions.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kodi Beach & Sea Walkway",
      distance: "14 km from Kalamandir",
      desc: "Pristine golden sands, peaceful mangrove backwaters, and a breeze-cooled sea promenade.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    }
  ],
  dandeli: [
    {
      name: "River Kali White-Water Rapids",
      distance: "Bride's Native Land",
      desc: "The exhilarating lifeblood of Dandeli, renowned for river rafting, jungle coracle rides, and natural jacuzzis.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Syntheri Rocks Monolith",
      distance: "Deep Western Ghats",
      desc: "A breathtaking 300-foot volcanic monolithic granite cliff carved over millennia by the Kaneri River.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dandeli Wildlife & Hornbill Reserve",
      distance: "Rainforest Canopy",
      desc: "Home to all four South Indian hornbill species, black panthers, majestic Asian elephants, and towering teak jungles.",
      image: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// Section 8: Gallery Categories
export const INITIAL_PHOTOS = [
  {
    id: "ph-1",
    title: "Official Wedding Invitation Illustration",
    category: "Card",
    url: "/nidhi-harshith-invite.jpg",
    caption: "Harshith & Nidhi • Sunday, 13 December 2026 • Kalamandir, Nagoor"
  },
  {
    id: "ph-2",
    title: "Coastal Sunset at Maravanthe",
    category: "Pre-wedding",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    caption: "Where coastal waves whisper ancient blessings to the horizon"
  },
  {
    id: "ph-3",
    title: "Dandeli Kali River & Misty Jungle",
    category: "Pre-wedding",
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    caption: "Among the evergreen canopies and rushing waters of the Western Ghats"
  },
  {
    id: "ph-4",
    title: "Traditional Kasavu & Temple Gold Shringara",
    category: "Engagement ceremony",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
    caption: "Adorned in royal red Kanjeevaram and sacred golden mundu"
  },
  {
    id: "ph-5",
    title: "Childhood Smiles & Joyous Memories",
    category: "Childhood memories",
    url: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1000&q=80",
    caption: "Growing up surrounded by love, grandparents' stories, and laughter"
  },
  {
    id: "ph-6",
    title: "Family Gatherings & Elder Blessings",
    category: "Family moments",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    caption: "Two families coming together with joy, music, and unconditional love"
  }
];

// Admin Feature 1: Marriage Finance Tracker & Dashboard
// Displays Agreed Amount (Quotation Received) vs Amount Given / Paid
export const INITIAL_FINANCES = [
  {
    id: "fin-1",
    vendorName: "Harshit (Photography & 4K Cinema)",
    serviceCategory: "Photography & Cinematography",
    agreedAmount: 35000,
    paidAmount: 5000,
    paymentMethod: "UPI (Google Pay)",
    lastPaymentDate: "2026-09-05",
    status: "Partially Paid",
    phone: "+91 98765 11111",
    notes: "Quotation received ₹35,000 for 2-day candid coverage, drone, and traditional album. Advance ₹5,000 paid on booking."
  },
  {
    id: "fin-2",
    vendorName: "Shri Gopal Krishna Kalamandir",
    serviceCategory: "Kalamandir Venue & Stage",
    agreedAmount: 180000,
    paidAmount: 90000,
    paymentMethod: "Bank NEFT Transfer",
    lastPaymentDate: "2026-08-20",
    status: "Partially Paid",
    phone: "+91 8254 289000",
    notes: "Main wedding hall, dining hall, bride & groom suites for 2 days. 50% advance cleared."
  },
  {
    id: "fin-3",
    vendorName: "Annapoorna Traditional GSB Caterers",
    serviceCategory: "Catering & Wedding Feast",
    agreedAmount: 220000,
    paidAmount: 80000,
    paymentMethod: "Cheque (#448921)",
    lastPaymentDate: "2026-09-01",
    status: "Partially Paid",
    phone: "+91 98290 22334",
    notes: "Traditional banana-leaf meals with Dalitoy, Batata Song, Tendle Cashew, Payasam, evening snacks & high tea."
  },
  {
    id: "fin-4",
    vendorName: "Coastal & Forest Floral Decorators",
    serviceCategory: "Decor, Mandap & Lighting",
    agreedAmount: 110000,
    paidAmount: 40000,
    paymentMethod: "UPI Transfer",
    lastPaymentDate: "2026-09-03",
    status: "Partially Paid",
    phone: "+91 94140 55667",
    notes: "Traditional marigold temple mandap, jasmine curtains, banana stems, and warm LED string lighting."
  },
  {
    id: "fin-5",
    vendorName: "Nadaswaram & Chande Melam Troupe",
    serviceCategory: "Traditional Music & Sound",
    agreedAmount: 40000,
    paidAmount: 20000,
    paymentMethod: "Cash",
    lastPaymentDate: "2026-09-08",
    status: "Partially Paid",
    phone: "+91 98450 77889",
    notes: "Traditional morning Nadaswaram for Muhurtham, and Chande drumming troupe for the grand welcome."
  }
];

// Admin Feature 2: Guest List Management
// List of invitees with tick/checkbox 'isInvited'
export const INITIAL_INVITEES = [
  {
    id: "inv-1",
    name: "Uncle Ravi & Family",
    phone: "919876500001",
    category: "Bride Close Family",
    side: "Bride Side",
    guestsCount: 4,
    isInvited: true,
    rsvpStatus: "Confirmed",
    city: "Dandeli",
    invitedAt: "2026-09-10T11:30:00",
    accommodation: "Required (2 Rooms)"
  },
  {
    id: "inv-2",
    name: "Nithyanand & Friends",
    phone: "919876500002",
    category: "Groom Close Family",
    side: "Groom Side",
    guestsCount: 5,
    isInvited: true,
    rsvpStatus: "Confirmed",
    city: "Kundapura",
    invitedAt: "2026-09-12T14:15:00",
    accommodation: "Not Required (Local)"
  },
  {
    id: "inv-3",
    name: "Vikram & Neha Nayak",
    phone: "919876500003",
    category: "Groom Friends",
    side: "Groom Side",
    guestsCount: 2,
    isInvited: false,
    rsvpStatus: "Pending",
    city: "Hubballi",
    invitedAt: null,
    accommodation: "Required (1 Room)"
  },
  {
    id: "inv-4",
    name: "Pooja & Rohan Hegde",
    phone: "919876500004",
    category: "Bride Cousins",
    side: "Bride Side",
    guestsCount: 3,
    isInvited: false,
    rsvpStatus: "Pending",
    city: "Udupi",
    invitedAt: null,
    accommodation: "Self Arranged"
  },
  {
    id: "inv-5",
    name: "Dr. K. S. Shenoy & Family",
    phone: "919876500005",
    category: "Family Elders",
    side: "Both Sides",
    guestsCount: 4,
    isInvited: false,
    rsvpStatus: "Pending",
    city: "Mangalore",
    invitedAt: null,
    accommodation: "Required (1 Suite)"
  }
];

// Admin Feature 4: User Master Creation and Management
// Unique login credentials for Admin and Guests
export const INITIAL_USERS = [
  {
    id: "usr-admin",
    username: "admin",
    password: "wedding2026",
    name: "Harshith & Nidhi (Wedding Admins)",
    role: "admin",
    side: "both",
    phone: "+91 98765 43210",
    avatar: "👑",
    assignedRoom: "Admin Suite 101"
  },
  {
    id: "usr-guest-harshith",
    username: "guest_harshith",
    password: "coastal2026",
    name: "Team Harshith (Groom Guests)",
    role: "user",
    side: "groom",
    phone: "+91 98765 00002",
    avatar: "🌊",
    assignedRoom: "Coastal Villa A"
  },
  {
    id: "usr-guest-nidhi",
    username: "guest_nidhi",
    password: "forest2026",
    name: "Team Nidhi (Bride Guests)",
    role: "user",
    side: "bride",
    phone: "+91 98765 00001",
    avatar: "🌿",
    assignedRoom: "Forest Cottage B"
  },
  {
    id: "usr-guest-general",
    username: "guest",
    password: "vivah2026",
    name: "Respected Wedding Guest",
    role: "user",
    side: "both",
    phone: "+91 98765 00005",
    avatar: "🌸",
    assignedRoom: "Guest Wing C"
  }
];

// Admin Feature 5 & 6: Games and Interactive Challenge Creation with QR Codes & Points
export const INITIAL_GAME_ROUNDS = [
  {
    id: "gm-trivia",
    title: "Harshith & Nidhi Couple Trivia",
    category: "Couple Secrets",
    desc: "Test how well you know the bride and groom! From their first coffee date in Bangalore to funny quirks.",
    pointsPerWin: 25,
    status: "Active",
    winnerSide: null,
    qrCodeData: "https://harshithwedsnidhi.com/games/gm-trivia",
    questions: [
      {
        q: "Where did Harshith and Nidhi meet for the very first time?",
        options: ["Udupi Temple Street", "Cafe in Bangalore", "Dandeli Kali River", "Kundapura Beach"],
        correct: 1
      },
      {
        q: "What is Harshith's all-time favourite Konkani comfort dish?",
        options: ["Batata Song & Dalitoy", "Pizza", "Dosa", "Sandwich"],
        correct: 0
      },
      {
        q: "Which adventure activity in Dandeli does Nidhi love the most?",
        options: ["White-Water Rafting", "Rock Climbing", "Bird Watching", "Jungle Safari"],
        correct: 0
      }
    ]
  },
  {
    id: "gm-dialect",
    title: "Konkani & Kannada Dialect Face-off",
    category: "Linguistic Fun",
    desc: "Match classic coastal Konkani phrases and Dandeli Kannada idioms with their hilarious meanings!",
    pointsPerWin: 20,
    status: "Upcoming",
    winnerSide: null,
    qrCodeData: "https://harshithwedsnidhi.com/games/gm-dialect",
    questions: [
      {
        q: "What does 'Kusumbale' or 'Khara Chutney' mean in coastal Konkani banter?",
        options: ["Fiery sharp tongue", "Sweet dessert", "River boat", "Golden coconut"],
        correct: 0
      }
    ]
  },
  {
    id: "gm-tug-of-war",
    title: "The Grand Tug of War (Waves vs Forest)",
    category: "Physical Challenge",
    desc: "Team Coastal Karnataka vs Team Dandeli Forest in the ultimate strength face-off on the open lawns!",
    pointsPerWin: 50,
    status: "Upcoming",
    winnerSide: null,
    qrCodeData: "https://harshithwedsnidhi.com/games/gm-tug-of-war"
  },
  {
    id: "gm-antakshari",
    title: "Antakshari Melody War",
    category: "Musical Sangeet",
    desc: "Kannada, Konkani, and Bollywood golden hits clash between Team Groom and Team Bride.",
    pointsPerWin: 30,
    status: "Completed",
    winnerSide: "groom",
    qrCodeData: "https://harshithwedsnidhi.com/games/gm-antakshari"
  }
];

export const INITIAL_PLAYERS = [
  { id: "G1", name: "Vikram Nayak", side: "groom", score: 135, city: "Kundapura", team: "Team Coastal (Groom)" },
  { id: "G2", name: "Rohan Shenoy", side: "groom", score: 110, city: "Udupi", team: "Team Coastal (Groom)" },
  { id: "B1", name: "Priya Prabhu", side: "bride", score: 145, city: "Dandeli", team: "Team Forest (Bride)" },
  { id: "B2", name: "Suresh Hegde", side: "bride", score: 95, city: "Dharwad", team: "Team Forest (Bride)" }
];

export const INITIAL_RSVPS = [
  {
    id: "rsvp-1",
    name: "Dr. K. S. Shenoy",
    phone: "+91 98765 00005",
    side: "Both Sides",
    guestsCount: 4,
    events: ["evt-phool-muddi", "evt-muhurtham", "evt-reception"],
    dietary: "Traditional GSB Vegetarian Feast",
    accommodation: "Need 1 Suite",
    submittedAt: "2026-09-15T10:00:00"
  }
];
