import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { TOUR_PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages from Bangalore | Tempo Traveller Outstation | Khushi Travels",
  description:
    "Curated holiday & pilgrimage tour packages from Bangalore with luxury tempo travellers and buses. Coorg, Ooty, Mysore, Tirupati, 12 Jyotirlinga & Goa packages.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/tour-packages-from-bangalore/",
  },
};

export default function TourPackagesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages-from-bangalore/" },
  ];

  return (
    <>
      {/* Packages Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,24,46,0.92), rgba(10,24,46,0.85), rgba(10,24,46,0.98)), url('/images/hero-bg.webp') center/cover no-repeat",
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            Handcrafted South India &amp; Pan-India Itineraries
          </span>

          <h1 className="font-heading text-h1 text-white font-extrabold mb-6 text-balance">
            Tour Packages from{" "}
            <span className="text-brand-amber">Bangalore</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Group vacations made stress-free. Travel together in comfortable
            Maharaja tempo travellers, Force Urbanias, or AC buses with experienced
            chauffeurs and verified hotel bookings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20plan%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Plan Custom Package
            </a>
            <Link
              href="/spiritual-pilgrimage-tours/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-heading font-bold text-sm transition-all"
            >
              12 Jyotirlinga Yatra &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Featured Road Trips &amp; Yatras
            </span>
            <h2 className="font-heading text-h2 font-extrabold text-brand-navy">
              Curated Tour Packages
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              All packages include door-to-door transport in our own sanitized
              vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={600}
                      height={375}
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {pkg.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-brand-navy font-heading font-extrabold text-xs px-2.5 py-1 rounded-lg shadow">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                      {pkg.link ? (
                        <Link
                          href={pkg.link}
                          className="hover:text-brand-amber transition-colors"
                        >
                          {pkg.name}
                        </Link>
                      ) : (
                        pkg.name
                      )}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {pkg.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-xs font-bold text-brand-navy block mb-2">
                        Highlights:
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            className="text-xs text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-amber-500 font-bold shrink-0">
                              &bull;
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between gap-3 pt-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">
                      Starting At
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">
                      {pkg.startingPrice}
                    </span>
                  </div>

                  {pkg.link ? (
                    <Link
                      href={pkg.link}
                      className="px-4 py-2 rounded-xl gradient-amber text-white font-heading font-bold text-xs shadow hover:-translate-y-0.5 transition-all"
                    >
                      View Itinerary
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(
                        pkg.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl gradient-amber text-white font-heading font-bold text-xs shadow hover:-translate-y-0.5 transition-all"
                    >
                      Inquire
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
