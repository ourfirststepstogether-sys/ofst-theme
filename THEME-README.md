# OFST Shopify Theme

## Quick start — upload to Shopify

1. Download `ofst-theme.zip` from the repo root
2. In Shopify admin → **Online Store** → **Themes** → **Add theme** → **Upload zip file**
3. Select `ofst-theme.zip` and click **Upload**
4. Click **Actions** → **Preview** or **Publish**

## After installing — first-time setup

The theme is designed to render on any store, even with no content yet. As you build your store, it'll progressively light up. **Navigation links only render for collections, pages, or blogs that actually exist** — so footer/header nav will be short on a fresh install and grow as you add content.

To get the design looking complete, create these Shopify resources (names must match exactly):

### Collections to create
- `magnetic-wooden-stem-toys` — main toy collection
- `phone-book-covers` — phone book covers
- `kids-clothing` — kids apparel
- `for-adults` — adult/parent goods
- `sale` — sale items
- Sub-collections (optional): `gear-walls`, `pipe-ramp-sets`, `building-magnets`, `expansion-packs`, `starter-kits`, `kids-basics`, `kids-sleepwear`, `organic-line`, `kids-gift-sets`, `parent-journals`, `coffee-mugs`, `gift-bundles`

### Pages to create
- `our-story` (template: Our Story)
- `free-resources` (template: Free Resources)
- `faq` (template: FAQ / Contact)
- `activities-together` (template: Activities hub)
- `shipping-and-returns`, `safety-and-compliance` (template: Policies)

When creating these pages in Shopify admin, assign the matching OFST template from the **Theme template** dropdown on the right side of the page editor.

### Blogs to create (optional)
- `bedtime-stories`
- `play-guides`

## What's included

```
theme/
├── assets/ofst-theme.css            # Design tokens + utility classes
├── config/
│   ├── settings_schema.json         # Theme editor settings (colors, logo, social)
│   └── settings_data.json
├── layout/theme.liquid              # Master wrapper w/ section groups
├── locales/en.default.json          # English strings
├── sections/
│   ├── header-group.json            # Section group for header (2.0)
│   ├── footer-group.json            # Section group for footer (2.0)
│   ├── header.liquid                # Main header w/ mega menu
│   ├── footer.liquid                # Main footer
│   ├── ofst-*.liquid (19 files)     # Custom OFST content sections
│   └── main-*.liquid (8 files)      # Default sections for built-in templates
├── snippets/
│   ├── ofst-fonts.liquid            # Google Fonts loader
│   ├── ofst-logo.liquid             # Logo wordmark
│   └── ofst-safe-link.liquid        # Renders link only if resource exists
└── templates/
    ├── *.json (13 files)            # All required routes + OFST page templates
    ├── *.liquid (gift_card, password)
    └── customers/*.liquid (7 files)
```

## Key design notes

- **Bubbly fonts**: Fredoka (display) + Nunito (body) via Google Fonts
- **White-forward palette**: white backgrounds, brand colors (coral, teal, yellow, warm base, deep ink) as accents
- **CSS scoping**: Each section uses `#ofst-<name>-{{ section.id }}` IDs to prevent style collisions
- **Section groups**: Header and footer use Shopify 2.0 section groups (editable via Theme Editor)

## Safe-link system

Every navigation link in the header and footer uses the `ofst-safe-link` snippet. If the target collection/page/blog/product doesn't exist in the store yet, the link simply doesn't render — no 404s, no broken UI. As you create the resources, they automatically appear in the nav.

## Troubleshooting

**"theme is missing header/footer" error:** Already fixed in this version. Theme uses `{% sections 'header-group' %}` (Shopify 2.0 section groups).

**Links not showing in nav:** The resource (page/collection/blog) doesn't exist yet in your Shopify admin. Create it with the exact handle shown above.

**Fonts look wrong:** Make sure your store allows loading resources from `fonts.googleapis.com`. The fonts snippet (`snippets/ofst-fonts.liquid`) loads Fredoka and Nunito from Google Fonts.

---

## About this repo

The React/HTML/CSS design source lives in `project/`. Chat transcripts in `chats/` show the full design evolution. The initial `shopify/` folder contains the same section files for dropping into an existing theme (Option 2 from the earlier flow).
