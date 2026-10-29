import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Terms & Conditions | Khushi Travels Bangalore",
  description:
    "Review booking conditions, payment terms, and vehicle rental policies for Khushi Tours & Travels tempo traveller services in Bangalore.",
  alternates: {
    canonical: "https://gagangowdap.github.io/KhushiTravels/terms/",
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions", href: "/terms/" },
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
            Rental Agreement &amp; Policies
          </span>

          <h1 className="font-heading text-h1 text-white font-extrabold mb-6 text-balance">
            Terms &amp; <span className="text-brand-amber">Conditions</span>
          </h1>

          <p className="text-white/80 text-base max-w-2xl mx-auto font-normal">
            Please read these terms carefully before confirming your vehicle hire
            or package reservation with Khushi Tours &amp; Travels.
          </p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-left space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                1. Booking &amp; Confirmation
              </h2>
              <p>
                All vehicle reservations require an advance token deposit (typically
                20–30% of estimated trip fare) to lock in vehicle allocation and
                dispatch dates. Bookings are confirmed upon receipt of advance
                payment and issuance of booking voucher via WhatsApp or email.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                2. Kilometre Calculation &amp; Toll Charges
              </h2>
              <p>
                Kilometres and timings are calculated starting and ending at our
                designated Bangalore garage / dispatch point. For outstation trips,
                a minimum billing of 300 km per calendar day applies. All highway
                tolls, parking fees, interstate road taxes, and entry permits are
                payable as per actual receipts.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                3. Driver Duty &amp; Allowances (Batta)
              </h2>
              <p>
                Standard driver duty hours are from 6:00 AM to 10:00 PM. Night driving
                or overnight halt charges (driver batta) apply as per the confirmed
                tariff sheet to guarantee safe, well-rested chauffeurs.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                4. Cancellation &amp; Refund Policy
              </h2>
              <p>
                Cancellations made 72 hours prior to scheduled pickup qualify for a
                full refund less standard processing fees. Cancellations between
                24–72 hours may incur a partial retention fee. No refunds are
                applicable for same-day cancellations or no-shows.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                5. Vehicle Substitution &amp; Unforeseen Delays
              </h2>
              <p>
                In the rare event of mechanical malfunction or unexpected road
                events, Khushi Travels reserves the right to provide an equivalent
                or upgraded vehicle from our owned fleet to ensure trip continuity
                without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
