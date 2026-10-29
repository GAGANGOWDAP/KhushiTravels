import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SPECIAL_PACKAGES,
  getPackageBySlug,
  getPackagesByCategory,
} from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageItinerary from "@/components/packages/PackageItinerary";
import PackageInclusions from "@/components/packages/PackageInclusions";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import PackageCard from "@/components/packages/PackageCard";
import { getAssetPath } from "@/lib/assets";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SPECIAL_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const pkg = getPackageBySlug("special", params.slug);
  if (!pkg) return { title: "Package Not Found | Khushi Travels" };

  return {
    title: `${pkg.title} from Bangalore (${pkg.duration}) | Khushi Travels`,
    description: pkg.description,
    alternates: {
      canonical: `https://gagangowdap.github.io/KhushiTravels/packages/special/${pkg.slug}/`,
    },
    openGraph: {
      title: `${pkg.title} | Khushi Travels`,
      description: pkg.description,
      url: `https://gagangowdap.github.io/KhushiTravels/packages/special/${pkg.slug}/`,
      images: [{ url: pkg.image }],
      siteName: "Khushi Travels",
      type: "website",
    },
  };
}

const JYOTIRLINGA_SHRINES = [
  { name: "1. Somnath", location: "Veraval, Gujarat", img: "/images/destinations/jyotirlingas/somnath.webp", desc: "First of the 12 holy Jyotirlingas, situated on the western Arabian Sea shore." },
  { name: "2. Mallikarjuna", location: "Srisailam, Andhra Pradesh", img: "/images/destinations/jyotirlingas/mallikarjuna.webp", desc: "Revered Shakti Peetha and Jyotirlinga atop the Nallamala forest hills." },
  { name: "3. Mahakaleshwar", location: "Ujjain, Madhya Pradesh", img: "/images/destinations/jyotirlingas/mahakaleshwar.webp", desc: "The south-facing Dakshinmurti lingam on the banks of holy Shipra River." },
  { name: "4. Omkareshwar", location: "Mandhata Island, Madhya Pradesh", img: "/images/destinations/jyotirlingas/omkareshwar.webp", desc: "Sacred island shaped naturally in the sacred syllable OM on Narmada River." },
  { name: "5. Kedarnath", location: "Rudraprayag, Uttarakhand", img: "/images/destinations/jyotirlingas/kedarnath.webp", desc: "Highest of all Jyotirlingas, situated amidst snow peaks at 3,583 metres." },
  { name: "6. Bhimashankar", location: "Pune District, Maharashtra", img: "/images/destinations/jyotirlingas/bhimashankar.webp", desc: "Source of River Bhima nestled deep inside the Sahyadri wildlife sanctuary." },
  { name: "7. Kashi Vishwanath", location: "Varanasi, Uttar Pradesh", img: "/images/destinations/jyotirlingas/kashi-vishwanath.webp", desc: "The spiritual center of the universe on the holy ghats of the Ganga." },
  { name: "8. Trimbakeshwar", location: "Nashik District, Maharashtra", img: "/images/destinations/jyotirlingas/trimbakeshwar.webp", desc: "Three-faced lingam representing Brahma, Vishnu, and Shiva at Godavari origin." },
  { name: "9. Baidyanath", location: "Deoghar, Jharkhand", img: "/images/destinations/jyotirlingas/baidyanath.webp", desc: "Sacred healing shrine where Ravana worshiped Lord Shiva with devotion." },
  { name: "10. Nageshwar", location: "Dwarka, Gujarat", img: "/images/destinations/jyotirlingas/nageshwar.webp", desc: "Protector from all earthly poisons, located near the ancient realm of Dwarka." },
  { name: "11. Rameshwaram", location: "Pamban Island, Tamil Nadu", img: "/images/destinations/jyotirlingas/ramanathaswamy.webp", desc: "Consecrated by Lord Rama himself with 22 sacred cleansing water theerthams." },
  { name: "12. Grishneshwar", location: "Verul / Aurangabad, Maharashtra", img: "/images/destinations/jyotirlingas/grishneshwar.webp", desc: "The 12th and final Jyotirlinga, adjacent to the UNESCO Ellora Caves." },
];

