import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";

export const metadata: Metadata = {
  title: "25-Day 12 Jyotirlinga Spiritual Yatra from Bangalore | Khushi Travels",
  description:
    "Join Khushi Tours & Travels on a 25-day spiritual yatra from Bengaluru covering all 12 Jyotirlingas, Mathura, Vrindavan, Ayodhya, Gaya & Puri in luxury AC transport.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/spiritual-pilgrimage-tours/",
  },
};

export default function SpiritualPilgrimagePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages-from-bangalore/" },
    { label: "12 Jyotirlinga Spiritual Yatra", href: "/spiritual-pilgrimage-tours/" },
  ];

  const jyotirlingas = [
    { name: "Somnath", location: "Prabhas Patan, Gujarat", desc: "First among the twelve Jyotirlingas, overlooking the Arabian Sea." },
    { name: "Mallikarjuna", location: "Srisailam, Andhra Pradesh", desc: "Perched atop the Nallamala Hills along the Krishna River." },
    { name: "Mahakaleshwar", location: "Ujjain, Madhya Pradesh", desc: "Famous for the sacred early morning Bhasma Aarti on the banks of Shipra." },
    { name: "Omkareshwar", location: "Mandhata Island, Madhya Pradesh", desc: "Sacred island shaped naturally like the holy Om symbol on Narmada River." },
    { name: "Kedarnath", location: "Garhwal Himalayas, Uttarakhand", desc: "Highest of the 12 Jyotirlingas amidst majestic snow-capped peaks." },
    { name: "Bhimashankar", location: "Sahyadri Hills, Maharashtra", desc: "Surrounded by lush forests where the sacred Bhima River originates." },
    { name: "Kashi Vishwanath", location: "Varanasi, Uttar Pradesh", desc: "Spiritual heart of India on the sacred ghats of Mother Ganga." },
    { name: "Trimbakeshwar", location: "Nashik, Maharashtra", desc: "Origin of the Godavari River, featuring the unique three-faced linga." },
    { name: "Baidyanath", location: "Deoghar, Jharkhand", desc: "Renowned healing shrine worshipped by millions of Kanwariyas." },
    { name: "Nageshwar", location: "Dwarka, Gujarat", desc: "Protector shrine near Lord Krishna's legendary sacred kingdom." },
    { name: "Ramanathaswamy", location: "Rameshwaram, Tamil Nadu", desc: "Consecrated by Lord Rama with 22 holy teertham temple tanks." },
    { name: "Grishneshwar", location: "Ellora, Maharashtra", desc: "Ancient sanctum adjacent to the world-heritage Ellora rock-cut caves." },
  ];

  const itineraryHighlights = [
    { day: "Days 1–3", route: "Bengaluru → Srisailam → Hyderabad", focus: "Mallikarjuna Jyotirlinga darshan and Krishna river ghats." },
    { day: "Days 4–7", route: "Maharashtra Circuit (Bhimashankar, Trimbakeshwar, Grishneshwar)", focus: "Three sacred shrines plus Shirdi Sai Baba darshan." },
    { day: "Days 8–11", route: "Gujarat & Western Coast (Somnath, Dwarka, Nageshwar)", focus: "Coastal shrines, Beyt Dwarka, and Somnath light & sound." },
    { day: "Days 12–14", route: "Madhya Pradesh (Ujjain Mahakaleshwar & Omkareshwar)", focus: "Bhasma Aarti, Narmada parikrama ghats, and Indore." },
    { day: "Days 15–18", route: "Uttar Pradesh & Bihar (Mathura, Ayodhya, Varanasi, Gaya)", focus: "Ram Janmabhoomi darshan, Ganga Aarti, and Pinda Daan rites." },
    { day: "Days 19–21", route: "Jharkhand & Odisha (Baidyanath & Puri Jagannath)", focus: "Deoghar shrine darshan, Puri seaside sanctum, Konark Sun Temple." },
    { day: "Days 22–25", route: "Southern Coast → Rameshwaram → Bengaluru", focus: "Rameshwaram 22 teerthams, Dhanushkodi, and safe return to Bengaluru." },
  ];

  return (
    <>
      {/* Hero Header */}
      <section
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,24,46,0.92), rgba(10,24,46,0.85), rgba(10,24,46,0.98)), url('/images/hero-bg.webp') center/cover no-repeat",
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-amber uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-amber/15 border border-brand-amber/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
            Khushi Tours &amp; Travels &bull; Proposed Pilgrimage Package
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 text-balance">
            12 Jyotirlinga <span className="text-brand-amber">Spiritual Yatra</span>
          </h1>

          <p className="font-heading text-lg sm:text-xl md:text-2xl text-amber-200/90 font-semibold mb-6 text-balance">
            Twelve Sacred Jyotirlingas. More Sacred Destinations. One Unforgettable Journey.
          </p>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Join Khushi Tours &amp; Travels on a proposed 25-day pilgrimage starting
            and ending in Bengaluru, visiting India&apos;s twelve revered Jyotirlingas
            and exploring additional spiritual destinations including Mathura,
            Vrindavan, Ayodhya, Gaya, Bodh Gaya, and Puri.
          </p>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Duration</span>
              <span className="text-white text-sm font-bold block mt-0.5">25 Days</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Proposed</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Jyotirlingas</span>
              <span className="text-white text-sm font-bold block mt-0.5">All 12 Shrines</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Pan-India</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Sacred Sites</span>
              <span className="text-white text-sm font-bold block mt-0.5">+6 Sacred Sites</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Ayodhya, Kashi, Puri</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Transport</span>
              <span className="text-white text-sm font-bold block mt-0.5">AC Volvo Coach</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Air Suspension</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Stay</span>
              <span className="text-white text-sm font-bold block mt-0.5">3-Star Deluxe</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Double-sharing</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Meals</span>
              <span className="text-white text-sm font-bold block mt-0.5">Pure Satvik</span>
              <span className="text-white/50 text-[10px] block mt-0.5">Breakfast, lunch, dinner</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20the%2025-Day%2012%20Jyotirlinga%20Yatra."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Enquire on WhatsApp
            </a>
            <a
              href="tel:+919901333113"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-heading font-bold text-sm transition-all"
            >
              Call +91 99013 33113
            </a>
          </div>
        </div>
      </section>

      {/* 12 Jyotirlingas Grid */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              The Divine Shrines
            </span>
            <h2 className="font-heading text-h1 text-brand-navy">
              All 12 Dwadasha Jyotirlingas
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Worship the eternal flame of Lord Shiva across twelve sacred shrines
              throughout Bharat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jyotirlingas.map((j, i) => (
              <div
                key={j.name}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-amber hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full gradient-amber text-white font-heading font-extrabold text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Jyotirlinga
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-1">
                  {j.name}
                </h3>
                <p className="text-xs font-semibold text-brand-amber mb-2">
                  {j.location}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Outline */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-h2 text-brand-navy font-bold">
              Proposed 25-Day Circuit Overview
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Senior-friendly pacing with comfortable highway transit and regular
              rest halts.
            </p>
          </div>

          <div className="space-y-4">
            {itineraryHighlights.map((phase) => (
              <div
                key={phase.day}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-brand-amber bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {phase.day}
                    </span>
                    <h3 className="font-heading font-bold text-base text-brand-navy">
                      {phase.route}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                    {phase.focus}
                  </p>
                </div>
                <a
                  href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20tell%20me%20more%20about%20the%20${encodeURIComponent(
                    phase.day
                  )}%20itinerary.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 rounded-xl border border-brand-amber text-brand-navy hover:bg-brand-amber hover:text-white font-heading font-bold text-xs transition-all text-center"
                >
                  Ask Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
