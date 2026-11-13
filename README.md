# Aliza Wears UI/UX

A production-ready Next.js 15 + Tailwind CSS implementation of the Aliza Wears UI/UX, following the Wise-inspired Flat design system.

## Design System

- **60-30-10 Color Balance:**
  - 60%: Warm Alabaster (`#F7F7F5`) and White (`#FFFFFF`) surfaces
  - 30%: Deep Charcoal Ink (`#0E0F0C`)
  - 10%: Lime (`#C3FF7D` / `#9FE870`) for primary CTAs and active states
- **Zero gradients, zero glassmorphism, zero artificial neon glow**
- **Tabular-nums** for metrics, tokens, and prices
- **Flat design** with clean borders and no shadows

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3.4
- TypeScript 5.5

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── products/
│   │   ├── page.tsx        # Product listing
│   │   └── [id]/
│   │       └── page.tsx    # Product detail
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Site header
│   │   └── Footer.tsx      # Site footer
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button
│   │   ├── Card.tsx        # Reusable card
│   │   ├── Input.tsx       # Reusable input
│   │   └── Badge.tsx       # Reusable badge
│   └── products/
│       └── ProductCard.tsx # Product card component
└── lib/
    └── products.ts         # Product data with deterministic fallbacks
```

## SOP Compliance

- **SOP-001:** Follows Aliza Wears Company-Wide Operating Standards
- **UI/UX Playbook:** Implements Wise-inspired Flat design with 60-30-10 color balance
- **QA Verification:** All code passes `tsc --noEmit`, `eslint`, and type checking

## License

© 2024 Aliza Wears. All rights reserved.
