"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

interface PilgrimageTourSlide {
  id: string;
  badgeTop: string;
  badgeBottomTitle: string;
  badgeBottomSubtitle: string;
  image: string;
  imageAlt: string;
  tag1: string;
  tag2: string;
  titlePart1: string;
  titleHighlight: string;
  tagline: string;
  description: string;
  stats: {
    value: string;
    label: string;
    highlight?: boolean;
  }[];
  price: string;
  priceLabel: string;
  guarantees: string[];
  ctaText: string;
  href: string;
}

const PILGRIMAGE_SLIDES: PilgrimageTourSlide[] = [
  {
    id: "12-jyotirlinga",
    badgeTop: "FEATURED",
    badgeBottomTitle: "Spiritual",
    badgeBottomSubtitle: "PILGRIMAGE",
    image: "/images/destinations/Rameswaram.webp",
    imageAlt: "12 Dwadasha Jyotirlinga Darshana pilgrimage tour temple gopuram",
    tag1: "PROPOSED PILGRIMAGE PACKAGE",
    tag2: "Proposed 25-Day Yatra • Bengaluru Departure",
    titlePart1: "25–Day 12 Jyotirlinga",
    titleHighlight: "Spiritual Yatra",
    tagline:
      "Twelve Sacred Jyotirlingas. More Sacred Destinations. One Unforgettable Journey.",
    description:
      "Join Khushi Tours & Travels on a proposed 25-day pilgrimage from Bengaluru, visiting India's twelve revered Jyotirlingas and exploring additional spiritual destinations including Mathura, Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri, subject to the final confirmed itinerary.",
    stats: [
      { value: "25 Days", label: "PROPOSED YATRA", highlight: true },
      { value: "12", label: "JYOTIRLINGAS", highlight: true },
      { value: "+6", label: "SACRED SITES", highlight: true },
      { value: "AC Volvo", label: "TRANSPORT", highlight: true },
      { value: "3-Star", label: "DELUXE STAY", highlight: true },
      { value: "Pure Veg", label: "3-TIME FOOD", highlight: true },
    ],
    price: "₹1,49,999",
    priceLabel: "PRICING",
    guarantees: [
      "No hidden charges",
      "Free cancellation 7 days prior",
      "24/7 support",
    ],
    ctaText: "View Tour Details & Itinerary",
    href: "/spiritual-pilgrimage-tours/",
  },
  {
    id: "south-india-circuit",
    badgeTop: "FEATURED",
    badgeBottomTitle: "Spiritual",
    badgeBottomSubtitle: "PILGRIMAGE",
    image: "/images/destinations/tirupati.webp",
    imageAlt: "South India Temple Circuit tour",
    tag1: "POPULAR TEMPLE TOUR",
    tag2: "7-Day Temple Circuit • Bengaluru Departure",
    titlePart1: "7–Day South India",
    titleHighlight: "Temple Circuit",
    tagline:
      "Tirupati Balaji, Madurai Meenakshi, Rameshwaram & Kanyakumari.",
    description:
      "Complete spiritual circuit across the grandest temples of Tamil Nadu and Andhra Pradesh. Chauffeur-driven luxury tempo traveller with dedicated pooja assistance and verified star accommodations.",
    stats: [
      { value: "7 Days", label: "DURATION", highlight: true },
      { value: "6", label: "TEMPLES", highlight: true },
      { value: "1,850 km", label: "DISTANCE", highlight: true },
      { value: "Maharaja", label: "LUXURY TEMPO" },
      { value: "Star Hotel", label: "DELUXE STAY" },
      { value: "24/7", label: "DISPATCH DESK" },
    ],
    price: "₹34,500",
    priceLabel: "PRICING",
    guarantees: [
      "No hidden charges",
      "Transparent per-km rate",
      "24/7 support",
    ],
    ctaText: "View Tour Details & Itinerary",
    href: "/packages/special/south-india-temple-circuit/",
  },
  {
    id: "karnataka-heritage",
    badgeTop: "FEATURED",
    badgeBottomTitle: "Spiritual",
    badgeBottomSubtitle: "PILGRIMAGE",
    image: "/images/destinations/hampi.webp",
    imageAlt: "Karnataka Heritage Pilgrimage tour",
    tag1: "HERITAGE & TEMPLE YATRA",
    tag2: "5-Day Heritage Tour • Bengaluru Departure",
    titlePart1: "5–Day Karnataka",
    titleHighlight: "Heritage Pilgrimage",
    tagline:
      "Hampi UNESCO World Heritage, Badami Cave Temples & Belur-Halebidu.",
    description:
      "Explore the architectural splendour and divine shrines of ancient Karnataka dynasties. Experience Hoysala, Chalukya, and Vijayanagara marvels in total air-conditioned comfort.",
    stats: [
      { value: "5 Days", label: "DURATION", highlight: true },
      { value: "8", label: "UNESCO SITES", highlight: true },
      { value: "1,200 km", label: "DISTANCE", highlight: true },
      { value: "Urbania", label: "LUXURY VAN" },
      { value: "Premium", label: "RESORT STAYS" },
      { value: "On-Time", label: "DOORSTEP PICKUP" },
    ],
    price: "₹24,999",
    priceLabel: "PRICING",
    guarantees: [
      "All tolls & taxes included",
      "Doorstep Bengaluru pickup",
      "24/7 support",
    ],
    ctaText: "View Tour Details & Itinerary",
    href: "/packages/special/karnataka-heritage-pilgrimage/",
  },
  {
    id: "shirdi-nashik",
    badgeTop: "FEATURED",
    badgeBottomTitle: "Spiritual",
    badgeBottomSubtitle: "PILGRIMAGE",
    image: "/images/destinations/Shirdi.webp",
    imageAlt: "Shirdi, Nashik and Trimbakeshwar Yatra",
    tag1: "SACRED DARSHAN TOUR",
    tag2: "6-Day Devotional Yatra • Bengaluru Departure",
    titlePart1: "6–Day Shirdi & Nashik",
    titleHighlight: "Devotional Yatra",
    tagline:
      "Shirdi Sai Baba Samadhi, Trimbakeshwar Jyotirlinga & Shani Shingnapur.",
    description:
      "Comfortable outstation journey from Bangalore to Maharashtra's most revered holy shrines. Smooth highway tempo traveller with VIP darshan scheduling and experienced drivers.",
    stats: [
      { value: "6 Days", label: "DURATION", highlight: true },
      { value: "2", label: "JYOTIRLINGAS", highlight: true },
      { value: "2,100 km", label: "DISTANCE", highlight: true },
      { value: "Pushback", label: "RECLINER SEATS" },
      { value: "Deluxe", label: "HOTEL STAYS" },
      { value: "100%", label: "COMPANY OWNED" },
    ],
    price: "₹38,000",
    priceLabel: "PRICING",
    guarantees: [
      "Verified chauffeurs",
      "GPS tracked vehicles",
      "24/7 support",
    ],
    ctaText: "View Tour Details & Itinerary",
    href: "/packages/special/shirdi-nashik-trimbakeshwar/",
  },
];

