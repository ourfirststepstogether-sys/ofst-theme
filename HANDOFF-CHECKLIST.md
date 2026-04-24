# Claude Design → Claude Code Handoff (Shopify Edition)

Everything needed for a clean handoff from claude.design into a Shopify Liquid build using claude.code + Shopify MCP server.

---

## Part 1: What claude.design must produce

For a Shopify theme, the design can't just be "pretty HTML." It needs to map cleanly to Shopify's primitives so the coder doesn't have to guess.

### 1.1 A Shopify Info Architecture doc alongside the design
For every section in every page, the design handoff must specify:

| Field | Example |
|-------|---------|
| **Section name** | "Featured products" |
| **Section type** | `ofst-featured-products` (≤25 char schema name) |
| **Data source** | Shopify `collection` object, picked via schema setting |
| **Repeating blocks?** | Yes — `product_card` block, max 8 |
| **Theme editor controls** | Eyebrow (text), heading (text), CTA text (text), CTA link (url), collection (collection picker), layout (select: 3/4 columns) |
| **Empty state** | If no collection selected → 4 placeholder cards. If no products → "Add products to this collection" message. |
| **Used on templates** | Homepage only |
| **Metafields required** | `product.metafields.custom.badge`, `product.metafields.custom.age_range` (both optional) |

### 1.2 Resource Map — the pages/collections/blogs your design assumes exist
List every Shopify resource the design references, with **handle** (URL slug) and **purpose**. Example:

```
collections/
  magnetic-wooden-stem-toys   — main hero collection (homepage "Shop by category")
  phone-book-covers           — secondary collection (footer Shop column)
  sale                        — sale collection (header trust strip, footer)

pages/
  our-story                   — uses `page.our-story` template
  free-resources              — uses `page.resources` template
  faq                         — uses `page.faq` template

blogs/
  bedtime-stories             — used in footer "Helpful Stuff"
  play-guides                 — used in footer "Helpful Stuff"
```

This becomes the SETUP.md so the end user knows what to create in Shopify admin.

### 1.3 Metafield spec (if any)
Any custom data beyond Shopify's built-ins needs an exact spec:

```
product.metafields.custom.age_range
  type: single_line_text_field
  example: "18 months – 4 years"
  used in: collection grid, PDP, featured section

product.metafields.custom.badge
  type: single_line_text_field
  enum: "New" | "Best seller" | "Workshop pick"
  used in: product cards (featured, collection, related)
```

### 1.4 Navigation plan
Decide upfront: **hardcoded structure vs. Shopify menu-driven**.
- **Mega menu / brand-specific nav** → theme-specific with safe-link snippet (fallback gracefully)
- **General nav** → use `linklists.main-menu` and `linklists.footer` (editable in Shopify admin Navigation)

### 1.5 Color + font tokens as variables
Design tokens that will map to `settings_schema.json`:

```
--brand-bg         #FFFFFF       Theme setting: color_bg
--brand-ink        #000000       Theme setting: color_ink
--brand-coral      #FF6A6A       Theme setting: color_coral
...
font-display: "Fredoka", "Baloo 2", system-ui, sans-serif
font-body:    "Nunito", -apple-system, "Segoe UI", Roboto, sans-serif
```

### 1.6 Empty states — for every section
For every section, provide a design for when:
- No image is uploaded
- No collection assigned
- No products exist
- No blog posts
- No metafields

### 1.7 Absolutely no emojis in design "default text"
If a label reads "Shop the collection 🛍️" in the mockup, specify the emoji is **decoration only**. Coder will render the emoji as CSS/SVG or omit it. Emojis in schema JSON `"default"` values silently break Shopify theme uploads.

### 1.8 Template map
List every Shopify template the design needs:

```
index              — homepage
product            — default product page
product.bundle     — alt product template for bundle products
collection         — default collection page
collection.stem    — alt for featured stem collection
page               — generic CMS page
page.our-story     — alt for Our Story
page.faq           — alt for FAQ
page.resources     — alt for Resources
blog, article, cart, search, 404 — default layouts
```

