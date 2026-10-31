import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Tempo Traveller Rent Price Bangalore | Per Km Rates | Khushi Travels",
  description:
    "Transparent tempo traveller rent prices in Bangalore starting from ₹18/km. 9, 12, 14, 16 seater Maharaja & Force Urbania rates with zero hidden charges.",
  alternates: {
    canonical:
      "https://gagangowdap.github.io/KhushiTravels/tempo-traveller-rent-price-bangalore/",
  },
};

export default function PricingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/tempo-traveller-rent-price-bangalore/" },
  ];

  return (
    <>
      {/* Pricing Hero */}
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
            Honest &amp; Upfront Tariffs
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-6 text-balance">
            Tempo Traveller Rent{" "}
            <span className="text-brand-amber">Price in Bangalore</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            No surge pricing, no platform commissions, and zero surprise
            deductions. Explore our standardized per-km rates across luxury tempo
            travellers, Force Urbanias, and executive buses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20know%20the%20exact%20quote%20for%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Get Custom Trip Quote
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

      {/* Pricing Tables Section */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-5xl">
          <PricingTable />
        </div>
      </section>

      <FAQAccordion
        items={FAQS_DATA}
        title="Pricing & Billing FAQs"
        subtitle="Frequently asked questions about tempo traveller per-km calculation, toll charges, and driver allowances."
      />

      <ServiceCoverage />
    </>
  );
}
