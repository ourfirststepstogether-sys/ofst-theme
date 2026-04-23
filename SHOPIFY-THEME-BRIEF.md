# Shopify Theme Handoff Brief — Lessons from OFST

Context: This doc captures every gotcha we hit building the OFST theme, so the next time you hand off a design from claude.design to claude.code, neither agent repeats these mistakes. Paste the relevant section into whichever tool you're briefing.

---

## For claude.design (upfront, before coding starts)

When generating a design that will become a Shopify theme, follow these rules so the code handoff doesn't fight the platform:

### Do NOT use emojis in default text values
Shopify's schema parser **silently rejects** sections whose JSON `"default"` values contain raw emojis (🌱 ✨ 💖 🛍️). The section uploads "successfully" but fails at render, breaking every template that references it. The theme returns 404s on the homepage with no error message.

- **If an emoji is decorative**, use a CSS/SVG icon instead.
- **If an emoji is in user-facing rendered text**, keep it in the Liquid template output (e.g. `<h1>Welcome 🎉</h1>`), NOT in schema defaults.
- **Never** put emojis in section schema `default`, `label`, or `content` fields.

### Do NOT hardcode URLs to collections/pages/blogs that will be created later
A Shopify store starts **completely empty**. `/collections/gear-walls`, `/pages/our-story`, `/blogs/bedtime-stories` — none of these exist until someone manually creates them in the Shopify admin. Hardcoded links to them 404 on fresh installs.

- List the navigation structure, but label it "needs these collection/page handles created."
- For nav links, plan for a "safe link" pattern that only renders links for resources that exist.

### Flag "empty-state" designs upfront
For every section, spec what it looks like when:
- No image is uploaded
- No products are in the shop
- No blog posts exist
- No metafields are set
- No collection is assigned

Don't assume the store is fully populated. Design placeholder states or degrade gracefully.

### Section name limits
Shopify limits section `name` fields to **25 characters**. Keep display names short: "Featured Products" (17) not "Featured Magnetic STEM Products" (32).

### Don't reference CSS files from per-section HTML
Each section should assume the theme's shared CSS is already loaded once in `layout/theme.liquid`. Don't design each section as if it's standalone with its own `<link rel="stylesheet">`.

### Keep custom font use minimal and list exact Google Fonts names
Specify font stacks with fallbacks:
```
font-family: "Fredoka", "Baloo 2", "Comic Sans MS", system-ui, sans-serif;
font-family: "Nunito", -apple-system, "Segoe UI", Roboto, sans-serif;
```

### If the design uses a mega menu
Design it to iterate over Shopify's built-in navigation menus (`linklists.main-menu.links`) by default, NOT as a hardcoded list of collection URLs. Users manage nav menus in Shopify admin → Online Store → Navigation.

### For PDPs (product pages)
Don't design rating/review UI unless you specify the review source (Shopify's native reviews, Judge.me, metafields, etc.). If using metafields, list the exact namespaces and keys required.

---

## For claude.code (when you receive a design handoff)

When a user hands you a design and says "build this as a Shopify theme," start with this checklist. DO NOT skip items. Ask for missing info up front.

### 1. Clarify before coding
- Is this a standalone theme (zip upload) or drop-ins for an existing theme?
- Which Shopify features are in scope? (Online Store 2.0, Shopify Markets, multi-currency, customer accounts, gift cards, passwords, subscriptions)
- What apps are installed? (Shogun, Klaviyo, Judge.me, etc.) These can override templates.
- What's the store's current state? (fresh / has products / has custom templates)
- Are they on Basic Shopify or higher plan?

### 2. Build a complete valid theme — never a partial drop-in
A valid Shopify theme requires ALL of these at minimum:

```
assets/                          (at least one file)
config/
  settings_schema.json           (REQUIRED)
  settings_data.json             (REQUIRED)
layout/
  theme.liquid                   (REQUIRED — master wrapper)
locales/
  en.default.json                (REQUIRED — English strings)
sections/
  header.liquid                  (exact name)
  footer.liquid                  (exact name)
  header-group.json              (section group for 2.0)
  footer-group.json              (section group for 2.0)
  [other sections]
snippets/
  [optional snippets]
templates/
  index.json                     (homepage)
  product.json                   (product page)
  collection.json                (collection page)
  page.json                      (default page)
  cart.json                      (cart)
  blog.json                      (blog listing)
  article.json                   (single article)
  search.json                    (search)
  list-collections.json          (all collections)
  404.json                       (404)
  gift_card.liquid               (MUST BE .liquid, not .json)
  password.liquid                (password page)
  customers/
    account.liquid
    login.liquid
    register.liquid
    addresses.liquid
    order.liquid
    reset_password.liquid
    activate_account.liquid
```

