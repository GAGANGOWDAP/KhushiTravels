"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAssetPath } from "@/lib/assets";

export interface PilgrimageTourSlide {
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

export const PILGRIMAGE_SLIDES: PilgrimageTourSlide[] = [
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
  const [isMobile, setIsMobile] = useState(false);

  // Drag / swipe gesture states
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragDistance = useRef<number>(0);

  // Resize listener for responsive 3D geometry
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Automatic slide rotation: advances every 6 seconds, pauses on interaction
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Check if primarily horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Mouse drag handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragDistance.current = 0;
    mouseStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    dragDistance.current = e.clientX - mouseStartX.current;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      if (dragDistance.current < -50) {
        nextSlide();
      } else if (dragDistance.current > 50) {
        prevSlide();
      }
    }
    isDragging.current = false;
    mouseStartX.current = null;
    dragDistance.current = 0;
    setIsPaused(false);
  };

  return (
    <section
      className="bg-slate-50 py-4 sm:py-6 md:py-8 lg:py-10 select-none overflow-hidden"
      aria-label="Featured Pilgrimage Tour Packages"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging.current) handleMouseUp();
      }}
    >
      <div className="container-custom max-w-7xl px-3 sm:px-4 md:px-6">
        {/* =================================================================== */}
        {/* 1. SECTION HEADER */}
        {/* =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5 md:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10213A]/5 border border-[#10213A]/10 text-[#10213A] text-[10.5px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <span>Curated Pilgrimage Circuits</span>
          </div>
          <h2 className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-[#10213A] tracking-tight">
            Featured Spiritual Yatra Packages
          </h2>
        </div>

        {/* =================================================================== */}
        {/* 2. 3D STACKED CARD CAROUSEL STAGE */}
        {/* =================================================================== */}
        <div
          className="relative w-full flex items-center justify-center my-1 sm:my-2"
          style={{
            perspective: "1400px",
            minHeight: isMobile ? "490px" : "480px",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Left Arrow Button (Desktop & Tablet) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous pilgrimage package"
            className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#10213A]/90 hover:bg-[#193454] text-[#E3C77E] border border-[#C6A04A]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#E3C77E]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (Desktop & Tablet) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next pilgrimage package"
            className="absolute right-1 sm:right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#10213A]/90 hover:bg-[#193454] text-[#E3C77E] border border-[#C6A04A]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#E3C77E]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 3D Stacked Deck of Cards */}
          <div className="relative w-full h-[475px] sm:h-[490px] md:h-[460px] lg:h-[485px] xl:h-[505px] flex items-center justify-center">
            {PILGRIMAGE_SLIDES.map((slide, index) => {
              // Calculate modular offset relative to currentIndex
              let offset = index - currentIndex;
              const total = PILGRIMAGE_SLIDES.length;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isHidden = Math.abs(offset) > 1;

              // Responsive 3D transform computation
              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";
              let boxShadow = "none";

              if (isActive) {
                zIndex = 30;
                opacity = 1;
                pointerEvents = "auto";
                transformStyle = "translate3d(0, 0, 0) scale(1) rotateY(0deg)";
                boxShadow =
                  "0 25px 60px -15px rgba(10, 20, 36, 0.75), 0 0 30px rgba(198, 160, 74, 0.25)";
              } else if (isPrev) {
                zIndex = 20;
                opacity = isMobile ? 0.75 : 0.85;
                pointerEvents = "auto";
                filter = "brightness(0.65)";
                if (isMobile) {
                  transformStyle =
                    "translate3d(-52%, 0, -60px) scale(0.88) rotate(-2deg)";
                  boxShadow = "0 15px 35px -10px rgba(0, 0, 0, 0.6)";
                } else {
                  transformStyle =
                    "translate3d(-38%, 0, -85px) scale(0.89) rotateY(5deg)";
                  boxShadow = "0 20px 40px -15px rgba(0, 0, 0, 0.7)";
                }
              } else if (isNext) {
                zIndex = 20;
                opacity = isMobile ? 0.75 : 0.85;
                pointerEvents = "auto";
                filter = "brightness(0.65)";
                if (isMobile) {
                  transformStyle =
                    "translate3d(52%, 0, -60px) scale(0.88) rotate(2deg)";
                  boxShadow = "0 15px 35px -10px rgba(0, 0, 0, 0.6)";
                } else {
                  transformStyle =
                    "translate3d(38%, 0, -85px) scale(0.89) rotateY(-5deg)";
                  boxShadow = "0 20px 40px -15px rgba(0, 0, 0, 0.7)";
                }
              } else {
                // Outer cards (tucked further behind)
                zIndex = 10;
                opacity = 0;
                pointerEvents = "none";
                transformStyle = `translate3d(${
                  offset > 0 ? 80 : -80
                }%, 0, -180px) scale(0.76)`;
              }

              return (
                <article
                  key={slide.id}
                  onClick={(e) => {
                    if (Math.abs(dragDistance.current) > 10) return;
                    if (!isActive) {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    } else {
                      const target = e.target as HTMLElement;
                      if (!target.closest("button") && !target.closest("a")) {
                        router.push(slide.href);
                      }
                    }
                  }}
                  style={{
                    transform: transformStyle,
                    zIndex,
                    opacity,
                    filter,
                    boxShadow,
                    pointerEvents,
                    transition:
                      "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease, box-shadow 500ms ease",
                  }}
                  className={`absolute top-0 left-0 right-0 bottom-0 m-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#10213A] border-2 border-[#C6A04A]/80 cursor-pointer ${
                    isMobile
                      ? "w-[84vw] max-w-[340px] sm:max-w-[375px] h-[465px] sm:h-[485px]"
                      : "w-[680px] lg:w-[840px] xl:w-[940px] h-[450px] lg:h-[475px] xl:h-[495px]"
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Subtle Top Metallic Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6A04A] via-[#E3C77E] to-[#C6A04A] z-30" />

                  {/* ========================================================= */}
                  {/* MOBILE VERTICAL CARD LAYOUT (< 768px) */}
                  {/* ========================================================= */}
                  <div className="flex flex-col h-full md:hidden text-left">
                    {/* Top Image Container */}
                    <div className="relative h-[180px] sm:h-[195px] w-full shrink-0 overflow-hidden bg-[#071322]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(slide.image)}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover object-center"
                        loading={isActive ? "eager" : "lazy"}
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10213A] via-[#10213A]/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
                        <span className="inline-block bg-[#f59e0b] text-slate-950 font-black text-[9.5px] tracking-wider uppercase px-2 py-0.5 rounded shadow">
                          {slide.badgeTop}
                        </span>
                      </div>

                      {/* Bottom-Left Image Star Badge */}
                      <div className="absolute bottom-2 left-2.5 z-20 flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-bold text-[10px] shadow">
                          ★
                        </div>
                        <span className="text-[10px] font-extrabold text-[#E3C77E] tracking-wider uppercase drop-shadow">
                          {slide.badgeBottomTitle} {slide.badgeBottomSubtitle}
                        </span>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute top-2.5 right-2.5 z-20 bg-[#10213A]/90 border border-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {slide.stats[0]?.value}
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#E3C77E] uppercase tracking-wide mb-1">
                          <span className="truncate">{slide.tag1}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-[16px] sm:text-[18px] font-extrabold text-white tracking-tight leading-snug line-clamp-1">
                          <Link href={slide.href} className="hover:text-amber-400 transition-colors">
                            {slide.titlePart1} <span className="text-[#f59e0b]">{slide.titleHighlight}</span>
                          </Link>
                        </h3>

                        {/* Subtitle */}
                        <p className="text-amber-200/90 text-[11px] font-semibold mt-0.5 line-clamp-1">
                          {slide.tagline}
                        </p>

                        {/* Short Description */}
                        <p className="text-slate-300 text-[11px] line-clamp-2 mt-1 leading-relaxed font-normal">
                          {slide.description}
                        </p>

                        {/* 3 Compact Stats Chips */}
                        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
                          {slide.stats.slice(0, 3).map((st, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-lg bg-white/5 border border-white/10 px-1 py-1 text-center"
                            >
                              <span className="font-extrabold text-[10.5px] text-[#f59e0b] block leading-tight">
                                {st.value}
                              </span>
                              <span className="text-[7.5px] uppercase font-bold text-slate-400 block tracking-wider leading-tight">
                                {st.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Pricing & CTA */}
                      <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-white/10 mt-2">
                        <div>
                          <span className="text-[8px] uppercase font-bold text-amber-300/80 tracking-widest block">
                            {slide.priceLabel}
                          </span>
                          <span className="text-base sm:text-lg font-black text-white leading-tight block">
                            {slide.price}
                          </span>
                        </div>
                        <Link
                          href={slide.href}
                          className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-[11px] shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                        >
                          <span>{slide.ctaText.replace("View Tour Details & Itinerary", "View Tour")}</span>
                          <span className="text-xs">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* DESKTOP & TABLET SPLIT LAYOUT (>= 768px) */}
                  {/* ========================================================= */}
                  <div className="hidden md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[330px_1fr] xl:grid-cols-[380px_1fr] h-full text-left">
                    {/* Left Column: Image Area */}
                    <div className="relative h-full w-full overflow-hidden bg-[#071322]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(slide.image)}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading={isActive ? "eager" : "lazy"}
                        width={700}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10213A] via-transparent to-black/30 pointer-events-none" />

                      {/* Top-Left: "FEATURED" / "NEW" Badge */}
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="inline-block bg-[#f59e0b] text-slate-950 font-black text-[10px] xl:text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-md">
                          {slide.badgeTop}
                        </span>
                      </div>

                      {/* Bottom-Left: Star Icon + Spiritual Badge */}
                      <div className="absolute bottom-3.5 left-3.5 z-20 flex items-center gap-2">
                        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center shadow-md text-xs font-bold">
                          ★
                        </div>
                        <div>
                          <span className="block font-bold text-white text-xs xl:text-sm leading-tight drop-shadow-sm">
                            {slide.badgeBottomTitle}
                          </span>
                          <span className="block text-[8.5px] xl:text-[9.5px] font-extrabold text-[#E3C77E] tracking-widest uppercase leading-tight drop-shadow-sm">
                            {slide.badgeBottomSubtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Information & Actions */}
                    <div className="relative p-5 md:pr-6 lg:p-6 lg:pr-8 xl:p-8 flex flex-col justify-between text-left">
                      <div>
                        {/* Top Eyebrow Tag */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5 xl:mb-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-[10px] xl:text-[11px] font-bold uppercase tracking-wider">
                            {slide.tag1}
                          </span>
                          <span className="text-amber-300/90 text-xs font-medium">
                            &bull; {slide.tag2}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1">
                          <Link href={slide.href} className="hover:text-amber-400 transition-colors">
                            {slide.titlePart1} <span className="text-[#f59e0b]">{slide.titleHighlight}</span>
                          </Link>
                        </h3>

                        {/* Subtitle / Tagline */}
                        <p className="text-amber-200/95 font-semibold text-xs lg:text-sm mb-2 leading-snug line-clamp-1">
                          {slide.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-slate-300 text-xs lg:text-[13px] leading-relaxed mb-3 xl:mb-4 max-w-2xl font-normal line-clamp-2 xl:line-clamp-3">
                          {slide.description}
                        </p>

                        {/* 6 Feature / Stat Pill Boxes */}
                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1.5 lg:gap-2 mb-3 xl:mb-4">
                          {slide.stats.map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-lg bg-white/5 border border-white/10 px-1.5 py-1.5 text-center flex flex-col justify-center items-center hover:bg-white/10 transition-colors"
                            >
                              <span
                                className={`font-black text-[11px] lg:text-xs xl:text-sm leading-tight ${
                                  stat.highlight ? "text-[#f59e0b]" : "text-white"
                                }`}
                              >
                                {stat.value}
                              </span>
                              <span className="text-[7.5px] lg:text-[8px] xl:text-[8.5px] font-bold uppercase tracking-wider text-slate-400 mt-0.5 leading-tight truncate w-full">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Pricing & Guarantees + CTA Button */}
                      <div className="flex items-end justify-between gap-4 pt-3 border-t border-white/10">
                        {/* Price & Guarantees */}
                        <div>
                          <span className="text-[9px] xl:text-[10px] font-bold text-amber-400/90 uppercase tracking-widest block">
                            {slide.priceLabel}
                          </span>
                          <div className="text-2xl lg:text-3xl font-black text-white tracking-tight mt-0.5">
                            {slide.price}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-emerald-400 text-[10.5px] xl:text-xs font-medium">
                            {slide.guarantees.map((item, gIdx) => (
                              <span key={gIdx} className="flex items-center gap-1">
                                <span className="text-emerald-400 font-bold">✓</span>
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="shrink-0">
                          <Link
                            href={slide.href}
                            className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 xl:px-7 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-950 font-heading font-extrabold text-xs lg:text-sm shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                          >
                            <span>{slide.ctaText}</span>
                            <span className="text-sm">&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. PAGINATION INDICATORS */}
        {/* =================================================================== */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {PILGRIMAGE_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentIndex
                  ? "w-7 sm:w-9 h-2 bg-[#f59e0b] shadow-sm"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
