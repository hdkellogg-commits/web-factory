# v1_conservative.md: Structural Blueprint

## 1. Goal Hierarchy (@architect)
- **North Star Metric**: Tool Discovery & Brand Education.
- **Secondary Goal**: Frictionless Navigation to AI Toolsets.
- **Squint Test Priority**: 
  1. Primary Headline ("The Future of AI Tools")
  2. "Get Started" CTA (High Contrast)
  3. Feature Grid (Tool Categories)

## 2. Semantic HTML & SEO (@architect)
### HTML5 Landmarks
- `<header>`: Containing sticky `Nav` and `Logo`.
- `<nav>`: Primary navigation links (Home, Tools, Pricing, About).
- `<main>`: The unique primary content (Hero, Feature Grid, Testimonials).
- `<section>`: Thematic groupings with `<h2>`.
- `<footer>`: Local business info, copyright, and social links.

### SEO Meta & Schema
- **Title**: Somerville Lumber | Premier AI Tool Hub for Modern Creators
- **Meta Description**: Discover the future of AI tools at Somerville Lumber. Rebranded for the next generation of AI enthusiasts.
- **JSON-LD**:
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Somerville Lumber AI Hub",
  "applicationCategory": "BusinessApplication",
  "description": "A curated hub for modern AI tools and resources.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

## 3. Layout Rhythm & Spacing (@architect)
### Grid System
- **Desktop**: 12 Columns | 24px Gutter | 80px Margin.
- **Tablet**: 8 Columns | 16px Gutter | 40px Margin.
- **Mobile**: 4 Columns | 16px Gutter | 20px Margin.
- **Max-Width**: 1440px.

### 8pt Spacing Protocol
- **Baseline**: 16px.
- **Intra-group (H + P)**: 16px.
- **Inter-group (Block1 + Block2)**: 32px (2x baseline).
- **Section Padding**: 96px (6x baseline) top/bottom.
- **Border Radius**: 12px (for consistent visual rhyme).

## 4. Interaction Design
- **Buttons**: `rounded-xl` with 2px solid border on hover.
- **Cards**: Subtle `shadow-sm` elevating to `shadow-md` on hover.
- **Navigation**: Underline transition on link hover.
