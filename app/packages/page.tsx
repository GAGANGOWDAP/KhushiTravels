import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  NORMAL_PACKAGES,
  SPECIAL_PACKAGES,
  WEEKEND_PACKAGES,
} from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageCard from "@/components/packages/PackageCard";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";

export const metadata: Metadata = {
  title: "Tour Packages from Bangalore | Normal, Special & Weekend Trips | Khushi Travels",
  description:
    "Explore Bangalore's premier travel packages: Weekend getaways (18 trips), Special Pilgrimage Yatras (12 Jyotirlinga), and Normal South India family tours by luxury Tempo Traveller.",
  alternates: {
    canonical: "https://gagangowdap.github.io/KhushiTravels/packages/",
  },
  openGraph: {
    title: "Tour Packages from Bangalore | Khushi Travels",
    description:
      "All packages by Khushi Travels. Luxury 9 to 16 seater AC Tempo Travellers & Force Urbania with doorstep Bangalore dispatch.",
    url: "https://gagangowdap.github.io/KhushiTravels/packages/",
    siteName: "Khushi Travels",
    type: "website",
  },
};

export default function PackagesHubPage() {
  const allCount =
    NORMAL_PACKAGES.length + SPECIAL_PACKAGES.length + WEEKEND_PACKAGES.length;

  return (
    <main className="min-h-screen bg-slate-50">
      <PackageCategoryHeader
        eyebrow="Complete Tour Directory"
        title="Explore All Tour Packages from Bangalore"
        description="Choose from our three specialized travel collections: 18 Friday-night weekend adventures, sacred pan-India pilgrimages including the 12 Jyotirlinga Yatra, and classic South India holiday packages."
        activeCategory="all"
        count={allCount}
      />

      <div className="container-custom py-8">
        <PackageBreadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Packages" }]}
        />

        {/* Category Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {/* Normal Packages */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
                {NORMAL_PACKAGES.length} Tours
              </span>
              <h2 className="font-heading font-bold text-xl text-[#1a365d] mt-3 mb-2">
                Normal Packages
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Classic family holidays, temple visits, and scenic escapes to Tirupati, Coorg, Ooty, Mysore, Goa, and Pondicherry.
              </p>
            </div>
            <Link
              href="/packages/normal/"
              className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#1a365d] hover:text-amber-600 border-t border-gray-100 pt-3"
            >
              Browse Normal Packages →
            </Link>
          </div>

          {/* Special Packages */}
          <div className="bg-gradient-to-br from-[#10213A] to-[#1a365d] rounded-2xl p-6 shadow-md text-white flex flex-col justify-between border border-amber-500/30">
            <div>
              <span className="text-xs font-bold text-amber-950 bg-amber-400 px-2.5 py-1 rounded-full uppercase">
                ★ Pilgrimage & Divine
              </span>
              <h2 className="font-heading font-bold text-xl text-white mt-3 mb-2">
                Special Packages
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Flagship 25-Day 12 Jyotirlinga Maha Pilgrimage across India, sacred South India temple gopurams, and Karnataka shrines.
              </p>
            </div>
            <Link
              href="/packages/special/"
              className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-amber-400 hover:text-amber-300 border-t border-white/10 pt-3"
            >
              View Special Yatras →
            </Link>
          </div>

          {/* Weekend Packages */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                {WEEKEND_PACKAGES.length} Getaways
              </span>
              <h2 className="font-heading font-bold text-xl text-[#1a365d] mt-3 mb-2">
                Weekend Packages
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Friday-night departures with overnight travel to Gokarna, Dandeli rafting, Hampi ruins, Munnar tea hills, and Gandikota canyon.
              </p>
            </div>
            <Link
              href="/packages/weekend/"
              className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#1a365d] hover:text-amber-600 border-t border-gray-100 pt-3"
            >
              Explore 18 Weekend Trips →
            </Link>
          </div>
        </div>

        {/* Weekend Highlights Preview */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                Trending Weekend Getaways
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Friday night departures with homestays, breakfast & sightseeing
              </p>
            </div>
            <Link
              href="/packages/weekend/"
              className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              View all 18 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEEKEND_PACKAGES.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Normal Packages Preview */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                Popular Regular Packages
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Customizable private family and group tours with doorstep Bangalore pickup
              </p>
            </div>
            <Link
              href="/packages/normal/"
              className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              View all {NORMAL_PACKAGES.length} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NORMAL_PACKAGES.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="my-16">
          <PackageEnquiryCTA
            packageTitle="Group Travel Package"
            duration="Custom Duration"
          />
        </div>
      </div>
    </main>
  );
}

