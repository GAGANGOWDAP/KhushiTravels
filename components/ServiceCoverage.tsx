"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOCALITIES_DATA, Locality } from "@/data/localities";
import { ROUTES_DATA, RouteItem } from "@/data/routes";
import { FLEET_DATA, Vehicle } from "@/data/fleet";
import { getAssetPath } from "@/lib/assets";

export default function ServiceCoverage() {
  const [showAllLocalities, setShowAllLocalities] = useState(false);
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllFleet, setShowAllFleet] = useState(false);

  // Friendly display names matching user specifications while preserving existing slugs
  const getRouteLabel = (route: RouteItem): string => {
    const routeNameMap: Record<string, string> = {
      "bangalore-to-mysore-tempo-traveller": "Bengaluru to Mysuru",
      "bangalore-to-coorg-tempo-traveller": "Bengaluru to Coorg",
      "bangalore-to-ooty-tempo-traveller": "Bengaluru to Ooty",
      "bangalore-to-wayanad-tempo-traveller": "Bengaluru to Wayanad",
      "bangalore-to-tirupati-tempo-traveller": "Bengaluru to Nava Tirupati",
      "bangalore-to-chikmagalur-tempo-traveller": "Bengaluru to Chikkamagaluru",
      "bangalore-to-pondicherry-tempo-traveller": "Bengaluru to Pondicherry",
      "bangalore-to-goa-tempo-traveller": "Bengaluru to Goa",
      "bangalore-to-hampi-tempo-traveller": "Bengaluru to Hampi & Badami",
      "bangalore-to-kodaikanal-tempo-traveller": "Bengaluru to Kodaikanal",
      "bangalore-to-chennai-tempo-traveller": "Bengaluru to Chennai",
      "bangalore-to-hyderabad-tempo-traveller": "Bengaluru to Hyderabad",
      "bangalore-to-mangalore-tempo-traveller": "Bengaluru to Mangaluru & Udupi",
      "bangalore-to-shirdi-tempo-traveller": "Bengaluru to Shirdi Sai Baba",
    };
    return routeNameMap[route.slug] || `Bengaluru to ${route.destination}`;
  };

  const getFleetLabel = (vehicle: Vehicle): string => {
    if (vehicle.slug === "mini-bus-rental-bangalore") {
      return "Mini Bus Rental (21 & 26 Seater)";
    }
    return vehicle.name;
  };

  // 4 representative items for initial clean presentation
  const INITIAL_COUNT = 4;

  const initialLocalities = LOCALITIES_DATA.slice(0, INITIAL_COUNT);
  const remainingLocalities = LOCALITIES_DATA.slice(INITIAL_COUNT);

  const initialRoutes = ROUTES_DATA.slice(0, INITIAL_COUNT);
  const remainingRoutes = ROUTES_DATA.slice(INITIAL_COUNT);

  const initialFleet = FLEET_DATA.slice(0, INITIAL_COUNT);
  const remainingFleet = FLEET_DATA.slice(INITIAL_COUNT);

  return (
    <section
      className="bg-[#F8F9FC] py-14 sm:py-16 md:py-20 border-t border-slate-200/70 select-none overflow-hidden"
      aria-labelledby="network-section-heading"
    >
      <div className="container-custom max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================================== */}
        {/* SECTION HEADER: Luxury Cinematic Minimalism */}
        {/* =================================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080878]/5 border border-[#080878]/10 text-[#080878] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B] animate-pulse" />
            <span>EXPLORE OUR NETWORK</span>
          </div>

          <h2
            id="network-section-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#080878] tracking-tight leading-tight"
          >
            Every Journey, Well Connected.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover our pickup network, outstation destinations and premium travel fleet.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 3 VISUALLY DISTINCT INFORMATION CARDS */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 xl:gap-8 items-start">
          {/* ================================================================= */}
          {/* CARD 1: Bengaluru Localities (Urban Hubs) */}
          {/* ================================================================= */}
          <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.12)] hover:border-slate-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative group">
            {/* Delicate Top Gold Accent */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D8B43B]/60 to-transparent" />

            <div>
              {/* Card Header & Display Stat */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#080878]/5 border border-[#080878]/10 text-[#080878] flex items-center justify-center shrink-0 group-hover:bg-[#080878] group-hover:text-[#D8B43B] transition-colors duration-300">
                    {/* Location / Map Pin Icon */}
                    <svg
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">
                      CITY-WIDE COVERAGE
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#080878] leading-tight">
                      Bengaluru Localities
                    </h3>
                  </div>
                </div>

                {/* Prominent Numerical Statistic */}
                <div className="text-right shrink-0">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#080878] leading-none">
                    {LOCALITIES_DATA.length}
                  </div>
                  <span className="text-[10px] font-bold text-[#D8B43B] uppercase tracking-wider block mt-1">
                    Pickup Hubs
                  </span>
                </div>
              </div>

              {/* Subtitle / Context */}
              <p className="text-xs text-slate-500 font-normal mt-3.5 mb-4 leading-relaxed">
                Doorstep pickup and instant highway access across major tech corridors and residential layouts.
              </p>

              {/* Initial 4 Representative Locations */}
              <div className="space-y-1.5" role="list">
                {initialLocalities.map((loc: Locality) => (
                  <Link
                    key={loc.slug}
                    href={`/localities/${loc.slug}/`}
                    className="group/item flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#D8B43B] shrink-0 group-hover/item:scale-125 transition-transform" />
                      <div className="truncate">
                        <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                          {loc.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal block truncate">
                          {loc.zone.split("(")[0].trim()}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>

              {/* Expandable Area: Remaining 11 Localities */}
              <div
                id="localities-expanded-list"
                className="grid transition-all duration-500 ease-in-out"
                style={{
                  gridTemplateRows: showAllLocalities ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0 overflow-hidden space-y-1.5 pt-1.5">
                  {remainingLocalities.map((loc: Locality) => (
                    <Link
                      key={loc.slug}
                      href={`/localities/${loc.slug}/`}
                      className="group/item flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-[#D8B43B] shrink-0 transition-colors" />
                        <div className="truncate">
                          <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                            {loc.name}
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal block truncate">
                            {loc.zone.split("(")[0].trim()}
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Expand Action & Verified Badge */}
            <div className="pt-4 mt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setShowAllLocalities(!showAllLocalities)}
                aria-expanded={showAllLocalities}
                aria-controls="localities-expanded-list"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#080878] bg-slate-50 hover:bg-[#D8B43B]/15 hover:text-[#080878] border border-slate-200/80 hover:border-amber-300 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
              >
                <span>
                  {showAllLocalities
                    ? "Show Representative Hubs"
                    : `Explore All ${LOCALITIES_DATA.length} Locations (+${remainingLocalities.length})`}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showAllLocalities ? "rotate-180 text-[#D8B43B]" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-0.5">
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Free Doorstep Arrival
                </span>
                <span className="font-medium text-slate-400">24/7 Dispatch</span>
              </div>
            </div>
          </article>

          {/* ================================================================= */}
          {/* CARD 2: Outstation Routes (Highway & Travel Circuits) */}
          {/* ================================================================= */}
          <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.12)] hover:border-slate-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative group">
            {/* Delicate Top Gold Accent */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D8B43B]/60 to-transparent" />

            <div>
              {/* Card Header & Display Stat */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#080878]/5 border border-[#080878]/10 text-[#080878] flex items-center justify-center shrink-0 group-hover:bg-[#080878] group-hover:text-[#D8B43B] transition-colors duration-300">
                    {/* Navigation / Compass Route Icon */}
                    <svg
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
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
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">
                      HIGHWAY EXPEDITIONS
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#080878] leading-tight">
                      Outstation Routes
                    </h3>
                  </div>
                </div>

                {/* Prominent Numerical Statistic */}
                <div className="text-right shrink-0">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#080878] leading-none">
                    {ROUTES_DATA.length}
                  </div>
                  <span className="text-[10px] font-bold text-[#D8B43B] uppercase tracking-wider block mt-1">
                    Travel Routes
                  </span>
                </div>
              </div>

              {/* Subtitle / Context */}
              <p className="text-xs text-slate-500 font-normal mt-3.5 mb-4 leading-relaxed">
                Smooth highway travel with experienced chauffeurs across South India’s key destinations and pilgrimage circuits.
              </p>

              {/* Initial 4 Representative Routes */}
              <div className="space-y-1.5" role="list">
                {initialRoutes.map((route: RouteItem) => (
                  <Link
                    key={route.slug}
                    href={`/routes/${route.slug}/`}
                    className="group/item flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#d97706] flex items-center justify-center shrink-0 group-hover/item:bg-[#080878] group-hover/item:text-[#D8B43B] transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <div className="truncate">
                        <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                          {getRouteLabel(route)}
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal block truncate">
                          {route.distanceKm} km &bull; {route.durationHrs} &bull;{" "}
                          <span className="font-semibold text-amber-700">{route.startingPrice}</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>

              {/* Expandable Area: Remaining 10 Routes */}
              <div
                id="routes-expanded-list"
                className="grid transition-all duration-500 ease-in-out"
                style={{
                  gridTemplateRows: showAllRoutes ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0 overflow-hidden space-y-1.5 pt-1.5">
                  {remainingRoutes.map((route: RouteItem) => (
                    <Link
                      key={route.slug}
                      href={`/routes/${route.slug}/`}
                      className="group/item flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover/item:bg-[#080878] group-hover/item:text-[#D8B43B] transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="truncate">
                          <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                            {getRouteLabel(route)}
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal block truncate">
                            {route.distanceKm} km &bull; {route.durationHrs} &bull;{" "}
                            <span className="font-semibold text-amber-700">{route.startingPrice}</span>
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Expand Action & Verified Badge */}
            <div className="pt-4 mt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setShowAllRoutes(!showAllRoutes)}
                aria-expanded={showAllRoutes}
                aria-controls="routes-expanded-list"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#080878] bg-slate-50 hover:bg-[#D8B43B]/15 hover:text-[#080878] border border-slate-200/80 hover:border-amber-300 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
              >
                <span>
                  {showAllRoutes
                    ? "Show Representative Routes"
                    : `Explore All ${ROUTES_DATA.length} Outstation Routes (+${remainingRoutes.length})`}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showAllRoutes ? "rotate-180 text-[#D8B43B]" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-0.5">
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  All-India Tourist Permits
                </span>
                <span className="font-medium text-slate-400">Interstate Tolls Clear</span>
              </div>
            </div>
          </article>

          {/* ================================================================= */}
          {/* CARD 3: Fleet Categories (Luxury Vehicle Classes) */}
          {/* ================================================================= */}
          <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.12)] hover:border-slate-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative group">
            {/* Delicate Top Gold Accent */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D8B43B]/60 to-transparent" />

            <div>
              {/* Card Header & Display Stat */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#080878]/5 border border-[#080878]/10 text-[#080878] flex items-center justify-center shrink-0 group-hover:bg-[#080878] group-hover:text-[#D8B43B] transition-colors duration-300">
                    {/* Vehicle Fleet Icon */}
                    <svg
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
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
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">
                      PREMIUM TRAVEL FLEET
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#080878] leading-tight">
                      Fleet Categories
                    </h3>
                  </div>
                </div>

                {/* Prominent Numerical Statistic */}
                <div className="text-right shrink-0">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#080878] leading-none">
                    {FLEET_DATA.length}
                  </div>
                  <span className="text-[10px] font-bold text-[#D8B43B] uppercase tracking-wider block mt-1">
                    Vehicle Types
                  </span>
                </div>
              </div>

              {/* Subtitle / Context */}
              <p className="text-xs text-slate-500 font-normal mt-3.5 mb-4 leading-relaxed">
                100% company-owned luxury fleet including Maharaja pushback recliners, Force Urbania, and deluxe buses.
              </p>

              {/* Initial 4 Representative Vehicles */}
              <div className="space-y-1.5" role="list">
                {initialFleet.map((vehicle: Vehicle) => (
                  <Link
                    key={vehicle.slug}
                    href={`/fleet/${vehicle.slug}/`}
                    className="group/item flex items-center justify-between p-2 sm:p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-9 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getAssetPath(vehicle.image)}
                          alt={vehicle.name}
                          className="w-full h-full object-cover object-center group-hover/item:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width={48}
                          height={36}
                        />
                      </div>
                      <div className="truncate">
                        <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                          {getFleetLabel(vehicle)}
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal block truncate">
                          {vehicle.seats} &bull;{" "}
                          <span className="font-semibold text-amber-700">₹{vehicle.ratePerKm}/km</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>

              {/* Expandable Area: Remaining 5 Vehicles */}
              <div
                id="fleet-expanded-list"
                className="grid transition-all duration-500 ease-in-out"
                style={{
                  gridTemplateRows: showAllFleet ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0 overflow-hidden space-y-1.5 pt-1.5">
                  {remainingFleet.map((vehicle: Vehicle) => (
                    <Link
                      key={vehicle.slug}
                      href={`/fleet/${vehicle.slug}/`}
                      className="group/item flex items-center justify-between p-2 sm:p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-9 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={getAssetPath(vehicle.image)}
                            alt={vehicle.name}
                            className="w-full h-full object-cover object-center group-hover/item:scale-105 transition-transform duration-300"
                            loading="lazy"
                            width={48}
                            height={36}
                          />
                        </div>
                        <div className="truncate">
                          <span className="font-heading font-semibold text-sm text-[#080878] block truncate">
                            {getFleetLabel(vehicle)}
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal block truncate">
                            {vehicle.seats} &bull;{" "}
                            <span className="font-semibold text-amber-700">₹{vehicle.ratePerKm}/km</span>
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover/item:text-[#D8B43B] group-hover/item:translate-x-1 transition-all text-xs font-bold pl-2 shrink-0">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Expand Action & Primary Link to Full Fleet */}
            <div className="pt-4 mt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShowAllFleet(!showAllFleet)}
                  aria-expanded={showAllFleet}
                  aria-controls="fleet-expanded-list"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-[#080878] bg-slate-50 hover:bg-[#D8B43B]/15 hover:text-[#080878] border border-slate-200/80 hover:border-amber-300 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                >
                  <span>{showAllFleet ? "Show 4" : `View All ${FLEET_DATA.length}`}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      showAllFleet ? "rotate-180 text-[#D8B43B]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <Link
                  href="/best-tempo-traveller-fleet-bangalore/"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#D8B43B] to-[#d97706] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                >
                  <span>Explore Full Fleet</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-0.5">
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% Owned Fleet
                </span>
                <span className="font-medium text-slate-400">GPS Monitored</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