### 3. Shopify 2.0 section groups for header/footer
Use `{% sections 'header-group' %}` and `{% sections 'footer-group' %}` in `layout/theme.liquid`. Do NOT use the singular `{% section 'header' %}`. The group JSON files live in `sections/header-group.json` and `sections/footer-group.json`.

The referenced sections (`header.liquid`, `footer.liquid`) must declare `"enabled_on": {"groups": ["header"]}` (or "footer") in their schema.

### 4. Schema rules (the silent-failure zone)
Strict rules Shopify enforces but doesn't tell you about:

| Rule | Violation example | Effect |
|------|-------------------|--------|
| No emojis in `"default"` / `"label"` / `"content"` | `"default": "Shop 🛍️"` | Section silently rejected, templates 404 |
| Section `"name"` ≤ 25 chars | `"name": "OFST Phone Book / For Adults Banner"` | Section silently rejected |
| `{"type": "header"}` uses `"content"`, not `"label"` | `{"type": "header", "label": "..."}` | Schema validation fails |
| URL-type settings should be absent or valid URL, never `""` | `"cta_url": ""` in JSON template | Template validation fails |
| Block types must be snake_case | `"type": "activity-card"` | Rejected |
| `image_picker` / `collection` / `product` / `page` / `blog` / `article` types have NO `"default"` | `{"type": "collection", "default": "all"}` | Rejected |
| `range` type requires `min`, `max`, `step` | Missing any → rejected |
| Schema size reasonable | Huge schemas (>50KB) may be rejected |

### 5. Safe-link pattern for ALL navigation
Build a `snippets/safe-link.liquid` that only renders a link if the target resource exists. Use it for every nav link in header/footer/mega menu. Sample:

```liquid
{%- case type -%}
  {%- when 'collection' -%}{%- assign obj = collections[handle] -%}
  {%- when 'page' -%}{%- assign obj = pages[handle] -%}
  {%- when 'blog' -%}{%- assign obj = blogs[handle] -%}
  {%- when 'product' -%}{%- assign obj = all_products[handle] -%}
{%- endcase -%}
{%- if obj.handle != blank -%}
  {%- if wrapper -%}<{{ wrapper }}>{%- endif -%}
  <a href="{{ obj.url }}"{% if class %} class="{{ class }}"{% endif %}>{{ label }}</a>
  {%- if wrapper -%}</{{ wrapper }}>{%- endif -%}
{%- endif -%}
```

Usage: `{% render 'safe-link', type: 'collection', handle: 'gear-walls', label: 'Gear Walls', wrapper: 'li' %}`

This way the theme works on a fresh store (no broken links) and lights up as the user creates pages/collections.

### 6. Guard all metafield references
Always `{% if product.metafields.namespace.key != blank %}`. Never assume a metafield exists.

### 7. Guard all image references
```liquid
{% if section.settings.hero_image != blank %}
  {{ section.settings.hero_image | image_url: width: 1200 | image_tag }}
{% else %}
  <div class="placeholder">...</div>
{% endif %}
```

### 8. Scope all section CSS by section ID
`#my-section-{{ section.id }}` selectors, inside a `<style>` block in the section file. Prevents collisions with base themes (Dawn, Tinker) and with other sections.

### 9. Load shared CSS ONCE in `layout/theme.liquid`
```liquid
{{ 'theme.css' | asset_url | stylesheet_tag }}
```
Don't repeat `<link rel="stylesheet">` in every section.

### 10. All form types are native Shopify
- Newsletter → `{% form 'customer' %}`
- Contact → `{% form 'contact' %}`
- Product ATC → `{% form 'product', product %}`
- Customer login → `{% form 'customer_login' %}`
- Password recovery → `{% form 'recover_customer_password' %}`
- Comments → `{% form 'new_comment', article %}`

Never build custom POST handlers for these.

