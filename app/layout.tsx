import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  buildLocalBusinessSchema,
} from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxury Tempo Traveller in Bangalore | 9, 12, 16 Seater | Khushi Travels",
    template: "%s | Khushi Travels",
  },
  description:
    "Rent luxury tempo travellers, Force Urbania & deluxe buses in Bangalore with Khushi Travels. Premium pushback seats, professional drivers & transparent per-km rates for local, outstation & pilgrimage tours.",
  keywords: [
    "luxury tempo traveller Bangalore",
    "tempo traveller rent Bangalore",
    "travel agency in Bangalore",
    "tour operators in Bangalore",
    "holiday packages from Bangalore",
    "family tour packages from Bangalore",
    "outstation cab booking Bangalore",
    "pilgrimage tour operators Bangalore",
    "9 seater tempo traveller",
    "12 seater tempo traveller",
    "14 seater tempo traveller",
    "16 seater tempo traveller",
    "Force Urbania rental Bangalore",
    "Maharaja seats tempo traveller",
    "Khushi Travels",
    "Khushi Tours and Travels",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Luxury Tempo Traveller Rental in Bangalore | Khushi Travels",
    description:
      "Premium tempo travellers, Force Urbania and luxury buses for family trips, pilgrimages, and group outstation travel from Bangalore. 100% owned fleet.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Khushi Tours & Travels Luxury Fleet Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Tempo Traveller in Bangalore | 9, 12, 16 Seater | Khushi Travels",
    description:
      "Rent luxury tempo travellers, Force Urbania & deluxe buses in Bangalore with Khushi Travels. Premium pushback seats, professional drivers & transparent rates.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: "Bangalore's Premier Luxury Tempo Traveller & Tour Operator",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
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
