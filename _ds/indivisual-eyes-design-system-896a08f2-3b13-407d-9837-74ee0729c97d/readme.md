# IndiVisual Eyes — Design System

An independent optical boutique at 1200 K Street, downtown Sacramento. Owner-operated, with an on-site lab; the frame wall is Prada, Gucci, Burberry, Louis Vuitton. The positioning in the source material is "quiet luxury, locally owned — editorial restraint, never clinical," for people who treat frames as wardrobe, not medical equipment. The site has one job: book an appointment. Everything else supports that.

**Brand line:** *To See and Be Seen.*

## Sources

| Source | Path | Notes |
| --- | --- | --- |
| Brand & Interface System v1.0 (13pp PDF) | `uploads/indivisualeyes style guide.pdf` | The ground truth for every value in this system. Fully outlined vector — no extractable text — so it was read by rendering each page. |
| Wordmark | `uploads/IndiVisual-Eyes.png` | 417×100 transparent PNG; copied to `assets/logo-indivisual-eyes.png`. |

No codebase, Figma file, or live site was provided. One product is documented — the marketing + booking website — so there is one UI kit.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `layout.css`, `motion.css`, `fonts.css`.
- `assets/` — wordmark, cropped eye mark, the striped placeholder texture, and the three webfonts (woff2, latin).
- `guidelines/` — 17 specimen cards (Colors, Type, Spacing, Brand).
- `components/` — `core/`, `content/`, `navigation/`; one card HTML per directory.
- `ui_kits/website/` — click-through recreation of the site. See its own README.
- `SKILL.md` — Agent Skills wrapper.

## Components

Built exactly to the inventory the style guide defines — buttons, form controls, mono labels, frame cards, the ink feature card, image placeholders, header and footer. Nothing was added beyond that.

