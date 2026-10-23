# -*- coding: utf-8 -*-
"""
Footer Validation Test Suite.
Verifies structure, syntax, and verifies every single link resolves
to an existing file on disk across all 53 pages.
"""

import os
import glob
import re

def test_all_footers():
    pages = [
        'index.html',
        'best-tempo-traveller-fleet-bangalore.html',
        'hire-tempo-traveller-bangalore.html',
        'pilgrimage-packages.html',
        'privacy.html',
        'spiritual-pilgrimage-tours.html',
        'tempo-traveller-rent-price-bangalore.html',
        'terms.html',
        'tour-packages-from-bangalore.html',
        '404.html'
    ] + glob.glob('fleet/*.html') + glob.glob('services/*.html') + glob.glob('routes/*.html') + glob.glob('localities/*.html')

    missing_links_report = []

    for page in pages:
        assert os.path.exists(page), f"Page not found: {page}"
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()

        footer_match = re.search(r'<footer[\s\S]*?</footer>', content)
        assert footer_match, f"Missing footer in {page}"
        footer_html = footer_match.group(0)

        # Essential checks
        assert 'khushi-tours-and-travels-logo.webp' in footer_html, f"Missing logo in {page}"
        assert '99013' in footer_html, f"Missing phone in {page}"
        assert '29JPFPK4060F1ZQ' in footer_html, f"Missing GST in {page}"
        assert 'WhatsApp Us' in footer_html, f"Missing WhatsApp button in {page}"
        assert 'Call Now' in footer_html, f"Missing Call Now button in {page}"
        assert 'Popular Routes from Bangalore' in footer_html, f"Missing popular routes in {page}"
        assert 'footerYear' in footer_html, f"Missing footerYear in {page}"
        assert 'Terms &amp; Conditions' in footer_html or 'Terms & Conditions' in footer_html, f"Missing Terms in {page}"
        assert 'Privacy Policy' in footer_html, f"Missing Privacy in {page}"

        # Link resolution check
        page_dir = os.path.dirname(page)
        links = re.findall(r'href=[\"\']([^#\"\':]+(?:\.html)?)[\"\']', footer_html)
        for link in links:
            if link.startswith('http') or link.startswith('mailto') or link.startswith('tel') or link.startswith('javascript'):
                continue
            # Resolve relative link
            resolved = os.path.normpath(os.path.join(page_dir, link))
            if not os.path.exists(resolved):
                missing_links_report.append((page, link, resolved))

    if missing_links_report:
        print("FAIL: Found broken relative links in footers:")
        for page, link, resolved in missing_links_report:
            print(f"  In {page}: '{link}' -> '{resolved}' does not exist!")
        assert False, f"{len(missing_links_report)} broken links found in footers!"

    print(f"SUCCESS: All {len(pages)} pages have verified, working footers with ZERO broken links!")

if __name__ == '__main__':
    test_all_footers()
