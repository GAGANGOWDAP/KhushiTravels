import React from "react";
import type { Metadata } from "next";
import { NORMAL_PACKAGES } from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";

export const metadata: Metadata = {
  title: "Normal Tour Packages from Bangalore | Tempo Traveller Hire | Khushi Travels",
  description:
    "Explore popular regular tour packages from Bangalore by luxury Tempo Traveller and Force Urbania. Tirupati, Coorg, Ooty, Mysore, Chikmagalur, Goa and more with verified chauffeurs.",
  alternates: {
    canonical: "https://gagangowdap.github.io/KhushiTravels/packages/normal/",
  },
  openGraph: {
    title: "Normal Tour Packages from Bangalore | Khushi Travels",
    description:
      "Reliable group tour packages from Bangalore. 9, 12, 14, 16 seater luxury Tempo Travellers with experienced drivers and doorstep pickup.",
    url: "https://gagangowdap.github.io/KhushiTravels/packages/normal/",
    siteName: "Khushi Travels",
    type: "website",
  },
};

export default function NormalPackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Normal Tour Packages from Bangalore",
    description: "Curated regular holiday and pilgrimage tour packages from Bangalore by Khushi Travels.",
    itemListElement: NORMAL_PACKAGES.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `https://gagangowdap.github.io/KhushiTravels/packages/normal/${pkg.slug}/`,
      description: pkg.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Curated South India Tours"
          title="Normal Tour Packages from Bangalore"
          description="Handpicked holiday getaways, heritage tours, and hill station excursions designed for families, corporate teams, and travel groups. Enjoy sanitized AC luxury Tempo Travellers and transparent per-km tariffs."
          activeCategory="normal"
          count={NORMAL_PACKAGES.length}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Packages", href: "/packages/" },
              { label: "Normal Packages" },
            ]}
          />

          <div className="mt-6 mb-16">
            <PackageGrid packages={NORMAL_PACKAGES} />
          </div>

          <div className="mb-16">
            <PackageEnquiryCTA
              packageTitle="Custom South India Tour"
              duration="1 to 5 Days"
            />
          </div>
        </div>
      </main>
    </>
  );
}

