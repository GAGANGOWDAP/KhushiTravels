import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Hire Tempo Traveller in Bangalore | Instant Booking | Khushi Travels",
  description:
    "Hire luxury tempo travellers and Force Urbania in Bangalore. 24/7 dispatch desk, instant WhatsApp quote, and doorstep pickup across Bengaluru.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/hire-tempo-traveller-bangalore/",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/hire-tempo-traveller-bangalore/" },
  ];

  return (
    <>
      {/* Contact Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 text-center overflow-hidden"
        style={{
          background:
            `linear-gradient(to bottom, rgba(10,24,46,0.92), rgba(10,24,46,0.85), rgba(10,24,46,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            24/7 Customer Booking Desk
          </span>

          <h1 className="font-heading text-h1 text-white font-extrabold mb-6 text-balance">
            Hire Luxury <span className="text-brand-amber">Tempo Traveller</span>{" "}
            in Bangalore
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Ready to plan your family vacation, pilgrimage, or corporate offsite?
            Reach out to our reservations team directly for customized packages
            and confirmed vehicle allocations.
          </p>
        </div>
      </section>

      {/* Form & Office Information */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            {/* Interactive Booking Form */}
            <div>
              <ContactForm />
            </div>

            {/* Direct Office Details */}
            <div className="space-y-8 text-left bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md">
              <div>
                <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1">
                  Headquarters &amp; Garage
                </span>
                <h2 className="font-heading text-2xl font-bold text-brand-navy">
                  Khushi Tours And Travels
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Bangalore&apos;s Trusted Luxury Travel Partner Since 2018
                </p>
              </div>

              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Office Address</h3>
                    <p className="text-gray-600 mt-0.5 leading-relaxed">
                      Ground Floor No: 2, Kodigehalli Main Road, Near Railway
                      Station, Vidyaranyapura, Virupakshapura, Bengaluru - 560097
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Phone Support</h3>
                    <a
                      href="tel:+919901333113"
                      className="text-brand-amber font-bold text-base hover:underline block"
                    >
                      +91 99013 33113
                    </a>
                    <span className="text-xs text-gray-500">
                      Open 24 Hours &bull; 7 Days a Week
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Email Desk</h3>
                    <a
                      href="mailto:info@khushitravel.in"
                      className="text-gray-700 hover:text-brand-amber transition-colors"
                    >
                      info@khushitravel.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">GST Registration</h3>
                    <span className="font-mono text-gray-800 text-xs">
                      29JPFPK4060F1ZQ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Google Maps Location Section */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-100" aria-labelledby="location-heading">
        <div className="container-custom max-w-6xl">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              OUR LOCATION
            </span>
            <h2 id="location-heading" className="font-heading text-3xl sm:text-4xl font-extrabold text-[#10213A] mb-3 sm:mb-4 tracking-tight">
              Find Our <span className="text-brand-amber">Office</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Visit Khushi Tours And Travels in Bengaluru. Find our office easily using the interactive map and get directions for your next journey.
            </p>
          </div>

          {/* Premium Wide Map & Information Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 border border-gray-200/90 shadow-xl shadow-slate-100">
            {/* Interactive Google Map */}
            <div className="w-full h-[280px] sm:h-[350px] lg:h-[430px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 relative bg-slate-100">
              <iframe
                title="Khushi Tours And Travels Office Location"
                src="https://maps.google.com/maps?q=Khushi+Tours+And+Travels,+Ground+Floor+No:+2,+Kodigehalli+Main+Road,+Near+Railway+Station,+Vidyaranyapura,+Virupakshapura,+Bengaluru,+Karnataka+560097&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Office Information Panel */}
            <div className="p-4 sm:p-6 lg:p-7 mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
              {/* Address Block */}
              <div className="md:col-span-2 lg:col-span-2 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/70 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#10213A]">
                      Khushi Tours And Travels
                    </h3>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                      Open 24/7
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidyaranyapura, Virupakshapura, Bengaluru, Karnataka – 560097
                  </p>
                </div>
              </div>

              {/* Direct Phone & Email Support */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider block">Phone Support</span>
                    <a href="tel:+919901333113" className="text-xs sm:text-sm font-bold text-[#10213A] hover:text-[#f59e0b] transition-colors">
                      +91 99013 33113
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider block">Email Desk</span>
                    <a href="mailto:info@khushitravel.in" className="text-xs sm:text-sm font-bold text-[#10213A] hover:text-[#f59e0b] transition-colors">
                      info@khushitravel.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="flex flex-col justify-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Khushi+Tours+And+Travels,+Ground+Floor+No:+2,+Kodigehalli+Main+Road,+Near+Railway+Station,+Vidyaranyapura,+Virupakshapura,+Bengaluru,+Karnataka+560097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-heading font-bold text-sm tracking-wide shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
