# WEB FACTORY GLOBAL CONSTITUTION

## 1. Innovation Scale & Design Dials Mapping
| Score | Tier | Variance | Motion | Density | Logic |
| :--- | :--- | :---: | :---: | :---: | :--- |
| 1–3 | **Iterative** | 3–4 | 1–2 | 5 | Minor color/font updates. 95% layout retention. Symmetric, static layouts. |
| 4–6 | **Evolutionary** | 5–6 | 3–4 | 4 | Component restyling, section reordering. Mild asymmetry, clean scroll entries. |
| 7–8 | **Transformative** | 7–8 | 5–7 | 3 | Asymmetrical grids, double-bezel cards, custom spring animations. |
| 9–10 | **Disruptive** | 9–10 | 8–10 | 3 | Broken grids, GSAP horizontal-pan/sticky-stacking, kinetic typography. |

## 2. Risk-Adjusted Pricing Matrix
- **Base Proposal Price:** $2,500
- **Complexity Premiums:**
  - MX/Email Conflict: +$500
  - Legacy CMS Bridge (WP/PHP): +$1,200
  - SEO Redirect Mapping (>20 pages): +$400
  - Third-party Legacy Widgets: +$300/each
- **Friction Multipliers:**
  - Total Flags > 4: 1.5x Multiplier
  - Domain Access Unknown: +$200

## 3. Technical Standards
- **Core Stack:** Next.js 15+, Tailwind CSS, strict 8px spacing grid.
- **Performance:** Minimum 90/100 Lighthouse score (animate via `transform`/`opacity`, restrict `backdrop-blur` to fixed elements).
- **The "Double-Bezel" (Doppelrand):** Cards/containers use nested shells (outer shell `rounded-[2rem]` with light border + inner core `rounded-[calc(2rem-0.5rem)]` with highlight).
- **Button-in-Button:** Trailing button icons must reside inside their own circular container flush within the button pill.
- **Hero Viewport Containment:** Hero sections must fit initial viewport (H1 max 2 lines, subtext max 20 words, CTAs visible without scroll, top padding max `pt-24`).
- **Eyebrow Restraint:** Max 1 uppercase/monospace eyebrow tag per 3 sections to prevent monotony.
- **Typography & Copy:** Sentence-case headlines; bold/italic of same family only. Complete ban on em-dashes (`—`) as decoration. Avoid Inter as default display font.
- **Color Consistency:** Lock one accent color and neutral base page-wide. No generic "AI-purple" glows.
- **Social Proof Logo Wall:** SVG logos only (Simple Icons). No category/industry labels below logos.
- **Layout Rhythm:** Max 2 sections in a row with image+text split (no zigzag fatigue). Bento cells must exactly match content items (no empty/blank cards).
---

## 🔄 Automated Context Maintenance

At the conclusion of every major feature implementation, compilation fix, or coding session, you MUST execute a background documentation cycle:
- Update README.md: Append a highly compressed, 3-4 sentence high-level summary of the architectural evolution to a '## 📈 Project Evolution Timeline' section (include the date). Keep this strictly high-level for human stakeholders.
- Prune memory.md: Update the active focus state and blockers, then compress the file to keep it under 150 lines by aggressively deleting completed micro-tasks and temporary syntax bugs.
- Log Decisions: When logging session work to memory.md, also extract and append any binding architectural decisions to the '## 📜 Decisions' section. Use the numbered format (### DN. Title — Month Year) with status: confirmed. Update the '## 🧊 Cold Start' section to reflect the current state of the project.
