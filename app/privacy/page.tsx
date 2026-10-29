import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Privacy Policy | Khushi Travels Bangalore",
  description:
    "Review our privacy practices regarding customer data, contact inquiries, and payment security at Khushi Tours & Travels Bangalore.",
  alternates: {
    canonical: "https://gagangowdap.github.io/KhushiTravels/privacy/",
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy/" },
  ];

  return (
    <>
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
            Data Protection &amp; Trust
          </span>

          <h1 className="font-heading text-h1 text-white font-extrabold mb-6 text-balance">
            Privacy <span className="text-brand-amber">Policy</span>
          </h1>

          <p className="text-white/80 text-base max-w-2xl mx-auto font-normal">
            Your privacy is of paramount importance to Khushi Tours &amp; Travels.
            Here is how we safeguard your personal information.
          </p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-left space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                1. Information We Collect
              </h2>
              <p>
                We only collect necessary travel coordination data including full
                name, mobile/WhatsApp telephone number, email address, pickup and
                destination locations, and travel date schedules.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                2. How Your Data Is Used
              </h2>
              <p>
                Collected information is strictly utilized to compute distance
                quotations, generate vehicle dispatch manifests, provide chauffeur
                contact details, and share GST tax invoices.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                3. Zero Third-Party Sharing &amp; Spam
              </h2>
              <p>
                We never sell, rent, or lease customer contact lists or personal
                records to marketing agencies or third-party aggregators. Your
                telephone number will never be bombarded with automated marketing
                calls or unsolicited promotional messaging.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                4. Contacting Our Data Privacy Desk
              </h2>
              <p>
                For questions regarding data retention or to request deletion of
                past booking records, contact us at{" "}
                <a
                  href="mailto:info@khushitravel.in"
                  className="text-brand-amber font-semibold hover:underline"
                >
                  info@khushitravel.in
                </a>{" "}
                or call +91 99013 33113.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
