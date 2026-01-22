# AGENTS.md - Moon Takeout

**Generated:** 2026-01-22
**Updated:** 2026-01-22
**Commit:** bfef626
**Branch:** main

> Student group delivery mobile web app. Aggregate orders to save delivery fees.

## OVERVIEW

Mobile-first Next.js 16 demo app with Lobby (join group orders) and Success (impact visualization) views. React 19, TypeScript strict, Tailwind CSS, Framer Motion animations.

## STRUCTURE

```
moon-takeout/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Inter font, zh-CN)
│   ├── page.tsx            # Home - toggles Lobby/Success views
│   └── globals.css         # Tailwind base + custom styles
├── components/
│   ├── ui/                 # Primitives: Button, Card, Badge, Progress
│   ├── lobby/              # Lobby view components
│   └── success/            # Success page components
├── lib/
│   ├── utils.ts            # cn(), generateSavings(), formatCurrency()
│   └── constants.ts        # MOCK_FOOD_VANS, TABS
├── types/                  # FoodVan, TabFilter interfaces
├── public/                 # Static assets
│   └── LOGO.jpeg           # App logo
├── PRD.md                  # Product requirements (source of truth)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new route | `app/` | Currently no /success route (views toggled in page.tsx) |
| Add UI primitive | `components/ui/` | Button, Card, Badge, Progress available |
| Add feature component | `components/{feature}/` | Use index.tsx as barrel export |
| Mock data | `lib/constants.ts` | MOCK_FOOD_VANS array |
| Types | `types/index.ts` | FoodVan, TabFilter |
| Utility functions | `lib/utils.ts` | cn, generateSavings, formatCurrency |

## COMMANDS

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint (next/core-web-vitals)
pnpm type-check   # tsc --noEmit
```

## TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.4 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Utils | clsx + tailwind-merge |

## CODE STYLE

### TypeScript
- Strict mode enabled, no `any`
- Explicit return types on exports
- Interface over type for objects
- PascalCase components, camelCase functions, SCREAMING_SNAKE constants

### Imports Order
React/Next → external libs → `@/` internal → relative → types

### Components
- Functional only, named exports
- Props interface above component, suffix `Props`
- Barrel exports via `index.tsx`

### Tailwind
- Use tokens, avoid `[arbitrary]` values
- Mobile-first: no prefix = mobile, `md:` `lg:` for larger
- Generous spacing: `p-6`, `p-8`
- Borders: `rounded-xl`, `border-gray-200`

## DESIGN SYSTEM

| Purpose | Class |
|---------|-------|
| Primary | `bg-indigo-600`, `text-indigo-600` |
| Success | `bg-green-600`, `text-green-500` |
| Background | `bg-white`, `bg-gray-50` |
| Border | `border-gray-200` |
| Urgent | `text-red-500` |

Cards: `rounded-xl shadow-sm border border-gray-200 p-6`  
Badges: `rounded-full px-3 py-1`  
Typography: Inter font, large hero numbers

## ANTI-PATTERNS

Do NOT:
- Use `any`, `@ts-ignore`, `@ts-expect-error`
- Use CSS modules or styled-components
- Use class components
- Use `var` (use `const`/`let`)
- Commit `console.log` (except `console.error`)
- Use default exports for components
- Use arbitrary Tailwind values when tokens exist
- Skip error handling in async operations

## KNOWN ISSUES (Fix These)

| Issue | Location | Fix |
|-------|----------|-----|
| None | - | - |

## MISSING (Documented but not implemented)

| Item | Status |
|------|--------|
| `hooks/` directory | Not created |
| `app/success/page.tsx` route | Views toggled in page.tsx instead |
| Vitest + Testing Library | Not installed |
| Prettier | Not installed |
| `pnpm test` script | Not available |
| `pnpm format` script | Not available |
| CI/CD pipeline | None configured |

## KEY FEATURES

1. **Lobby View** (`/`): List of "Food Vans" with join functionality
2. **Success View**: Post-payment impact visualization (toggled, not routed)
3. **generateSavings()**: Mock savings per PRD specs

## NOTES

- **Demo mode**: No backend, mock data + localStorage
- **Bilingual**: Chinese primary, English secondary
- **Mobile-first**: Design for 375px, scale up
- **View toggling**: Success view toggled in page.tsx, not separate route
- Refer to `PRD.md` for complete requirements and copy strings
