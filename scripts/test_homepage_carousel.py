# -*- coding: utf-8 -*-
"""
Test script for Homepage Package Carousel.
Validates structure, content, dimensions, and scripts.
"""

import os
import re

def run_tests():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    assert 'id="packageCarousel"' in html, "Missing #packageCarousel"
    assert 'id="carouselTrack"' in html, "Missing #carouselTrack"
    assert 'id="carouselPrevBtn"' in html, "Missing #carouselPrevBtn"
    assert 'id="carouselNextBtn"' in html, "Missing #carouselNextBtn"
    assert 'id="carouselDots"' in html, "Missing #carouselDots"

    # Count slides
    slides = re.findall(r'id="carousel-slide-\d+"', html)
    assert len(slides) == 4, f"Expected 4 slides, found {len(slides)}"

    # Slide 1 checks
    assert 'spiritual-pilgrimage-tours.html' in html, "Slide 1 missing link"
    assert 'images/destinations/tirupati.webp' in html, "Slide 1 missing image"
    assert '25-Day 12 Jyotirlinga' in html, "Slide 1 missing heading"
    assert 'Contact us for the confirmed package price.' in html, "Slide 1 missing pricing notice"
    assert 'No hidden charges' in html, "Slide 1 missing guarantees"

    # Slide 2 checks
    assert 'images/destinations/coorg.webp' in html, "Slide 2 missing image"
    assert 'New Journeys' in html and 'Coming Soon' in html, "Slide 2 missing heading"
    assert 'UPCOMING PACKAGES' in html, "Missing UPCOMING PACKAGES label"

    # Slide 3 checks
    assert 'images/destinations/mysore.webp' in html, "Slide 3 missing image"
    assert 'Discover More' in html and 'with Khushi Travels' in html, "Slide 3 missing heading"

    # Slide 4 checks
    assert 'images/destinations/gokarna.webp' in html, "Slide 4 missing image"
    assert 'Your Next Journey' in html and 'Awaits' in html, "Slide 4 missing heading"

    # Offers checks
    assert html.count('Offer details coming soon') == 3, "Expected 3 'Offer details coming soon' messages"
    assert html.count('Coming Soon') >= 3, "Expected at least 3 'Coming Soon' CTAs"

    # Dots check
    dots = re.findall(r'data-slide="[0-3]"', html)
    assert len(dots) == 4, f"Expected 4 dot buttons, found {len(dots)}"

    # JS logic checks
    assert 'setInterval(nextSlide, intervalMs)' in html, "Missing auto-sliding interval"
    assert 'prefersReducedMotion' in html, "Missing prefersReducedMotion check"
    assert 'touchstart' in html and 'touchend' in html, "Missing touch swipe handlers"

    print("ALL STATIC HTML & SCRIPT TESTS PASSED!")

if __name__ == '__main__':
    run_tests()
