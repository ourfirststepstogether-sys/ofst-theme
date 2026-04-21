# Handoff: Our First Steps (OFST) — Full Shopify Site Design

## Overview

This bundle is the complete design reference for the **Our First Steps (OFST)** Shopify storefront, built on the **Tinker theme**. OFST sells magnetic wooden STEM learning toys for children and a small supporting line of adult items (phone book covers, parent journals). The site is positioned as a **helpful content hub for parents**, not a conventional product catalog.

The design covers:

- Homepage (desktop + mobile)
- Header with Shop mega menu + sticky behavior
- Shop / Collection page (Magnetic Wooden STEM Toys collection)
- Product page template
- Activities Together (content hub: videos, bedtime stories, play guides)
- Free Resources (download grid)
- Our Story, FAQ / Contact, Policies
- Footer
- Mobile variants of the highest-traffic pages

## About the Design Files

The files in this bundle are **design references created in HTML + React (JSX)** — a visual prototype showing intended look, structure, and behavior. They are **not production code to copy directly.**

The task for Claude Code is to **recreate these designs as Shopify Liquid sections / blocks / snippets inside the Tinker theme**, using Tinker's native section patterns and Shopify's schema conventions. Where a UI affordance in the mocks doesn't map 1:1 to a native Tinker section, implement it as a **custom Liquid section** that fits Tinker's architecture (JSON templates, section groups, schema settings, blocks).

**Primary deliverable:** Tinker-compatible Liquid + Shopify CSS/JS (or Tailwind if already wired into the theme).

## Fidelity

**High-fidelity.** All colors, typography, spacing, radii, and component styles are final and should be implemented pixel-true to the mocks. Real product photography is indicated by **labeled placeholders** (monospace captions describing the intended shot) — the developer does **not** need to invent imagery; those slots will be filled by the brand team post-build.

## Brand Source of Truth

Three brand docs ship in `./brand/`. **These override anything in this README if they ever disagree.**

- `brand/design.md` — full visual system (colors, type, components, voice)
- `brand/skills.md` — thinking workflow and output format for component reviews
- `brand/website-structure.md` — confirmed sitemap and homepage section order

## Design Tokens

### Colors (locked — never invent new ones)

| Token | Hex | Role |
|---|---|---|
| `--ofst-base` | `#E4DDD3` | Soft warm background, cards, section fills |
| `--ofst-teal` | `#7EC8D8` | Primary / logo color — buttons, links, nav highlights |
| `--ofst-ink` | `#264653` | Primary text, headings, dark panels |
| `--ofst-coral` | `#FF6A6A` | CTA / energetic accent — primary CTA buttons, highlights |
| `--ofst-yellow` | `#FFCC5C` | Playful secondary accent — badges, warm touches |
| `--ofst-mid` | `#56524E` | Secondary body text |
| `--ofst-bg-alt` | `#F6F1E8` | Soft alternate section background |
| Surface white | `#FFFFFF` | Cards, clean areas |

All color pairings must meet **WCAG AA (4.5:1 minimum)** contrast. Focus rings use `#7EC8D8` or `#FF6A6A`.

### Typography

- **Family:** `Inter var` with fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- (The mocks also reference a rounded display face via CSS variable `--ofst-font-display`. If not licensed, fall back to Inter 700 at tighter letter-spacing.)

| Role | Desktop / Mobile | Weight | Line height |
|---|---|---|---|
| Display / Hero | 48 / 36 px | 700 | 1.1 |
| H1 | 32 / 28 px | 600 | 1.2 |
| H2 | 24 / 22 px | 600 | 1.3 |
| Body | 16 / 17 px | 400 | 1.65 |
| Small | 14 px | 500 | 1.5 |
| Button | 16 px | 500–600 | 1.4 |
| Label / Form | 16 px | 600 | 1.4 |

Body text must not go below 16 px. Touch targets must be ≥ 44 px.

### Spacing & Radii

- **Base unit:** 8 px (with 4 px micro-adjustments)
- **Container max-width:** 1280 px, centered
- **Section padding:** 64–96 px desktop, 32–48 px mobile
- **Border radius:** 4 px (inputs) / 8 px (buttons) / 12 px (cards) / 9999 px (pills)
- **Shadows:** soft and low-opacity only — `0 2px 6px rgba(0,0,0,.06)` to `0 8px 24px rgba(0,0,0,.08)`. Never harsh.

### Buttons

- **Primary (`.ofst-btn-teal`)**: bg `#7EC8D8`, text `#FFFFFF`, radius 8 px or pill, min-height 48 px
- **CTA (`.ofst-btn-cta`)**: bg `#FF6A6A`, text `#FFFFFF` — used for the single highest-intent action per screen
- **Outline (`.ofst-btn-outline`)**: transparent, 2 px border `#264653`, text `#264653`
- **Ghost**: transparent with teal/coral text

All buttons must have a visible focus ring and a subtle hover state (brightness up + scale 1.02).

## Voice & Copy Rules