### 11. Prepare URL fallbacks for CTAs
Every `<a>` with a URL setting should have a safe fallback:
```liquid
<a href="{{ section.settings.cta_url | default: routes.all_products_collection_url }}">
```
Safe defaults: `routes.root_url`, `routes.all_products_collection_url`, `routes.search_url`, `routes.cart_url`. These always resolve.

### 12. Validate BEFORE handing off
Run this checklist on the final theme:

```bash
# JSON validity
for f in $(find theme -name "*.json"); do
  python3 -c "import json; json.load(open('$f'))" || echo "FAIL: $f"
done

# Schema validity
for f in theme/sections/*.liquid; do
  python3 -c "
import re, json
with open('$f') as fh: c = fh.read()
m = re.search(r'{% schema %}(.*?){% endschema %}', c, re.DOTALL)
if m: json.loads(m.group(1))
"
done

# No emojis in schemas
grep -P '[\x{1F000}-\x{1FFFF}]|[\x{2600}-\x{27BF}]' theme/sections/*.liquid

# Section name lengths
python3 -c "
import re, json, os
for f in os.listdir('theme/sections'):
    if f.endswith('.liquid'):
        with open(f'theme/sections/{f}') as fh: c = fh.read()
        m = re.search(r'{% schema %}(.*?){% endschema %}', c, re.DOTALL)
        if m:
            s = json.loads(m.group(1))
            if len(s.get('name', '')) > 25:
                print(f'NAME TOO LONG: {f}: {s[\"name\"]}')
"

# Template → section references
python3 -c "
import json, os
for t in os.listdir('theme/templates'):
    if t.endswith('.json'):
        d = json.load(open(f'theme/templates/{t}'))
        for _, sec in d.get('sections', {}).items():
            p = f'theme/sections/{sec[\"type\"]}.liquid'
            if not os.path.exists(p):
                print(f'MISSING: {t} -> {p}')
"
```

### 13. Zip structure for upload
The zip root must contain the Shopify folders directly (`assets/`, `config/`, `layout/`, etc.). Do NOT zip a `theme/` folder — the Shopify folders must be at the zip root. Command:
```bash
cd /path/to/theme && zip -rq ../theme.zip . -x "*.DS_Store"
```

### 14. Deliver a SETUP.md with the theme
List every collection handle, page handle, blog handle, and product handle the theme expects. Include Shopify admin steps for:
- Creating each page (including which template to assign via the Theme template dropdown)
- Creating each collection (and its smart collection rules or manual products)
- Setting up the navigation menu in Shopify admin
- Any metafield definitions required

### 15. Don't over-engineer the "OFST-* prefix" pattern
Use Shopify's expected naming for header/footer sections (`header.liquid`, `footer.liquid`). You can prefix custom sections (`brandname-hero.liquid`) but NOT the base sections — Shopify's theme editor expects the exact file names for headers/footers.

### 16. Account for installed apps
Shogun, PageFly, and similar landing page apps create their own `layout/*.liquid` files. If present, the store's homepage may be routed through their layout, not your `theme.liquid`. Ask the user early.

---

## Quick "first prompt" template for a new handoff

Copy-paste this when starting a Shopify theme build from a fresh design:

```
I'm handing off a design to be built as a complete, uploadable Shopify 2.0
theme. Before writing any code, confirm you will:

1. Build a complete valid theme (layout, config, locales, all required
   templates including customer/* and gift_card.liquid/password.liquid)
2. Use Shopify naming conventions (sections/header.liquid, sections/footer.liquid)
   with section groups (header-group.json, footer-group.json)
3. Never put emojis in schema "default" or "label" values
4. Never hardcode URLs to collections/pages/blogs — use a safe-link snippet
5. Never exceed 25 chars in section "name" fields
6. Use "content" not "label" for {"type": "header"} schema items
7. Guard every metafield reference with != blank
8. Guard every image reference with != blank
9. Scope section CSS with #section-name-{{ section.id }}
10. Load shared CSS ONCE in layout/theme.liquid
11. Use Shopify native form types ({% form 'customer' %}, etc.)
12. Use routes.* fallbacks for CTA URLs (routes.root_url, etc.)
13. Zip with folders at zip root, not nested in a theme/ folder
14. Produce a SETUP.md listing required handles

When done, validate: all JSON parses, no emojis in sections/, no schema
names >25 chars, every template's referenced sections exist.

Here's my design: [paste handoff]
```

Save that prompt. Reuse it every time.
