"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    image: "/images/destinations/12-jyotirlinga-shiva.jpg",
    imageAlt: "Explore 12 Jyotirlingas of India - 25-Day Proposed Spiritual Pilgrimage Yatra",
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
    id: "kashi-triveni-ayodhya",
    badgeTop: "NEW PACKAGE",
    badgeBottomTitle: "Spiritual",
    badgeBottomSubtitle: "YATRA",
    image: "/images/destinations/varanasi-ganga-aarti.jpg",
    imageAlt: "Kashi Triveni Ayodhya Yatra - Illuminated Dashashwamedh Ghat Evening Ganga Aarti Varanasi",
    tag1: "NEW PACKAGE",
    tag2: "4 Days / 3 Nights • Varanasi to Lucknow Drop",
    titlePart1: "Kashi – Triveni –",
    titleHighlight: "Ayodhya Yatra",
    tagline: "Varanasi • Prayagraj • Ayodhya • Lucknow Drop",
    description:
      "A sacred 4-day pilgrimage through Kashi Vishwanath, Triveni Sangam, and Ram Janmabhoomi. Includes Shri Kashi Vishwanath Sparsh Darshan assistance, Dashashwamedh Ganga Aarti and Sangam snan boat rides, Ayodhya Sugam Darshan with golf cart, and 20-seater luxury tempo traveller.",
    stats: [
      { value: "4D / 3N", label: "DURATION", highlight: true },
      { value: "16", label: "ADULTS", highlight: true },
      { value: "All Meals", label: "APAI INCLUDED", highlight: true },
      { value: "Premium", label: "HOTEL STAY", highlight: true },
      { value: "20 Seater", label: "TEMPO TRAVELLER", highlight: true },
      { value: "520 km", label: "ROUTE", highlight: true },
    ],
    price: "₹17,900 / Person",
    priceLabel: "B2B PRICING (+ 5% GST)",
    guarantees: [
      "+ 5% GST on total billing",
      "08 Double-Sharing Rooms",
      "Boat rides & all tolls included",
    ],
    ctaText: "Explore Package →",
    href: "/packages/kashi-triveni-ayodhya/",
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
      "Nava Tirupati, Navagraha & Pancha Bhoota Temples, Madurai & Rameshwaram.",
    description:
      "Complete spiritual circuit across Nava Tirupati, the nine Navagraha temples, Pancha Bhoota Lingams, Madurai Meenakshi, and Rameshwaram. Chauffeur-driven luxury tempo traveller with dedicated pooja assistance and verified star accommodations.",
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
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? PILGRIMAGE_SLIDES.length - 1 : prev - 1
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === PILGRIMAGE_SLIDES.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Automatic slide rotation: advances every 5 seconds, pauses when user hovers or interacts
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  const slide = PILGRIMAGE_SLIDES[currentIndex];

  return (
    <section className="bg-white py-6 sm:py-10 md:py-8 lg:py-10 xl:py-20" aria-label="Featured Pilgrimage Tour">
      <div className="container-custom max-w-7xl">
        {/* Quick Spiritual Tour Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-2">
          {PILGRIMAGE_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                idx === currentIndex
                  ? "bg-[#10213A] text-[#E3C77E] border border-[#C6A04A] shadow-md scale-[1.02]"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              {s.badgeTop === "NEW PACKAGE" ? (
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                  <span className="text-[#d97706] font-extrabold">NEW:</span>
                  <span>{s.titlePart1} {s.titleHighlight}</span>
                </span>
              ) : (
                <span>{s.titlePart1} {s.titleHighlight}</span>
              )}
            </button>
          ))}
        </div>

        {/* Main Card Container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#10213A] border-2 border-[#C6A04A]/80 shadow-2xl transition-all duration-300 cursor-pointer group/card"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (!target.closest("button") && !target.closest("a")) {
              router.push(slide.href);
            }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[340px_1fr] xl:grid-cols-[410px_1fr]">
            {/* Left Column: Image Area */}
            <div className="relative h-[200px] sm:h-[240px] md:h-full md:min-h-0 xl:min-h-[480px] w-full overflow-hidden bg-[#071322]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={slide.id}
                src={getAssetPath(slide.image)}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center transition-all duration-700 animate-fade-in"
                loading="lazy"
                width={800}
                height={600}
              />

              {/* Dark subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424] via-transparent to-black/30 pointer-events-none" />

              {/* Top-Left: "FEATURED" Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-3 md:left-3 xl:top-4 xl:left-4 z-20">
                <span className="inline-block bg-[#f59e0b] text-slate-950 font-black text-[10px] md:text-[10px] xl:text-[11px] tracking-wider uppercase px-2.5 py-0.5 md:px-2.5 md:py-0.5 xl:px-3 xl:py-1 rounded-md shadow-md">
                  {slide.badgeTop}
                </span>
              </div>

              {/* Left Navigation Arrow Circle Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                aria-label="Previous tour"
                className="absolute left-3 sm:left-4 md:left-3 xl:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-9 md:h-9 xl:w-11 xl:h-11 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Navigation Arrow Circle Button (Mobile over image) */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next tour"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex sm:hidden w-8 h-8 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 items-center justify-center shadow-lg active:scale-95 transition-all outline-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Bottom-Left: Star Icon + Spiritual PILGRIMAGE Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-3 md:left-3 xl:bottom-4 xl:left-4 z-20 flex items-center gap-2 sm:gap-2.5 md:gap-2 xl:gap-2.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 xl:w-7 xl:h-7 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shadow-md text-[11px] sm:text-xs md:text-[11px] xl:text-xs font-bold">
                  ★
                </div>
                <div>
                  <span className="block font-bold text-white text-xs sm:text-sm md:text-xs xl:text-sm leading-tight drop-shadow-sm">
                    {slide.badgeBottomTitle}
                  </span>
                  <span className="block text-[8.5px] sm:text-[10px] md:text-[8.5px] xl:text-[10px] font-extrabold text-[#f59e0b] tracking-widest uppercase leading-tight drop-shadow-sm">
                    {slide.badgeBottomSubtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div
              key={slide.id}
              className="relative p-4 sm:p-6 md:p-5 md:pr-14 lg:p-6 lg:pr-14 xl:p-10 flex flex-col justify-between text-left animate-fade-in"
            >
              {/* Right Navigation Arrow Button (Desktop & Tablet) */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next tour"
                className="absolute right-3 md:right-3.5 xl:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-9 h-9 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white items-center justify-center border border-white/20 shadow-xl hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
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
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-2 xl:gap-3 mb-1.5 md:mb-2 xl:mb-3">
                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 md:px-2.5 md:py-0.5 xl:px-3 xl:py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-[9.5px] sm:text-[11px] md:text-[10px] xl:text-[11px] font-bold uppercase tracking-wider">
                    {slide.tag1}
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-amber-400/90 text-[11px] sm:text-xs md:text-[11px] xl:text-xs font-semibold tracking-wide">
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3 xl:w-3.5 xl:h-3.5 text-amber-400 shrink-0"
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
                <h3 className="font-heading text-[21px] sm:text-2xl md:text-[1.375rem] lg:text-[1.625rem] xl:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight mt-0.5 md:mt-1 mb-1">
                  <Link href={slide.href} className="hover:text-amber-400 transition-colors">
                    {slide.titlePart1}{" "}
                    <span className="text-[#f59e0b]">{slide.titleHighlight}</span>
                  </Link>
                </h3>

                {/* Subtitle / Tagline */}
                <p className="text-amber-200/95 font-semibold text-[12px] sm:text-sm md:text-[12px] lg:text-[13px] xl:text-base mt-0.5 sm:mt-1 md:mt-1 xl:mt-2 mb-1.5 sm:mb-2 md:mb-1.5 xl:mb-3 leading-snug">
                  {slide.tagline}
                </p>

                {/* Body Paragraph */}
                <p className="text-slate-300 text-[12px] sm:text-sm md:text-[12px] lg:text-[12.5px] xl:text-sm leading-relaxed mb-2.5 sm:mb-4 md:mb-2.5 lg:mb-3 xl:mb-6 max-w-3xl font-normal line-clamp-2 md:line-clamp-2 lg:line-clamp-3 xl:line-clamp-none">
                  {slide.description}
                </p>

                {/* 6 Feature / Stat Pill Boxes (Mobile: 2 rows of 3; Tablet: 2 rows of 3; Desktop: 1 row of 6) */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2 md:gap-2 xl:gap-2.5 mb-2.5 sm:mb-4 md:mb-2.5 lg:mb-3.5 xl:mb-7">
                  {slide.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg xl:rounded-xl bg-white/[0.04] border border-white/10 px-1.5 sm:px-2 md:px-2 xl:px-2 py-1.5 sm:py-2 md:py-1.5 xl:py-3 text-center flex flex-col justify-center items-center hover:bg-white/[0.07] transition-colors min-h-[44px] md:min-h-[44px] xl:min-h-0"
                    >
                      <span
                        className={`font-black text-[11px] sm:text-xs md:text-[12px] lg:text-[13px] xl:text-base leading-tight ${
                          stat.highlight ? "text-[#f59e0b]" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[7.5px] sm:text-[8px] md:text-[8px] lg:text-[8.5px] xl:text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5 xl:mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Pricing & Checklist (Left) + CTA (Right) */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 md:gap-3 xl:gap-6 pt-2.5 sm:pt-3 md:pt-2.5 xl:pt-4 border-t border-white/10">
                {/* Pricing & Guarantees */}
                <div className="text-left">
                  <span className="text-[9px] sm:text-[10px] md:text-[9px] xl:text-[10px] font-bold text-amber-400/90 uppercase tracking-widest block">
                    {slide.priceLabel}
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight mt-0.5">
                    {slide.price}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 md:gap-x-2.5 xl:gap-3 gap-y-0.5 sm:gap-y-1 mt-1 sm:mt-2 md:mt-1 xl:mt-2.5 text-emerald-400 text-[10px] sm:text-xs md:text-[10px] xl:text-xs font-medium">
                    {slide.guarantees.map((item, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3 xl:w-3.5 xl:h-3.5 text-emerald-400 shrink-0"
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
                <div className="shrink-0 w-full sm:w-auto mt-1 sm:mt-0">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto px-4 sm:px-6 md:px-4 lg:px-6 xl:px-8 py-3 sm:py-3.5 md:py-2.5 lg:py-3.5 xl:py-4 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-heading font-extrabold text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                  >
                    <span>{slide.ctaText}</span>
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 stroke-[3]"
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
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-2 mt-3 sm:mt-4 md:mt-3 xl:mt-5">
          {PILGRIMAGE_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(dotIdx); }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentIndex
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#f59e0b]"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
