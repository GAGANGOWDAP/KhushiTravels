# -*- coding: utf-8 -*-
"""
Update index.html with the 4-slide automatic package carousel.
Replaces the single offer card with a smooth, responsive, dimensionally identical carousel.
"""

import os
import re

CAROUSEL_HTML = '''  <!-- ===== FEATURED PACKAGES CAROUSEL ===== -->
  <section class="bg-white py-8 md:py-12" id="packages-carousel-section">
    <div class="container-custom relative">
      <!-- Carousel Viewport Wrapper (Retains exact border, radius, shadow, background of original card) -->
      <div class="carousel-viewport relative rounded-2xl shadow-lg border border-slate-700/60 overflow-hidden focus-within:ring-2 focus-within:ring-brand-amber select-none"
        id="packageCarousel"
        style="background:linear-gradient(135deg, #0a1628 0%, #132244 50%, #0f1f3d 100%)"
        aria-roledescription="carousel"
        aria-label="Featured &amp; Upcoming Tour Packages">

        <!-- Carousel Track (Flex row of slides, strictly 100% width each with uniform stretch) -->
        <div class="carousel-track flex transition-transform duration-500 ease-in-out will-change-transform"
          id="carouselTrack"
          style="transform: translateX(0%); align-items: stretch;">

          <!-- ===== SLIDE 1: 25-Day 12 Jyotirlinga Spiritual Yatra (Existing Approved Content) ===== -->
          <div class="carousel-slide flex-shrink-0 w-full"
            style="flex: 0 0 100%; min-width: 100%;"
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 1 of 4: 25-Day 12 Jyotirlinga Spiritual Yatra"
            id="carousel-slide-1"
            aria-hidden="false">
            <a href="spiritual-pilgrimage-tours.html"
              class="block group text-inherit no-underline w-full h-full cursor-pointer focus:outline-none"
              aria-label="View 25-Day 12 Jyotirlinga Spiritual Yatra details and itinerary">
              <div class="relative z-10 grid md:grid-cols-[280px_1fr] w-full h-full">
                <!-- Image panel -->
                <div class="relative min-h-[200px] md:min-h-full overflow-hidden">
                  <img src="images/destinations/tirupati.webp" alt="12 Jyotirlinga pilgrimage tour"
                    class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />
                  <div
                    class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628] via-[#0a1628]/40 to-transparent">
                  </div>
                  <div
                    class="absolute top-3 left-3 gradient-amber text-brand-navy text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                    Featured</div>
                  <div class="absolute bottom-3 left-3 right-3 md:top-auto md:bottom-4 md:left-4 md:right-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full gradient-amber flex items-center justify-center shadow-md shrink-0">
                        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l1.5 5.5L19 7l-4.5 3.5L16 16l-4-3-4 3 1.5-5.5L5 7l5.5.5z" />
                        </svg>
                      </div>
                      <span class="text-white font-heading font-bold text-sm leading-tight">Spiritual<br /><span
                          class="text-brand-amber text-[10px] uppercase tracking-wider font-extrabold">Pilgrimage</span></span>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 md:p-7 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    <!-- Badges -->
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        class="text-[10px] font-bold text-brand-amber bg-brand-amber/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-amber/15">Proposed Pilgrimage Package</span>
                      <span class="w-px h-3 bg-white/10"></span>
                      <span class="flex items-center gap-1 text-[10px] text-brand-amber font-semibold">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Proposed 25-Day Yatra &bull; Bengaluru Departure
                      </span>
                    </div>

                    <h3
                      class="font-heading text-2xl md:text-3xl font-extrabold text-white mb-0.5 group-hover:text-brand-amber transition-colors">
                      25-Day 12 Jyotirlinga <span class="text-brand-amber">Spiritual Yatra</span></h3>
                    <p class="text-amber-200/90 text-sm font-semibold mb-3">Twelve Sacred Jyotirlingas. More Sacred Destinations. One Unforgettable Journey.</p>

                    <p class="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">Join Khushi Tours &amp; Travels on a proposed 25-day pilgrimage from Bengaluru, visiting India's twelve revered Jyotirlingas and exploring additional spiritual destinations including Mathura, Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri, subject to the final confirmed itinerary.</p>

                    <!-- Highlights grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">25 Days</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Proposed Yatra</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">12</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Jyotirlingas</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">+6</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Sacred Sites</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">AC Volvo</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Transport</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">3-Star</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Deluxe Stay</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Pure Veg</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">3-Time Food</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <!-- Price + CTA -->
                    <div
                      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div>
                        <span class="text-xs uppercase font-bold text-brand-amber tracking-wider block">Pricing Notice</span>
                        <div class="flex items-baseline gap-2.5 flex-wrap">
                          <span class="text-lg md:text-xl font-heading font-extrabold text-white">Contact us for the confirmed package price.</span>
                        </div>
                        <span class="text-[11px] text-white/50 block mt-0.5">Subject to operator confirmation &bull; Custom group departures on request</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-2.5">
                        <span
                          class="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg gradient-amber text-brand-navy text-sm font-heading font-bold shadow-lg shadow-brand-amber/15 group-hover:shadow-brand-amber/30 group-hover:-translate-y-0.5 transition-all">
                          View Tour Details &amp; Itinerary
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <!-- Guarantees -->
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/5">
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        No hidden charges
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Free cancellation 7 days prior
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        24/7 support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- ===== SLIDE 2: Upcoming Packages Card 1 ===== -->
          <div class="carousel-slide flex-shrink-0 w-full"
            style="flex: 0 0 100%; min-width: 100%;"
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 2 of 4: New Journeys Coming Soon"
            id="carousel-slide-2"
            aria-hidden="true">
            <div class="block w-full h-full">
              <div class="relative z-10 grid md:grid-cols-[280px_1fr] w-full h-full">
                <!-- Image panel -->
                <div class="relative min-h-[200px] md:min-h-full overflow-hidden">
                  <img src="images/destinations/coorg.webp" alt="Upcoming travel packages from Bangalore"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" />
                  <div
                    class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628] via-[#0a1628]/40 to-transparent">
                  </div>
                  <div
                    class="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber border border-brand-amber/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                    UPCOMING PACKAGES</div>
                  <div class="absolute bottom-3 left-3 right-3 md:top-auto md:bottom-4 md:left-4 md:right-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full bg-brand-amber/20 border border-brand-amber/30 flex items-center justify-center shadow-md shrink-0 text-brand-amber">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                      </div>
                      <span class="text-white font-heading font-bold text-sm leading-tight">Curated<br /><span
                          class="text-brand-amber text-[10px] uppercase tracking-wider font-extrabold">Travel</span></span>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 md:p-7 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    <!-- Badges -->
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        class="text-[10px] font-bold text-brand-amber bg-brand-amber/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-amber/15">UPCOMING PACKAGES</span>
                      <span class="w-px h-3 bg-white/10"></span>
                      <span class="flex items-center gap-1 text-[10px] text-amber-200/80 font-semibold">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Bengaluru Departures &bull; Advance Notice
                      </span>
                    </div>

                    <h3 class="font-heading text-2xl md:text-3xl font-extrabold text-white mb-0.5">
                      New Journeys <span class="text-brand-amber">Coming Soon</span></h3>
                    <p class="text-amber-200/90 text-sm font-semibold mb-3">New travel experiences are being planned. Stay tuned for upcoming package announcements.</p>

                    <p class="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">Khushi Tours &amp; Travels is curating exciting new holiday and pilgrimage circuits from Bengaluru. Each upcoming itinerary will feature our signature luxury tempo travellers and coaches, verified accommodations, and transparent booking policies.</p>

                    <!-- Highlights grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Package</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Curated Tour</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Destination</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">TBA Soon</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Duration</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Multi-Day</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Transport</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Luxury AC</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Stay</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Verified 3★</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Offers</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Early Notice</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <!-- Price + CTA -->
                    <div
                      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div>
                        <span class="text-xs uppercase font-bold text-brand-amber tracking-wider block">Package Status</span>
                        <div class="flex items-baseline gap-2.5 flex-wrap">
                          <span class="text-lg md:text-xl font-heading font-extrabold text-white">Offer details coming soon</span>
                        </div>
                        <span class="text-[11px] text-white/50 block mt-0.5">Official pricing and departure calendar will be announced upon release</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-2.5">
                        <span
                          class="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-white/10 text-white/60 border border-white/15 text-sm font-heading font-bold cursor-default select-none">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <!-- Guarantees -->
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/5">
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        100% Owned Fleet
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Itineraries
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Customer Support Desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ===== SLIDE 3: Upcoming Packages Card 2 ===== -->
          <div class="carousel-slide flex-shrink-0 w-full"
            style="flex: 0 0 100%; min-width: 100%;"
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 3 of 4: Discover More with Khushi Travels"
            id="carousel-slide-3"
            aria-hidden="true">
            <div class="block w-full h-full">
              <div class="relative z-10 grid md:grid-cols-[280px_1fr] w-full h-full">
                <!-- Image panel -->
                <div class="relative min-h-[200px] md:min-h-full overflow-hidden">
                  <img src="images/destinations/mysore.webp" alt="Upcoming heritage travel packages"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" />
                  <div
                    class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628] via-[#0a1628]/40 to-transparent">
                  </div>
                  <div
                    class="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber border border-brand-amber/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                    UPCOMING PACKAGES</div>
                  <div class="absolute bottom-3 left-3 right-3 md:top-auto md:bottom-4 md:left-4 md:right-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full bg-brand-amber/20 border border-brand-amber/30 flex items-center justify-center shadow-md shrink-0 text-brand-amber">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span class="text-white font-heading font-bold text-sm leading-tight">Heritage<br /><span
                          class="text-brand-amber text-[10px] uppercase tracking-wider font-extrabold">Discovery</span></span>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 md:p-7 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    <!-- Badges -->
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        class="text-[10px] font-bold text-brand-amber bg-brand-amber/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-amber/15">UPCOMING PACKAGES</span>
                      <span class="w-px h-3 bg-white/10"></span>
                      <span class="flex items-center gap-1 text-[10px] text-amber-200/80 font-semibold">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Bengaluru Departures &bull; Advance Notice
                      </span>
                    </div>

                    <h3 class="font-heading text-2xl md:text-3xl font-extrabold text-white mb-0.5">
                      Discover More <span class="text-brand-amber">with Khushi Travels</span></h3>
                    <p class="text-amber-200/90 text-sm font-semibold mb-3">More holiday experiences and travel packages will be announced soon.</p>

                    <p class="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">From scenic Western Ghats retreats to coastal heritage circuits, our team is designing all-inclusive group packages tailored for families, senior citizens, and corporate groups with dedicated tour coordinators.</p>

                    <!-- Highlights grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Package</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Heritage Tour</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Destination</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">TBA Soon</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Duration</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Multi-Day</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Transport</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Luxury AC</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Stay</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Verified 3★</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Offers</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Early Notice</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <!-- Price + CTA -->
                    <div
                      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div>
                        <span class="text-xs uppercase font-bold text-brand-amber tracking-wider block">Package Status</span>
                        <div class="flex items-baseline gap-2.5 flex-wrap">
                          <span class="text-lg md:text-xl font-heading font-extrabold text-white">Offer details coming soon</span>
                        </div>
                        <span class="text-[11px] text-white/50 block mt-0.5">Official pricing and departure calendar will be announced upon release</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-2.5">
                        <span
                          class="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-white/10 text-white/60 border border-white/15 text-sm font-heading font-bold cursor-default select-none">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <!-- Guarantees -->
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/5">
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        100% Owned Fleet
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Itineraries
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Customer Support Desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ===== SLIDE 4: Upcoming Packages Card 3 ===== -->
          <div class="carousel-slide flex-shrink-0 w-full"
            style="flex: 0 0 100%; min-width: 100%;"
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 4 of 4: Your Next Journey Awaits"
            id="carousel-slide-4"
            aria-hidden="true">
            <div class="block w-full h-full">
              <div class="relative z-10 grid md:grid-cols-[280px_1fr] w-full h-full">
                <!-- Image panel -->
                <div class="relative min-h-[200px] md:min-h-full overflow-hidden">
                  <img src="images/destinations/gokarna.webp" alt="Upcoming coastal tour packages"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" />
                  <div
                    class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628] via-[#0a1628]/40 to-transparent">
                  </div>
                  <div
                    class="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber border border-brand-amber/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                    UPCOMING PACKAGES</div>
                  <div class="absolute bottom-3 left-3 right-3 md:top-auto md:bottom-4 md:left-4 md:right-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full bg-brand-amber/20 border border-brand-amber/30 flex items-center justify-center shadow-md shrink-0 text-brand-amber">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span class="text-white font-heading font-bold text-sm leading-tight">Coastal<br /><span
                          class="text-brand-amber text-[10px] uppercase tracking-wider font-extrabold">Getaways</span></span>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 md:p-7 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    <!-- Badges -->
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        class="text-[10px] font-bold text-brand-amber bg-brand-amber/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-amber/15">UPCOMING PACKAGES</span>
                      <span class="w-px h-3 bg-white/10"></span>
                      <span class="flex items-center gap-1 text-[10px] text-amber-200/80 font-semibold">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Bengaluru Departures &bull; Advance Notice
                      </span>
                    </div>

                    <h3 class="font-heading text-2xl md:text-3xl font-extrabold text-white mb-0.5">
                      Your Next Journey <span class="text-brand-amber">Awaits</span></h3>
                    <p class="text-amber-200/90 text-sm font-semibold mb-3">We are preparing more travel options. Check back soon for package details.</p>

                    <p class="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">Explore Karnataka, South India, and pan-India destinations with complete peace of mind. Full route schedules, hotel tier options, and verified package prices will be announced shortly.</p>

                    <!-- Highlights grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Package</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Custom Tour</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Destination</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">TBA Soon</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Duration</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Multi-Day</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Transport</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Luxury AC</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Stay</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Verified 3★</span>
                      </div>
                      <div class="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                        <span class="block text-brand-amber font-heading font-extrabold text-base">Offers</span>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">Early Notice</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <!-- Price + CTA -->
                    <div
                      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div>
                        <span class="text-xs uppercase font-bold text-brand-amber tracking-wider block">Package Status</span>
                        <div class="flex items-baseline gap-2.5 flex-wrap">
                          <span class="text-lg md:text-xl font-heading font-extrabold text-white">Offer details coming soon</span>
                        </div>
                        <span class="text-[11px] text-white/50 block mt-0.5">Official pricing and departure calendar will be announced upon release</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-2.5">
                        <span
                          class="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-white/10 text-white/60 border border-white/15 text-sm font-heading font-bold cursor-default select-none">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <!-- Guarantees -->
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/5">
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        100% Owned Fleet
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Itineraries
                      </span>
                      <span class="flex items-center gap-1 text-[11px] text-emerald-400/70">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Customer Support Desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Previous Slide Button -->
        <button type="button"
          id="carouselPrevBtn"
          aria-label="Previous Package Slide"
          class="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0a1628]/85 hover:bg-brand-amber text-white hover:text-brand-navy border border-white/20 flex items-center justify-center shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-amber">
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next Slide Button -->
        <button type="button"
          id="carouselNextBtn"
          aria-label="Next Package Slide"
          class="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0a1628]/85 hover:bg-brand-amber text-white hover:text-brand-navy border border-white/20 flex items-center justify-center shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-amber">
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- 4 Pagination Dots -->
      <div class="flex items-center justify-center gap-2.5 mt-4" id="carouselDots" role="tablist" aria-label="Package Carousel Slides">
        <button type="button" role="tab" aria-selected="true" aria-label="Go to Slide 1" class="carousel-dot transition-all h-2.5 rounded-full bg-brand-amber w-8 cursor-pointer" data-slide="0"></button>
        <button type="button" role="tab" aria-selected="false" aria-label="Go to Slide 2" class="carousel-dot transition-all h-2.5 rounded-full bg-slate-400/50 hover:bg-slate-400 w-2.5 cursor-pointer" data-slide="1"></button>
        <button type="button" role="tab" aria-selected="false" aria-label="Go to Slide 3" class="carousel-dot transition-all h-2.5 rounded-full bg-slate-400/50 hover:bg-slate-400 w-2.5 cursor-pointer" data-slide="2"></button>
        <button type="button" role="tab" aria-selected="false" aria-label="Go to Slide 4" class="carousel-dot transition-all h-2.5 rounded-full bg-slate-400/50 hover:bg-slate-400 w-2.5 cursor-pointer" data-slide="3"></button>
      </div>
    </div>
  </section>'''

