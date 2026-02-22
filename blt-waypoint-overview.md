# BLT Waypoint Architecture

## System Overview

The BLT Waypoint is a modern Next.js dashboard application that provides an organization overview interface for OWASP BLT. The main goal of this application is to help organization admins see the overview of the repositories, contributors and issues, and manage them on one click.
It serves as a single-page application (SPA) that aggregates data from GitHub using GraphQL API, displays organization statistics, repository information, and project boards. The application prioritizes server-side rendering for performance and uses GitHub OAuth for authentication.

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client                         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    HTTPS (Secure)
                           │
┌──────────────────────────▼──────────────────────────────────┐
│        Next.js 16 Application (App Router)                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Server Components (SSR) - Pages & Layout            │   │
│  │  ├─ Dashboard (/ & /repos)                           │   │
│  │  ├─ Projects (/projects)                             │   │
│  │  ├─ Admin Panel (/admin)                             │   │
│  │  └─ Auth Pages (/auth/signin)                        │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Client Components (src/components/)         │   │
│  │  ├─ UI Components (shadcn/ui + Radix UI)             │   │
│  │  └─ Feature Components (Cards, Filters)              │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │       Authentication Layer (NextAuth.js v4)          │   │
│  │  ├─ GitHub OAuth Provider                            │   │
│  │  ├─ JWT Session Strategy                             │   │
│  │  └─ Role-based Access Control (Admin/User)           │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                   GitHub GraphQL API
                           │
        ┌──────────────────▼──────────────────┐
        │    GitHub API (api.github.com)      │
        │  - Organization data                │
        │  - Repositories                     │
        │  - Project Boards (V2)              │
        │  - Issues & Statistics              │
        └─────────────────────────────────────┘

        ┌──────────────────────────────────────┐
        │    Cloudflare Pages (Hosting)        │
        │  - Global CDN Distribution           │
        │  - Automatic Deployments             │
        │  - Zero downtime deployments         │
        └──────────────────────────────────────┘
```

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── (other routes)/          # Page routes
│
├── components/                   # React components
│   ├── ui/                      # ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── (other UI components)/
│   │
│   ├── theme-provider.tsx       # Theme provider wrapper
│   └── (feature components)/    # Page-specific components
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile device detection
│   └── use-toast.ts             # Toast notification system
│
├── lib/                          # Utilities and helpers
│   └── utils.ts                 # Common utilities (cn function, etc.)
│
└── middleware.ts (optional)     # Request middleware

public/                           # Static assets
├── images/
├── icons/
└── (other static files)/

.env.local                        # Environment variables (local)
next.config.mjs                   # Next.js configuration
tailwind.config.ts               # Tailwind CSS configuration
tsconfig.json                    # TypeScript configuration
package.json                     # Dependencies and scripts
```

## Runtime Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Radix primitives)
- NextAuth (GitHub OAuth, JWT sessions)
- GitHub GraphQL API for org data

## Entry Points

- App Router root: [src/app/layout.tsx](src/app/layout.tsx)
- Home dashboard: [src/app/page.tsx](src/app/page.tsx)
- Repositories view: [src/app/repos/page.tsx](src/app/repos/page.tsx)
- NextAuth API route: [src/app/api/auth/[...nextauth]/route.ts](src/app/api/auth/[...nextauth]/route.ts)

## Data Flow

### Server-Side Rendering

The main pages are server components that fetch org data before rendering:

1. Request hits the App Router route.
2. Page calls `getOrgOverview`, `getRepositories`, or `getProjects`.
3. Data is fetched from GitHub GraphQL (or demo data is returned).
4. HTML is streamed to the client and hydrated.

### GitHub GraphQL Client

- Queries are defined in [src/lib/queries.ts](src/lib/queries.ts).
- Requests are issued by [src/lib/github-graphql.ts](src/lib/github-graphql.ts).
- `next: { revalidate: 300 }` caches data for 5 minutes at the fetch layer.
- [src/lib/data.ts](src/lib/data.ts) composes responses and calculates org stats.

### Demo Fallback

If `GITHUB_TOKEN` is missing or a request fails, [src/lib/data.ts](src/lib/data.ts) returns demo data from [src/lib/demo-data.ts](src/lib/demo-data.ts). This keeps the UI functional for local development or preview environments.

## API Integration

### GitHub GraphQL API

The application integrates directly with GitHub's GraphQL API to fetch organization data. All API calls are made server-side for security and performance.

**Endpoint**: `https://api.github.com/graphql`

**Authentication**: Bearer token via `GITHUB_TOKEN` environment variable

### Authentication Flow

```
Client Request
  → Check GITHUB_TOKEN configured
  → Server-side GraphQL Query
  → GitHub API Response
  → Error Handling
  → Return Data to Client
  → Fallback to Demo Data if Failed
```

### Environment Configuration

Required in `.env.local`

```
GITHUB_TOKEN=your_github_personal_access_token
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=your_deployment_url_if_deployed
GITHUB_CLIENT_ID=oauth_client_id
GITHUB_CLIENT_SECRET=oauth_client_secret
```

## Development Workflow

### Local Development Setup

```bash
# Install dependencies
pnpm install

# Start development server with hot reload
pnpm dev

# The application runs on http://localhost:3000

# Run type checking
pnpm build  # Also performs TypeScript type checking

# Run ESLint
pnpm lint
```

## CI/CD Pipeline Overview

The project uses **GitHub Actions** + **Cloudflare Pages** for automated testing, building, and deployment.

```
GitHub Push Event
  ↓
GitHub Actions triggers
  ↓
Build & Test (TypeScript, ESLint)
  ↓
Deployment Decision
  ↓
[Dev/Staging] Auto-deploy to Cloudflare Pages
  ↓
[Production] Manual approval on release
  ↓
Live deployment completes
```

## Resources

- **Framework Docs**: [Next.js](https://nextjs.org/docs) | [React](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) | [shadcn/ui](https://ui.shadcn.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org) | [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps)
- **API**: [GitHub GraphQL API](https://docs.github.com/en/graphql)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) | [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- **Languages**: [TypeScript](https://www.typescriptlang.org/docs) | [ESLint](https://eslint.org/)
