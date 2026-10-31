"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TravelNoticeTicker from "@/components/TravelNoticeTicker";
import { getAssetPath } from "@/lib/assets";
import KashiEnquiryForm from "./KashiEnquiryForm";

interface KashiPackageDetailClientProps {
  breadcrumbs: Array<{ label: string; href: string }>;
  whatsappLink: string;
}

export default function KashiPackageDetailClient({
  breadcrumbs,
  whatsappLink,
}: KashiPackageDetailClientProps) {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const itineraryDays = [
    {
      day: 1,
      badge: "DAY 01",
      title: "Arrival in Varanasi – Kashi Vishwanath Sparsh Darshan & Dashashwamedh Ganga Aarti",
      route: "Varanasi Airport / Station → Hotel Ananta Kashi → Kashi Vishwanath → Dashashwamedh Ghat",
      distance: "30–40 Kms",
      duration: "Local City Transit",
      stay: "Hotel Ananta Kashi, Varanasi (Deluxe Double Room)",
      meals: "Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/varanasi-ganga-aarti.jpg",
      highlights: [
        "Warm reception at Varanasi Airport / Railway Station by your 20-Seater Tempo Chauffeur.",
        "Check-in and refresh at confirmed Hotel Ananta Kashi, Varanasi.",
        "Evening Sparsh Darshan assistance at Shri Kashi Vishwanath Jyotirlinga Temple.",
        "Darshan at the sacred Annapurna Mata Mandir.",
        "Witness the world-renowned, celestial Ganga Maha Aarti at Dashashwamedh Ghat.",
        "★ Included: Sacred Evening Boat Ride on River Ganga along the illuminated ghats.",
        "Overnight stay at Hotel Ananta Kashi with dinner.",
      ],
    },
    {
      day: 2,
      badge: "DAY 02",
      title: "Varanasi Local Sightseeing – Subah-E-Banaras, Sarnath Dham & BHU Vishwanath",
      route: "Assi Ghat → Sarnath Dham → BHU New Vishwanath → Sankat Mochan → Hotel Ananta Kashi",
      distance: "40–50 Kms",
      duration: "Full Day Local Excursion",
      stay: "Hotel Ananta Kashi, Varanasi (Deluxe Double Room)",
      meals: "Breakfast, Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/Varanasi.webp",
      highlights: [
        "Early morning: Experience peaceful Subah-E-Banaras cultural Aarti at Assi Ghat.",
        "★ Included: Morning Sunrise Boat Ride on River Ganga with panoramic ghat views.",
        "Return to hotel for a hearty satvik breakfast.",
        "Sacred excursion to Sarnath Dham – Dhamek Stupa, Mulgandha Kuti Vihar & Deer Park.",
        "Visit the grand Banaras Hindu University (BHU) New Vishwanath Temple (Birla Temple).",
        "Darshan at holy Sankat Mochan Hanuman Temple and Durga Kund Mandir.",
        "Evening free for shopping world-famous Banarasi silk sarees and local handicrafts.",
        "All meals (Breakfast + Lunch + Dinner) and overnight stay at Hotel Ananta Kashi.",
      ],
    },
    {
      day: 3,
      badge: "DAY 03",
      title: "Varanasi to Prayagraj (Triveni Sangam Snan) to Ayodhya",
      route: "Varanasi → Prayagraj Sangam → Bade Hanuman Ji → Alopi Mata → Ayodhya",
      distance: "295 Kms Total",
      duration: "Approx. 7.5–8 Hours Drive",
      stay: "Hotel Mosaic, Ayodhya (Deluxe Double Room)",
      meals: "Breakfast, Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/triveni-sangam-prayagraj.jpg",
      highlights: [
        "Morning satvik breakfast and hotel checkout from Varanasi.",
        "Scenic highway journey from Varanasi to Prayagraj (125 Kms / ~3 Hours) in comfortable 20-Seater Tempo.",
        "Sacred Triveni Sangam Snan at the holy confluence of Ganga, Yamuna & invisible Saraswati.",
        "★ Included: Private Boat Ride to the exact Triveni Sangam point for holy bath.",
        "Darshan at historic Bade Hanuman Ji Temple (unique reclining / sleeping Hanuman idol).",
        "Darshan at revered Alopi Devi Shaktipeeth Mandir and Anand Bhawan outer view.",
        "Post-lunch drive from Prayagraj to sacred city of Ayodhya (170 Kms / 4–4.5 Hours).",
        "Check-in at confirmed Hotel Mosaic, Ayodhya; evening dinner and relaxing overnight stay.",
      ],
    },
    {
      day: 4,
      badge: "DAY 04",
      title: "Ayodhya Ram Janmabhoomi Sugam Darshan to Lucknow Departure",
      route: "Hotel Mosaic → Ram Janmabhoomi → Hanuman Garhi → Saryu River → Lucknow Drop",
      distance: "135 Kms Transit",
      duration: "Approx. 3 Hours to Lucknow",
      stay: "Tour Concludes with Lucknow Drop",
      meals: "Breakfast Included (APAI Plan)",
      image: "/images/destinations/ayodhya.webp",
      highlights: [
        "Morning breakfast and smooth checkout from Hotel Mosaic, Ayodhya.",
        "Divine Sugam Darshan at the magnificent Shri Ram Janmabhoomi Temple.",
        "★ Included: Dedicated Golf Cart transfer inside Ayodhya complex for senior citizen ease.",
        "Ascend to historic Hanuman Garhi fort temple for blessings of Lord Hanuman.",
        "Darshan at beautiful Kanak Bhawan & historic Dashrath Mahal.",
        "Peaceful Saryu River Aarti and holy water sprinkling at Ram Ki Paidi ghats.",
        "Afternoon highway journey to Lucknow (135 Kms / ~3 Hours via expressway).",
        "Safe transfer and drop at Lucknow Airport / Railway Station with holy prasad & cherished memories.",
      ],
    },
  ];

  const galleryImages = [
    {
      url: "/images/destinations/varanasi-ganga-aarti.jpg",
      title: "Ganga Maha Aarti at Dashashwamedh Ghat, Varanasi",
      category: "Varanasi",
    },
    {
      url: "/images/destinations/jyotirlingas/kashi-vishwanath.webp",
      title: "Shri Kashi Vishwanath Jyotirlinga Dham Corridor",
      category: "Kashi Darshan",
    },
    {
      url: "/images/destinations/Varanasi.webp",
      title: "Subah-E-Banaras Sunrise Boat Ride on River Ganga",
      category: "Ghats of Banaras",
    },
    {
      url: "/images/destinations/triveni-sangam-prayagraj.jpg",
      title: "Sacred Triveni Sangam Snan & Confluence, Prayagraj",
      category: "Prayagraj",
    },
    {
      url: "/images/destinations/ayodhya.webp",
      title: "Grand Shri Ram Janmabhoomi Mandir, Ayodhya",
      category: "Ayodhya Dham",
    },
    {
      url: "/images/destinations/saryu-river-ayodhya.jpg",
      title: "Holy Saryu River & Ram Ki Paidi Ghats, Ayodhya",
      category: "Saryu River",
    },
    {
      url: "/images/destinations/mathura.webp",
      title: "Heritage Mandirs – Hanuman Garhi & Kanak Bhawan",
      category: "Sacred Shrines",
    },
    {
      url: "/images/fleet/luxury-19-seater-tempo-traveller-bangalore-4.webp",
      title: "20-Seater Luxury Pushback AC Tempo Traveller",
      category: "Fleet Comfort",
    },
  ];

  const faqs = [
    {
      question: "What is the B2B package cost and how is it calculated?",
      answer:
        "The package cost is ₹17,900 per person, calculated for a private group of 16 adults traveling together. Accommodation is arranged across 08 Deluxe Double-sharing rooms. Government GST of 5% applies extra on the total invoice billing.",
    },
    {
      question: "Which hotels are confirmed for this pilgrimage?",
      answer:
        "You stay 2 Nights in Varanasi at Hotel Ananta Kashi and 1 Night in Ayodhya at Hotel Mosaic. Both are verified, high-rated properties offering 08 Double-sharing air-conditioned deluxe rooms, lift facilities, 24/7 hot water, and pure vegetarian satvik dining.",
    },
    {
      question: "What vehicle is provided for the entire 4-day route?",
      answer:
        "A dedicated, sanitized 20-Seater Luxury Tempo Traveller with pushback recliner seats (2x1 layout), powerful dual AC, large luggage trunk, and an experienced pilgrimage chauffeur is dedicated for your group from Varanasi arrival up to Lucknow drop. Fuel, state taxes, parking, and all highway tolls are completely covered.",
    },
    {
      question: "Are sacred boat rides and temple darshan fees included?",
      answer:
        "Yes, all 3 scheduled boat rides are fully included: (1) Evening Ganga Aarti boat ride in Varanasi, (2) Morning Subah-E-Banaras sunrise boat ride in Varanasi, and (3) Prayagraj Triveni Sangam snan boat ride. In Ayodhya, dedicated golf cart transfer and Sugam Darshan assistance are included. In Kashi, Vishwanath Sparsh Darshan assistance is included.",
    },
    {
      question: "Can special Jain or garlic-free meals be arranged?",
      answer:
        "Yes, absolutely. The package includes the APAI all-meals plan (Breakfast, Lunch, and Dinner). All food served is 100% pure vegetarian, and special Jain (no onion, no garlic) or senior-friendly satvik preferences can easily be coordinated with our hospitality partners upon booking.",
    },
    {
      question: "What assistance is provided for elderly pilgrims and senior citizens?",
      answer:
        "We understand the physical demands of holy yatras. We provide dedicated golf cart transfers inside the sprawling Ayodhya Ram Mandir complex, priority darshan coordination, close tempo drop points wherever permitted by local authorities, and hotels equipped with elevators to minimize fatigue for elderly family members.",
    },
    {
      question: "What is the booking deposit and payment confirmation process?",
      answer:
        "To lock your travel dates, vehicle allocation, and hotel rooms, a 30% advance deposit is required upon invoice generation. The remaining balance is payable prior to trip commencement as specified in your Khushi Tours & Travels booking confirmation voucher.",
    },
  ];

  return (
    <div className="bg-[#F8F7F3] text-slate-800 antialiased font-sans pb-16 sm:pb-0">
      {/* ================================================================= */}
      {/* 1. IMPORTANT TRAVEL NOTICE TICKER */}
      {/* ================================================================= */}
      <TravelNoticeTicker />

      {/* ================================================================= */}
      {/* 2. CINEMATIC HERO SECTION (TWO-COLUMN EDITORIAL) */}
      {/* ================================================================= */}
      <section
        className="relative overflow-hidden text-white pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20"
        style={{
          background: `linear-gradient(135deg, rgba(16, 33, 58, 0.94) 0%, rgba(19, 42, 74, 0.90) 50%, rgba(10, 22, 40, 0.96) 100%), url('${getAssetPath(
            "/images/destinations/varanasi-ganga-aarti.jpg"
          )}') center/cover no-repeat`,
        }}
      >
        {/* Subtle decorative gold gradient aura */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A04A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-4 sm:mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Editorial Yatra Presentation */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6A04A] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                  03 Nights / 04 Days
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C77E] text-xs font-semibold tracking-wider">
                  ✦ Sacred Pilgrimage Circuit
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  ✓ Confirmed Departure
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <p className="text-[#C6A04A] text-xs sm:text-sm font-bold uppercase tracking-widest mb-1.5">
                  Varanasi &bull; Prayagraj &bull; Ayodhya &bull; Lucknow
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                  Kashi – Triveni –{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3C77E] via-[#F59E0B] to-[#E3C77E]">
                    Ayodhya Yatra
                  </span>
                </h1>
                <p className="text-amber-100/90 text-sm sm:text-base md:text-lg font-serif italic mt-2.5 max-w-2xl leading-relaxed">
                  A divine journey through Kashi Vishwanath Jyotirlinga, holy Triveni Sangam Snan, and grand Ram Janmabhoomi Mandir.
                </p>
              </div>

              {/* Route Stepper Pill */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
                <span className="text-white">Varanasi</span>
                <span className="text-[#C6A04A] font-bold">&rarr;</span>
                <span className="text-white">Prayagraj</span>
                <span className="text-[#C6A04A] font-bold">&rarr;</span>
                <span className="text-white">Ayodhya</span>
                <span className="text-[#C6A04A] font-bold">&rarr;</span>
                <span className="text-amber-300">Lucknow Drop</span>
                <span className="text-white/50 text-xs ml-1">(~520 Kms)</span>
              </div>

              {/* 4 Core Highlight Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                <div className="bg-[#10213A]/70 backdrop-blur-md border border-[#C6A04A]/30 p-2.5 sm:p-3 rounded-xl text-left">
                  <div className="text-[#E3C77E] text-base mb-1">🕉</div>
                  <div className="text-white font-bold text-xs">Kashi Vishwanath</div>
                  <div className="text-slate-300 text-[10px]">Sparsh Darshan Aid</div>
                </div>

                <div className="bg-[#10213A]/70 backdrop-blur-md border border-[#C6A04A]/30 p-2.5 sm:p-3 rounded-xl text-left">
                  <div className="text-[#E3C77E] text-base mb-1">⛵</div>
                  <div className="text-white font-bold text-xs">3 Sacred Boat Rides</div>
                  <div className="text-slate-300 text-[10px]">Aarti, Sunrise &amp; Sangam</div>
                </div>

                <div className="bg-[#10213A]/70 backdrop-blur-md border border-[#C6A04A]/30 p-2.5 sm:p-3 rounded-xl text-left">
                  <div className="text-[#E3C77E] text-base mb-1">🛕</div>
                  <div className="text-white font-bold text-xs">Ram Janmabhoomi</div>
                  <div className="text-slate-300 text-[10px]">Sugam Darshan &amp; Cart</div>
                </div>

                <div className="bg-[#10213A]/70 backdrop-blur-md border border-[#C6A04A]/30 p-2.5 sm:p-3 rounded-xl text-left">
                  <div className="text-[#E3C77E] text-base mb-1">🚐</div>
                  <div className="text-white font-bold text-xs">20 Seater Tempo</div>
                  <div className="text-slate-300 text-[10px]">Pushback AC Comfort</div>
                </div>
              </div>

              {/* Reassuring Inclusions Row */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>APAI All Meals (Breakfast + Lunch + Dinner)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>08 Deluxe Rooms (16 Adults)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>Tolls, Parking &amp; Driver Covered</span>
                </span>
              </div>
            </div>

            {/* Right Column: Embedded Immediate Booking / Quote Form */}
            <div className="lg:col-span-5 w-full">
              <KashiEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. PACKAGE QUICK INFORMATION STRIP (5 PILLARS) */}
      {/* ================================================================= */}
      <section className="relative -mt-6 z-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-[22px] border border-[#E8E6E0] p-4 sm:p-6 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-2 sm:p-3 text-left">
                <span className="text-[10px] uppercase font-bold text-[#C6A04A] tracking-wider block">
                  Duration
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#10213A] block mt-0.5">
                  03 Nights / 04 Days
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Varanasi to Lucknow
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[10px] uppercase font-bold text-[#C6A04A] tracking-wider block">
                  Group Size
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#10213A] block mt-0.5">
                  16 Adults
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Family &amp; devotee group
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[10px] uppercase font-bold text-[#C6A04A] tracking-wider block">
                  Accommodation
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#10213A] block mt-0.5">
                  08 Double Rooms
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Hotel Ananta &amp; Mosaic
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[10px] uppercase font-bold text-[#C6A04A] tracking-wider block">
                  Meal Plan
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#10213A] block mt-0.5">
                  APAI – All Meals
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Breakfast, Lunch &amp; Dinner
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 p-2 sm:p-3 text-left">
                <span className="text-[10px] uppercase font-bold text-[#C6A04A] tracking-wider block">
                  Transport
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#10213A] block mt-0.5">
                  20-Seater Tempo
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Chauffeur driven AC luxury
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. COMPREHENSIVE PACKAGE OVERVIEW */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story & Sacred Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10213A]/5 border border-[#10213A]/10 text-[#10213A] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A]" />
                <span>The Sacred Pilgrimage Circuit</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#10213A] tracking-tight leading-tight">
                Experience the Sacred Trinity of Sanatana Devotion
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Step into a journey that has transformed seekers for thousands of years. The <strong>Kashi – Triveni – Ayodhya Yatra</strong> connects the three pillars of spiritual liberation: the eternal cosmic grace of <strong>Shri Kashi Vishwanath</strong> in Varanasi, the sins-cleansing confluence of the holy <strong>Triveni Sangam</strong> in Prayagraj, and the grand divine presence of Maryada Purushottam <strong>Shri Ram Janmabhoomi</strong> in Ayodhya.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Carefully curated by Khushi Tours &amp; Travels in partnership with Ramayana Holidays Pvt. Ltd., this exclusive itinerary eliminates the stress and physical exhaustion typical of crowded pilgrimage travel. We provide dedicated pushback tempo travel, confirmed accommodations at premier hotels, pre-arranged holy boat rides, and gentle assistance for elderly family members.
              </p>

              {/* 4 Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8E6E0]">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#C6A04A] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-xs text-[#10213A]">Priority Temple Support</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sparsh Darshan coordination in Kashi &amp; golf cart in Ayodhya.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8E6E0]">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#C6A04A] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-xs text-[#10213A]">Satvik APAI Meals</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Hygienic pure vegetarian breakfast, lunch &amp; dinner included.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8E6E0]">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#C6A04A] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-xs text-[#10213A]">Senior-Friendly Pace</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Relaxed driving schedules with elevator-equipped hotels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8E6E0]">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#C6A04A] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-xs text-[#10213A]">All-Inclusive Pricing</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Fuel, highway tolls, parking &amp; boat rides fully covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E8E6E0] bg-white shadow-xl shadow-slate-900/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/destinations/varanasi-ganga-aarti.jpg")}
                    alt="Kashi Triveni Ayodhya Pilgrimage Journey"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C6A04A] text-slate-950 shadow">
                      Curated Spiritual Tour
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <p className="text-xs font-serif italic text-amber-200">
                      Dashashwamedh Ghat Evening Ganga Maha Aarti
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      3 Sacred Boat Rides Included on Ganga &amp; Sangam
                    </p>
                  </div>
                </div>

                <div className="p-5 text-left bg-white">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                    <span className="text-slate-500">Presented By:</span>
                    <span className="font-bold text-[#10213A]">Khushi Tours &amp; Travels</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-xs">
                    <span className="text-slate-500">B2B Costing:</span>
                    <span className="font-extrabold text-[#10213A]">
                      ₹17,900 / Person <span className="text-slate-400 font-normal">(+5% GST)</span>
                    </span>
                  </div>
                  <div className="pt-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#10213A] hover:bg-[#193454] text-white text-xs font-bold transition-all shadow"
                    >
                      <span>Inquire Directly on WhatsApp</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. FOUR-DAY DETAILED ITINERARY */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-[#E8E6E0]">
        <div className="container-custom max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10213A]/5 border border-[#10213A]/10 text-[#10213A] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A]" />
              <span>Sacred Yatra Day-by-Day Schedule</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#10213A]">
              Detailed 4-Day Pilgrimage Itinerary
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every holy temple darshan, river boat ride, and highway transit leg orchestrated for deep peace of mind.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {itineraryDays.map((item) => {
              const isExpanded = activeDay === item.day;
              return (
                <div
                  key={item.day}
                  className="rounded-2xl sm:rounded-3xl border border-[#E8E6E0] bg-[#F8F7F3] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Thumbnail */}
                    <div className="lg:col-span-4 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-[#C6A04A] text-slate-950 shadow">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white lg:hidden">
                        <p className="text-xs font-semibold">{item.distance}</p>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-8 p-5 sm:p-7 text-left space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E6E0] pb-3">
                        <div>
                          <span className="hidden lg:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#10213A] text-[#E3C77E] uppercase tracking-wider mb-1">
                            {item.badge}
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#10213A] leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <div className="hidden lg:flex flex-col items-end text-xs">
                          <span className="font-bold text-[#10213A]">{item.distance}</span>
                          <span className="text-slate-500 text-[11px]">{item.duration}</span>
                        </div>
                      </div>

                      {/* Route & Stay Pills */}
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-start gap-2 text-slate-600">
                          <span className="text-[#C6A04A] font-bold">📍 Route:</span>
                          <span className="font-medium">{item.route}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-600">
                          <span className="text-[#C6A04A] font-bold">🏨 Stay:</span>
                          <span className="font-medium text-[#10213A]">{item.stay}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-600">
                          <span className="text-[#C6A04A] font-bold">🍽 Meals:</span>
                          <span className="font-medium text-emerald-700">{item.meals}</span>
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="pt-2">
                        <div className="font-bold text-xs text-[#10213A] uppercase tracking-wider mb-2">
                          Day&apos;s Highlights &amp; Activities:
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {item.highlights.slice(0, isExpanded ? undefined : 4).map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-1.5 shrink-0" />
                              <span
                                className={
                                  h.includes("★ Included")
                                    ? "font-bold text-[#10213A] bg-amber-50/80 px-1.5 py-0.5 rounded"
                                    : ""
                                }
                              >
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {item.highlights.length > 4 && (
                          <button
                            type="button"
                            onClick={() => setActiveDay(isExpanded ? null : item.day)}
                            className="mt-3 text-xs font-bold text-[#10213A] hover:text-[#C6A04A] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{isExpanded ? "Show Less Details" : `View All ${item.highlights.length} Activities`}</span>
                            <span>{isExpanded ? "↑" : "↓"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. CONFIRMED HOTEL ACCOMMODATIONS */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#10213A] text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3C77E] mb-2">
              Confirmed Premium Stays
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Handpicked Hotel Accommodations
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Confirmed star properties selected for senior comfort, hygiene, elevator access, and prime proximity to sacred temples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Hotel 1: Varanasi */}
            <div className="rounded-3xl bg-[#193454] border border-[#C6A04A]/30 p-6 sm:p-8 text-left relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#C6A04A] text-slate-950">
                  02 Nights Stay
                </span>
                <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                  <span>📍</span>
                  <span>Varanasi</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Hotel Ananta Kashi
              </h3>
              <p className="text-[#E3C77E] text-xs font-semibold uppercase tracking-wider mb-4">
                Category: Premium Boutique Hotel &bull; Day 01 &amp; Day 02
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span><strong>08 Double-Sharing Deluxe Rooms</strong> (16 Adults)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span><strong>APAI Meal Plan:</strong> Daily Breakfast, Lunch &amp; Dinner</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>Convenient access to Kashi Vishwanath Corridor &amp; Ghats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>Elevator access, 24/7 hot water, pure vegetarian restaurant</span>
                </div>
              </div>
            </div>

            {/* Hotel 2: Ayodhya */}
            <div className="rounded-3xl bg-[#193454] border border-[#C6A04A]/30 p-6 sm:p-8 text-left relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#C6A04A] text-slate-950">
                  01 Night Stay
                </span>
                <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                  <span>📍</span>
                  <span>Ayodhya</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Hotel Mosaic
              </h3>
              <p className="text-[#E3C77E] text-xs font-semibold uppercase tracking-wider mb-4">
                Category: Premium Property &bull; Day 03
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span><strong>08 Double-Sharing Deluxe Rooms</strong> (16 Adults)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span><strong>APAI Meal Plan:</strong> Dinner &amp; Next Morning Breakfast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>Close proximity to Shri Ram Janmabhoomi &amp; Saryu River</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">✓</span>
                  <span>Modern comforts, sanitized premises, friendly hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. VEHICLE SPECIFICATION - 20 SEATER TEMPO TRAVELLER */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="bg-[#F8F7F3] border border-[#E8E6E0] rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#10213A] text-[#E3C77E]">
                  Dedicated Chauffeur Driven Transport
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10213A]">
                  20 Seater Luxury Tempo Traveller
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Travel together in absolute comfort across Uttar Pradesh highways. Our dedicated 20-seater luxury tempo traveller provides high-back leather pushback recliners, individual air-conditioning vents, wide tinted view windows, and generous boot space for 16 passengers&apos; luggage.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white rounded-xl p-3 border border-[#E8E6E0]">
                    <div className="text-[#10213A] font-bold text-xs sm:text-sm">✓ Pushback Recliners</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">2x1 layout for legroom</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[#E8E6E0]">
                    <div className="text-[#10213A] font-bold text-xs sm:text-sm">✓ Fuel &amp; Driver</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">All driver allowances paid</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[#E8E6E0]">
                    <div className="text-[#10213A] font-bold text-xs sm:text-sm">✓ All Tolls Included</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">State &amp; highway FASTag</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[#E8E6E0]">
                    <div className="text-[#10213A] font-bold text-xs sm:text-sm">✓ Parking Included</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">All temple &amp; hotel parking</div>
                  </div>
                </div>

                <p className="text-xs text-[#10213A] font-semibold pt-1">
                  Complete Route: Varanasi &rarr; Prayagraj &rarr; Ayodhya &rarr; Lucknow (~520 Kms)
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E6E0] shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/fleet/tempo-traveller-bangalore.webp")}
                  alt="20 Seater Luxury Tempo Traveller for Kashi Triveni Ayodhya"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10213A] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E3C77E] bg-[#10213A]/90 px-3 py-1 rounded-full border border-[#C6A04A]/40 inline-block">
                    Sanitized Fleet &bull; GPS Monitored Chauffeur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 8. PRICING SECTION - B2B TRANSPARENCY */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F7F3]">
        <div className="container-custom max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#10213A] via-[#193454] to-[#10213A] text-white p-6 sm:p-10 md:p-12 border-2 border-[#C6A04A] shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A04A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C6A04A] text-slate-950 mb-3 shadow">
                FINAL B2B PACKAGE COSTING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
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
            <div className="max-w-2xl mx-auto bg-black/25 rounded-xl p-4 border border-white/10 text-xs text-slate-300 space-y-1.5 mb-8 text-left">
              <p>
                &bull; <strong>Per-Person Rate:</strong> ₹17,900 is the final B2B package price calculated for 16 adults in 08 double-sharing rooms.
              </p>
              <p>
                &bull; <strong>GST Terms:</strong> Government GST of 5% applies extra on total invoice billing.
              </p>
              <p>
                &bull; <strong>Custom Group Sizes:</strong> If your group has fewer or more than 16 members, contact our team for a recalculated quotation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C6A04A] via-[#E3C77E] to-[#C6A04A] text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
              >
                Book via WhatsApp
              </a>
              <a
                href="tel:+919901333113"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
              >
                Call +91 99013 33113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 9. INCLUSIONS & EXCLUSIONS */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A04A] mb-2">
              Transparency First
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#10213A]">
              Package Inclusions &amp; Exclusions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every item clearly listed with complete integrity. No hidden surprises on the highway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions Card */}
            <div className="bg-[#F8F7F3] rounded-3xl p-6 sm:p-8 border border-[#E8E6E0] shadow-sm text-left">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#10213A]">
                    Package Inclusions
                  </h3>
                  <p className="text-xs text-slate-500">13 Verified Included Services</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Two nights stay at Hotel Ananta Kashi, Varanasi (08 Double Rooms).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>One night stay at Hotel Mosaic, Ayodhya (08 Double Rooms).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>APAI Meal Plan:</strong> Daily satvik Breakfast, Lunch, and Dinner included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>Varanasi Ganga Aarti Evening Boat Ride</strong> Included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>Varanasi Morning Sunrise Boat Ride</strong> Included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>Triveni Sangam Snan Boat Ride</strong> in Prayagraj Included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Dedicated 20-Seater Luxury Tempo Traveller from Varanasi to Lucknow.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>All Highway FASTag and State Toll Charges Included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>All Temple &amp; Hotel Parking Charges Included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Driver Allowances, night charges &amp; fuel included.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>Sugam Darshan Assistance</strong> at Ayodhya Ram Janmabhoomi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>Dedicated Golf Cart in Ayodhya</strong> Included for elders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Sparsh Darshan protocol assistance at Kashi Vishwanath.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions Card */}
            <div className="bg-[#F8F7F3] rounded-3xl p-6 sm:p-8 border border-[#E8E6E0] shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#10213A]">
                      Package Exclusions
                    </h3>
                    <p className="text-xs text-slate-500">Clearly Defined Out-of-Scope Items</p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>5% Government GST Extra</strong> on Total Billing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Train tickets or Airfare to Varanasi / from Lucknow.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Entry tickets at archaeological monuments or museum entry fees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Personal priest dakshina, special sankalp pooja samagri, or laundry.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Anything not explicitly mentioned in the inclusions above.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                <strong>Senior Pilgrim Advisory:</strong> We recommend carrying comfortable walking footwear, essential daily medicines, and original government photo identification (Aadhaar Card or Passport) mandatory for temple security entries and hotel rooming.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 10. AUTHENTIC DESTINATION & PILGRIMAGE GALLERY WITH LIGHTBOX */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F7F3]">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A04A] mb-2">
              Sacred Vignettes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#10213A]">
              Destination Pilgrimage Gallery
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Authentic glimpses of the sacred ghats, ancient temple corridors, and luxury transit included in your yatra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImage({ url: img.url, title: img.title })}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-[#E8E6E0] shadow-sm relative aspect-[4/3] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(img.url)}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E3C77E]">
                    {img.category}
                  </span>
                  <span className="text-xs font-bold text-white leading-tight mt-0.5">
                    {img.title}
                  </span>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-1.5 backdrop-blur-sm">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative text-left"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center text-sm font-bold transition-all"
            >
              ✕
            </button>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath(lightboxImage.url)}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold">{lightboxImage.title}</span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="text-xs text-[#E3C77E] hover:underline"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 11. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A] block mb-2">
              Trip Clarifications
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10213A]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Find answers to the most common queries regarding booking, darshans, food, and facilities.
            </p>
          </div>

          <div className="space-y-3.5 text-left">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#F8F7F3] rounded-2xl border border-[#E8E6E0] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-serif font-bold text-sm sm:text-base text-[#10213A] hover:text-[#C6A04A] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-white border border-[#E8E6E0] flex items-center justify-center text-xs shrink-0 text-[#10213A]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 12. FINAL CONVERSION STRIP */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 bg-[#10213A] text-white text-center">
        <div className="container-custom max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6A04A] text-slate-950 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>Ready for the Divine Yatra?</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Reserve Your 16-Adult Sacred Pilgrimage Departure Today
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our pilgrimage coordination desk is available 24/7 to assist with customized dates, train connection advice, and immediate booking confirmation vouchers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-lg"
            >
              <span>Instant WhatsApp Confirmation</span>
            </a>
            <a
              href="tel:+919901333113"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <span>Call Helpline: +91 99013 33113</span>
            </a>
          </div>

          <p className="text-[11px] text-amber-200/80 pt-2">
            Khushi Tours &amp; Travels &bull; Ground Floor No: 2, Kodigehalli Main Road, Virupakshapura, Bengaluru - 560097
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 13. FLOATING WHATSAPP BUTTON (DESKTOP & MOBILE) */}
      {/* ================================================================= */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire about Kashi Triveni Ayodhya Yatra on WhatsApp"
          className="group flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden md:inline font-bold text-xs tracking-wide">
            Yatra Inquiry
          </span>
        </a>
      </aside>

      {/* ================================================================= */}
      {/* 14. MOBILE STICKY BOTTOM ACTION BAR */}
      {/* ================================================================= */}
      <aside aria-label="Mobile Quick Booking" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E6E0] p-2.5 sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="tel:+919901333113"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#10213A] text-white font-bold text-xs active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call Desk</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp ₹17,900</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
