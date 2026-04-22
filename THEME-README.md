# OFST Shopify Theme

Two ways to use this repo:

## Option 1 — Standalone theme (`theme/`)

A complete, valid Shopify theme you can upload directly to your store.

**Structure:**
```
theme/
├── assets/           ofst-theme.css (design tokens + utilities)
├── config/           settings_schema.json, settings_data.json
├── layout/           theme.liquid (master wrapper)
├── locales/          en.default.json
├── sections/         19 ofst-* custom sections + 8 main-* defaults
├── snippets/         ofst-fonts.liquid, ofst-logo.liquid
└── templates/        all required templates + 5 OFST page templates + 7 customer templates
```

**To upload:**
1. Download `ofst-theme.zip` from the repo root (or zip the `theme/` folder contents yourself — structure must be at the zip root)
2. In Shopify admin → Online Store → Themes → Add theme → Upload zip file
3. Publish when ready

## Option 2 — Drop into an existing theme (`shopify/`)

If you already have a base theme (e.g. Tinker) and want to add just the OFST sections, copy files from `shopify/` into your theme:

- `shopify/sections/*.liquid` → your theme's `sections/`
- `shopify/snippets/*.liquid` → your theme's `snippets/`
- `shopify/assets/ofst-theme.css` → your theme's `assets/`
- `shopify/templates/*.json` → your theme's `templates/`

Then add one line to your `layout/theme.liquid` `<head>`:
```liquid
{% render 'ofst-fonts' %}
```

## Page templates included
- Homepage (`templates/index.json`)
- Product (`templates/product.json`)
- Collection (`templates/collection.json` + `collection.stem-toys.json`)
- Our Story (`templates/page.our-story.json`)
- Activities blog hub (`templates/page.activities.json`)
- Resources (`templates/page.resources.json`)
- FAQ & Contact (`templates/page.faq.json`)
- Policies (`templates/page.policies.json`)

Create Shopify pages and assign these templates in the admin.

## Design source

The React/HTML/CSS design source lives in `project/`. Chat transcripts in `chats/` show the design evolution. `README.md` (in this folder) explains the original handoff.