**core/** — `Button`, `Field`, `Input`, `Select`, `Textarea`, `Eyebrow`
**content/** — `FrameCard`, `FeatureCard`, `ImagePlaceholder`
**navigation/** — `Logo`, `SiteHeader`, `SiteFooter`

Intentional additions: `Field` (label + error wrapper — the guide specifies both but draws them as part of the input block) and `Eyebrow` (the mono caps label appears on nearly every page of the guide but is never named).

## Content fundamentals

Plain, concrete, first-person-plural. The shop speaks as "we," the reader as "you," and real people get named.

- **Say:** "Frames adjusted by hand, lenses cut in our lab." · "Come in and try them on." · "Curtis has been fitting frames on K Street for years."
- **Don't say:** "Your premier destination for eyewear excellence." · "Unlock your vision potential." · Anything a chain optical store could also say.
- **Rules:** short sentences; concrete nouns; name the person, name the brand, name the street; no exclamation marks.
- **Casing:** sentence case everywhere, including buttons ("Book an appointment", never "BOOK NOW"). Uppercase is reserved for 11px mono labels — section numbers, hours, frame brands, image-slot captions.
- **Numbers and specs** are written out as the trade writes them: `Acetate · 52–18–140`, `MON–FRI 10:00–18:00`, `(916) 444-3012`.
- **No emoji.** None appear anywhere in the source, and none belong here.
- **Vibe:** an editorial shop notice. Restrained, factual, a little proud of the lab.

## Visual foundations

**Colour.** Warm White `#FAF8F4` is the default ground; Paper `#FFFFFF` is for surfaces that sit on it (cards, form panels). Ink `#17150F` — warm black, not pure — carries all headings and body copy, and inverts to full ink sections (hero, feature card, footer). Amber `#FFB000` is the accent and is held to roughly 5% of any screen: one primary button per view, focus rings, the active nav underline, the amber rule. Amber never sets text on light grounds — `#8A5A00` (Amber Text) does. Signage Blue `#2E5C86`, taken from the K Street sign, is secondary and reserved for wayfinding and quiet backgrounds. Neutrals run Sand `#F0ECE4` (sunken fields, placeholder ground), Line `#E0DBD1` (every hairline border), Mute `#8A8377` (mono labels only, 11–12px), Slate `#55504A` (secondary copy). Contrast floor is 4.5:1 for body copy.

**Type.** Three faces. Instrument Serif for display and headings — regular and italic only, tight leading (1.02 at display), −0.02em tracking at large sizes. Archivo for interface and body at 400/500/600, nothing heavier. IBM Plex Mono for eyebrows, labels, frame specs and hours: uppercase, 11px, 0.14em tracking. Scale: display 72–88 · h2 42 · h3 22/600 · body 16/1.65 · small 14 · label 11 mono.

**Spacing and layout.** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 120. Section rhythm is 88–120px desktop, 56px mobile. 12-column grid, 1140px max, 32px gutters; collapses to 6 columns at 900px and 1 at 640px. Fixed elements are limited to the header; nothing else pins.

**Edges, borders, shadows.** 2px radius on controls, 0 on cards and images. Hairline 1px Line borders define every surface. **No drop shadows anywhere** — depth comes from ground changes (Warm White → Paper → Ink), not elevation. Focus is an amber inset ring inside the ink border; the primary button's focus adds a 2px ink outline offset 2px.

**Backgrounds and texture.** Flat colour, full-bleed ink bands for hero and footer. The one texture in the system is a 135° repeating stripe in Sand over Warm White (and Ink over a lighter ink) used exclusively as an image placeholder — see `assets/texture-diagonal-sand.jpg` and the `--placeholder-stripes` token. No gradients, no blur, no glass, no transparency beyond the 28% warm-white hairline used on ink grounds.

**Imagery.** No stock. Everything shot in the shop with real customers and real frames: warm daylight, shallow depth, no retouched studio gloss. Warm, slightly desaturated, never cool or clinical. Fixed crops — frames 4:3 straight on over a plain sand ground, portraits and place shots 3:4, hero 16:6. Until photography exists, every slot is a striped placeholder captioned with exactly what it needs.

**Motion, hover, press.** The guide specifies none — what is here is inferred and deliberately minimal: 120–180ms colour transitions, no movement, no bounce, no scroll animation. Hover darkens amber to `#E8A006`, fills secondary buttons with Sand (or 8% warm white on ink), and swaps a text link's underline and colour to Ink. Press states are not documented; do not shrink or translate — keep the hover shade. Disabled is Line grey on Line grey with Mute text.

**Cards.** Square corners, 1px Line border, Paper ground, 24–32px padding, no shadow. The frame card is image slot → mono brand → 22px/600 model → 14px slate spec → hairline rule → amber-text link. The feature card is its inverse: ink ground, amber mono kicker, serif headline, one amber button.

## Iconography

The source contains **no icon set** — no icon font, no SVG sprite, no PNG glyphs, no emoji, and no unicode characters used as icons. Navigation, buttons, cards, forms, header and footer are all typographic. The only pictorial element in the entire system is the eye inside the wordmark.

If a build genuinely needs UI glyphs (a select chevron, a close control), use **Lucide** at 1.5px stroke via CDN — `https://unpkg.com/lucide-static` — in Ink or Slate at 20px, and treat it as a substitution to be confirmed, not a documented part of the brand. Do not draw new marks.

## Logo

`assets/logo-indivisual-eyes.png` is the supplied wordmark (transparent, works on both Warm White and Ink; the guide prefers the reverse treatment for hero and footer). `assets/logo-eye-mark.png` is a crop of the eye glyph from that same file, for use below the minimum wordmark size — it is a crop of the provided artwork, not a redraw. Clear space equals the height of the eye icon on all four sides; minimum 160px on screen, 1.25in in print. Never recolor, outline, shadow, stretch, or set the mark over a busy photograph.

## Known substitutions

- **Fonts.** No font binaries were supplied. Instrument Serif, Archivo and IBM Plex Mono are named in the guide and were downloaded from Google Fonts (latin subset, woff2) into `assets/fonts/`. Replace with licensed originals if the shop has them.
- **Error red.** The guide shows an error border and message but does not print a hex. `--error: #A6271C` is sampled by eye from the rendered page and should be confirmed.
- **Motion.** Inferred, as noted above.
