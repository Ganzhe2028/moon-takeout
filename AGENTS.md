# AGENTS.md - Moon Takeout

> Agentic coding guide for Moon Takeout - a student group delivery mobile web app.

## PROJECT OVERVIEW

**Type**: Mobile-first web app (React/Next.js)  
**Purpose**: Aggregate student food orders to save delivery fees  
**Design**: Linear/Airbnb aesthetic - clean, minimalist, elegant  
**Status**: Greenfield - build from PRD.md specifications

## TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Package Manager | pnpm (preferred) or npm |

## COMMANDS

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript check (tsc --noEmit)

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Watch mode
pnpm test -- --grep "test name"   # Run single test by name
pnpm test path/to/file.test.ts    # Run single test file

# Formatting
pnpm format           # Prettier format all
```

## PROJECT STRUCTURE

```
moon-takeout/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home/Lobby view
│   ├── success/page.tsx    # Success & Impact page
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Badge)
│   ├── lobby/              # Lobby-specific components
│   └── success/            # Success page components
├── lib/
│   ├── utils.ts            # Utility functions (cn, generateSavings)
│   └── constants.ts        # App constants, mock data
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── public/                 # Static assets (LOGO.jpeg)
```

## CODE STYLE

### TypeScript
- **Strict mode**: Always enabled, no `any` types
- **Explicit return types**: Required for exported functions
- **Interface over type**: Prefer `interface` for object shapes
- **Naming**: PascalCase components, camelCase functions/variables, SCREAMING_SNAKE constants

### Imports Order
React/Next → external libs → internal absolute (`@/`) → relative → types

```typescript
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FoodVanCard } from './food-van-card';
import type { FoodVan } from '@/types';
```

### Components
- **Functional only**: No class components
- **Named exports**: Prefer named over default exports
- **Props interface**: Define above component, suffix with `Props`

```typescript
interface FoodVanCardProps {
  van: FoodVan;
  onJoin: (id: string) => void;
}

export function FoodVanCard({ van, onJoin }: FoodVanCardProps) {
  // ...
}
```

### Tailwind CSS
- **Design tokens**: Use Tailwind classes, avoid arbitrary values `[13px]`
- **Responsive**: Mobile-first (`md:`, `lg:` for larger screens)
- **Spacing**: Generous padding (p-6, p-8), don't clutter
- **Borders**: `rounded-xl` or `rounded-2xl`, subtle `border-gray-200`

### Error Handling
- Never ignore errors: Always handle or propagate
- User-friendly messages: Chinese + English for user-facing
- Toast notifications for user feedback

## DESIGN SYSTEM (from PRD)

### Colors
| Purpose | Class |
|---------|-------|
| Primary | `bg-indigo-600`, `text-indigo-600` |
| Success | `bg-green-600`, `text-green-500` (muted) |
| Background | `bg-white`, `bg-gray-50` |
| Border | `border-gray-200` |
| Urgent | `text-red-500` |

### Components
- Cards: `rounded-xl shadow-sm border border-gray-200 p-6`
- Buttons: Clear, elegant, sufficient padding
- Progress: Visual progress bar or avatar stack for "3/5 joined"
- Badges: Premium look (`rounded-full px-3 py-1`)
- Typography: Inter font, large hero numbers, subtle metadata

## ANTI-PATTERNS

Do NOT:
- Use `any` type or `@ts-ignore`
- Use CSS modules or styled-components (Tailwind only)
- Create class components
- Use arbitrary Tailwind values when tokens exist
- Skip error handling in async operations
- Use `var` (use `const`/`let`)
- Commit `console.log` statements (except errors)
- Use default exports for components

## TESTING

Framework: Vitest + React Testing Library

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FoodVanCard } from './food-van-card';

describe('FoodVanCard', () => {
  it('calls onJoin when button clicked', async () => {
    const onJoin = vi.fn();
    render(<FoodVanCard van={mockVan} onJoin={onJoin} />);
    await userEvent.click(screen.getByRole('button', { name: /join/i }));
    expect(onJoin).toHaveBeenCalledWith(mockVan.id);
  });
});
```

## KEY FEATURES

1. **Lobby View** (`/`): List of "Food Vans" with join functionality
2. **Success View** (`/success`): Post-payment impact visualization
3. **generateSavings()**: Mock function per PRD specs

## NOTES

- Mobile-first: Design for 375px viewport, scale up
- Bilingual: Support Chinese/English strings (Chinese primary)
- Demo mode: No backend, use mock data and localStorage
- Animations: Use Framer Motion for transitions and micro-interactions

Refer to `PRD.md` for complete requirements and copy/UI strings.
