"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAssetPath } from "@/lib/assets";

export interface PilgrimagePackage {
  id: string;
  category: string;
  name: string;
  route: string;
  duration: string;
  highlights: [string, string];
  price: string;
  priceNote?: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const PILGRIMAGE_PACKAGES: PilgrimagePackage[] = [
  {
    id: "12-jyotirlinga",
    category: "PROPOSED PILGRIMAGE PACKAGE",
    name: "25-Day 12 Jyotirlinga Spiritual Yatra",
    route: "12 Jyotirlingas • Mathura, Ayodhya, Gaya & Puri",
    duration: "25 Days",
    highlights: [
      "AC Volvo Coach Transit",
      "3-Star Deluxe Stays & Satvik Meals",
    ],
    price: "Owner-approved fare available on enquiry",
    image: "/images/destinations/12-jyotirlinga-shiva.jpg",
    imageAlt: "12 Jyotirlinga Spiritual Yatra - Proposed All-India Pilgrimage Circuit",
    href: "/spiritual-pilgrimage-tours/",
  },
  {
    id: "kashi-triveni-ayodhya",
    category: "SACRED PILGRIMAGE CIRCUIT",
    name: "Kashi – Triveni – Ayodhya Yatra",
    route: "Varanasi → Prayagraj → Ayodhya → Lucknow Drop",
    duration: "4 Days / 3 Nights",
    highlights: [
      "3 Sacred Boat Rides Included",
      "20-Seater AC Luxury Tempo Traveller",
    ],
    price: "₹17,900 / Person",
    priceNote: "+ 5% GST",
    image: "/images/destinations/varanasi-ganga-aarti.jpg",
    imageAlt: "Kashi Triveni Ayodhya Yatra - Illuminated Dashashwamedh Ghat Evening Ganga Aarti Varanasi",
    href: "/packages/kashi-triveni-ayodhya/",
  },
  {
    id: "south-india-circuit",
    category: "TEMPLE CIRCUIT",
    name: "7-Day South India Temple Circuit",
    route: "Nava Tirupati • Navagraha • Madurai • Rameshwaram",
    duration: "7 Days",
    highlights: [
      "6 Sacred Temple Shrines",
      "Maharaja Pushback Luxury Tempo",
    ],
    price: "₹34,500",
    image: "/images/destinations/tirupati.webp",
    imageAlt: "7-Day South India Temple Circuit - Sacred Shrines & Temples",
    href: "/packages/special/south-india-temple-circuit/",
  },
  {
    id: "karnataka-heritage",
    category: "HERITAGE & TEMPLE YATRA",
    name: "5-Day Karnataka Heritage Pilgrimage",
    route: "Hampi • Badami Cave Temples • Belur-Halebidu",
    duration: "5 Days",
    highlights: [
      "8 UNESCO World Heritage Sites",
      "Air-Conditioned Deluxe Comfort",
    ],
    price: "₹24,999",
    image: "/images/destinations/hampi.webp",
    imageAlt: "5-Day Karnataka Heritage Pilgrimage - UNESCO Monuments & Shrines",
    href: "/packages/special/karnataka-heritage-pilgrimage/",
  },
  {
    id: "shirdi-nashik",
    category: "DEVOTIONAL YATRA",
    name: "6-Day Shirdi & Nashik Devotional Yatra",
    route: "Shirdi Sai Baba • Trimbakeshwar Jyotirlinga • Shani Shingnapur",
    duration: "6 Days",
    highlights: [
      "VIP Darshan Coordination",
      "Chauffeur-Driven Luxury Transit",
    ],
    price: "₹38,000",
    image: "/images/destinations/Shirdi.webp",
    imageAlt: "6-Day Shirdi & Nashik Devotional Yatra - Shirdi Sai Baba Samadhi & Jyotirlinga",
    href: "/packages/special/shirdi-nashik-trimbakeshwar/",
  },
];

// Backward compatibility aliases
export type PilgrimageTourSlide = PilgrimagePackage;
export const PILGRIMAGE_SLIDES = PILGRIMAGE_PACKAGES;

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
  const velocity = useRef<number>(0);
  const hasMoved = useRef<boolean>(false);
  const isLockedVertical = useRef<boolean>(false);
  const isLockedHorizontal = useRef<boolean>(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useRef<boolean>(false);

  // Responsive geometry & media queries
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = PILGRIMAGE_PACKAGES.length;

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

  // Gentle autoplay with interaction pause (5000ms)
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (isPaused || isDragging || prefersReducedMotion.current) return;
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
      return isMobile ? Math.max(260, width * 0.75) : Math.max(480, width * 0.52);
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
    const threshold = isMobile ? 38 : 65;
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
    }, 80);
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
      className="bg-[#F4F5F8] py-8 sm:py-10 md:py-12 lg:py-16 select-none overflow-hidden"
      aria-label="Featured Pilgrimage Tour Packages"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom max-w-7xl px-3 sm:px-4 md:px-6">
        {/* =================================================================== */}
        {/* 1. SECTION HEADER */}
        {/* =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080878]/5 border border-[#080878]/10 text-[#080878] text-[10.5px] sm:text-xs font-bold uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] animate-pulse" />
            <span>Curated Pilgrimage Circuits</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#080878] tracking-tight">
            Featured Spiritual Yatra Packages
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto">
            Sacred journeys across India&#39;s most revered shrines with dedicated chauffeurs and verified deluxe stays.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 2. 3D OVERLAPPING LAYERED CAROUSEL STAGE */}
        {/* =================================================================== */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center my-2 sm:my-3 cursor-grab active:cursor-grabbing select-none min-h-[520px] sm:min-h-[540px] md:min-h-[460px] lg:min-h-[480px] xl:min-h-[500px]"
          style={{
            perspective: "1400px",
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

          {/* Overlapping Deck of Cards */}
          <div className="relative w-full h-[510px] sm:h-[530px] md:h-[440px] lg:h-[460px] xl:h-[480px] flex items-center justify-center pointer-events-none">
            {PILGRIMAGE_PACKAGES.map((pkg, index) => {
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

              // Responsive 3D transform computation (inspired by layered profile reference)
              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";
              let boxShadow = "none";

              if (isMobile) {
                // Mobile: Clean single card view with smooth horizontal slide
                if (t <= 0.6) {
                  zIndex = 30;
                  pointerEvents = "auto";
                  const tx = u * 105;
                  const scale = Math.max(0.88, 1.0 - t * 0.12);
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(${scale})`;
                  opacity = Math.max(0, 1.0 - t * 0.7);
                  boxShadow = "0 20px 45px -10px rgba(8, 8, 120, 0.45)";
                } else if (t <= 1.5) {
                  zIndex = 10;
                  pointerEvents = "none";
                  const tx = u * 105;
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(0.88)`;
                  opacity = 0;
                } else {
                  zIndex = 5;
                  opacity = 0;
                  pointerEvents = "none";
                  const tx = (u > 0 ? 1 : -1) * 120;
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(0.8)`;
                }
              } else {
                // Desktop & Tablet: Layered overlapping card depth effect
                if (t <= 0.45) {
                  // Dominant active center card
                  zIndex = 30;
                  pointerEvents = "auto";
                  const tx = u * 44;
                  const tz = -t * 70;
                  const scale = 1.0 - t * 0.08;
                  const rotY = -u * 4;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = 1.0;
                  filter = "brightness(1)";
                  boxShadow =
                    "0 25px 60px -15px rgba(8, 8, 120, 0.5), 0 0 25px rgba(216, 180, 59, 0.25)";
                } else if (t <= 1.25) {
                  // Tier 1: Immediately adjacent cards tucked slightly behind
                  zIndex = 20;
                  pointerEvents = "auto";
                  const tx = u * 44;
                  const tz = -t * 75;
                  const scale = Math.max(0.88, 1.0 - t * 0.1);
                  const rotY = -u * 4;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = Math.max(0.65, 1.0 - t * 0.32);
                  filter = "brightness(0.70)";
                  boxShadow = "0 15px 35px -10px rgba(0, 0, 0, 0.4)";
                } else if (t <= 2.25) {
                  // Tier 2: Secondary cards further behind
                  zIndex = 10;
                  pointerEvents = "none";
                  const extra = t - 1.0;
                  const tx = (u > 0 ? 1 : -1) * (44 + extra * 32);
                  const tz = -75 - extra * 90;
                  const scale = Math.max(0.76, 0.90 - extra * 0.12);
                  const rotY = (u > 0 ? -1 : 1) * 3;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = Math.max(0, 0.50 - extra * 0.45);
                  filter = "brightness(0.50)";
                } else {
                  // Offstage cards
                  zIndex = 5;
                  opacity = 0;
                  pointerEvents = "none";
                  const tx = (u > 0 ? 1 : -1) * 110;
                  transformStyle = `translate3d(${tx}%, 0, -200px) scale(0.70)`;
                }
              }

              return (
                <article
                  key={pkg.id}
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
                        router.push(pkg.href);
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
                      : prefersReducedMotion.current
                      ? "none"
                      : "transform 850ms cubic-bezier(0.22, 1, 0.36, 1), opacity 850ms cubic-bezier(0.22, 1, 0.36, 1), filter 850ms ease, box-shadow 850ms ease",
                    willChange: "transform, opacity",
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080878] border border-[#D8B43B]/60 cursor-pointer w-[88vw] max-w-[360px] h-[510px] sm:h-[530px] md:w-[680px] lg:w-[860px] xl:w-[940px] md:h-[440px] lg:h-[460px] xl:h-[480px]"
                  aria-hidden={!isCenterActive}
                >
                  {/* Subtle Top Metallic Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B43B]/40 via-[#D8B43B] to-[#D8B43B]/40 z-30 pointer-events-none" />

                  {/* ========================================================= */}
                  {/* MOBILE VERTICAL CARD COMPOSITION (< 768px) */}
                  {/* ========================================================= */}
                  <div className="flex flex-col h-full md:hidden text-left relative z-10">
                    {/* Destination Photograph (Top) */}
                    <div className="relative h-[190px] sm:h-[200px] w-full shrink-0 overflow-hidden bg-[#05055C]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(pkg.image)}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover object-center pointer-events-none"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={600}
                        height={380}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080878] via-transparent to-black/25 pointer-events-none" />

                      {/* Category Label Pill */}
                      <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                        <span className="inline-block bg-[#080878]/90 border border-[#D8B43B]/50 text-[#D8B43B] font-bold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm shadow">
                          {pkg.category}
                        </span>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute top-2.5 right-2.5 z-20 bg-[#080878]/90 border border-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm pointer-events-none">
                        {pkg.duration}
                      </div>
                    </div>

                    {/* Information Area (Bottom) */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 relative z-10 min-w-0">
                      <div>
                        {/* Package Title */}
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug line-clamp-1">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#D8B43B] transition-colors"
                          >
                            {pkg.name}
                          </Link>
                        </h3>

                        {/* Main Route / Destinations */}
                        <p className="text-slate-200 text-xs sm:text-[13px] font-medium mt-1 leading-relaxed line-clamp-1">
                          {pkg.route}
                        </p>

                        {/* Duration & Highlights */}
                        <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] shrink-0" />
                            <span className="text-white font-semibold">Duration:</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[0]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & One Full-Width CTA */}
                      <div className="pt-3 border-t border-white/10 mt-auto flex flex-col gap-2 shrink-0">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[9.5px] uppercase font-bold tracking-wider text-amber-300/80">
                            Package Fare
                          </span>
                          <span className="text-sm sm:text-base font-bold text-white leading-tight">
                            {pkg.price}{" "}
                            {pkg.priceNote && (
                              <span className="text-[10px] text-slate-300 font-normal">
                                ({pkg.priceNote})
                              </span>
                            )}
                          </span>
                        </div>
                        <Link
                          href={pkg.href}
                          onClick={(e) => {
                            if (hasMoved.current) {
                              e.preventDefault();
                              e.stopPropagation();
                            }
                          }}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D8B43B] to-[#d97706] text-slate-950 font-heading font-bold text-xs sm:text-sm text-center shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Explore Package</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* DESKTOP & TABLET TWO-PART COMPOSITION (>= 768px) */}
                  {/* ========================================================= */}
                  <div className="hidden md:grid md:grid-cols-[40%_60%] lg:grid-cols-[42%_58%] xl:grid-cols-[44%_56%] h-full text-left relative z-10">
                    {/* Left: Authentic Destination Photograph */}
                    <div className="relative h-full w-full overflow-hidden bg-[#05055C] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(pkg.image)}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-105"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={700}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080878]/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Duration Tag Top-Left on Photo */}
                      <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                        <span className="inline-block bg-[#080878]/90 border border-white/20 text-white font-semibold text-xs px-2.5 py-1 rounded-full backdrop-blur-sm shadow">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    {/* Right: Clean, Structured Info (The 7 Requirements) */}
                    <div className="relative z-10 min-w-0 p-5 lg:p-7 xl:p-8 flex flex-col justify-between text-left h-full bg-[#080878]">
                      <div>
                        {/* 1. Category Tag */}
                        <div className="mb-2">
                          <span className="inline-block text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#D8B43B] bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                            {pkg.category}
                          </span>
                        </div>

                        {/* 2. Package Name */}
                        <h3 className="font-heading text-xl lg:text-2xl xl:text-[26px] font-bold text-white tracking-tight leading-snug">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#D8B43B] transition-colors"
                          >
                            {pkg.name}
                          </Link>
                        </h3>

                        {/* 3. Main Route / Destinations */}
                        <p className="text-slate-200 text-xs sm:text-sm lg:text-[14px] font-medium mt-1.5 leading-relaxed">
                          {pkg.route}
                        </p>

                        {/* 4 & 5. Duration & Up to 2 Useful Highlights */}
                        <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2">
                          <div className="flex items-center gap-2.5 text-xs lg:text-sm text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#D8B43B] shrink-0" />
                            <span className="text-white font-semibold">Duration:</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs lg:text-sm text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#D8B43B] shrink-0" />
                            <span>{pkg.highlights[0]}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs lg:text-sm text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#D8B43B] shrink-0" />
                            <span>{pkg.highlights[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* 6 & 7. Price & One Explore Package Button */}
                      <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-4 mt-auto shrink-0">
                        {/* Price */}
                        <div>
                          <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-amber-300/80 block">
                            Package Fare
                          </span>
                          <div className="text-xl lg:text-2xl font-bold text-white tracking-tight mt-0.5">
                            {pkg.price}
                          </div>
                          {pkg.priceNote && (
                            <span className="text-xs text-slate-300 font-normal block mt-0.5">
                              {pkg.priceNote}
                            </span>
                          )}
                        </div>

                        {/* One CTA Button */}
                        <div className="shrink-0">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl bg-gradient-to-r from-[#D8B43B] to-[#d97706] text-slate-950 font-heading font-bold text-xs lg:text-sm shadow-md hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                          >
                            <span>Explore Package</span>
                            <span className="text-sm font-bold">&rarr;</span>
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
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-5 md:mt-6">
          {PILGRIMAGE_PACKAGES.map((pkg, dotIdx) => (
            <button
              key={pkg.id}
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}: ${pkg.name}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#080878] ${
                dotIdx === currentIndex
                  ? "w-8 sm:w-9 h-2 bg-[#D8B43B] shadow-sm"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
