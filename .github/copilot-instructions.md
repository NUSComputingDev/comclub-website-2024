# Copilot Instructions for comclub-website-2026

## Project Overview

**comclub-website-2026** is the official website for NUS Computing Club, built with React 18 + Vite + TypeScript, styled with Tailwind CSS. It serves as a hub for announcements, events, member roles, and resources.

## Architecture & Key Patterns

### Tech Stack
- **Framework**: React 18 with React Router DOM v6 for page routing
- **Build Tool**: Vite with hot module reload (HMR)
- **Styling**: Tailwind CSS via PostCSS pipeline
- **Component Library**: Custom `Card` components (inspired by shadcn/ui) using `forwardRef` pattern with `cn()` utility
- **UI Libraries**: @headlessui/react, @heroicons/react, Framer Motion, react-hot-toast
- **Type Safety**: TypeScript throughout (tsx/ts files)

### File Structure & Patterns

```
src/
├── pages/          # Route page components (each in subdirectory with index.tsx)
│   ├── about/      # RoleCard.tsx + roles.json (member directory)
│   ├── elections/  # Candidates, Process, Timeline, Results, FAQs
│   ├── events/     # Article.tsx loads from articles.json with dynamic routing
│   ├── home/       # Carousel, AnnouncementsCard from announcements.json
│   └── ...
├── layout/         # NavigationBar, Footer, NavigationMenu, WindowCard
├── components/     # Reusable: Card.tsx (compound component), Table.tsx
└── hooks/          # useOutsideClick for menu close-on-external-click
```

### Component Conventions

1. **Page Components**: Each page is a directory with `index.tsx` + `index.css`. Exported via `src/pages/index.ts` barrel export.
   - Example: `src/pages/about/index.tsx` exported as `About`

2. **Compound Components**: Use React `forwardRef` with `className` merging via `cn()` utility (tailwind-merge + clsx)
   ```tsx
   const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
     ({ className, ...props }, ref) => (
       <div ref={ref} className={cn('rounded-lg border...', className)} {...props} />
     )
   );
   ```

3. **TypeScript Interfaces**: Define props interfaces for components (see RoleCard.tsx pattern)

### Data Patterns

- **JSON as Data Source**: Articles, announcements, and roles stored as JSON files co-located with consuming components:
  - `src/pages/events/articles.json` → imported with `import articles from './articles.json' with {type: 'json'}`
  - `src/pages/home/announcements.json`
  - `src/pages/about/roles.json` (grouped by department/committee)

- **Dynamic Routing**: Uses `useParams()` to load specific articles/candidates from JSON (e.g., `/events/:articleLink`)

### Custom Utilities

- **`cn()` in `lib/utils.ts`**: Merges Tailwind classes safely (tailwind-merge prevents conflicts)
- **`useOutsideClick` hook**: Custom hook for dropdown/menu close behavior on external clicks

### Tailwind Customization

**Key custom colors and utilities** in `tailwind.config.js`:
- `primary: '#365486'` - Primary blue
- `outline: '#333333'` - Text/border color
- `highlight: '#61afef'` - Accent cyan
- Custom animation: `shimmer` (2s linear infinite)
- Custom timing: `out-flex` cubic-bezier easing

## Development Workflow

### Setup & Running

```bash
npm install              # Install dependencies
npm run dev              # Start Vite dev server (HMR enabled)
npm run build            # Build for production (output: dist/)
npm run preview          # Preview production build locally
npm run lint             # Lint all HTML, JS, JSX, TS, TSX
```

### Code Quality

- **Linting**: ESLint strict mode with zero warnings allowed (`--max-warnings 0`)
- **Parser**: TypeScript for TSX, HTML for template files
- **Rules**: React hooks, React refresh, React best practices enforced
- **No auto-fix**: Lint errors must be manually resolved

### Git Conventions

- Current branch: `updatememberinfo` (actively updating member/role data)
- Default branch: `main`
- Pull request template: See `docs/pull_request_template.md`

## Critical Integration Points

### Routing & Navigation

- **App Router** (`src/App.jsx`): Centralized route definition using React Router v6
- **NavigationMenu** (`src/layout/NavigationMenu.tsx`): Outside-click dismissal via custom hook
- **URL Structure**: Clean URLs with dynamic segments (e.g., `/events/:articleLink`)
- **Auto-scroll**: `ScrollToTop` component scrolls page to top on route change

### Content Updates

- **Member roles**: Update `src/pages/about/roles.json` - structured by department/committee
- **Articles/Events**: Add entries to `src/pages/events/articles.json` → auto-renders with dynamic routing
- **Announcements**: Update `src/pages/home/announcements.json` → displayed in Carousel component

### Styling Approach

- **Tailwind-first**: Minimize CSS files (only layout/component-specific CSS for complex layouts)
- **CSS modules adjacent**: Component CSS files co-located (e.g., `Card.tsx` + `Card.css` pattern not used; prefer inline Tailwind)
- **Existing CSS files**: Keep for layout components (`NavigationBar.css`, `Footer.css`) but prefer Tailwind for new work

## Common Tasks

### Adding a New Page

1. Create `src/pages/mypage/index.tsx` + `index.css`
2. Export in `src/pages/index.ts`: `export { default as MyPage } from './mypage'`
3. Add route in `src/App.jsx`: `<Route path='/mypage' element={<MyPage />} />`

### Adding Articles/Events

1. Add entry to `src/pages/events/articles.json` with structure: `{ title, body, link, imgSrc }`
2. Route auto-handles via `useParams()` in Article.tsx
3. No additional code needed

### Styling New Components

- Use Tailwind classes in JSX (className attribute)
- Use `cn()` utility for conditional/merged classes
- Avoid new CSS files unless layout is complex (nested grids, etc.)

## Important Notes

- **No tests**: Project has no test files (eslint only)
- **Vite timestamp artifacts**: `vite.config.js.timestamp-*` files are auto-generated; ignore in edits
- **TypeScript strict**: Use proper typing throughout; avoid `any`
- **React 18 patterns**: Use hooks exclusively; no class components
- **Accessibility**: Leverage @headlessui/react for ARIA-compliant components

