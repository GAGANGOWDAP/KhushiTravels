export interface TourPackage {
  id: string;
  name: string;
  category: "pilgrimage" | "hill-station" | "heritage" | "beach";
  duration: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  suggestedVehicles: string[];
  startingPrice: string;
  link?: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "12-jyotirlinga-yatra",
    name: "25-Day 12 Jyotirlinga Spiritual Yatra",
    category: "pilgrimage",
    duration: "25 Days / 24 Nights",
    badge: "Featured Yatra",
    image: "/images/destinations/ayodhya.webp",
    description:
      "A once-in-a-lifetime pan-India spiritual pilgrimage departing from Bengaluru. Covers all 12 Jyotirlingas, Mathura, Vrindavan, Ayodhya Ram Mandir, Gaya, Bodh Gaya, and Puri Jagannath with sanitized AC transport, 3-star accommodations, and satvik meals.",
    highlights: [
      "All 12 sacred Jyotirlinga darshans across India",
      "Ayodhya Ram Janmabhoomi & Saryu Aarti",
      "Varanasi Kashi Vishwanath & Ganga Aarti",
      "Somnath & Nageshwar in Gujarat",
      "Dedicated tour coordinator & senior-friendly pace",
    ],
    suggestedVehicles: ["AC Volvo Coach", "Luxury Tempo Traveller", "Force Urbania"],
    startingPrice: "On Request (Custom Group)",
    link: "/spiritual-pilgrimage-tours/",
  },
  {
    id: "bangalore-to-tirupati-package",
    name: "Tirupati Balaji VIP Darshan Tour",
    category: "pilgrimage",
    duration: "1 Day / 2 Days",
    badge: "Best Seller",
    image: "/images/destinations/tirupati.webp",
    description:
      "Hassle-free Tirumala Tirupati Balaji package from Bengaluru. Includes early morning doorstep pickup, highway toll clearance, delicious breakfast stop, and drop-back at your home.",
    highlights: [
      "Doorstep pickup anywhere in Bangalore",
      "Assistance with Seeghra Darshan slot alignment",
      "Padmavathi Temple darshan at Tiruchanur",
      "Comfortable pushback seats for restful ride",
    ],
    suggestedVehicles: ["9 Seater Tempo Traveller", "Innova Crysta", "12 Seater TT"],
    startingPrice: "₹18 / km + Tolls",
  },
  {
    id: "bangalore-to-coorg-package",
    name: "Coorg Coffee Country & Abbey Falls Getaway",
    category: "hill-station",
    duration: "3 Days / 2 Nights",
    badge: "Most Popular",
    image: "/images/destinations/coorg.webp",
    description:
      "Explore the Scotland of India. Breathe in aromatic coffee plantations, witness Raja's Seat sunsets, Abbey Falls, Dubare Elephant Camp, and the Golden Temple at Bylakuppe.",
    highlights: [
      "Scenic Western Ghats highway drive",
      "Dubare Elephant Camp & river rafting",
      "Namdroling Tibetan Monastery (Golden Temple)",
      "Coffee plantation walking tour & spice shopping",
    ],
    suggestedVehicles: ["12 Seater Tempo", "Force Urbania", "Innova Crysta"],
    startingPrice: "₹18 / km",
  },
  {
    id: "bangalore-to-ooty-package",
    name: "Ooty, Coonoor & Nilgiri Hills Tour",
    category: "hill-station",
    duration: "3 Days / 2 Nights",
    badge: "Family Favorite",
    image: "/images/destinations/ooty.webp",
    description:
      "Wind through the famous 36 hairpin bends through Bandipur wildlife sanctuary up to the queen of hill stations. Includes Botanical Gardens, Ooty Lake, Doddabetta Peak, and Coonoor tea gardens.",
    highlights: [
      "Bandipur tiger reserve scenic transit",
      "Doddabetta Peak panoramic viewpoint",
      "Botanical & Rose Gardens exploration",
      "Sim's Park & tea factory in Coonoor",
    ],
    suggestedVehicles: ["12-14 Seater TT", "Force Urbania", "Innova Crysta"],
    startingPrice: "₹18 / km",
  },
  {
    id: "bangalore-to-mysore-package",
    name: "Mysore Heritage & Palace Illumination Tour",
    category: "heritage",
    duration: "1 Day / 2 Days",
    badge: "Weekend Special",
    image: "/images/destinations/mysore.webp",
    description:
      "Discover Karnataka's cultural capital via the Bangalore-Mysore Expressway in under 2.5 hours. Visit the grand Mysore Palace, Chamundi Hills, St. Philomena's Church, and the illuminated Brindavan Gardens.",
    highlights: [
      "Cruising on the 10-lane Bangalore-Mysore Expressway",
      "Grand Mysore Palace guided tour",
      "Chamundeshwari Temple atop Chamundi Hills",
      "Brindavan musical fountain evening show",
    ],
    suggestedVehicles: ["9 Seater Maharaja", "12 Seater TT", "Innova Crysta"],
    startingPrice: "₹18 / km",
  },
  {
    id: "bangalore-to-chikmagalur-package",
    name: "Chikmagalur Peaks & Waterfall Expedition",
    category: "hill-station",
    duration: "2 Days / 1 Night",
    badge: "Adventure & Nature",
    image: "/images/destinations/chikmagalur.webp",
    description:
      "Ascend Karnataka's highest peak Mullayanagiri, trek to Baba Budangiri, and refresh at Hebbe Falls and Jhari Falls. The ultimate escape for nature lovers and group adventure outings.",
    highlights: [
      "Mullayanagiri sunrise viewpoint",
      "Baba Budangiri shrine & Dattatreya Peetha",
      "Z-Point trekking and coffee estate trails",
      "Experienced chauffeurs on steep ghat inclines",
    ],
    suggestedVehicles: ["12 Seater Tempo", "Force Urbania", "Mini Bus"],
    startingPrice: "₹18 / km",
  },
  {
    id: "bangalore-to-goa-package",
    name: "Goa Coastal Highway & Beach Road Trip",
    category: "beach",
    duration: "4 Days / 3 Nights",
    badge: "Friends & Group Tour",
    image: "/images/destinations/goa.webp",
    description:
      "Pack your bags for the ultimate road trip to North and South Goa. Travel together in a luxury Force Urbania or tempo traveller with ambient lighting, Bluetooth surround sound, and comfortable recliner seats.",
    highlights: [
      "Direct highway transit via Hubli / Dharwad",
      "Baga, Calangute, and Anjuna beach hopping",
      "Old Goa Portuguese churches & Aguada Fort",
      "Spacious boot for all surfboards & baggage",
    ],
    suggestedVehicles: ["Force Urbania 12-16 Seater", "16 Seater TT"],
    startingPrice: "₹28 / km",
  },
  {
    id: "bangalore-to-pondicherry-package",
    name: "Pondicherry French Quarter & Auroville Trail",
    category: "beach",
    duration: "3 Days / 2 Nights",
    badge: "Culture & Coast",
    image: "/images/destinations/pondicherry.webp",
    description:
      "Experience colonial French architecture, the tranquil Matrimandir in Auroville, Promenade Beach, and Paradise Beach. Comfortable coastal group touring with 24/7 chilled air-conditioning.",
    highlights: [
      "Auroville & Matrimandir meditation center",
      "White Town French heritage walking tour",
      "Paradise Beach boat transfer",
      "Mahabalipuram UNESCO shore temples enroute",
    ],
    suggestedVehicles: ["12-14 Seater TT", "Innova Crysta", "Force Urbania"],
    startingPrice: "₹18 / km",
  },
];