- **Tone:** humble, honest, parent-to-parent. "Hey fellow warrior…" not "Shop now to discover…"
- Every section ends with a **gentle CTA**, never a pushy one.
- Avoid corporate language, superlatives, or stock-photo vibes.
- Signature line used in the final homepage CTA: *"We're taking these first steps together — one real moment at a time."*

Exact copy used in the mocks is committed in the JSX — lift verbatim unless the brand team supplies a replacement.

## Photography Direction

Every image slot is marked with a monospace placeholder describing the shot. Style is **"messy joy"**:

- Real parent + child interactions, not models
- Natural light, soft warmth, shallow DOF acceptable
- Rule of thirds, focus on hands and connection
- Wooden STEM toys in active use (not arranged flat-lay)
- Candid, slightly imperfect — never overly polished

## Site Map & Navigation

### Header (sticky)

- Logo (left)
- Shop (mega menu, 3 category columns + 1 featured tile)
  - **Wooden STEM Toys** — Gear Walls, Pipe & Ramp Sets, Building Magnets, Expansion Packs, Starter Kits
  - **Kids Clothing** — Basics, Sleepwear, Organic Line, Gift Sets
  - **For Adults** — Phone Book Covers, Parent Journals, Coffee & Mugs, Gift Bundles
- Activities Together (blog / content hub)
- Free Resources
- Our Story
- Account + Cart icons (right)

Mobile: hamburger → full-height drawer with accordion mega menu.

### Footer

- Newsletter signup (repeat of Join the Journey)
- Quick Links: Shop, Activities Together, Free Resources, Our Story, Policies
- Social icons
- Tagline: *"Real First Steps. No Judgment. Just Hustle Together."*

## Homepage Section Order

Implemented as a **JSON template** (`templates/index.json`) pulling Tinker sections in this order:

1. **Hero Banner** — full-bleed warm photo, humble headline, primary CTA
2. **Featured Wooden STEM Toys** — 4-up product grid, "The hero stuff"
3. **Activities Together teaser** — mixed media cards (video / story / guide / note)
4. **Shop by Category** — 3 soft collection cards
5. **Real Parent Moments** — 3 honest quote cards with initials avatars
6. **Phone Book Cover Banner** — dark two-column with yellow chip accent
7. **Join the Journey** (Newsletter) — yellow card with pill-style form
8. **Final Gentle CTA** — italic quote + signature line

## Screens / Views

Each screen below has a 1:1 artboard in `OFST Site Design.html`. Open the HTML in a browser and click any artboard label to enter focus mode.

### 01 · Homepage (`components/homepage.jsx`)
- **Purpose:** welcome parents, surface hero STEM products, drive into content hub
- **Layout:** centered 1200 px content, alternating white / `#F6F1E8` sections for rhythm
- **Key components:** `HomeHero`, `FeaturedSTEM`, `ActivitiesTeaser`, `ShopByCategory`, `ParentMoments`, `PhoneBookBanner`, `Newsletter`, `FinalCTA`

### 02 · Header & Mega Menu (`components/header.jsx`)
- **Purpose:** sticky nav + discoverable shop taxonomy
- **Mega menu:** 3 category columns (1fr each) + 1 featured tile (1.3fr) with imagery
- **Sticky behavior:** header background goes from `#E4DDD3` transparent → solid white with shadow after 80 px scroll

### 03 · Shop — Collection & Product (`components/shop-pages.jsx`)
- **Collection page** (`CollectionPage`): hero band + sidebar filters (Age, Type, Price) + 3-column product grid + "From the Workshop" note band
- **Product page** (`ProductPage`): 2-column gallery / info above the fold; below: "Real Parent Tested" trust row, long-form description, safety metafields, a note-from-the-workshop card, review tiles, related products

### 04 · Activities Together & Free Resources (`components/content-pages.jsx`)
- **Activities Hub** (`ActivitiesHub`): feature row (hero video + 2 stacked cards), filter tabs (All / Videos / Stories / Guides / Notes), grid of 8–12 cards
- **Free Resources** (`ResourcesPage`): download grid with PDF thumbnails, size/pages metadata, single-click download CTAs

### 05 · Our Story / FAQ / Policies (`components/extras.jsx`)
- **Our Story**: long-form editorial with inline photos and pull-quote
- **FAQ / Contact**: accordion FAQ + simple contact form
- **Policies**: shared left-rail nav (Shipping, Returns, Privacy, Terms, Safety) + article content

### 06 · Mobile (`components/extras.jsx`)
- 390 px viewport
- Large 48 px tap targets, sticky bottom action bar on PDP
- Simplified hero, single-column product grid, accordion nav

## Interactions & Behavior

- **Header:** solid background + shadow after 80 px scroll; mega menu opens on hover (desktop) / tap (mobile); `aria-expanded` toggles.
- **Product card hover:** lift 2 px, brighten image, reveal "Quick add" affordance.
- **Newsletter form:** inline validation, success state replaces form with a warm message ("Welcome aboard — first email's on its way.").
- **Mega menu:** closes on Esc and on outside click.
- **PDP gallery:** thumbnails scroll-sync with main image; pinch-zoom on mobile.
- **Sticky mobile PDP bar:** appears after the fold; holds price + "Add to cart".
- **Activities filter tabs:** client-side filter, no page reload, URL updates via `history.pushState`.

