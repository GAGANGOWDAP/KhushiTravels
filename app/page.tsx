import React from "react";
import Link from "next/link";
import FleetRows from "@/components/FleetRow";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import FeaturedPilgrimageCard from "@/components/FeaturedPilgrimageCard";
import PopularDestinationsSection from "@/components/PopularDestinationsSection";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO CINEMATIC ===== */}
      <section
        className="hero-cinematic relative overflow-hidden"
        style={
          {
            "--hero-bg-image": `url(${getAssetPath("/images/hero-bg.webp")})`,
          } as React.CSSProperties
        }
      >
        <div className="container-custom w-full relative z-10">
          <div className="max-w-2xl text-left">
            {/* Mobile-Only Location Badge */}
            <div className="inline-flex md:hidden items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#FBBF24] text-[10px] font-semibold tracking-wider uppercase mb-2">
              <svg className="w-2.5 h-2.5 fill-current text-amber-400 shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <span>BASED IN BENGALURU &bull; TRAVEL ACROSS INDIA</span>
            </div>

            {/* Brand Message Eyebrow */}
            <div className="flex items-center gap-3 text-amber-500 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-3 lg:mb-4">
              <span>TRAVEL TOGETHER. TRAVEL BETTER.</span>
              {/* <span className="w-10 h-0.5 bg-amber-500 rounded-full inline-block"></span> */}
            </div>

            {/* Main Heading (Mobile hierarchy optimized, Desktop preserved) */}
            <h1 className="block md:hidden font-heading text-2xl sm:text-3xl text-white font-extrabold tracking-tight leading-[1.12] mb-2">
              Luxury Tempo <span className="text-[#f59e0b]">Traveller</span><br />in Bangalore
            </h1>
            <h1 className="hidden md:block font-heading hero-title text-white font-extrabold tracking-tight leading-[1.08] mb-3.5 lg:mb-5 text-balance">
              Luxury Tempo <br className="hidden sm:inline" />
              <span className="text-[#f59e0b]">Traveller</span> in Bangalore
            </h1>

            {/* Supporting Description (Mobile 3 lines optimized, Desktop preserved) */}
            <p className="block md:hidden text-[#CBD5E1] text-xs leading-relaxed font-normal mb-3 max-w-sm">
              Premium tempo travellers and luxury buses for family trips,
              pilgrimages, corporate tours, and group travel from Bangalore. Safe,
              comfortable, and reliable.
            </p>
            <p className="hidden md:block hero-desc text-[#CBD5E1] mb-5 lg:mb-7 leading-relaxed font-normal">
              Premium tempo travellers and luxury buses for family trips,
              pilgrimages, corporate tours, and group travel from Bangalore. Safe,
              comfortable, and reliable travel with professional drivers.
            </p>

            {/* CTA Buttons - Mobile: side-by-side touch-friendly equal height */}
            <div className="flex md:hidden flex-row gap-2.5 mb-3 w-full max-w-sm">
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20booking%20a%20luxury%20tempo%20traveller."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 px-3 rounded-full gradient-amber text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-all text-center whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Book on WhatsApp</span>
              </a>
              <a
                href="tel:+919901333113"
                className="flex-1 h-10 px-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-heading font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center whitespace-nowrap"
              >
                <svg
                  className="w-3 h-3 text-brand-amber shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>

            {/* CTA Buttons - Desktop Preserved Exactly */}
            <div className="hidden md:flex flex-wrap items-center gap-4 mb-8 lg:mb-10">
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20booking%20a%20luxury%20tempo%20traveller."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Book on WhatsApp</span>
              </a>
              <a
                href="tel:+919901333113"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-heading font-bold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <svg
                  className="w-4 h-4 text-brand-amber"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call +91 99013 33113</span>
              </a>
            </div>

            {/* Trust Indicators - Mobile: Compact 2-Column Grid */}
            <div className="grid md:hidden grid-cols-2 gap-1.5 max-w-sm pt-0.5">
              <div className="flex items-center gap-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1">
                <span className="text-amber-400 text-[10px] shrink-0">★★★★★</span>
                <span className="text-[10px] font-semibold text-white leading-tight">
                  4.9 <span className="text-white/70 font-normal">(63+ Reviews)</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1">
                <svg className="w-3 h-3 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-semibold text-white leading-tight">
                  100% Owned Fleet
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1">
                <svg className="w-3 h-3 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] font-semibold text-white leading-tight">
                  GPS Monitored
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1">
                <svg className="w-3 h-3 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[10px] font-semibold text-white leading-tight">
                  Chauffeur Driven
                </span>
              </div>
            </div>

            {/* Trust Badges - Desktop Preserved Exactly */}
            <div className="hidden md:flex flex-wrap items-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="text-brand-amber">★★★★★</span> 4.9 (63+ Reviews)
              </span>
              <span>&bull;</span>
              <span>100% Owned Fleet</span>
              <span>&bull;</span>
              <span>GPS Monitored</span>
              <span>&bull;</span>
              <span>Chauffeur Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS COUNTERS ===== */}
      <section className="bg-white relative z-20 py-8 sm:py-10 md:py-12 border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                500+
              </p>
              <p className="text-xs text-gray-500 mt-1">Tour customers served</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                28
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Destinations from Bangalore
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                4.9★
              </p>
              <p className="text-xs text-gray-500 mt-1">Customer rating</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                100%
              </p>
              <p className="text-xs text-gray-500 mt-1">Owned fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PILGRIMAGE TOUR SHOWCASE ===== */}
      <FeaturedPilgrimageCard />

      {/* ===== ABOUT / AEO ANSWER BLOCK ===== */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-left">
              <strong className="text-brand-navy">Khushi Travels</strong> is
              Bangalore&apos;s premier provider for{" "}
              <strong className="text-brand-navy">
                luxury tempo travellers in Bangalore
              </strong>
              . We offer an elite fleet ranging from 7 to 50 seater vehicles,
              including{" "}
              <strong className="text-brand-navy">Maharaja pushback seats</strong>,{" "}
              <strong className="text-brand-navy">Force Urbania</strong>, and
              premium luxury buses. All our vehicles are 100% owned, sanitized,
              and staffed with professional chauffeurs. Book instantly via
              WhatsApp for 24/7 support and the most transparent tempo traveller
              rental prices in Bangalore.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  100% Owned Fleet
                </h3>
                <p className="text-sm text-gray-500">
                  We don&apos;t use third-party vehicles. You get exactly the luxury
                  tempo you book.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  24/7 WhatsApp Support
                </h3>
                <p className="text-sm text-gray-500">
                  Instant confirmation and support for your luxury tempo traveller
                  booking.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  Maharaja Seating
                </h3>
                <p className="text-sm text-gray-500">
                  Premium 1x1 Maharaja seats available in our 9, 12, and 14 seater
                  luxury tempos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLEET: 4 ALTERNATING ROWS ===== */}
      <FleetRows />

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Simple 3-Step Process
            </span>
            <h2 className="font-heading text-h1 text-brand-navy">
              How Booking Works
            </h2>
            <p className="text-gray-500 text-base mt-2">
              Reserve your tempo traveller in under two minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                1
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Choose Vehicle &amp; Route
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Select your preferred tempo traveller, Urbania, or bus according
                to group size and luggage needs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                2
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Instant Quote in 5 Mins
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Send a quick WhatsApp with your dates. Get a transparent,
                itemized rate with zero hidden costs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                3
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Confirmed &amp; Dispatched
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Pay a small advance to secure your dates. Chauffeur and sanitized
                vehicle arrive at your doorstep on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS: SOUTH INDIA ROAD TRIPS (Mobile Carousel + Desktop Grid) ===== */}
      <PopularDestinationsSection />

      {/* ===== AMBER CTA BANNER ===== */}
      <section className="gradient-amber py-16 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-h1 font-extrabold mb-4 text-balance">
            Ready to Travel in Absolute Comfort?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Whether it&apos;s a family vacation, wedding shuttle, or company offsite,
            Khushi Travels delivers immaculate vehicles and verified chauffeurs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20need%20a%20tempo%20traveller%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-brand-navy font-heading font-bold text-sm shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              Get Instant WhatsApp Quote
            </a>
            <Link
              href="/hire-tempo-traveller-bangalore/"
              className="px-8 py-4 rounded-full bg-brand-navy/20 hover:bg-brand-navy/30 text-white border border-white/30 font-heading font-bold text-sm transition-all"
            >
              Contact Booking Desk
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <FAQAccordion items={FAQS_DATA} />

      {/* ===== SERVICE COVERAGE ===== */}
      <ServiceCoverage />
    </>
  );
}
