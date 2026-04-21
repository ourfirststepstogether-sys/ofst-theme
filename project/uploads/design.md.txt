
# Design System – Our First Steps

## 1. Visual Theme & Atmosphere
Our First Steps embodies a **warm, humble, and joyfully human** aesthetic designed for parents navigating the beautiful mess of early childhood. The visual language feels like sitting on the playground with another tired but hopeful parent — honest, approachable, and full of real-life energy. It combines soft earthy neutrals with fresh teal, playful coral, and warm yellow accents, creating an atmosphere of trust, encouragement, and shared discovery.

This system prioritizes real moments over perfection: candid parent-child interactions, generous breathing room, soft natural lighting, and gentle elevation that never feels cold or corporate.

**Key Characteristics:**
- Warm, human, and parent-first — “We’re figuring this out together”
- Soft earthy base balanced with vibrant yet gentle logo colors
- Generous whitespace and emotional breathing room
- Focus on real photography and “messy joy” moments
- Approachable typography that feels friendly on mobile
- Intuitive navigation that supports overwhelmed parents
- Image-forward storytelling showing real connection and play
- Premium-yet-relatable feel for families, not luxury minimalism

## 2. Color Palette & Roles

**Logo Colors (Primary Source)**
- **Light Teal** (`#7EC8D8`): Primary brand color — logo, trust, freshness, primary buttons
- **Coral/Red** (`#FF6A6A`): Energetic CTA accent — joy, highlights, calls-to-action
- **Warm Yellow** (`#FFCC5C`): Playful secondary accent — fun details, subtle energy

**Core Palette**
- **Background / Base**: `#E4DDD3` — Main page backgrounds, cards, soft sections, packaging
- **Text / Headers / Bold**: `#264653` — Primary text, headings, strong contrast, dark panels
- **Primary / Logo**: `#7EC8D8` — Buttons, links, navigation highlights, icons
- **CTA / Energetic Accent**: `#FF6A6A` — Primary call-to-action buttons, highlights, fun details
- **Secondary Accent**: `#FFCC5C` — Playful highlights, secondary icons, warm touches

**Neutral Scale**
- **Soft Neutral Text**: `#264653` (main) with `#56524E`-style mid-tone support where needed
- **Light Warm Gray**: Subtle dividers and secondary text (use `#A8A29F` sparingly)
- **Near White / Surface**: `#F5F5F4` or `#FFFFFF` for cards and clean areas
- **Dark Panels**: `#264653` for high-contrast sections (white text on top)

**Visual Note:**  
Use `#E4DDD3` as the dominant soft, calming background. `#7EC8D8` brings fresh trust directly from the logo. `#FF6A6A` adds joyful energy without overwhelming. `#FFCC5C` brings gentle warmth. All combinations must maintain **WCAG AA** (minimum 4.5:1) contrast ratios. Prioritize readability for one-handed scrolling parents.

## 3. Typography Rules
**Primary Font:** Inter var (variable font with 100–900 weight range)  
**Fallback Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Hierarchy

| Role              | Size (Desktop / Mobile) | Weight | Line Height | Notes |
|-------------------|-------------------------|--------|-------------|-------|
| Display / Hero    | 48px / 36px            | 700    | 1.1         | Big, warm welcome messages |
| Heading 1         | 32px / 28px            | 600    | 1.2         | Section titles |
| Heading 2         | 24px / 22px            | 600    | 1.3         | Card & subsection titles |
| Body Regular      | 16px / 17px            | 400    | 1.65        | Default readable text |
| Body Small        | 14px                   | 500    | 1.5         | Captions, metadata |
| Button Text       | 16px                   | 500–600| 1.4         | Clear and bold |
| Label / Form      | 16px                   | 600    | 1.4         | Form elements |

**Principles:**
- Warm and readable first — generous line height for tired eyes
- Hierarchy through **bold weight** + size (not extreme size jumps)
- Body text stays friendly and scannable on mobile
- Minimum 16px for body and interactive text where possible
- Always speak in a humble, fellow-parent voice

