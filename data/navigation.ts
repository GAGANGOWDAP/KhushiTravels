export interface NavChildItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  name: string;
  href: string;
  children?: NavChildItem[];
}

/**
 * Single source of truth for Khushi Travels main navigation.
 * Synchronized across Desktop Navbar, Mobile Navigation Overlay, and Footer Explore Section.
 */
export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Story",
    href: "/services/best-tempo-traveller-rental-bangalore/",
  },
  {
    name: "Fleet",
    href: "/best-tempo-traveller-fleet-bangalore/",
  },
  {
    name: "Packages",
    href: "/packages/",
    children: [
      {
        name: "Holiday Packages",
        href: "/tour-packages-from-bangalore/",
        description: "Coorg, Ooty, Mysore, Goa & South India Tours",
        badge: "Family Tours",
      },
      {
        name: "Pilgrimage Tours",
        href: "/spiritual-pilgrimage-tours/",
        description: "12 Jyotirlinga Yatra, Kashi & Sacred Shrines",
        badge: "★ Sacred",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/tempo-traveller-rent-price-bangalore/",
  },
  {
    name: "Contact",
    href: "/hire-tempo-traveller-bangalore/",
  },
];