All animations: 150–250 ms, ease-out. No bounces, no long dramatic transitions.

## State Management (per page)

- **PDP:** selected variant, quantity, image index, sticky-bar visibility
- **Collection:** active filters (Age, Type, Price), sort order, pagination cursor
- **Activities:** active filter tab, pagination
- **Newsletter:** form status (`idle | submitting | success | error`)
- **Header:** mega-menu open/closed, mobile-drawer open/closed, scrolled boolean

Shopify-side: use native cart AJAX API for add-to-cart, `?view=ajax` partials for filter updates, and Shopify's Customer Privacy API for the newsletter consent.

## Tinker Theme Mapping

Where possible, reuse Tinker's native sections. Build custom Liquid only where necessary.

| Homepage Section | Tinker Section | Notes |
|---|---|---|
| Hero Banner | `image-banner.liquid` | Extend schema to allow logo color chip + two buttons |
| Featured STEM | `featured-collection.liquid` | 4-up grid, age-range metafield badge |
| Activities Teaser | **Custom** `activities-teaser.liquid` | Pulls most-recent posts from `Activities` blog + manual overrides |
| Shop by Category | `collection-list.liquid` | 3 collection cards, use collection image metafields |
| Real Parent Moments | `multicolumn.liquid` | Each block = one testimonial |
| Phone Book Banner | `image-with-text.liquid` | Dark variant — add schema toggle for dark mode |
| Newsletter | `newsletter.liquid` | Style the form per mock |
| Final CTA | `rich-text.liquid` | Italic quote + signature |

**Custom Liquid sections needed:**
1. `activities-teaser.liquid` — mixed-media card grid (video / article / PDF)
2. `resources-grid.liquid` — downloadable-PDF grid with metafield-driven file, pages count, size
3. `workshop-note.liquid` — small "From the workshop" card used on PDP and Collection pages
4. `mega-menu.liquid` — header enhancement (Tinker's default nav can't host the featured tile)

## Files in This Bundle

```
design_handoff_ofst_site/
├── README.md                        ← you are here
├── OFST Site Design.html            ← open this in a browser to see the full design canvas
├── design-canvas.jsx                ← canvas wrapper (pan/zoom, focus mode) — not part of the site
├── styles.css                       ← all design tokens + utility classes used by the mocks
├── components/
│   ├── shared.jsx                   ← Icon, Btn, PhotoPH, chips, header, footer primitives
│   ├── homepage.jsx                 ← all 8 homepage sections
│   ├── header.jsx                   ← mega menu (open state showcase)
│   ├── shop-pages.jsx               ← collection + product templates
│   ├── content-pages.jsx            ← activities hub + resources grid
│   └── extras.jsx                   ← Our Story, FAQ, policies, mobile variants
├── assets/                          ← real product photos from the brand team
│   ├── gear-1.png … gear-3.png
│   ├── pipe-1.png
│   ├── wall-1.png, wall-2.png
│   └── logo.png
└── brand/                           ← brand source-of-truth docs (these win over the README)
    ├── design.md
    ├── skills.md
    └── website-structure.md
```

## How to Implement (recommended order)

1. **Set up tokens.** Port the color + typography + spacing scales into the theme as CSS custom properties (`assets/base.css` or Tinker's equivalent). Keep names aligned with the `--ofst-*` tokens above.
2. **Build the shared primitives.** Button variants, product card, photo-placeholder fallback, chip / badge, the "Join the Journey" form. Do these as snippets so every section can reuse them.
3. **Scaffold the custom Liquid sections** listed above.
4. **Compose the homepage** as a JSON template that stitches the sections in order.
5. **Rebuild the header** with the mega menu, then the footer.
6. **Collection + product templates** — reference `components/shop-pages.jsx` closely, especially the trust-row, workshop-note, and sticky mobile bar.
7. **Content pages** — Activities (blog template override), Free Resources (page template), Our Story, FAQ, Policies.
8. **Mobile pass** — every section must be verified at 390 px; 44 px tap targets are non-negotiable.
9. **Accessibility pass** — contrast, focus rings, alt text, keyboard mega-menu, ARIA on the accordion and tabs.

## Non-Negotiables

- Never invent new colors, fonts, or logo variants.
- Never recolor, stretch, or filter the logo.
- Never use stock-photo "parents with white teeth in a white kitchen" imagery. Real, warm, messy.
- Every CTA must feel gentle and parent-to-parent, never salesy.
- Mobile-first always; test one-handed scroll before shipping.
- WCAG AA contrast on every text/background combination.

## Questions the Developer Should Flag Back to Design

- Final font licensing for display face (Inter-only fallback is already specified).
- Exact Tinker version + whether any sections have been customized already.
- Whether the `Activities` content type is a blog, a metaobject, or a page collection.
- Newsletter provider (Klaviyo vs. Shopify Email) — affects the form markup.
- Whether "For Adults" should be its own collection handle or a menu-only grouping.
