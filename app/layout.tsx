import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gagangowdap.github.io/KhushiTravels/"),
  title: "Luxury Tempo Traveller in Bangalore | 9, 12, 16 Seater | Khushi Travels",
  description:
    "Rent luxury tempo travellers, Force Urbania & deluxe buses in Bangalore with Khushi Travels. Premium pushback seats, professional drivers & transparent per-km rates.",
  keywords: [
    "luxury tempo traveller Bangalore",
    "9 seater tempo traveller",
    "12 seater tempo traveller",
    "14 seater tempo traveller",
    "16 seater tempo traveller",
    "Force Urbania rental Bangalore",
    "Maharaja seats tempo traveller",
    "Khushi Travels",
  ],
  authors: [{ name: "Khushi Tours And Travels" }],
  openGraph: {
    type: "website",
    url: "https://gagangowdap.github.io/KhushiTravels/",
    title: "Luxury Tempo Traveller Rental in Bangalore | Khushi Travels",
    description:
      "Premium tempo travellers, Force Urbania and luxury buses for family trips, pilgrimages, and group outstation travel from Bangalore.",
    images: [
      {
        url: "https://gagangowdap.github.io/KhushiTravels/images/destinations/mysore.webp",
        width: 1200,
        height: 630,
        alt: "Khushi Travels Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Tempo Traveller in Bangalore | 9, 12, 16 Seater | Khushi Travels",
    description:
      "Rent luxury tempo travellers, Force Urbania & deluxe buses in Bangalore with Khushi Travels. Premium pushback seats, professional drivers & transparent per-km rates.",
    images: ["https://gagangowdap.github.io/KhushiTravels/images/destinations/mysore.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Khushi Tours And Travels",
    image: "https://khushitravel.in/images/khushi-tours-and-travels-logo.webp",
    description:
      "Bangalore's premier luxury tempo traveller rental service. 100% owned fleet from 7 to 50 seaters including Maharaja seats, Force Urbania, and luxury buses. Chauffeur-driven, sanitized, bookable in 2 minutes on WhatsApp.",
    url: "https://khushitravel.in/",
    telephone: "+919901333113",
    email: "info@khushitravel.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidryanyapura",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560097",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0624156,
      longitude: 77.5742089,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      reviewCount: "63",
      ratingCount: "63",
    },
    foundingDate: "2018-08-15",
    taxID: "29JPFPK4060F1ZQ",
    numberOfEmployees: { "@type": "QuantitativeValue", "value": "15" },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MD7GBMCS');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MD7GBMCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />

        <main>{children}</main>

        <Footer />

        {/* Global Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
