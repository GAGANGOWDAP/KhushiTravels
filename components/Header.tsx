"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAssetPath } from "@/lib/assets";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pkgDropdownOpen, setPkgDropdownOpen] = useState(false);
  const [mobilePkgExpanded, setMobilePkgExpanded] = useState(false);

  const pkgDropdownRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimer();
    setPkgDropdownOpen(true);
  };

  const scheduleCloseDropdown = (delay = 220) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setPkgDropdownOpen(false);
    }, delay);
  };

  const toggleDropdown = () => {
    clearCloseTimer();
    setPkgDropdownOpen((prev) => !prev);
  };

  const closeDropdownImmediately = () => {
    clearCloseTimer();
    setPkgDropdownOpen(false);
  };

  // Scroll listener for smooth navbar transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height dynamically for viewport calculations
  useEffect(() => {
    const updateNavbarHeight = () => {
      const headerEl = document.getElementById("site-header");
      if (headerEl) {
        const height = headerEl.getBoundingClientRect().height;
        if (height > 0) {
          document.documentElement.style.setProperty(
            "--navbar-height",
            `${Math.round(height)}px`
          );
        }
      }
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight, { passive: true });
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Close dropdown on outside click/touch, and handle Escape key
  useEffect(() => {
    const handleOutsideInteraction = (e: MouseEvent | TouchEvent) => {
      if (
        pkgDropdownRef.current &&
        !pkgDropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdownImmediately();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && pkgDropdownOpen) {
        closeDropdownImmediately();
        triggerBtnRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleKeyDown);
      clearCloseTimer();
    };
  }, [pkgDropdownOpen]);

  // Close menus on page route changes
  useEffect(() => {
    closeDropdownImmediately();
    setMobileMenuOpen(false);
    setMobilePkgExpanded(false);
  }, [pathname]);

  const isPackagesActive = Boolean(
    pathname?.startsWith("/packages") ||
      pathname?.startsWith("/tour-packages") ||
      pathname?.startsWith("/spiritual-pilgrimage-tours") ||
      pathname?.startsWith("/pilgrimage-packages")
  );

  const isActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "")) return true;
    if (href !== "/" && pathname?.includes(href.replace(/\/$/, ""))) return true;
    return false;
  };

  return (
    <>
      <header
        id="site-header"
        className={`site-header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-custom header-inner">
          {/* 1. Brand Logo (Left) */}
          <Link href="/" className="site-logo flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath("/images/khushi-tours-and-travels-logo.webp")}
              alt="Khushi Travels"
              className="h-9 md:h-10 w-auto transition-transform duration-200 hover:opacity-95 rounded-lg"
              width={160}
              height={40}
            />
          </Link>

          {/* 2. Modern Open Navigation (Center) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Main Navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>

            {/* Fleet */}
            <Link
              href="/best-tempo-traveller-fleet-bangalore/"
              className={`nav-link ${
                isActive("/best-tempo-traveller-fleet-bangalore/") ? "active" : ""
              }`}
            >
              Fleet
            </Link>

            {/* Packages Dropdown */}
            <div
              ref={pkgDropdownRef}
              className="relative inline-flex items-center"
              onMouseEnter={openDropdown}
              onMouseLeave={() => scheduleCloseDropdown(220)}
            >
              <button
                ref={triggerBtnRef}
                id="packages-menu-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDropdown();
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    openDropdown();
                  }
                }}
                aria-expanded={pkgDropdownOpen}
                aria-haspopup="true"
                aria-controls="packages-dropdown-menu"
                className={`nav-link flex items-center gap-1.5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm ${
                  isPackagesActive ? "active" : ""
                }`}
              >
                <span>Packages</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    pkgDropdownOpen ? "rotate-180 text-[#D8B43B]" : "opacity-70"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Seamless Dropdown Menu Wrapper - Starts at top-full (0 gap) with pt-2 visual padding */}
              <div
                className={`dropdown-menu-wrapper absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
                  pkgDropdownOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={openDropdown}
                onMouseLeave={() => scheduleCloseDropdown(220)}
              >
                {/* Visual Menu Card with hit-bridge */}
                <div
                  id="packages-dropdown-menu"
                  className="w-72 bg-white text-slate-800 rounded-2xl shadow-xl border border-gray-100 p-2 relative before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:bg-transparent"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="packages-menu-btn"
                >
                  <div className="space-y-1">
                    <Link
                      href="/packages/normal/"
                      role="menuitem"
                      onClick={() => closeDropdownImmediately()}
                      className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                        pathname?.includes("/packages/normal")
                          ? "bg-[#D8B43B]/10 text-[#080878] font-bold border border-[#D8B43B]/30"
                          : "hover:bg-slate-50 text-slate-700 hover:text-[#080878]"
                      }`}
                    >
                      <span className="text-xs font-bold flex items-center justify-between">
                        Normal Packages
                        <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-medium">
                          Family Tours
                        </span>
                      </span>
                      <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                        Tirupati, Coorg, Ooty, Mysore & Goa
                      </span>
                    </Link>

                    <Link
                      href="/packages/special/"
                      role="menuitem"
                      onClick={() => closeDropdownImmediately()}
                      className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                        pathname?.includes("/packages/special")
                          ? "bg-[#D8B43B]/10 text-[#080878] font-bold border border-[#D8B43B]/30"
                          : "hover:bg-slate-50 text-slate-700 hover:text-[#080878]"
                      }`}
                    >
                      <span className="text-xs font-bold flex items-center justify-between">
                        Special Packages
                        <span className="text-[10px] bg-[#D8B43B]/20 text-[#080878] px-1.5 py-0.5 rounded font-bold">
                          ★ Pilgrimage
                        </span>
                      </span>
                      <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                        12 Jyotirlinga Yatra & Sacred Shrines
                      </span>
                    </Link>

                    <Link
                      href="/packages/weekend/"
                      role="menuitem"
                      onClick={() => closeDropdownImmediately()}
                      className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                        pathname?.includes("/packages/weekend")
                          ? "bg-[#D8B43B]/10 text-[#080878] font-bold border border-[#D8B43B]/30"
                          : "hover:bg-slate-50 text-slate-700 hover:text-[#080878]"
                      }`}
                    >
                      <span className="text-xs font-bold flex items-center justify-between">
                        Weekend Packages
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-medium border border-emerald-200">
                          18 Trips
                        </span>
                      </span>
                      <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                        Gokarna, Dandeli, Hampi, Munnar & more
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/tempo-traveller-rent-price-bangalore/"
              className={`nav-link ${
                isActive("/tempo-traveller-rent-price-bangalore/") ? "active" : ""
              }`}
            >
              Pricing
            </Link>

            {/* Contact */}
            <Link
              href="/hire-tempo-traveller-bangalore/"
              className={`nav-link ${
                isActive("/hire-tempo-traveller-bangalore/") ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Actions (Right) */}
          <div className="header-actions flex items-center gap-2 sm:gap-2.5">
            {/* Phone Button */}
            <a
              href="tel:+919901333113"
              className="nav-phone-btn hidden sm:inline-flex"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91 99013 33113</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`}
              id="menuToggle"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="ham-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="close-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        id="mobileOverlay"
      >
        <nav className="w-full max-w-sm flex flex-col items-center gap-6">
          <Link
            href="/"
            className={isActive("/") ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/best-tempo-traveller-fleet-bangalore/"
            className={
              isActive("/best-tempo-traveller-fleet-bangalore/") ? "active" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Fleet
          </Link>

          {/* Packages Expandable on Mobile */}
          <div className="w-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setMobilePkgExpanded(!mobilePkgExpanded)}
              className={`flex items-center gap-2 text-xl font-semibold transition-colors ${
                isPackagesActive ? "text-[#D8B43B] font-bold" : "text-[#080878]"
              }`}
              aria-expanded={mobilePkgExpanded}
            >
              <span>Packages</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobilePkgExpanded ? "rotate-180 text-[#D8B43B]" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobilePkgExpanded && (
              <div className="flex flex-col items-center gap-3 py-3 px-6 bg-slate-50 rounded-2xl w-full max-w-xs mt-3 border border-slate-200/80 shadow-inner">
                <Link
                  href="/packages/normal/"
                  className={`text-sm font-semibold transition-colors ${
                    pathname?.includes("/packages/normal")
                      ? "text-[#D8B43B] font-bold"
                      : "text-gray-700 hover:text-[#D8B43B]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobilePkgExpanded(false);
                  }}
                >
                  Normal Packages
                </Link>
                <Link
                  href="/packages/special/"
                  className={`text-sm font-semibold transition-colors ${
                    pathname?.includes("/packages/special")
                      ? "text-[#D8B43B] font-bold"
                      : "text-gray-700 hover:text-[#D8B43B]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobilePkgExpanded(false);
                  }}
                >
                  Special Packages
                </Link>
                <Link
                  href="/packages/weekend/"
                  className={`text-sm font-semibold transition-colors ${
                    pathname?.includes("/packages/weekend")
                      ? "text-[#D8B43B] font-bold"
                      : "text-gray-700 hover:text-[#D8B43B]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobilePkgExpanded(false);
                  }}
                >
                  Weekend Packages (18)
                </Link>
                <Link
                  href="/packages/"
                  className="text-xs font-bold text-[#D8B43B] hover:underline pt-2 border-t border-gray-200 w-full text-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobilePkgExpanded(false);
                  }}
                >
                  View All Packages →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/tempo-traveller-rent-price-bangalore/"
            className={
              isActive("/tempo-traveller-rent-price-bangalore/") ? "active" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/hire-tempo-traveller-bangalore/"
            className={
              isActive("/hire-tempo-traveller-bangalore/") ? "active" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Contact & Social Actions */}
        <div className="mobile-socs flex items-center gap-3 mt-8">
          <a
            href="https://wa.me/919901333113"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon bg-emerald-600 text-white border-none w-11 h-11"
            aria-label="WhatsApp"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="tel:+919901333113"
            className="action-icon bg-[#080878] text-white border-none w-11 h-11"
            aria-label="Call Us"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
