import React from "react";
import type { Metadata } from "next";
import KashiPackageDetailClient from "./KashiPackageDetailClient";

export const metadata: Metadata = {
  title: "Kashi – Triveni – Ayodhya Yatra (4D/3N) | Khushi Tours & Travels",
  description:
    "Sacred 4-Day Kashi Triveni Ayodhya pilgrimage from Varanasi to Lucknow. Shri Kashi Vishwanath Sparsh Darshan, Triveni Sangam snan boat ride, Ram Janmabhoomi Sugam Darshan, 20-seater luxury tempo traveller, and premium hotel stays.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/packages/kashi-triveni-ayodhya/",
  },
  openGraph: {
    title: "Kashi – Triveni – Ayodhya Yatra (4D/3N) | Khushi Tours & Travels",
    description:
      "A divine journey through Kashi, Triveni Sangam, and Ram Janmabhoomi. All meals, premium hotel stays, boat rides, and 20-seater tempo traveller included.",
    url: "https://gagangowdap.github.io/KhushiTravels/packages/kashi-triveni-ayodhya/",
    siteName: "Khushi Tours & Travels",
    type: "website",
    images: [
      {
        url: "https://gagangowdap.github.io/KhushiTravels/images/destinations/varanasi-ganga-aarti.jpg",
        width: 1200,
        height: 630,
        alt: "Kashi Triveni Ayodhya Yatra - Dashashwamedh Ghat Varanasi Ganga Aarti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashi – Triveni – Ayodhya Yatra (4D/3N) | Khushi Tours & Travels",
    description:
      "Sacred 4-Day Kashi Triveni Ayodhya pilgrimage from Varanasi to Lucknow. All meals, confirmed premium hotels, boat rides, and 20-seater tempo traveller.",
    images: [
      "https://gagangowdap.github.io/KhushiTravels/images/destinations/varanasi-ganga-aarti.jpg",
    ],
  },
};

export default function KashiTriveniAyodhyaPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages/" },
    { label: "Special Packages", href: "/packages/special/" },
    {
      label: "Kashi – Triveni – Ayodhya Yatra",
      href: "/packages/kashi-triveni-ayodhya/",
    },
  ];

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Kashi – Triveni – Ayodhya Yatra",
    description:
      "Sacred 03 Nights / 04 Days pilgrimage from Varanasi to Lucknow via Prayagraj and Ayodhya. Covering Kashi Vishwanath Jyotirlinga, Dashashwamedh Ghat Ganga Aarti, Triveni Sangam Snan, and Ayodhya Ram Janmabhoomi Mandir.",
    touristType: ["Pilgrim", "Family", "Senior Citizen"],
    provider: {
      "@type": "TravelAgency",
      name: "Khushi Tours & Travels",
      url: "https://gagangowdap.github.io/KhushiTravels/",
      telephone: "+91 99013 33113",
      email: "info@khushitravel.in",
    },
    offers: {
      "@type": "Offer",
      price: "17900",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "17900",
        priceCurrency: "INR",
        unitText: "Person",
        description:
          "B2B package costing per person for 16 adults in 08 double-sharing rooms. 5% GST extra on total billing.",
      },
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Day 01: Arrival Varanasi - Kashi Vishwanath Sparsh Darshan & Dashashwamedh Ganga Aarti",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Day 02: Varanasi Local Sightseeing - Subah-E-Banaras, Sarnath Dham & BHU Vishwanath",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Day 03: Varanasi to Prayagraj (Triveni Sangam Snan) to Ayodhya",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Day 04: Ayodhya Ram Janmabhoomi Sugam Darshan to Lucknow Departure",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in the Kashi – Triveni – Ayodhya Yatra package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The package includes 2 nights stay at Hotel Ananta Kashi in Varanasi and 1 night stay at Hotel Mosaic in Ayodhya, APAI all-meals plan (Breakfast + Lunch + Dinner), 3 sacred boat rides (Varanasi evening Ganga aarti, Varanasi morning boat ride, and Prayagraj Triveni Sangam snan boat ride), Sugam Darshan assistance with golf cart at Ayodhya Ram Janmabhoomi, Sparsh Darshan assistance at Kashi Vishwanath, and dedicated 20-seater Tempo Traveller with all tolls, parking, and fuel included.",
        },
      },
      {
        "@type": "Question",
        name: "What is the group size and pricing structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This B2B spiritual tour package is based on a group size of 16 adults accommodated across 08 double-sharing rooms at ₹17,900 per person. Government GST of 5% applies extra on total billing.",
        },
      },
      {
        "@type": "Question",
        name: "What vehicle is provided for the complete route?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sanitized, air-conditioned 20-Seater Tempo Traveller with pushback recliner seats, generous luggage boot, and experienced chauffeur is provided from Varanasi arrival through Prayagraj and Ayodhya up to Lucknow drop.",
        },
      },
      {
        "@type": "Question",
        name: "Are boat rides and temple darshan fees included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all 3 scheduled boat rides (Varanasi evening Aarti, Varanasi morning boat ride, and Prayagraj Triveni Sangam Snan boat ride) are included. Ayodhya Sugam Darshan with golf cart and Kashi Vishwanath Sparsh Darshan assistance are included. Personal pooja samagri or special entry tickets are excluded.",
        },
      },
      {
        "@type": "Question",
        name: "Can special Jain or garlic-free meals be arranged?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. The package includes the APAI all-meals plan (Breakfast, Lunch, and Dinner). All food served is 100% pure vegetarian, and special Jain (no onion, no garlic) or senior-friendly satvik preferences can easily be coordinated upon booking.",
        },
      },
      {
        "@type": "Question",
        name: "What assistance is provided for elderly pilgrims and senior citizens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide dedicated golf cart transfers inside the sprawling Ayodhya Ram Mandir complex, priority darshan coordination, close tempo drop points wherever permitted, and hotels equipped with elevators to minimize fatigue for elderly family members.",
        },
      },
    ],
  };

  const whatsappLink =
    "https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%20Kashi%20%E2%80%93%20Triveni%20%E2%80%93%20Ayodhya%20Yatra%20package%20(03%20Nights%20%2F%2004%20Days%2C%2016%20Adults%2C%20%E2%82%B917%2C900%20per%20person%20%2B%205%25%20GST).";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KashiPackageDetailClient
        breadcrumbs={breadcrumbs}
        whatsappLink={whatsappLink}
      />
    </>
  );
}
