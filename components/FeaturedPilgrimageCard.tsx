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
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Gesture tracking refs
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);
  const lastPointerX = useRef<number>(0);
  const lastPointerTime = useRef<number>(0);
  const dragStartTime = useRef<number>(0);
  const velocity = useRef<number>(0);
  const hasMoved = useRef<boolean>(false);
  const isLockedVertical = useRef<boolean>(false);
  const isLockedHorizontal = useRef<boolean>(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Resize listener for responsive 3D geometry
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = PILGRIMAGE_SLIDES.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(((index % total) + total) % total);
    },
    [total]
  );

  // Autoplay management: 5000ms interval, pause on hover/drag, smooth reset
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (isPaused || isDragging) return;
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [isPaused, isDragging, nextSlide]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [currentIndex, isPaused, isDragging, startAutoplay]);

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

  // Dynamic stride for 1:1 physical tracking
  const getStride = () => {
    if (stageRef.current) {
      const width = stageRef.current.clientWidth;
      return isMobile ? Math.max(260, width * 0.72) : Math.max(480, width * 0.52);
    }
    return isMobile ? 300 : 540;
  };

  // Pointer Handlers for Butter-Smooth Direct Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    dragStartTime.current = performance.now();
    velocity.current = 0;
    hasMoved.current = false;
    isLockedVertical.current = false;
    isLockedHorizontal.current = false;
    setIsDragging(true);
    setDragOffset(0);

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignore fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartX.current;
    const dy = e.clientY - dragStartY.current;

    // Detect gesture orientation lock
    if (!isLockedHorizontal.current && !isLockedVertical.current) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 9) {
        // Natural page vertical scroll: release gesture lock
        isLockedVertical.current = true;
        setIsDragging(false);
        setDragOffset(0);
        return;
      } else if (Math.abs(dx) > 7) {
        isLockedHorizontal.current = true;
        hasMoved.current = true;
      }
    }

    if (isLockedVertical.current) return;

    // Calculate instantaneous velocity for spring/flick momentum
    const now = performance.now();
    const dt = now - lastPointerTime.current;
    if (dt > 12) {
      const v = (e.clientX - lastPointerX.current) / dt;
      velocity.current = velocity.current * 0.35 + v * 0.65;
      lastPointerX.current = e.clientX;
      lastPointerTime.current = now;
    }

    setDragOffset(dx);
  };

  const finishDrag = (e?: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (e) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore fallback
      }
    }

    const dx = dragOffset;
    const vel = velocity.current;
    const threshold = isMobile ? 38 : 60;
    const flickSpeed = 0.22;

    if (dx < -threshold || vel < -flickSpeed) {
      nextSlide();
    } else if (dx > threshold || vel > flickSpeed) {
      prevSlide();
    }

    setDragOffset(0);
    velocity.current = 0;

    // Brief cooldown prevents false link click triggers on release
    setTimeout(() => {
      hasMoved.current = false;
    }, 70);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    finishDrag(e);
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    finishDrag(e);
  };

  // Normalized continuous drag offset
  const stride = getStride();
  const dragProgress = isDragging
    ? Math.max(-1.3, Math.min(1.3, dragOffset / stride))
    : 0;

  return (
    <section
      className="bg-slate-50 py-4 sm:py-6 md:py-8 lg:py-10 select-none overflow-hidden"
      aria-label="Featured Pilgrimage Tour Packages"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom max-w-7xl px-3 sm:px-4 md:px-6">
        {/* =================================================================== */}
        {/* 1. SECTION HEADER */}
        {/* =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5 md:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080878]/5 border border-[#080878]/10 text-[#080878] text-[10.5px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] animate-pulse" />
            <span>Curated Pilgrimage Circuits</span>
          </div>
          <h2 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-[#080878] tracking-tight">
            Featured Spiritual Yatra Packages
          </h2>
        </div>

        {/* =================================================================== */}
        {/* 2. 3D STACKED CARD CAROUSEL STAGE */}
        {/* =================================================================== */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center my-1 sm:my-2 cursor-grab active:cursor-grabbing select-none"
          style={{
            perspective: "1400px",
            minHeight: isMobile ? "490px" : "480px",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {/* Left Arrow Button (Desktop & Tablet) */}
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous pilgrimage package"
            className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#080878]/90 hover:bg-[#05055C] text-[#D8B43B] border border-[#D8B43B]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#D8B43B]"
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
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next pilgrimage package"
            className="absolute right-1 sm:right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#080878]/90 hover:bg-[#05055C] text-[#D8B43B] border border-[#D8B43B]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#D8B43B]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 3D Stacked Deck of Cards */}
          <div className="relative w-full h-[475px] sm:h-[490px] md:h-[460px] lg:h-[485px] xl:h-[505px] flex items-center justify-center pointer-events-none">
            {PILGRIMAGE_SLIDES.map((slide, index) => {
              // Calculate modular offset relative to currentIndex
              let diff = index - currentIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              // Continuous circular offset with dragProgress
              let u = diff + dragProgress;
              if (u > total / 2) u -= total;
              if (u < -total / 2) u += total;

              const t = Math.abs(u);
              const isCenterActive = !isDragging ? diff === 0 : t < 0.45;

              // Responsive 3D transform computation
              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";
              let boxShadow = "none";

              if (t <= 1.0) {
                zIndex = Math.round(30 - t * 10);
                pointerEvents = "auto";

                if (isMobile) {
                  const tx = u * 52;
                  const tz = -t * 60;
                  const scale = 1.0 - t * 0.11;
                  const rot = -u * 2;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotate(${rot}deg)`;
                  opacity = Math.max(0.68, 1.0 - t * 0.24);
                  filter = `brightness(${1.0 - t * 0.35})`;
                  boxShadow =
                    t <= 0.45
                      ? "0 25px 60px -15px rgba(8, 8, 120, 0.65), 0 0 30px rgba(216, 180, 59, 0.25)"
                      : "0 15px 35px -10px rgba(0, 0, 0, 0.6)";
                } else {
                  const tx = u * 38;
                  const tz = -t * 85;
                  const scale = 1.0 - t * 0.09;
                  const rotY = -u * 5;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = Math.max(0.72, 1.0 - t * 0.18);
                  filter = `brightness(${1.0 - t * 0.35})`;
                  boxShadow =
                    t <= 0.45
                      ? "0 25px 60px -15px rgba(8, 8, 120, 0.65), 0 0 30px rgba(216, 180, 59, 0.25)"
                      : "0 20px 40px -15px rgba(0, 0, 0, 0.7)";
                }
              } else if (t <= 2.0) {
                // Secondary tier tucked behind
                zIndex = 10;
                pointerEvents = "none";
                const extra = t - 1.0;
                if (isMobile) {
                  const tx = (u > 0 ? 1 : -1) * (52 + extra * 30);
                  const tz = -60 - extra * 120;
                  const scale = Math.max(0.72, 0.89 - extra * 0.14);
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale})`;
                  opacity = Math.max(0, 0.75 - extra * 0.75);
                  filter = "brightness(0.6)";
                } else {
                  const tx = (u > 0 ? 1 : -1) * (38 + extra * 36);
                  const tz = -85 - extra * 140;
                  const scale = Math.max(0.72, 0.91 - extra * 0.15);
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale})`;
                  opacity = Math.max(0, 0.82 - extra * 0.82);
                  filter = "brightness(0.6)";
                }
              } else {
                // Tucked away completely
                zIndex = 5;
                opacity = 0;
                pointerEvents = "none";
                const tx = u > 0 ? 88 : -88;
                transformStyle = `translate3d(${tx}%, 0, -220px) scale(0.70)`;
              }

              return (
                <article
                  key={slide.id}
                  onClick={(e) => {
                    if (hasMoved.current) {
                      e.preventDefault();
                      e.stopPropagation();
                      return;
                    }
                    if (!isCenterActive) {
                      e.stopPropagation();
                      goToSlide(index);
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
                    transition: isDragging
                      ? "none"
                      : "transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 950ms cubic-bezier(0.22, 1, 0.36, 1), filter 950ms ease, box-shadow 950ms ease",
                    willChange: "transform, opacity",
                  }}
                  className={`absolute top-0 left-0 right-0 bottom-0 m-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080878] border-2 border-[#D8B43B]/80 cursor-pointer ${
                    isMobile
                      ? "w-[84vw] max-w-[340px] sm:max-w-[375px] h-[465px] sm:h-[485px]"
                      : "w-[680px] lg:w-[840px] xl:w-[940px] h-[450px] lg:h-[475px] xl:h-[495px]"
                  }`}
                  aria-hidden={!isCenterActive}
                >
                  {/* Subtle Top Metallic Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B43B] via-[#D8B43B] to-[#D8B43B] z-30" />

                  {/* ========================================================= */}
                  {/* MOBILE VERTICAL CARD LAYOUT (< 768px) */}
                  {/* ========================================================= */}
                  <div className="flex flex-col h-full md:hidden text-left">
                    {/* Top Image Container */}
                    <div className="relative h-[180px] sm:h-[195px] w-full shrink-0 overflow-hidden bg-[#05055C]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(slide.image)}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover object-center pointer-events-none"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080878] via-[#080878]/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
                        <span className="inline-block bg-[#D8B43B] text-slate-950 font-semibold text-[9.5px] tracking-wider uppercase px-2 py-0.5 rounded shadow">
                          {slide.badgeTop}
                        </span>
                      </div>

                      {/* Bottom-Left Image Star Badge */}
                      <div className="absolute bottom-2 left-2.5 z-20 flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#D8B43B] text-slate-950 flex items-center justify-center font-bold text-[10px] shadow">
                          ★
                        </div>
                        <span className="text-[10px] font-semibold text-[#D8B43B] tracking-wider uppercase drop-shadow">
                          {slide.badgeBottomTitle} {slide.badgeBottomSubtitle}
                        </span>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute top-2.5 right-2.5 z-20 bg-[#080878]/90 border border-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {slide.stats[0]?.value}
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#D8B43B] uppercase tracking-wide mb-1">
                          <span className="truncate">{slide.tag1}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-[16px] sm:text-[18px] font-semibold text-white tracking-tight leading-snug line-clamp-1">
                          <Link
                            href={slide.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#D8B43B] transition-colors"
                          >
                            {slide.titlePart1} <span className="text-[#D8B43B]">{slide.titleHighlight}</span>
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
                              <span className="font-semibold text-[10.5px] text-[#D8B43B] block leading-tight">
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
                          <span className="text-base sm:text-lg font-bold text-white leading-tight block">
                            {slide.price}
                          </span>
                        </div>
                        <Link
                          href={slide.href}
                          onClick={(e) => {
                            if (hasMoved.current) {
                              e.preventDefault();
                              e.stopPropagation();
                            }
                          }}
                          className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D8B43B] to-[#d97706] text-slate-950 font-semibold text-[11px] shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
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
                    <div className="relative h-full w-full overflow-hidden bg-[#05055C]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(slide.image)}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 pointer-events-none"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={700}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080878] via-transparent to-black/30 pointer-events-none" />

                      {/* Top-Left: "FEATURED" / "NEW" Badge */}
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="inline-block bg-[#D8B43B] text-slate-950 font-semibold text-[10px] xl:text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-md">
                          {slide.badgeTop}
                        </span>
                      </div>

                      {/* Bottom-Left: Star Icon + Spiritual Badge */}
                      <div className="absolute bottom-3.5 left-3.5 z-20 flex items-center gap-2">
                        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#D8B43B] text-slate-950 flex items-center justify-center shadow-md text-xs font-bold">
                          ★
                        </div>
                        <div>
                          <span className="block font-bold text-white text-xs xl:text-sm leading-tight drop-shadow-sm">
                            {slide.badgeBottomTitle}
                          </span>
                          <span className="block text-[8.5px] xl:text-[9.5px] font-semibold text-[#D8B43B] tracking-widest uppercase leading-tight drop-shadow-sm">
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
                          <span className="inline-block px-2.5 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-[#D8B43B] text-[10px] xl:text-[11px] font-bold uppercase tracking-wider">
                            {slide.tag1}
                          </span>
                          <span className="text-[#D8B43B] text-xs font-medium">
                            &bull; {slide.tag2}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl lg:text-2xl xl:text-3xl font-semibold text-white tracking-tight leading-tight mb-1">
                          <Link
                            href={slide.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#D8B43B] transition-colors"
                          >
                            {slide.titlePart1} <span className="text-[#D8B43B]">{slide.titleHighlight}</span>
                          </Link>
                        </h3>

                        {/* Subtitle / Tagline */}
                        <p className="text-amber-100 font-semibold text-xs lg:text-sm mb-2 leading-snug line-clamp-1">
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
                                className={`font-semibold text-[11px] lg:text-xs xl:text-sm leading-tight ${
                                  stat.highlight ? "text-[#D8B43B]" : "text-white"
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
                          <span className="text-[9px] xl:text-[10px] font-bold text-[#D8B43B]/90 uppercase tracking-widest block">
                            {slide.priceLabel}
                          </span>
                          <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-0.5">
                            {slide.price}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-emerald-400 text-[10.5px] xl:text-xs font-medium">
                            {slide.guarantees.map((item, gIdx) => (
                              <span key={gIdx} className="flex items-center gap-1">
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="shrink-0">
                          <Link
                            href={slide.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 xl:px-7 py-3 rounded-xl bg-gradient-to-r from-[#D8B43B] to-[#d97706] text-slate-950 font-heading font-semibold text-xs lg:text-sm shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
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
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentIndex
                  ? "w-7 sm:w-9 h-2 bg-[#D8B43B] shadow-sm"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
