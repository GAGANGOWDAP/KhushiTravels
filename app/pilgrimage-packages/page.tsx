import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Pilgrimage Tour Packages from Bangalore | Temple Yatras | Khushi Travels",
  description:
    "Spiritual pilgrimage tour packages from Bangalore by luxury tempo traveller. Tirupati, 12 Jyotirlinga, Shirdi, Srisailam, Mantralayam, and South India temple circuits.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/pilgrimage-packages/",
  },
  openGraph: {
    type: "website",
    url: "https://gagangowdap.github.io/KhushiTravels/pilgrimage-packages/",
    title: "Pilgrimage Tour Packages from Bangalore | Khushi Travels",
    description:
      "Spiritual pilgrimage tour packages from Bangalore by tempo traveller. Tirupati, 12 Jyotirlinga, Shirdi, Mantralayam, and South India temple circuits.",
    images: [
      {
        url: "https://gagangowdap.github.io/KhushiTravels/images/destinations/ayodhya.webp",
        width: 1200,
        height: 630,
        alt: "Pilgrimage Tour Packages from Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilgrimage Tour Packages from Bangalore | Khushi Travels",
    description:
      "Spiritual pilgrimage tour packages from Bangalore by tempo traveller. Tirupati, 12 Jyotirlinga, Shirdi, Mantralayam, and South India temple circuits.",
    images: ["https://gagangowdap.github.io/KhushiTravels/images/destinations/ayodhya.webp"],
  },
};

export default function PilgrimagePackagesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages-from-bangalore/" },
    { label: "Pilgrimage Packages", href: "/pilgrimage-packages/" },
  ];

  const pilgrimageTours = [
    {
      name: "Nava Tirupati VIP Darshan",
      image: "/images/destinations/tirupati.webp",
      alt: "Nava Tirupati temple tour package from Bangalore",
      distance: "250 km from Bangalore",
      duration: "1 or 2 Days",
      price: "₹9,500",
      desc: "Daily door-to-door packages with Seeghra Darshan slot alignment, Padmavathi Temple at Tiruchanur, and comfortable express return.",
      highlights: [
        "Doorstep pickup anywhere in Bengaluru",
        "Assistance with Seeghra Darshan slot alignment",
        "Padmavathi Temple darshan at Tiruchanur",
      ],
      link: "/routes/bangalore-to-tirupati-tempo-traveller/",
    },
    {
      name: "Shirdi & Shani Shingnapur",
      image: "/images/destinations/Shirdi.webp",
      alt: "Shirdi Sai Baba pilgrimage package from Bangalore",
      distance: "680 km from Bangalore",
      duration: "4 Days / 3 Nights",
      price: "₹22,000",
      desc: "Comfortable highway pilgrimage with VIP darshan pass guidance, stops at Nashik Trimbakeshwar Jyotirlinga, and pure veg food halts.",
      highlights: [
        "Shirdi Sai Baba Samadhi Mandir & Kakad Aarti",
        "Shani Shingnapur open shrine visit",
        "Enroute Trimbakeshwar Jyotirlinga darshan",
      ],
      link: "/routes/bangalore-to-shirdi-tempo-traveller/",
    },
    {
      name: "Srisailam Mallikarjuna Jyotirlinga",
      image: "/images/destinations/Srisailam.webp",
      alt: "Srisailam Mallikarjuna temple package from Bangalore",
      distance: "420 km from Bangalore",
      duration: "3 Days / 2 Nights",
      price: "₹14,500",
      desc: "Worship at sacred Mallikarjuna Swamy Jyotirlinga and Bhramaramba Devi Shakti Peeth amidst the Nallamala forest hills along Krishna River.",
      highlights: [
        "Mallikarjuna Jyotirlinga & Shakti Peeth",
        "Scenic Nallamala forest ghat cruise",
        "Pathala Ganga & Krishna river ropeway",
      ],
    },
    {
      name: "Rameswaram & Madurai Meenakshi",
      image: "/images/destinations/Rameswaram.webp",
      alt: "Rameswaram Ramanathaswamy temple tour from Bangalore",
      distance: "550 km from Bangalore",
      duration: "4 Days / 3 Nights",
      price: "₹18,500",
      desc: "Sacred Ramanathaswamy Jyotirlinga on Rameshwaram Island, 22 teertham baths, Dhanushkodi Ram Setu point, and Madurai Meenakshi Amman Temple.",
      highlights: [
        "Ramanathaswamy Jyotirlinga 22 holy wells",
        "Cross iconic Pamban Sea Bridge",
        "Madurai Meenakshi Amman Temple darshan",
      ],
    },
    {
      name: "Dharmasthala & Kukke Subrahmanya",
      image: "/images/destinations/Dharmasthala.webp",
      alt: "Dharmasthala Manjunatha temple package from Bangalore",
      distance: "300 km from Bangalore",
      duration: "2 Days / 1 Night",
      price: "₹8,500",
      desc: "Popular coastal Karnataka devotional circuit covering Manjunatha Swamy at Dharmasthala, Kukke Subrahmanya, and Kateel Durgaparameshwari.",
      highlights: [
        "Dharmasthala Manjunatha Swamy & Annadana",
        "Kukke Subrahmanya Sarpa Samskara prayers",
        "Shiradi Ghat scenic highway drive",
      ],
    },
    {
      name: "Palani Murugan Temple",
      image: "/images/destinations/Palani.webp",
      alt: "Palani Murugan temple tour from Bangalore",
      distance: "380 km from Bangalore",
      duration: "3 Days / 2 Nights",
      price: "₹12,500",
      desc: "Devotional trip to Arulmigu Dhandayuthapani Swamy Temple on Sivagiri hill, one of the sacred Arupadai Veedu of Lord Murugan.",
      highlights: [
        "Palani Hill temple winch & ropeway access",
        "Special archana & panchamirtham prasadam",
        "Clean highway cruise via Salem & Dindigul",
      ],
    },
        {
      name: "Kashi – Triveni – Ayodhya Yatra",
      image: "/images/destinations/varanasi-ganga-aarti.jpg",
      alt: "Kashi Triveni Ayodhya Yatra package by Khushi Travels",
      distance: "Varanasi → Prayagraj → Ayodhya → Lucknow Drop",
      duration: "4 Days / 3 Nights",
      price: "₹17,900",
      desc: "Sacred pilgrimage covering Shri Kashi Vishwanath Sparsh Darshan, Dashashwamedh Ganga Aarti, Triveni Sangam Snan, and Ayodhya Ram Janmabhoomi Sugam Darshan.",
      highlights: [
        "Kashi Vishwanath Sparsh Darshan assistance",
        "Dashashwamedh Ganga Aarti & boat ride",
        "Triveni Sangam Snan boat ride in Prayagraj",
        "Ayodhya Ram Janmabhoomi Sugam Darshan with golf cart",
      ],
      link: "/packages/kashi-triveni-ayodhya/",
    },
    {
      name: "Puri Jagannath Dham & Konark",
      image: "/images/destinations/puri-jagannath.webp",
      alt: "Puri Jagannath temple tour package from Bangalore",
      distance: "1,400 km from Bangalore",
      duration: "5 Days / 4 Nights",
      price: "₹35,000",
      desc: "Sacred eastern Char Dham pilgrimage to Lord Jagannath on the Bay of Bengal, Anand Bazaar Mahaprasad, and UNESCO Konark Sun Temple.",
      highlights: [
        "Shri Jagannath Temple inner darshan",
        "Swargadwar beach and Mahaprasad",
        "UNESCO Konark Sun Temple visit",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 text-center overflow-hidden"
        style={{
          background:
            `linear-gradient(to bottom, rgba(10,24,46,0.92), rgba(10,24,46,0.85), rgba(10,24,46,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-amber uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-amber/15 border border-brand-amber/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
            Sacred Temple Tours
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Spiritual Pilgrimage <span className="text-brand-amber">Packages from Bangalore</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Divine journeys crafted for peace of mind, senior citizen comfort, and spiritual enrichment. Travel together
            in sanitized AC tempo travellers and buses with experienced chauffeurs who know temple rituals and optimal
            darshan timings.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto text-xs text-white/90">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
              ✓ Senior-Citizen Friendly
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
              ✓ Pure Satvik Meal Stops
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
              ✓ Doorstep Pickup Anywhere in Bangalore
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
              ✓ 100% Owned Fleet with Air Suspension
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED: 25-Day 12 Jyotirlinga Yatra */}
      <section className="bg-white pt-12 pb-8">
        <div className="container-custom max-w-5xl">
          <div
            className="rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border border-brand-amber/40"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #1a365d 60%, #0d2342 100%)",
            }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-brand-amber text-brand-navy uppercase tracking-wider">
                  Grand Flagship Pilgrimage
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  25-Day 12 Jyotirlinga <span className="text-brand-amber">Spiritual Yatra</span>
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Join our proposed 25-day pan-India pilgrimage departing from Bengaluru. Covers all twelve sacred
                  Jyotirlingas, plus Mathura, Vrindavan, Ayodhya Ram Mandir, Gaya, Bodh Gaya, and Puri Jagannath in
                  luxury AC Volvo coaches with 3-star stays and 3 daily pure veg satvik meals.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-amber-200">
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg">25 Days</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg">All 12 Jyotirlingas</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg">+6 Sacred Shrines</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg">AC Volvo Coach</span>
                </div>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/spiritual-pilgrimage-tours/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-amber text-brand-navy font-heading font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    View Full 25-Day Itinerary &rarr;
                  </Link>
                  <a
                    href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20the%2025-Day%2012%20Jyotirlinga%20Yatra."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm border border-white/20 transition-all"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/images/destinations/ayodhya.webp")}
                  alt="25-Day 12 Jyotirlinga Spiritual Yatra"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Pilgrimage Tours */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Sacred Darshans
            </span>
            <h2 className="font-heading text-h2 font-extrabold text-brand-navy">
              Devotional Temple Packages from Bangalore
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              All packages include door-to-door transport in our own sanitized tempo travellers, Force Urbanias, or
              coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilgrimageTours.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getAssetPath(pkg.image)}
                      alt={pkg.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {pkg.duration}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-brand-navy font-heading font-extrabold text-xs px-2.5 py-1 rounded-lg shadow">
                      {pkg.price}
                      <span className="text-[10px] font-normal text-gray-400">/group</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-brand-navy mb-1">{pkg.name}</h3>
                    <p className="text-xs text-brand-amber font-semibold mb-3">{pkg.distance}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">{pkg.desc}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold text-brand-navy block mb-1.5">Key Highlights:</span>
                      <ul className="space-y-1">
                        {pkg.highlights.map((h) => (
                          <li key={h} className="text-xs text-gray-500 flex items-start gap-1.5">
                            <span className="text-brand-amber font-bold shrink-0">&bull;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex gap-2">
                    {pkg.link ? (
                      <Link
                        href={pkg.link}
                        className="flex-1 text-center py-2.5 rounded-xl border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-heading font-bold text-xs transition-all"
                      >
                        Details
                      </Link>
                    ) : null}
                    <a
                      href={`https://wa.me/919901333113?text=${encodeURIComponent(
                        `Hi Khushi Travels, I want to book ${pkg.name} package from Bangalore.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl gradient-amber text-brand-navy font-heading font-bold text-xs shadow hover:shadow-md transition-all"
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pilgrims Choose Khushi Travels */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Devotional Care
            </span>
            <h2 className="font-heading text-h2 font-extrabold text-brand-navy">
              Why Devotees Trust Khushi Travels
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Over six years of facilitating respectful, peaceful temple pilgrimages across South and North India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-amber/15 text-brand-navy font-bold flex items-center justify-center text-2xl mb-4">
                👴
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">Senior Citizen Pacing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Step-assist handles, leisurely halt schedules, and assistance with darshan queue tokens.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-2xl mb-4">
                🍲
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">Pure Satvik Halts</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chauffeurs select hygienic, certified pure-vegetarian restaurants along all national highways.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-2xl mb-4">
                🚗
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">100% Owned Fleet</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Air-suspension Force Urbanias and Maharaja tempo travellers for fatigue-free long-distance travel.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-700 font-bold flex items-center justify-center text-2xl mb-4">
                🙏
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">Ritual Knowledge</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Drivers know temple dress codes, electronic item locker points, and morning pooja schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
