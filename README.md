# Personal Portfolio Project

This is a premium, scalable, and production-ready portfolio project built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## Tech Stack

- **Core**: React 19 (JavaScript), Vite (bundler & dev server)
- **Styling**: Tailwind CSS v4, Framer Motion (animations)
- **Forms & Validation**: React Hook Form, Zod
- **Navigation**: React Scroll, Lucide React (icons)
- **Tooling**: ESLint, Prettier

## Folder Structure

```text
portfolio/
├── api/                  # API routes (deployment functions)
├── public/               # Public assets (resume, favicon, etc.)
└── src/
    ├── assets/           # Local assets (images, icons, fonts)
    ├── components/       # UI Components
    │   ├── layout/       # Global shell (Navbar, Sidebar)
    │   ├── common/       # Shared reusable UI atoms
    │   ├── skills/       # Skills section specific components
    │   ├── projects/     # Projects section specific components
    │   └── contact/      # Contact section specific components
    ├── sections/         # Top-level viewport sections (Hero, Skills, etc.)
    ├── data/             # Static configurations and portfolio data
    ├── hooks/            # Custom React hooks
    ├── utils/            # Utility and helper functions
    ├── App.jsx           # Application entry template
    ├── main.jsx          # DOM entry point
    └── index.css         # Tailwind directives and design tokens
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Install all dependencies:
   ```bash
   npm install
   ```

2. Create a local environment variables file:
   ```bash
   cp .env.example .env
   ```

### Development Scripts

- **Start Dev Server**: `npm run dev`
- **Build Production Bundle**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint Codebase**: `npm run lint`

## Path Aliases

This project uses path aliases prefixed with `@/` mapping to the `src/` directory to avoid deeply nested relative imports (e.g. `../../../../`).

- E.g. `import Navbar from '@/components/layout/Navbar'`

## Tailwind CSS v4 Configuration

Tailwind v4 is fully integrated. Custom utility setups, font mappings, and core theme overrides are declared in [index.css](file:///d:/web dev/tarun-portfolio/src/index.css) inside `@theme` and `@layer base` directives.