## 4. Component Stylings

### Buttons
**Primary Button (Large CTA)**
- Background: `#7EC8D8`
- Text Color: `#FFFFFF`
- Font Size: 16px, Weight: 600
- Padding: 12px 32px
- Border Radius: 8px (or 9999px for pill option)
- Min Height: 48px
- Hover: Brightness increase + slight scale (1.02)
- Active: Deeper teal shade

**Secondary / Outline Button**
- Background: transparent
- Text Color: `#264653`
- Border: 2px solid `#264653` or `#FF6A6A`
- Hover: Background `#E4DDD3` or light fill

**Accent / Fun Button**
- Background: `#FF6A6A`
- Text Color: `#FFFFFF`
- Used for high-energy CTAs and highlights

**Ghost / Minimal**
- Transparent with `#7EC8D8` or `#FF6A6A` text/icon
- Hover: Soft background fill

All buttons maintain **minimum 44px** touch targets with clear focus states.

### Cards & Containers
**Product / Content Card**
- Background: `#FFFFFF` or `#E4DDD3`
- Border Radius: 12px
- Subtle shadow: soft elevation (not harsh)
- Padding: 16–24px content area
- Hover: Gentle lift + brighter accent

**Feature Card**
- Soft background with warm photo pairing

### Navigation
**Header Navigation**
- Background: `#E4DDD3` or light with `#264653` text (sticky)
- Logo on left, mobile hamburger friendly
- Active/Hover: `#7EC8D8` or `#FF6A6A` accent

**Dark Mode Panels** (if used): `#264653` background with white text

### Other Components
- **Inputs**: Clean, bordered with focus in `#7EC8D8`
- **Badges**: Soft rounded with `#FFCC5C` or `#FF6A6A` for playful highlights
- **Icons**: Simple 2px stroke, rounded 6–8px, colored in `#7EC8D8` (primary) and `#FF6A6A` (accent)

## 5. Layout Principles
**Base Unit:** 8px (flexible with 4px micro-adjustments)  
**Container Max Width:** 1280px (centered, with generous margins)  
**Section Padding:** 64–96px desktop / 32–48px mobile

**Whitespace Philosophy:** Generous breathing room so parents can breathe and focus on the real moments — never cramped.

**Border Radius Scale:**
- 0–4px: Minimal inputs/forms
- 8px: Buttons
- 12px: Cards and containers
- 9999px: Fully rounded playful elements

## 6. Depth & Elevation
Use **soft, natural shadows** for gentle depth:
- Subtle cards: soft rgba shadow with low opacity
- Hover states: light lift
- Avoid heavy or dramatic shadows — keep it warm and approachable

## 7. Do's and Don'ts
**Do**
- Speak like a fellow parent: humble, honest, encouraging
- Use logo colors (`#7EC8D8`, `#FF6A6A`, `#FFCC5C`) consistently
- Pair real candid photography with soft backgrounds
- Maintain excellent mobile readability (one-handed scrolling)
- End sections with gentle, hopeful CTAs
- Prioritize accessibility and warm contrast

**Don't**
- Sound corporate, perfect, or salesy
- Use harsh minimalism or cold tones
- Overuse filters or posed stock photos
- Stretch or recolor the logo
- Create low-contrast combinations

## 8. Responsive Behavior
Mobile-first approach with large touch targets (44px+).  
Simplify layouts on small screens while keeping warmth and joy intact. Reduce padding gracefully but maintain generous whitespace.

## 9. Voice & Tone + Accessibility
- **Voice:** “Hey fellow warrior, I tried this so you don’t have to.”  
  Taglines: “We’re taking these first steps together — one real moment at a time.”
- **Accessibility:** WCAG AA contrast, visible focus states (using `#7EC8D8` or `#FF6A6A`), alt text on all images, 44px+ touch targets.