export default function SpecialPackageDetailPage({ params }: PageProps) {
  const pkg = getPackageBySlug("special", params.slug);
  if (!pkg) {
    notFound();
  }

  const is12Jyotirlinga = pkg.slug === "12-jyotirlinga-pilgrimage";
  const relatedPackages = getPackagesByCategory("special")
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: ["Pilgrimage", "Senior Citizens", "Family Groups"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((day, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `${day.day}: ${day.title}`,
        description: day.schedule.join(" "),
      })),
    },
    offers: {
      "@type": "Offer",
      price: pkg.priceStatus,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Khushi Tours and Travels",
      telephone: "+91 99013 33113",
      url: "https://gagangowdap.github.io/KhushiTravels/",
    },
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Khushi Travels, I want to enquire about the pilgrimage package: "${pkg.title}" (${pkg.duration}). Please share dates, customized quotation, and senior-friendly itinerary details.`
  );
  const whatsappUrl = `https://wa.me/919901333113?text=${whatsappMsg}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-[#0a192f] via-[#071322] to-[#0f2444] text-white pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath(pkg.image)}
              alt={pkg.title}
              className="w-full h-full object-cover opacity-20 filter blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/80 to-transparent"></div>
          </div>

          <div className="container-custom max-w-5xl mx-auto relative z-10">
            <PackageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages/" },
                { label: "Special Packages", href: "/packages/special/" },
                { label: pkg.title },
              ]}
            />

            <div className="mt-6 flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-amber-500 text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                ★ Sacred Pilgrimage Tour
              </span>
              <span className="bg-white/10 backdrop-blur-md text-gray-200 text-xs px-3 py-1 rounded-full border border-white/20">
                ⏱ {pkg.duration}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full border border-white/20">
                📍 {pkg.destination}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              {pkg.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
              {pkg.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919901333113"
                className="inline-flex items-center gap-2 bg-white text-[#1a365d] hover:bg-gray-100 font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Call: +91 99013 33113
              </a>
              {is12Jyotirlinga && (
                <Link
                  href="/spiritual-pilgrimage-tours/"
                  className="inline-flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-sm px-5 py-3.5 rounded-full border border-amber-400/40 transition-colors"
                >
                  View Interactive 25-Day Hub →
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="container-custom max-w-5xl mx-auto py-12 px-4">
          {/* If 12 Jyotirlinga, showcase all 12 Shrines in a visual grid */}
          {is12Jyotirlinga && (
            <div className="mb-14">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
                  The Twelve Sacred Shrines
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a365d] mt-1">
                  All 12 Jyotirlingas Visited in One Sacred Yatra
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Sanitized group coaches, professional relief chauffeurs, satvik vegetarian meals, and senior-friendly rest intervals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {JYOTIRLINGA_SHRINES.map((temple, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={temple.img}
                        alt={temple.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#1a365d]">
                          {temple.name}
                        </h4>
                        <div className="text-[11px] text-amber-600 font-semibold mb-1">
                          📍 {temple.location}
                        </div>
                        <p className="text-[11px] text-gray-500 leading-tight">
                          {temple.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-heading font-bold text-xl text-[#1a365d] mb-4">
                  Spiritual Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ॐ
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading font-bold text-2xl text-[#1a365d]">
                    Proposed Pilgrimage Itinerary
                  </h2>
                  <span className="text-xs text-gray-500 font-medium">
                    Reviewed & Feasible Route
                  </span>
                </div>
                <PackageItinerary itinerary={pkg.itinerary} />
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1a365d] mb-4">
                  Inclusions, Exclusions & Devotee Care
                </h2>
                <PackageInclusions
                  inclusions={pkg.inclusions}
                  exclusions={pkg.exclusions}
                  bookingTerms={pkg.bookingTerms}
                  priceStatus={pkg.priceStatus}
                />
              </div>

              <PackageEnquiryCTA
                packageTitle={pkg.title}
                duration={pkg.duration}
              />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm lg:sticky lg:top-28">
                <div className="text-xs font-bold text-gray-500 uppercase mb-1">Pilgrimage Tariff</div>
                <div className="text-lg font-extrabold text-[#1a365d] mb-4">
                  {pkg.priceStatus}
                </div>

                <div className="space-y-3 py-4 border-y border-gray-100 text-xs text-gray-700 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-bold text-[#1a365d]">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Meals:</span>
                    <span className="font-bold text-emerald-700">Satvik Pure Vegetarian</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Stay:</span>
                    <span className="font-bold text-[#1a365d]">Clean 3-Star AC Rooms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Senior Care:</span>
                    <span className="font-bold text-[#1a365d]">Paced Rest Intervals</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Get Custom Group Quote
                  </a>
                  <a
                    href="tel:+919901333113"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1a365d] hover:bg-[#10213A] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Call: +91 99013 33113
                  </a>
                </div>

                <div className="mt-5 text-center">
                  <Link
                    href="/packages/special/"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    ← Back to All Special Packages
                  </Link>
                </div>
              </div>

              {pkg.suggestedVehicles && pkg.suggestedVehicles.length > 0 && (
                <div className="bg-slate-100/70 rounded-2xl p-5 border border-slate-200 text-xs">
                  <h4 className="font-bold text-[#1a365d] mb-2 uppercase tracking-wider text-[11px]">
                    Recommended Coaches
                  </h4>
                  <ul className="space-y-1.5 text-gray-700">
                    {pkg.suggestedVehicles.map((v, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <Link
                      href="/best-tempo-traveller-fleet-bangalore/"
                      className="text-amber-700 font-bold hover:underline text-[11px]"
                    >
                      View Vehicle Fleet Options →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                  Other Devotional & Special Yatras
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Curated temple pilgrimages from Bangalore
                </p>
              </div>
              <Link
                href="/packages/special/"
                className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((relPkg) => (
                <PackageCard key={relPkg.slug} pkg={relPkg} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