CAROUSEL_SCRIPT = '''    // ===== AUTOMATIC PACKAGE CAROUSEL (4 SLIDES) =====
    (() => {
      const carousel = document.getElementById('packageCarousel');
      const track = document.getElementById('carouselTrack');
      const prevBtn = document.getElementById('carouselPrevBtn');
      const nextBtn = document.getElementById('carouselNextBtn');
      const dots = document.querySelectorAll('.carousel-dot');
      const slides = document.querySelectorAll('.carousel-slide');

      if (!carousel || !track || slides.length === 0) return;

      let currentIndex = 0;
      const totalSlides = slides.length;
      const intervalMs = 5500; // 5.5s auto-sliding
      let autoPlayTimer = null;
      let isHovered = false;
      let isFocused = false;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        track.style.transition = 'none';
      }

      const updateSlide = (index) => {
        currentIndex = (index + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update accessibility & dots
        slides.forEach((slide, idx) => {
          slide.setAttribute('aria-hidden', idx === currentIndex ? 'false' : 'true');
        });

        dots.forEach((dot, idx) => {
          const isActive = idx === currentIndex;
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
          if (isActive) {
            dot.classList.remove('w-2.5', 'bg-slate-400/50');
            dot.classList.add('w-8', 'bg-brand-amber');
          } else {
            dot.classList.remove('w-8', 'bg-brand-amber');
            dot.classList.add('w-2.5', 'bg-slate-400/50');
          }
        });
      };

      const nextSlide = () => updateSlide(currentIndex + 1);
      const prevSlide = () => updateSlide(currentIndex - 1);

      const startAutoPlay = () => {
        if (prefersReducedMotion || isHovered || isFocused || autoPlayTimer) return;
        autoPlayTimer = setInterval(nextSlide, intervalMs);
      };

      const stopAutoPlay = () => {
        if (autoPlayTimer) {
          clearInterval(autoPlayTimer);
          autoPlayTimer = null;
        }
      };

      const resetAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
      };

      // Button listeners
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          nextSlide();
          resetAutoPlay();
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          prevSlide();
          resetAutoPlay();
        });
      }

      // Dot listeners
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          updateSlide(idx);
          resetAutoPlay();
        });
      });

      // Hover pause / resume
      carousel.addEventListener('mouseenter', () => {
        isHovered = true;
        stopAutoPlay();
      });

      carousel.addEventListener('mouseleave', () => {
        isHovered = false;
        if (!isFocused) startAutoPlay();
      });

      // Keyboard focus pause / resume
      carousel.addEventListener('focusin', () => {
        isFocused = true;
        stopAutoPlay();
      });

      carousel.addEventListener('focusout', (e) => {
        if (!carousel.contains(e.relatedTarget)) {
          isFocused = false;
          if (!isHovered) startAutoPlay();
        }
      });

      // Keyboard arrow keys
      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          prevSlide();
          resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
          resetAutoPlay();
        }
      });

      // Touch swipe gestures
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      carousel.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;
      }, { passive: true });

      carousel.addEventListener('touchend', () => {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        // Check if horizontal swipe was intentional
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          resetAutoPlay();
        }
        touchStartX = 0;
        touchEndX = 0;
        touchStartY = 0;
        touchEndY = 0;
      });

      // Initialize
      updateSlide(0);
      startAutoPlay();
    })();'''

def update_index_file():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the OFFER CARD section from <!-- ===== OFFER CARD ===== --> to </section> before ABOUT
    offer_pattern = r'<!-- ===== OFFER CARD ===== -->[\s\S]*?</section>'
    assert re.search(offer_pattern, content), "Offer card section not found in index.html"

    new_content = re.sub(offer_pattern, CAROUSEL_HTML, content, count=1)
    
    # Add script before </script> at the bottom of the page
    script_insertion = CAROUSEL_SCRIPT + '\n\n  </script>'
    assert '</script>\n\n</body>' in new_content or '</script>\n</body>' in new_content, "Closing script tag not found"
    
    new_content = new_content.replace('</script>\n\n</body>', script_insertion + '\n\n</body>')
    if script_insertion not in new_content:
        new_content = new_content.replace('</script>\n</body>', script_insertion + '\n</body>')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated index.html with 4-slide automatic carousel!")

if __name__ == '__main__':
    update_index_file()
