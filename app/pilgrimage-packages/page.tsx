import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";

export const metadata: Metadata = {
  title: "Pilgrimage Tour Packages from Bangalore | Temple Yatras | Khushi Travels",
  description:
    "Spiritual pilgrimage tour packages from Bangalore by tempo traveller. Tirupati, 12 Jyotirlinga, Shirdi, Mantralayam, and South India temple circuits.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/pilgrimage-packages/",
  },
};

export default function PilgrimagePackagesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages-from-bangalore/" },
    { label: "Pilgrimage Packages", href: "/pilgrimage-packages/" },
  ];

  const packages = [
    {
      title: "25-Day 12 Jyotirlinga Spiritual Yatra",
      desc: "All twelve sacred Jyotirlingas across India with Ayodhya, Mathura, and Puri in luxury AC Volvo coach.",
      link: "/spiritual-pilgrimage-tours/",
      duration: "25 Days",
    },
    {
      title: "Bangalore to Tirupati Balaji VIP Darshan",
      desc: "Daily door-to-door packages with Seeghra Darshan assistance, Padmavathi Temple, and express return.",
      link: "/routes/bangalore-to-tirupati-tempo-traveller/",
      duration: "1 or 2 Days",
    },
    {
      title: "Bangalore to Shirdi & Shani Shingnapur",
      desc: "Comfortable highway pilgrimage with VIP darshan pass assistance and stops at Nashik Trimbakeshwar.",
      link: "/routes/bangalore-to-shirdi-tempo-traveller/",
      duration: "3 to 4 Days",
    },
  ];

  return (
    <>
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
            Sacred Temple Tours
          </span>

          <h1 className="font-heading text-h1 text-white font-extrabold mb-6 text-balance">
            Spiritual Pilgrimage{" "}
            <span className="text-brand-amber">Packages from Bangalore</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Divine journeys crafted for peace of mind and spiritual enrichment.
            Experienced chauffeurs who understand temple rituals and senior-citizen
            comfort.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-py">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-2">
                    {pkg.duration}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {pkg.desc}
                  </p>
                </div>
                <Link
                  href={pkg.link}
                  className="block text-center py-3 rounded-xl gradient-amber text-white font-heading font-bold text-xs shadow hover:-translate-y-0.5 transition-all"
                >
                  Explore Package &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