### 1.9 Accessibility + SEO baseline
- Every image has alt text guidance
- Every section has a sensible heading hierarchy (one h1 per page)
- ARIA labels for interactive elements (mega menus, drawers, tabs)
- Semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`)

### 1.10 One master spec file
Before shipping a design to claude.code, produce a single `SPEC.md` containing sections 1.1–1.9. This is the contract.

---

## Part 2: 10-Item Handoff Checklist

Paste these 10 rules into your first message to claude.code when handing over a design. Demand they confirm each before writing code.

### ✅ Checklist — Claude Code must confirm all 10 before coding

**1. Build a complete Online Store 2.0 theme structure from the start**
- All required folders (`assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/`, `templates/customers/`)
- All required files (theme.liquid, settings_schema.json, settings_data.json, en.default.json, and default templates for index/product/collection/page/cart/blog/article/search/list-collections/404/gift_card.liquid/password.liquid)
- Customer account templates (login, register, account, addresses, order, reset_password, activate_account)

**2. Use Shopify naming conventions for core sections**
- `sections/header.liquid` and `sections/footer.liquid` (exact names)
- `sections/header-group.json` and `sections/footer-group.json` (Shopify 2.0 section groups)
- `layout/theme.liquid` uses `{% sections 'header-group' %}` (plural, with an 's')
- Custom sections can be prefixed (`brand-hero.liquid`) but NOT the core ones

**3. Zero emojis in schema `"default"`, `"label"`, or `"content"` fields**
- Emojis in rendered Liquid HTML output = fine
- Emojis in schema JSON = silent rejection, templates 404
- Run this before pushing: `grep -P '[\x{1F000}-\x{1FFFF}]|[\x{2600}-\x{27BF}]' theme/sections/*.liquid` — must be empty

**4. No hardcoded URLs in navigation**
- Build `snippets/safe-link.liquid` that checks resource existence before rendering
- Use it for every nav link, footer link, CTA that points to a collection/page/blog/product
- For CTAs with user-settable URLs, fall back to `routes.root_url` or `routes.all_products_collection_url`, never hardcode

**5. Every schema setting follows Shopify rules**
- Section `"name"` ≤ 25 chars
- `{"type": "header"}` and `{"type": "paragraph"}` use `"content"` not `"label"`
- URL-type settings in template JSON are absent or valid — never empty string `""`
- `image_picker`, `collection`, `product`, `page`, `blog`, `article` types have NO `"default"`
- Block types are snake_case (`product_card`, not `product-card`)
- `range` type has `min`, `max`, `step`

**6. Every data access is guarded**
- Every image: `{% if section.settings.image != blank %}...{% else %}<placeholder>{% endif %}`
- Every metafield: `{% if product.metafields.ns.key != blank %}...{% endif %}`
- Every collection/product: check `.handle != blank` or `.products.size > 0`
- Fresh store with no data must still render every section without errors

**7. CSS scoped per section, loaded once globally**
- Shared CSS: one `assets/theme.css`, loaded ONCE in `layout/theme.liquid` via `{{ 'theme.css' | asset_url | stylesheet_tag }}`
- Per-section styles: `<style>` block inside section file, all selectors scoped `#section-name-{{ section.id }}`
- NO per-section `<link rel="stylesheet">` tags
- NO BEM double-hyphen class mismatches (pick one convention, enforce it)

**8. Native Shopify forms only — no custom POST handlers**
- Newsletter → `{% form 'customer' %}`
- Contact → `{% form 'contact' %}`
- Add to cart → `{% form 'product', product %}`
- Login → `{% form 'customer_login' %}`
- Password recovery → `{% form 'recover_customer_password' %}`
- Comments → `{% form 'new_comment', article %}`

**9. MCP server validation before shipping**
Use the Shopify MCP tools to verify the theme end-to-end, not just by reading code. Specifically:
- `shopify-dev-mcp` — validate Liquid filters and objects used are real (catches typos like `| default_errors` being wrong)
- Query the target store via MCP to confirm which collections/pages exist, then regenerate the safe-link defaults
- If the store has installed apps (Shogun, Klaviyo, Judge.me), check for layout/template overrides
- Use `shopify theme dev` locally to preview before the user uploads
- Run `shopify theme check` (via MCP or CLI) and resolve every error before handoff

**10. Ship a SETUP.md with the theme zip**
Must include:
- Exact list of collection handles, page handles, blog handles, and product handles to create
- For each Shopify page, which theme template to assign
- Menu structure (what to add to `main-menu` and `footer` menus in Shopify admin Navigation)
- Required metafields (namespace, key, type) with a link to Shopify's metafield definitions page
- Required Shopify settings to enable (customer accounts, smart "all" collection, etc.)
- A checklist so the user can go to Shopify admin and tick off each resource as they create it

---

## Part 3: First-message prompt to paste into claude.code

Copy this verbatim when starting a new Shopify theme build:

```
I'm handing off a design from claude.design to be built as a complete,
uploadable Shopify Online Store 2.0 theme. You have access to the Shopify
MCP server. Before writing any code, confirm ALL of the following:

1. You'll build a complete theme structure including layout/, config/,
   locales/, sections/, snippets/, templates/, templates/customers/, and
   all required default templates. No drop-in partials.

2. sections/header.liquid and sections/footer.liquid will use those exact
   names. header-group.json and footer-group.json will use Shopify 2.0
   section groups. theme.liquid uses {% sections 'header-group' %}.

3. Zero emojis in any schema "default", "label", or "content" field. You
   will grep-check this before handoff.

4. Every nav link, footer link, and CTA to a collection/page/blog/product
   uses a safe-link snippet that checks resource existence before rendering.
   No hardcoded URLs that could 404 on a fresh store.

5. All schema settings follow Shopify rules: names ≤25 chars, header/
   paragraph use "content" not "label", URL types absent or valid (never
   empty string), image_picker/collection/product/page/blog/article have
   NO "default", block types snake_case.

6. Every image, metafield, collection, and product access is guarded with
   != blank. Fresh stores with no data must render every section.

7. One shared CSS loaded once in theme.liquid. Per-section styles scoped
   with #section-name-{{ section.id }}. No per-section stylesheet links.

8. Shopify native form types only. {% form 'customer' %}, {% form
   'contact' %}, {% form 'product', product %}, etc.

9. You will use the Shopify MCP server to: validate Liquid filters and
   objects are real, query the target store for existing collections/
   pages/blogs, check for installed apps (Shogun, etc.) that override
   layouts, and run `shopify theme check` before delivering.

10. You will deliver a SETUP.md listing required handles, template
    assignments, menu structure, metafield definitions, and Shopify
    settings to enable.

Before writing any code, also ask me:
- What's the current state of my Shopify store? (fresh / has products)
- Am I on Shopify Plus or Basic?
- What apps are installed?
- Any pages/collections already configured?

Here's my design spec (SPEC.md from claude.design): [paste]
Here's the design source: [paste / link]
```

---

## Appendix: MCP-specific flows during development

If the Shopify MCP server is connected, claude.code should use these during the build (not just at the end):

### Before writing sections/product-main.liquid:
```
mcp: shopify-dev-mcp > liquid_object_details "product"
→ Returns every accessible property. Catches assumptions like product.rating
that doesn't exist natively.
```

### When building nav safe-link snippet:
```
mcp: shopify-admin-mcp > list_collections (on target store)
→ Returns actual collection handles. Updates the safe-link defaults and
SETUP.md automatically.
```

### Before adding a metafield reference:
```
mcp: shopify-admin-mcp > list_metafield_definitions
→ Returns defined metafields. If the reference doesn't exist, flag it
and add it to SETUP.md as required.
```

### Before final delivery:
```
mcp: shopify-cli > theme check --fail-level error
→ Static analysis. Must pass.

mcp: shopify-cli > theme push --development
→ Pushes to a dev theme, gives a preview URL. User can click through
to verify every route renders before accepting delivery.
```

### Validation gate:
Before claude.code says "done," it must run:
1. JSON validity: `find theme -name "*.json" | xargs -I {} python3 -c "import json; json.load(open('{}'))"`
2. Schema validity: parse every `{% schema %}` block as JSON
3. Emoji scan: `grep -P '[\x{1F000}-\x{1FFFF}]' theme/ -r`
4. Section reference integrity: every type in templates/*.json exists in sections/
5. Snippet reference integrity: every `{% render 'x' %}` has `snippets/x.liquid`
6. `shopify theme check` clean on error level
7. Dry-run `shopify theme push --development` and smoke-test every route
