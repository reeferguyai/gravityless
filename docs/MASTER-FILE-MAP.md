# Reeferdude.com master file map

**Purpose:** Consolidated planning inventory based on the user-provided project export.  
**Status:** Planning reference only; this list does not assert that every file exists in this repository.  
**Merge rule:** Preserve existing implementations and inspect them before moving, replacing, or consolidating overlapping files.

## Current repository snapshot

At the time this document was added, the repository had one tracked file: `README.md`. The large application tree below came from supplied planning material and has not been generated here.

## Proposed project roots and shared files

```text
reeferdude/
├── .gitignore
├── .platform-deps
├── AGENTS.md
├── README.md
├── image-manifest.md
├── index.html
├── package.json
├── package-lock.json
├── requirements.txt
├── tailwind.config.cjs
├── vite.config.js
├── app/
├── public/
├── scripts/
└── src/
```

## Proposed public assets and automation

```text
public/
├── .well-known/security.txt
├── AEO.md
├── AEO.txt
├── BingSiteAuth.xml
├── browserconfig.xml
├── favicon.svg
├── google-site-verification.html
├── humans.txt
├── icon-maskable.svg
├── llms.txt
├── manifest.json
├── manifest.webmanifest
├── META.md
├── robots.txt
├── script.js
├── security.txt
├── SEO.md
├── SEO.txt
├── sitemap.xml
├── style.css
└── sw.js

scripts/
├── gen-home-ld.mjs
├── gen-nav.mjs
├── gen-sitemap.mjs
├── prerender.mjs
└── validate-ld.mjs
```

## Proposed application source layout

```text
src/
├── components/
├── data/
├── lib/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
```

The supplied component inventory includes reusable areas for age gate, chat, delivery, layout, grow, studio, shop, product cards, forms, voice, notifications, and spatial visualization. The supplied data/library inventory includes navigation, products, strains, legal content, SEO/structured data, consent, speech, persistence, and product/site metadata. The proposed page inventory spans home, education, grow tools, studio, shopping, account, creator/community, support, legal/compliance, accessibility, and status/error pages.

## Route and page planning groups

Rather than treating every proposed page name as a separate implementation requirement, group routes into these domains and create detail pages only where there is a real user need:

- Portal and account.
- Shop, product detail, cart, checkout, order tracking, shipping, and returns.
- AI/budtender and educational content.
- Grow education, planning, and optional telemetry.
- Design studio, saved designs, previews, and exports.
- Community, creators, learning, and resources.
- Help, privacy, legal, age, regional restrictions, accessibility, and system status.

The source export also listed a large set of individual `.jsx` page names and matching `.html` names. Those names are intentionally not duplicated here as if they were implemented files; use the original supplied export when exact route-by-route archival detail is needed.

## Duplicate and ownership checks before implementation

| Overlap | Decision to make |
|---|---|
| `manifest.json` / `manifest.webmanifest` | Select one canonical manifest or generate one from a source. |
| `security.txt` / `.well-known/security.txt` | Keep the canonical well-known location and ensure any duplicate agrees. |
| `SEO.md` / `SEO.txt`, `AEO.md` / `AEO.txt` | Decide whether human documentation and machine-readable directives have distinct roles. |
| `voice.js` / `speech.js` | Define recognition vs. synthesis responsibilities and avoid duplicate browser listeners. |
| `products.js` / `catalog.json` | Establish one product source of truth. |
| `strains.js` / `strainnames.json` | Establish one data source and validate factual claims. |
| `Forms.jsx` / `forms.jsx` | Resolve case-sensitive naming and component/page responsibilities. |
| `Layout.jsx` / `SitePage.jsx` | Define global shell vs. route rendering ownership. |
| `seo.js` / `pageLd.js` / `productLd.js` | Coordinate metadata and structured data generation. |
| `style.css` / `index.css` | Establish global CSS ownership. |
| `script.js` / React components | Avoid parallel imperative and React implementations of the same UI. |
| `requirements.txt` / `package.json` | Document Python and Node dependencies separately. |

## Completion criteria

A merged implementation should have one authoritative entry point, router, design system, state architecture, SEO/structured-data pipeline, product source, strain source, speech system, and PWA strategy. Remove duplicate code only after checking for unique behavior and tests.
