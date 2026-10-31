import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAssetPath } from "@/lib/assets";
import KashiEnquiryForm from "./KashiEnquiryForm";

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
        description: "B2B package costing per person for 16 adults in 08 double-sharing rooms. 5% GST extra on total billing.",
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

      <main className="bg-[#f7f5f0] text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-950">
        {/* ================================================================= */}
        {/* 1. HERO SECTION - CINEMATIC SACRED ATMOSPHERE */}
        {/* ================================================================= */}
        <section
          className="relative min-h-0 lg:min-h-[84vh] flex items-center overflow-hidden pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 text-white"
          style={{
            background: `linear-gradient(135deg, rgba(16,33,58,0.92) 0%, rgba(25,52,84,0.88) 100%), url('${getAssetPath(
              "/images/destinations/varanasi-ganga-aarti.jpg"
            )}') center/cover no-repeat`,
          }}
        >
          <div className="container-custom relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <Breadcrumbs items={breadcrumbs} />

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-[#E3C77E] uppercase tracking-wider sm:tracking-widest px-3 py-1 rounded-full bg-[#C6A04A]/20 border border-[#C6A04A]/40 mb-2 sm:mb-3 lg:mb-4">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C6A04A] animate-pulse" />
                KASHI &bull; TRIVENI &bull; AYODHYA &bull; SPECIAL YATRA
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2 sm:mb-3 lg:mb-4 text-balance">
                Kashi – Triveni –{" "}
                <span className="text-[#E3C77E]">Ayodhya Yatra</span>
              </h1>

              {/* Subtitle */}
              <p className="font-heading text-xs sm:text-sm md:text-xl lg:text-2xl text-amber-100 font-semibold mb-2 sm:mb-3 lg:mb-4 text-balance leading-snug">
                A Divine Journey Through Kashi, Triveni Sangam and Ram Janmabhoomi.
              </p>

              {/* Route Indicator */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 mb-3 sm:mb-4 lg:mb-6">
                <span>Varanasi</span>
                <span className="text-[#E3C77E]">&rarr;</span>
                <span>Prayagraj</span>
                <span className="text-[#E3C77E]">&rarr;</span>
                <span>Ayodhya</span>
                <span className="text-[#E3C77E]">&rarr;</span>
                <span>Lucknow Drop</span>
              </div>

              {/* Supporting Intro Text */}
              <p className="text-[11.5px] sm:text-sm md:text-base lg:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 lg:mb-8 line-clamp-3 sm:line-clamp-none">
                Experience the spiritual grandeur of North India&apos;s sacred trinity: Shri Kashi Vishwanath Sparsh Darshan assistance and Ganga Maha Aarti in Varanasi, holy Triveni Sangam snan in Prayagraj, and the revered Ram Janmabhoomi Sugam Darshan in Ayodhya with premium 20-seater Tempo Traveller transport.
              </p>

              {/* 5 Compact Information Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 lg:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto text-left">
                <div className="bg-[#10213A]/80 backdrop-blur-md border border-[#C6A04A]/30 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Duration
                  </span>
                  <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    03 Nights / 04 Days
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] block mt-0.5">
                    Confirmed itinerary
                  </span>
                </div>

                <div className="bg-[#10213A]/80 backdrop-blur-md border border-[#C6A04A]/30 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Group Size
                  </span>
                  <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    16 Adults
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] block mt-0.5">
                    Family &amp; pilgrim group
                  </span>
                </div>

                <div className="bg-[#10213A]/80 backdrop-blur-md border border-[#C6A04A]/30 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Accommodation
                  </span>
                  <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    08 Double Rooms
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] block mt-0.5">
                    Confirmed premium stays
                  </span>
                </div>

                <div className="bg-[#10213A]/80 backdrop-blur-md border border-[#C6A04A]/30 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Meal Plan
                  </span>
                  <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    APAI – All Meals
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] block mt-0.5">
                    Breakfast, lunch, dinner
                  </span>
                </div>

                <div className="bg-[#10213A]/80 backdrop-blur-md border border-[#C6A04A]/30 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg col-span-2 sm:col-span-1">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Transport
                  </span>
                  <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    20 Seater Tempo
                  </span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] block mt-0.5">
                    Pushback &amp; AC comfort
                  </span>
                </div>
              </div>

              {/* Pricing & CTA Action Strip */}
              <div className="bg-[#10213A]/90 backdrop-blur-lg border border-[#C6A04A]/40 p-3.5 sm:p-5 lg:p-6 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 text-left shadow-2xl">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Final B2B Costing
                  </span>
                  <p className="text-base sm:text-xl lg:text-2xl font-black text-white mt-0.5 leading-snug">
                    ₹17,900{" "}
                    <span className="text-xs sm:text-sm font-normal text-slate-300">
                      / Person
                    </span>
                  </p>
                  <p className="text-[10.5px] sm:text-xs text-amber-200/90 mt-0.5 font-medium">
                    + 5% GST Extra on Total Billing &bull; 16 Adults Group
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <a
                    href="#enquiry"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#C6A04A] via-[#E3C77E] to-[#C6A04A] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center whitespace-nowrap"
                  >
                    Get Package Quote
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center whitespace-nowrap"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. OPERATIONAL PARTNERSHIP NOTICE */}
        {/* ================================================================= */}
        <section className="bg-[#10213A] border-y border-[#C6A04A]/30 py-3 text-white text-xs">
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A04A]" />
              <span>
                <strong>Tour Operator:</strong> Ramayana Holidays Pvt. Ltd. &bull; <strong>Presented By:</strong> Khushi Tours &amp; Travels
              </span>
            </div>
            <div className="text-[#E3C77E] font-medium">
              Varanasi Arrival &bull; Prayagraj Sangam &bull; Ayodhya Darshan &bull; Lucknow Drop
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. PACKAGE OVERVIEW - SPECS & LOGISTICS */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A04A] mb-2">
                Tour Specifications
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10213A]">
                Comprehensive Package Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                All-inclusive B2B pilgrimage arrangement tailored for 16 adults in luxury pushback tempo traveller with 3-time meals and confirmed star stays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {/* Tour Operator Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  ★
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  Tour Operator Details
                </h3>
                <p className="text-sm text-slate-700 font-semibold">
                  Ramayana Holidays Pvt. Ltd.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Presented &amp; coordinated on Khushi Tours &amp; Travels platform for verified group departures.
                </p>
              </div>

              {/* Transit & Route */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  ⇄
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  Arrival &amp; Departure
                </h3>
                <p className="text-sm text-slate-700">
                  <strong>Arrival:</strong> Varanasi Airport / Railway Station
                </p>
                <p className="text-sm text-slate-700 mt-0.5">
                  <strong>Departure:</strong> Lucknow Airport / Railway Station
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Approx. 500–520 Kms total route distance.
                </p>
              </div>

              {/* Group & Room Structure */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  👥
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  Group &amp; Accommodation
                </h3>
                <p className="text-sm text-slate-700">
                  <strong>Group Size:</strong> 16 Adults
                </p>
                <p className="text-sm text-slate-700 mt-0.5">
                  <strong>Rooms:</strong> 08 Rooms on Double Sharing
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Confirmed premium property bookings throughout.
                </p>
              </div>

              {/* Meal Plan */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  🍽
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  APAI Meal Plan
                </h3>
                <p className="text-sm text-slate-700 font-semibold">
                  All Meals Included
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Daily Breakfast, Lunch, and Dinner provided with pure vegetarian satvik options suitable for devout pilgrims.
                </p>
              </div>

              {/* Dedicated Vehicle */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  🚐
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  Vehicle Provided
                </h3>
                <p className="text-sm text-slate-700 font-semibold">
                  20 Seater Tempo Traveller
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Pushback recliner seats, generous luggage boot, AC comfort, with fuel, parking, and all highway tolls included.
                </p>
              </div>

              {/* Sacred Inclusions */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f5f0] border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#10213A] text-[#E3C77E] flex items-center justify-center font-bold mb-4">
                  🕉
                </div>
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-1">
                  3 Sacred Boat Rides &amp; Darshans
                </h3>
                <p className="text-sm text-slate-700">
                  Ganga Aarti evening boat + morning boat in Varanasi &bull; Triveni Sangam snan boat in Prayagraj &bull; Ayodhya Sugam Darshan with golf cart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. CONFIRMED HOTEL ACCOMMODATIONS */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#10213A] text-white">
          <div className="container-custom max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3C77E] mb-2">
                Confirmed Stays
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Hotel Accommodations
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Clean, confirmed premium properties selected for group comfort, hygiene, and prime temple proximity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Hotel 1: Varanasi */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#193454] border border-[#C6A04A]/30 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C6A04A] text-slate-950">
                    02 Nights Stay
                  </span>
                  <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    Varanasi
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-1">
                  Hotel Ananta Kashi
                </h3>
                <p className="text-[#E3C77E] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                  Category: Premium Property
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Stay for Day 01 &amp; Day 02</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>08 Double-Sharing Deluxe Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Breakfast, Lunch &amp; Dinner Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Convenient access to Kashi Vishwanath Corridor &amp; Ghats</span>
                  </div>
                </div>
              </div>

              {/* Hotel 2: Ayodhya */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#193454] border border-[#C6A04A]/30 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C6A04A] text-slate-950">
                    01 Night Stay
                  </span>
                  <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    Ayodhya
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-1">
                  Hotel Mosaic
                </h3>
                <p className="text-[#E3C77E] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                  Category: Premium Property
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Stay for Day 03</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>08 Double-Sharing Deluxe Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Breakfast &amp; Dinner Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C6A04A]">✓</span>
                    <span>Close proximity to Shri Ram Janmabhoomi &amp; Saryu River</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. DETAILED FOUR-DAY ITINERARY TIMELINE */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A04A] mb-2">
                Sacred Yatra Schedule
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10213A]">
                Detailed 4-Day Pilgrimage Itinerary
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Every temple darshan, holy boat ride, and transit leg carefully orchestrated for seamless devotion and senior comfort.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Day 1 */}
              <div className="bg-[#f7f5f0] border border-[#C6A04A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#10213A] text-[#E3C77E] font-black text-xs flex items-center justify-center shrink-0">
                      01
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#10213A]">
                        DAY 01 – ARRIVAL VARANASI
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Kashi Vishwanath Sparsh Darshan &bull; Dashashwamedh Ganga Aarti
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C6A04A]/15 text-[#10213A] border border-[#C6A04A]/30">
                    Distance: 30–40 Kms
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Arrival at Varanasi Airport / Railway Station.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Warm reception and pickup by 20 Seater Luxury Tempo Traveller.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Check-in and refresh at <strong>Hotel Ananta Kashi</strong>, Varanasi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>
                      Evening: Divine <strong>SPARSH DARSHAN</strong> assistance at Shri Kashi Vishwanath Jyotirlinga.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Darshan at revered Annapurna Mata Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>
                      Witness the world-famous, awe-inspiring <strong>Ganga Maha Aarti</strong> at Dashashwamedh Ghat.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span className="font-semibold text-[#10213A]">
                      ★ Evening Boat Ride on River Ganga Included.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Dinner and overnight stay at Hotel Ananta Kashi, Varanasi.</span>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="bg-[#f7f5f0] border border-[#C6A04A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#10213A] text-[#E3C77E] font-black text-xs flex items-center justify-center shrink-0">
                      02
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#10213A]">
                        DAY 02 – VARANASI LOCAL SIGHTSEEING
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Subah-E-Banaras &bull; Sarnath Dham &bull; BHU &bull; Sankat Mochan
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C6A04A]/15 text-[#10213A] border border-[#C6A04A]/30">
                    Distance: 40–50 Kms
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Early morning: <strong>Subah-E-Banaras</strong> devotional experience at Assi Ghat.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Attend morning Assi Ghat Aarti.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span className="font-semibold text-[#10213A]">
                      ★ Morning Sunrise Boat Ride on River Ganga Included.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Return to hotel for breakfast.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Excursion to sacred <strong>Sarnath Dham</strong> (Dhamek Stupa &amp; deer park).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Visit the iconic BHU Vishwanath (Birla) Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Darshan at holy Sankat Mochan Hanuman Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Evening free for shopping Banarasi silks and local heritage souvenirs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>All meals (Breakfast + Lunch + Dinner) &amp; overnight stay at Hotel Ananta Kashi.</span>
                  </li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="bg-[#f7f5f0] border border-[#C6A04A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#10213A] text-[#E3C77E] font-black text-xs flex items-center justify-center shrink-0">
                      03
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#10213A]">
                        DAY 03 – VARANASI – PRAYAGRAJ – AYODHYA
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Triveni Sangam Snan &bull; Bade Hanuman Ji &bull; Transit to Ayodhya
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C6A04A]/15 text-[#10213A] border border-[#C6A04A]/30">
                    ~295 Kms / 8 Hours
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Breakfast and hotel checkout from Varanasi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Scenic highway drive from Varanasi to Prayagraj: 125 Kms / ~3 Hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>
                      Sacred <strong>Triveni Sangam Snan</strong> at holy confluence of Ganga, Yamuna &amp; Saraswati.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span className="font-semibold text-[#10213A]">
                      ★ Boat Ride for Sangam Snan Included.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Darshan at historic Bade Hanuman Ji Temple (reclining Hanuman posture).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Visit sacred Alopi Mata Shaktipeeth Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Continue highway drive from Prayagraj to Ayodhya: 170 Kms / 4–4.5 Hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Check-in at <strong>Hotel Mosaic</strong>, Ayodhya.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Dinner and overnight stay at Ayodhya.</span>
                  </li>
                </ul>
              </div>

              {/* Day 4 */}
              <div className="bg-[#f7f5f0] border border-[#C6A04A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#10213A] text-[#E3C77E] font-black text-xs flex items-center justify-center shrink-0">
                      04
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#10213A]">
                        DAY 04 – AYODHYA – LUCKNOW DEPARTURE
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Ram Janmabhoomi Sugam Darshan &bull; Hanuman Garhi &bull; Lucknow Drop
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C6A04A]/15 text-[#10213A] border border-[#C6A04A]/30">
                    ~135 Kms / 3 Hours
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Morning breakfast at hotel.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>
                      Divine <strong>SUGAM DARSHAN</strong> at grand <strong>Shri Ram Janmabhoomi Temple</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span className="font-semibold text-[#10213A]">
                      ★ Dedicated Golf Cart in Ayodhya Included for seamless darshan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Visit holy <strong>Hanuman Garhi</strong> fort temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Darshan at Kanak Bhawan &amp; historic Dashrath Mahal.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Peaceful <strong>Saryu River Aarti</strong> at the river ghats.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Afternoon drive from Ayodhya to Lucknow: 135 Kms / ~3 Hours via expressway.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Drop at Lucknow Airport / Railway Station with holy prasad &amp; blessed memories.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-bold text-[#10213A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-2 shrink-0" />
                    <span>Tour concludes happily with Khushi Tours &amp; Travels.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. DEDICATED TRANSPORT SECTION */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 bg-[#10213A] text-white">
          <div className="container-custom max-w-5xl">
            <div className="bg-gradient-to-br from-[#193454] to-[#0d213a] border border-[#C6A04A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C6A04A] text-slate-950">
                    Dedicated Chauffeur Driven Transport
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    20 Seater Luxury Tempo Traveller
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Enjoy relaxed pilgrimage touring with plush high-back pushback recliner seats, powerful dual AC, smooth air suspension, and experienced drivers who know every highway and temple access corridor.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                      <div className="text-[#E3C77E] font-bold text-sm">✓ Pushback Seats</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">2x1 / 2x2 luxury layout</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                      <div className="text-[#E3C77E] font-bold text-sm">✓ Fuel &amp; Driver</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">All fuel charges covered</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                      <div className="text-[#E3C77E] font-bold text-sm">✓ All Tolls Included</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">State &amp; highway FASTag</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                      <div className="text-[#E3C77E] font-bold text-sm">✓ Parking Included</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">All temple &amp; hotel parking</div>
                    </div>
                  </div>

                  <p className="text-xs text-amber-200/90 font-medium pt-1">
                    Route: Varanasi &rarr; Prayagraj &rarr; Ayodhya &rarr; Lucknow (Total ~500–520 Kms)
                  </p>
                </div>

                <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C6A04A]/30 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/fleet/force-urbania-rental-bangalore.webp")}
                    alt="20 Seater Luxury Tempo Traveller for Kashi Triveni Ayodhya"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213A] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E3C77E] bg-[#10213A]/90 px-3 py-1 rounded-full border border-[#C6A04A]/40 inline-block">
                      100% Owned Fleet &bull; GPS Monitored
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 7. PRICING SECTION - B2B TRANSPARENCY */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-br from-[#10213A] via-[#193454] to-[#10213A] text-white p-6 sm:p-10 md:p-12 border-2 border-[#C6A04A] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A04A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C6A04A] text-slate-950 mb-3 shadow">
                  FINAL B2B PACKAGE COSTING
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  ₹17,900{" "}
                  <span className="text-lg sm:text-xl font-normal text-amber-200">
                    / Person
                  </span>
                </h2>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#C6A04A]/40 text-xs sm:text-sm text-amber-200 font-semibold">
                  + 5% GST Extra on Total Billing
                </div>
              </div>

              {/* Group Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 text-center">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Duration
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    3 Nights / 4 Days
                  </span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Group Structure
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    16 Adults &bull; 08 Rooms
                  </span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#E3C77E] tracking-wider block">
                    Dedicated Vehicle
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    20 Seater Tempo
                  </span>
                </div>
              </div>

              {/* Strict Pricing Notes */}
              <div className="max-w-2xl mx-auto bg-black/20 rounded-xl p-4 border border-white/10 text-xs text-slate-300 space-y-1.5 mb-8 text-left">
                <p>
                  &bull; <strong>Per-Person Cost:</strong> ₹17,900 is the per-person B2B package cost based on 16 adults in 08 double-sharing rooms.
                </p>
                <p>
                  &bull; <strong>GST Terms:</strong> Government GST of 5% is strictly extra on total invoice billing.
                </p>
                <p>
                  &bull; <strong>Itemized Quotation:</strong> Full official invoice and dates confirmed upon advance booking deposit.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
                <a
                  href="#enquiry"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#C6A04A] via-[#E3C77E] to-[#C6A04A] text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Get Package Quote
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 8. INCLUSIONS & EXCLUSIONS */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f7f5f0]">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-8 h-8 rounded-full bg-[#10213A] text-[#C6A04A] flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#10213A]">
                      Package Inclusions
                    </h3>
                    <p className="text-xs text-slate-500">13 Verified Included Services</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Two nights at Hotel Ananta Kashi, Varanasi and one night at Hotel Mosaic, Ayodhya.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>APAI meal plan – Breakfast, Lunch and Dinner.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Varanasi Ganga Aarti Evening Boat Ride Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Varanasi Morning Boat Ride Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Triveni Sangam Snan Boat Ride Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>20 Seater Tempo Traveller from Varanasi to Lucknow via Prayagraj and Ayodhya.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>All Toll Charges Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>All Parking Charges Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Fuel Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Sugam Darshan at Ayodhya Ram Janmabhoomi Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Golf Cart in Ayodhya Included.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>Sparsh Darshan Assistance at Kashi Vishwanath Temple.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C6A04A] font-bold shrink-0">✓</span>
                    <span>All Hotel Taxes Included.</span>
                  </li>
                </ul>
              </div>

              {/* Exclusions Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-bold text-sm">
                      ✕
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-[#10213A]">
                        Package Exclusions
                      </h3>
                      <p className="text-xs text-slate-500">Clearly Defined Out-of-Scope Items</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span><strong>5% GST Extra</strong> on Total Billing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Entry Tickets at monuments or archaeological sites.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Guide Charges &amp; personal priest pooja Dakshina.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Anything not specifically mentioned in the inclusions above.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                  <strong>Senior Citizen Advisory:</strong> We recommend carrying comfortable footwear, essential prescription medicines, and valid photo ID cards (Aadhaar or Passport) required for temple security checks and hotel check-in.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 9. DESTINATION IMAGE GALLERY */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A04A] mb-2">
                Sacred Dham Vignettes
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10213A]">
                Destination Image Gallery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Genuine glimpses of the holy ghats, ancient jyotirlinga shrines, and historic monuments included on this tour.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Image 1: Dashashwamedh Ghat */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/varanasi-ganga-aarti.jpg")}
                  alt="Varanasi Dashashwamedh Ghat Ganga Aarti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Dashashwamedh Ghat Ganga Aarti, Varanasi
                  </span>
                </div>
              </div>

              {/* Image 2: Kashi Vishwanath */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/jyotirlingas/kashi-vishwanath.webp")}
                  alt="Shri Kashi Vishwanath Temple Varanasi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Shri Kashi Vishwanath Jyotirlinga
                  </span>
                </div>
              </div>

              {/* Image 3: Assi Ghat */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/Varanasi.webp")}
                  alt="Assi Ghat and Subah-E-Banaras"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Assi Ghat &amp; Subah-E-Banaras
                  </span>
                </div>
              </div>

              {/* Image 4: Triveni Sangam */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/triveni-sangam-prayagraj.jpg")}
                  alt="Triveni Sangam Prayagraj Sacred Confluence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Triveni Sangam Snan, Prayagraj
                  </span>
                </div>
              </div>

              {/* Image 5: Ayodhya Ram Mandir */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/ayodhya.webp")}
                  alt="Ram Janmabhoomi Temple Ayodhya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Shri Ram Janmabhoomi Mandir, Ayodhya
                  </span>
                </div>
              </div>

              {/* Image 6: Saryu River Ghats */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/saryu-river-ayodhya.jpg")}
                  alt="Holy Saryu River and Ram Ki Paidi Ayodhya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Holy Saryu River &amp; Ram Ki Paidi
                  </span>
                </div>
              </div>

              {/* Image 7: Hanuman Garhi & Temples */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/mathura.webp")}
                  alt="Sacred Heritage Shrines"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    Hanuman Garhi &amp; Kanak Bhawan
                  </span>
                </div>
              </div>

              {/* Image 8: Luxury Group Tempo Transport */}
              <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/fleet/luxury-car-rental-bangalore.webp")}
                  alt="Luxury Group Transport"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white leading-tight">
                    20 Seater Chauffeur-Driven Luxury Tempo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 10. ENQUIRY AND BOOKING FORM SECTION */}
        {/* ================================================================= */}
        <section id="enquiry" className="py-12 sm:py-16 md:py-20 bg-[#10213A] text-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3C77E] mb-2">
                Instant Departure Enquiry
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Book Your Sacred Yatra
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Get an official itemized B2B quotation, customized rooming options, and date confirmation directly from Khushi Tours &amp; Travels.
              </p>
            </div>

            <KashiEnquiryForm />
          </div>
        </section>

        {/* ================================================================= */}
        {/* 11. FAQ ACCORDION */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A] block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#10213A]">
                Trip Information &amp; FAQs
              </h2>
            </div>

            <div className="space-y-4 text-left">
              <div className="bg-[#f7f5f0] rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-2">
                  What is the booking deposit and payment schedule?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A nominal advance token confirms your 20-seater Tempo Traveller and hotel room blocks. The remaining balance is payable prior to trip departure as outlined in your official B2B invoice.
                </p>
              </div>

              <div className="bg-[#f7f5f0] rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-2">
                  Can meals be customized for Jain or special diets?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. All meals provided under the APAI plan are pure vegetarian, and special satvik or Jain preferences without onion and garlic can be arranged with prior notification at booking.
                </p>
              </div>

              <div className="bg-[#f7f5f0] rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-2">
                  How does the temple darshan assistance work?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our team coordinates Sparsh Darshan protocol assistance at Shri Kashi Vishwanath Jyotirlinga and Sugam Darshan with dedicated golf cart transfers at Ayodhya Ram Janmabhoomi to minimize walking fatigue for elders.
                </p>
              </div>

              <div className="bg-[#f7f5f0] rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-heading font-bold text-base text-[#10213A] mb-2">
                  What if our group has more or fewer than 16 adults?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The ₹17,900 / person rate is optimized for a group of 16 adults in a 20-seater Tempo Traveller. For custom group sizes, please contact our helpline at +91 99013 33113 for a tailored quote.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

