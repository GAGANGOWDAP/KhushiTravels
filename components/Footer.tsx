import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export default function Footer() {
  const currentYear = 2026;

  const popularRoutes = [
    { name: "Mysore", href: "/routes/bangalore-to-mysore-tempo-traveller/" },
    { name: "Coorg", href: "/routes/bangalore-to-coorg-tempo-traveller/" },
    { name: "Ooty", href: "/routes/bangalore-to-ooty-tempo-traveller/" },
    { name: "Tirupati", href: "/routes/bangalore-to-tirupati-tempo-traveller/" },
    { name: "Wayanad", href: "/routes/bangalore-to-wayanad-tempo-traveller/" },
    { name: "Pondicherry", href: "/routes/bangalore-to-pondicherry-tempo-traveller/" },
    { name: "Goa", href: "/routes/bangalore-to-goa-tempo-traveller/" },
    { name: "Hampi", href: "/routes/bangalore-to-hampi-tempo-traveller/" },
    { name: "Chikmagalur", href: "/routes/bangalore-to-chikmagalur-tempo-traveller/" },
    { name: "Chennai", href: "/routes/bangalore-to-chennai-tempo-traveller/" },
    { name: "Hyderabad", href: "/routes/bangalore-to-hyderabad-tempo-traveller/" },
    { name: "Mangalore", href: "/routes/bangalore-to-mangalore-tempo-traveller/" },
    { name: "Kodaikanal", href: "/routes/bangalore-to-kodaikanal-tempo-traveller/" },
    { name: "Shirdi", href: "/routes/bangalore-to-shirdi-tempo-traveller/" },
  ];

  return (
    <footer
      className="relative pt-16 pb-20 md:pb-12 border-t border-white/10 overflow-hidden text-[#B8C8DE]"
      style={{ background: "linear-gradient(180deg, #1B365D 0%, #142D4F 100%)" }}
    >
      {/* Subtle decorative glow elements */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FFA10A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Balanced 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-5 text-left">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA10A] rounded-lg"
              aria-label="Khushi Tours & Travels Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/khushi-tours-and-travels-logo.webp")}
                alt="Khushi Tours & Travels"
                className="h-16 md:h-18 w-auto drop-shadow-md"
                loading="lazy"
                width={240}
                height={60}
              />
            </Link>
            <p className="text-[#B8C8DE] text-sm leading-relaxed max-w-sm">
              Bangalore&apos;s most trusted premium tempo traveller and luxury car rental service. Owned fleet, professional chauffeurs, and a commitment to 100% customer satisfaction.
            </p>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F7FB]/70 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/khushi_travels_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#B8C8DE] hover:bg-[#FFA10A] hover:text-[#142D4F] hover:-translate-y-0.5 transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA10A]"
                  aria-label="Follow Khushi Travels on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#B8C8DE] hover:bg-[#FFA10A] hover:text-[#142D4F] hover:-translate-y-0.5 transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA10A]"
                  aria-label="Follow Khushi Travels on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@sureshj1169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#B8C8DE] hover:bg-[#FFA10A] hover:text-[#142D4F] hover:-translate-y-0.5 transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA10A]"
                  aria-label="Subscribe to Khushi Travels on YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h3 className="text-[#F5F7FB] font-heading font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA10A]"></span> Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services/best-tempo-traveller-rental-bangalore/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/best-tempo-traveller-fleet-bangalore/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> The Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/services/luxury-tempo-traveller-blog/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-tempo-traveller-bangalore/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-[#F5F7FB] font-heading font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA10A]"></span> Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tour-packages-from-bangalore/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Holiday Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/spiritual-pilgrimage-tours/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Pilgrimage Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/tempo-traveller-rent-price-bangalore/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Pricing &amp; Services
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/"
                  className="text-[#B8C8DE] hover:text-[#FFA10A] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 text-sm"
                >
                  <span className="text-[#FFA10A]/60">&rsaquo;</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Out */}
          <div>
            <h3 className="text-[#F5F7FB] font-heading font-bold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA10A]"></span> Reach Out
            </h3>
            <ul className="space-y-3.5 mb-5 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-[#FFA10A] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <a
                  href="https://maps.google.com/?q=Khushi+tours+and+Travels+Kodigehalli+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8C8DE] hover:text-white transition-colors leading-relaxed block text-xs sm:text-sm"
                >
                  Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidryanyapura, Virupakshapura,
                  Bengaluru - 560097
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-[#FFA10A] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <span className="text-[#B8C8DE] text-xs sm:text-sm tracking-wide">
                  GST: <strong className="text-white font-medium">29JPFPK4060F1ZQ</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-[#FFA10A] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+919901333113"
                  className="text-[#F5F7FB] font-semibold hover:text-[#FFA10A] transition-colors text-sm"
                >
                  +91 99013 33113
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-[#FFA10A] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@khushitravel.in"
                  className="text-[#F5F7FB] font-semibold hover:text-[#FFA10A] transition-colors text-sm"
                >
                  info@khushitravel.in
                </a>
              </li>
            </ul>

            {/* WhatsApp Us & Call Now Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="WhatsApp Khushi Travels"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+919901333113"
                className="h-11 px-3 rounded-xl bg-[#FFA10A] hover:bg-[#ff9500] text-[#142D4F] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA10A]"
                aria-label="Call Khushi Travels"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Popular Routes from Bangalore Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-[#F5F7FB] text-xs font-bold uppercase tracking-widest text-center mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA10A]"></span>
            Popular Routes from Bangalore
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA10A]"></span>
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {popularRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] text-[#B8C8DE] border border-white/10 hover:border-[#FFA10A]/50 hover:bg-[#FFA10A]/10 hover:text-[#FFA10A] transition-all"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="border-t border-white/10 pt-6 text-xs text-[#B8C8DE]/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left">
              &copy; {currentYear} Khushi Tours And Travels. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-center">
              <Link href="/terms/" className="hover:text-[#FFA10A] transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/privacy/" className="hover:text-[#FFA10A] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-center sm:text-right text-[#B8C8DE]/60">
              Khushi Tours &amp; Travels &bull; Bengaluru, Karnataka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