export default function FeaturedPilgrimageCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PILGRIMAGE_SLIDES.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === PILGRIMAGE_SLIDES.length - 1 ? 0 : prev + 1
    );
  };

  const slide = PILGRIMAGE_SLIDES[currentIndex];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20" aria-label="Featured Pilgrimage Tour">
      <div className="container-custom max-w-7xl">
        {/* Main Card Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a1424] border-2 border-amber-500/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[410px_1fr]">
            {/* Left Column: Image Area */}
            <div className="relative min-h-[300px] sm:min-h-[340px] lg:min-h-[480px] w-full overflow-hidden bg-[#071322]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath(slide.image)}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center transition-all duration-700"
                loading="lazy"
                width={800}
                height={600}
              />

              {/* Dark subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424] via-transparent to-black/30 pointer-events-none" />

              {/* Top-Left: "FEATURED" Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block bg-[#f59e0b] text-slate-950 font-black text-[11px] tracking-wider uppercase px-3 py-1 rounded-md shadow-md">
                  {slide.badgeTop}
                </span>
              </div>

              {/* Left Navigation Arrow Circle Button */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous tour"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Bottom-Left: Star Icon + Spiritual PILGRIMAGE Badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shadow-md text-xs font-bold">
                  ★
                </div>
                <div>
                  <span className="block font-bold text-white text-xs sm:text-sm leading-tight drop-shadow-sm">
                    {slide.badgeBottomTitle}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-extrabold text-[#f59e0b] tracking-widest uppercase leading-tight drop-shadow-sm">
                    {slide.badgeBottomSubtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="relative p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-between text-left">
              {/* Right Navigation Arrow Button (Desktop & Tablet) */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next tour"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center border border-white/20 shadow-xl hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div>
                {/* Top Eyebrow Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    {slide.tag1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-400/90 text-xs font-semibold tracking-wide">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{slide.tag2}</span>
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight mt-1 mb-1">
                  <Link href={slide.href} className="hover:text-amber-400 transition-colors">
                    {slide.titlePart1}{" "}
                    <span className="text-[#f59e0b]">{slide.titleHighlight}</span>
                  </Link>
                </h3>

                {/* Subtitle / Tagline */}
                <p className="text-amber-200/95 font-semibold text-xs sm:text-sm lg:text-base mt-2 mb-3">
                  {slide.tagline}
                </p>

                {/* Body Paragraph */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-3xl font-normal">
                  {slide.description}
                </p>

                {/* 6 Feature / Stat Pill Boxes */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 mb-7">
                  {slide.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-white/[0.04] border border-white/10 px-2 py-2.5 sm:py-3 text-center flex flex-col justify-center items-center hover:bg-white/[0.07] transition-colors"
                    >
                      <span
                        className={`font-black text-xs sm:text-sm lg:text-base leading-tight ${
                          stat.highlight ? "text-[#f59e0b]" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Pricing & Checklist (Left) + CTA (Right) */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-white/10">
                {/* Pricing & Guarantees */}
                <div className="text-left">
                  <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-widest block">
                    {slide.priceLabel}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-0.5">
                    {slide.price}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5 text-emerald-400 text-[11px] sm:text-xs font-medium">
                    {slide.guarantees.map((item, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="shrink-0">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-heading font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                  >
                    <span>{slide.ctaText}</span>
                    <svg
                      className="w-4 h-4 stroke-[3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {PILGRIMAGE_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentIndex
                  ? "w-8 h-2 bg-[#f59e0b]"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
