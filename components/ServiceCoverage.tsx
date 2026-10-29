"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOCALITIES_DATA, Locality } from "@/data/localities";
import { ROUTES_DATA, RouteItem } from "@/data/routes";
import { FLEET_DATA, Vehicle } from "@/data/fleet";

export default function ServiceCoverage() {
  const [showAllLocalities, setShowAllLocalities] = useState(false);
  const [showAllRoutes, setShowAllRoutes] = useState(false);

  // Friendly display names matching user specifications while preserving existing slugs
  const getRouteLabel = (route: RouteItem): string => {
    const routeNameMap: Record<string, string> = {
      "bangalore-to-mysore-tempo-traveller": "Bengaluru to Mysuru",
      "bangalore-to-coorg-tempo-traveller": "Bengaluru to Coorg",
      "bangalore-to-ooty-tempo-traveller": "Bengaluru to Ooty",
      "bangalore-to-wayanad-tempo-traveller": "Bengaluru to Wayanad",
      "bangalore-to-tirupati-tempo-traveller": "Bengaluru to Tirupati Balaji",
      "bangalore-to-chikmagalur-tempo-traveller": "Bengaluru to Chikkamagaluru",
      "bangalore-to-pondicherry-tempo-traveller": "Bengaluru to Pondicherry",
      "bangalore-to-goa-tempo-traveller": "Bengaluru to Goa",
      "bangalore-to-hampi-tempo-traveller": "Bengaluru to Hampi & Badami",
      "bangalore-to-kodaikanal-tempo-traveller": "Bengaluru to Kodaikanal",
      "bangalore-to-chennai-tempo-traveller": "Bengaluru to Chennai",
      "bangalore-to-hyderabad-tempo-traveller": "Bengaluru to Hyderabad",
      "bangalore-to-mangalore-tempo-traveller": "Bengaluru to Mangaluru & Udupi",
      "bangalore-to-shirdi-tempo-traveller": "Bengaluru to Shirdi Sai Baba Temple",
    };
    return routeNameMap[route.slug] || `Bengaluru to ${route.destination}`;
  };

  const getFleetLabel = (vehicle: Vehicle): string => {
    if (vehicle.slug === "mini-bus-rental-bangalore") {
      return "Mini Bus Rental";
    }
    return vehicle.name;
  };

  const INITIAL_LOCALITIES_COUNT = 10;
  const INITIAL_ROUTES_COUNT = 9;

  return (
    <section
      className="bg-slate-50/80 py-16 md:py-20 border-t border-slate-200/80"
      aria-labelledby="service-coverage-heading"
    >
      <div className="container-custom" style={{ maxWidth: "90%" }}>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
            Doorstep Pickup &amp; South India Network
          </div>
          <h2
            id="service-coverage-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight"
          >
            Bangalore Service Coverage &amp; Routes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Direct doorstep tempo traveller dispatch across every major Bengaluru neighborhood,
            curated outstation highway routes across South India, and a 100% company-owned luxury fleet.
          </p>
        </div>

        {/* 3 Dedicated Service Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {/* Group 1: Bengaluru Localities */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#d97706] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d]">
                      Bengaluru Localities
                    </h3>
                    <p className="text-[11px] text-slate-500 font-normal">
                      Doorstep pickup across tech hubs &amp; layouts
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full shrink-0">
                  {LOCALITIES_DATA.length} Hubs
                </span>
              </div>

              {/* Neatly Wrapped Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {LOCALITIES_DATA.map((loc: Locality, idx: number) => {
                  const isHidden = !showAllLocalities && idx >= INITIAL_LOCALITIES_COUNT;
                  return (
                    <Link
                      key={loc.slug}
                      href={`/localities/${loc.slug}/`}
                      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-amber-50 hover:border-amber-400 hover:text-[#1a365d] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        isHidden ? "hidden" : "inline-flex"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors"></span>
                      <span>{loc.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Expand / View All Control */}
            {LOCALITIES_DATA.length > INITIAL_LOCALITIES_COUNT && (
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAllLocalities(!showAllLocalities)}
                  aria-expanded={showAllLocalities}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#d97706] hover:text-[#b45309] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 py-1.5 px-2 rounded-lg cursor-pointer"
                >
                  <span>
                    {showAllLocalities
                      ? "Show fewer localities"
                      : `View all ${LOCALITIES_DATA.length} localities (+${
                          LOCALITIES_DATA.length - INITIAL_LOCALITIES_COUNT
                        })`}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      showAllLocalities ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Group 2: Outstation Routes */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#d97706] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d]">
                      Outstation Routes
                    </h3>
                    <p className="text-[11px] text-slate-500 font-normal">
                      Inter-state highways &amp; holiday escapes
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full shrink-0">
                  {ROUTES_DATA.length} Routes
                </span>
              </div>

              {/* Neatly Wrapped Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {ROUTES_DATA.map((route: RouteItem, idx: number) => {
                  const isHidden = !showAllRoutes && idx >= INITIAL_ROUTES_COUNT;
                  return (
                    <Link
                      key={route.slug}
                      href={`/routes/${route.slug}/`}
                      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-amber-50 hover:border-amber-400 hover:text-[#1a365d] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        isHidden ? "hidden" : "inline-flex"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors"></span>
                      <span>{getRouteLabel(route)}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Expand / View All Control */}
            {ROUTES_DATA.length > INITIAL_ROUTES_COUNT && (
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAllRoutes(!showAllRoutes)}
                  aria-expanded={showAllRoutes}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#d97706] hover:text-[#b45309] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 py-1.5 px-2 rounded-lg cursor-pointer"
                >
                  <span>
                    {showAllRoutes
                      ? "Show fewer routes"
                      : `View all ${ROUTES_DATA.length} routes (+${
                          ROUTES_DATA.length - INITIAL_ROUTES_COUNT
                        })`}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      showAllRoutes ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Group 3: Fleet Categories */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#d97706] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d]">
                      Fleet Categories
                    </h3>
                    <p className="text-[11px] text-slate-500 font-normal">
                      Luxury tempo travellers, Urbanias &amp; buses
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full shrink-0">
                  {FLEET_DATA.length} Types
                </span>
              </div>

              {/* Neatly Wrapped Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {FLEET_DATA.map((vehicle: Vehicle) => (
                  <Link
                    key={vehicle.slug}
                    href={`/fleet/${vehicle.slug}/`}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-amber-50 hover:border-amber-400 hover:text-[#1a365d] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors"></span>
                    <span>{getFleetLabel(vehicle)}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subtle fleet note */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                100% Owned Chauffeur Fleet
              </span>
              <Link
                href="/best-tempo-traveller-fleet-bangalore/"
                className="font-bold text-[#1a365d] hover:text-amber-600 transition-colors"
              >
                View Full Fleet &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
