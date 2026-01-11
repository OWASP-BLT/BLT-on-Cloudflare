![][image1]

**Ananya**  
GitHub: [/ananya-09](https://github.com/ananya-09)  
LinkedIn: [/ananya-mmmut](https://www.linkedin.com/in/ananya-mmmut)  
Email: ananyar0912@gmail

# [BLT-ON-CLOUDFLARE](https://github.com/OWASP-BLT/BLT-on-Cloudflare)

## **11th January 2026**

# **IMPORTANT DETAILS**

Organization: OWASP-BLT

Core Repository(migrations done from): [OWASP-BLT/BLT](https://github.com/OWASP-BLT/BLT)

Cloudflare Repository(): [OWASP-BLT/BLT-on-Cloudflare](https://github.com/OWASP-BLT/BLT-on-Cloudflare)

Working Repository: [ananya-09/BLT-on-Cloudflare](https://github.com/ananya-09/BLT-on-Cloudflare)

Working Branch: [workingOnReact/TS/NXT-version](https://github.com/ananya-09/BLT-on-Cloudflare/tree/workingOnReact/TS/NXT-version)

---

# **OVERVIEW**

Detailed Technology Stack (Comparison & Migration)

| Module | Core BLT | BLT-on-Cloudflare | Why this change? |
| :---- | :---- | :---- | :---- |
| **Language** | Python | TypeScript (TSX) | Ensures strict "data contracts" between the API and the UI, reducing runtime crashes. |
| **Framework** | Django (Monolithic) | Next.js (App Router) | Provides SEO-friendly Static Generation (SSG) and instant page transitions. |
| **Hosting** | VPS / Docker | Cloudflare Pages | Zero-latency global delivery via Cloudflare’s Edge network; infinite scalability. |
| **UI/Styling** | Tailwind CSS | Tailwind CSS | Drastically reduces CSS bundle size by stripping unused styles at build time. |
| **API Layer** | Django Templates | Django REST Framework (DRF) | Converts Python logic into JSON, making the data accessible to any frontend. |
| **Data Fetching** | Server-Side Querying | TanStack Query (React Query) | Handles caching, loading states, and "optimistic updates" for a seamless UI. |
| **Authentication** | Session Cookies | JWT (JSON Web Tokens) | Allows secure authentication across different domains (.org to .dev). |

---

# **INTRODUCTION**

The OWASP Bug Logging Tool (BLT) is a critical platform for security researchers to report, track, and manage vulnerability discoveries across organizations. This project proposes a comprehensive migration of the BLT platform from its current Django-based monolithic architecture to a modern, edge-optimized Next.js/TypeScript stack deployed on Cloudflare Pages. The migration will transform 90+ Django template-based pages into React components while maintaining full feature parity with the existing Django REST API backend. With the exponential growth in edge computing and the need for zero-latency global access to security vulnerability data, this migration positions BLT to serve a worldwide community of security researchers with instant page loads, improved SEO, and enhanced developer experience through strict TypeScript type safety.

# **OBJECTIVE**

* Performance: Moving the UI rendering to the "Edge" with Cloudflare reduces latency significantly compared to standard server-side rendering.  
* Scalability: By offloading the frontend rendering from the Django server, we reduce CPU load on the core backend.  
* Modernization: This aligns the project with 2026 industry standards (Headless React/Next.js) and makes it more accessible to new contributors familiar with the React ecosystem.  
* Co-existence: This new version will act as a "Satellite" UI, communicating securely with the existing Django database without disrupting the current platform.

# **ARCHITECTURE MIGRATION**

* Migrate 90+ Django template pages to Next.js App Router components (Current: 14/90, \~16%).   
* Convert all Django views to Next.js API proxy routes for seamless backend integration.   
* Implement TanStack Query for client-side data fetching with optimistic updates and caching.   
* Establish TypeScript interfaces mirroring all Django model schemas

# **TECHNICAL APPROACH**

## **Frontend Framework**

* Next.js 15 (App Router, React Server Components, ISR)  
* React 19 (Concurrent rendering, automatic batching, Suspense)  
* TypeScript 5.3+ (Strict mode, path aliases via tsconfig)

## **Styling**

* Tailwind CSS 3.4 (Utility-first, dark mode, responsive design)  
* PostCSS (Autoprefixer, nested CSS)

## **State Management & Data Fetching**

* TanStack Query v5 (Server state, caching, optimistic updates, infinite scroll)  
* React Context API (Auth state, theme preferences)

## **Backend Integration**

* Django REST Framework (Existing API remains unchanged)  
* JWT Token Authentication (Cookie-based, automatic refresh interceptor)  
* Axios (HTTP client with retry logic and error handling)

## **Deployment**

* Cloudflare Pages (Edge network, automatic deployments from Git)  
* Cloudflare Workers (API proxying if needed for CORS/rate limiting)  
* Cloudflare DNS (Zero-latency routing)

### 

## **Development Tools**

* ESLint (Airbnb config \+ TypeScript rules)  
* Prettier (Code formatting)  
* Husky \+ lint-staged (Pre-commit hooks)  
* GitHub Actions (CI/CD: lint, type-check, build verification)

# **PROCESS**

## **PHASE 1: Foundation & Infrastructure**

- [x] Analyze Django BLT repository structure (\`BLT/website/\` directory)  
- [x] Document all 90+ pages in MIGRATION\_STATUS.md(for personal use only, not for final merge) with priority categorization  
- [x] Create centralized TypeScript type definitions in \`src/lib/types.ts\`  
- [x] Set up TanStack Query provider and API client with JWT interceptors

## **PHASE 2: Core Page Migration (High Priority Pages)**

- [x] Home page  
- [ ] Organization (in progress)  
- [ ] Hackathon (pending)  
- [ ] Issues (pending)  
- [ ] Leaderboard (pending)  
- [ ] Projects (pending)  
- [ ] Search (pending)  
- [ ] Blogs (pending)

# **CRITICAL PATHS**

1. API proxy routes → Custom hooks → Page updates (interdependent, cannot parallelize)  
2. Organization pages → Hunt submission flow (dependent on org context)  
3. Authentication flows → Protected pages (auth must be solid before dashboard work)

# 

# 

# **NEW DIRECTORY STRUCTURE**

`BLT-on-Cloudflare/`  
`├── src/`  
`│   ├── app/                          # Next.js App Router (Pages)`  
`│   │   ├── api/                      # API Routes (Backend Integration)`  
`│   │   │   └── auth/`  
`│   │   │       ├── login/`  
`│   │   │       │   └── route.ts      # POST /api/auth/login`  
`│   │   │       ├── logout/`  
`│   │   │       │   └── route.ts      # POST /api/auth/logout`  
`│   │   │       ├── signup/`  
`│   │   │       │   └── route.ts      # POST /api/auth/signup`  
`│   │   │       └── me/`  
`│   │   │           └── route.ts      # GET /api/auth/me (Current User)`  
`│   │   ├── hackathons/`  
`│   │   │   └── page.tsx              # /hackathons - Bug Bounties Page`  
`│   │   ├── issues/`  
`│   │   │   └── page.tsx              # /issues - Bug Reports Page`  
`│   │   ├── leaderboard/`  
`│   │   │   └── page.tsx              # /leaderboard - User Rankings`  
`│   │   ├── organizations/`  
`│   │   │   └── page.tsx              # /organizations - Org Management`  
`│   │   ├── projects/`  
`│   │   │   └── page.tsx              # /projects - Projects List`  
`│   │   ├── layout.tsx                # Root Layout (wraps all pages)`  
`│   │   ├── page.tsx                  # / - Homepage`  
`│   │   └── globals.css               # Global Styles`  
`│   │`  
`│   ├── components/                   # Reusable React Components`  
`│   │   ├── header.tsx                # Navigation Bar`  
`│   │   ├── footer.tsx                # Footer`  
`│   │   ├── activity/`  
`│   │   │   └── latest-activity.tsx   # Latest Bug Reports Activity`  
`│   │   ├── blog/`  
`│   │   │   └── blog-posts-section.tsx # Blog Posts Display`  
`│   │   ├── hackathons/`  
`│   │   │   ├── hackathon-card.tsx    # Single Hackathon Card`  
`│   │   │   └── hackathons-section.tsx # Hackathons Grid`  
`│   │   ├── home/                      # Homepage Components`  
`│   │   │   ├── hero-section.tsx      # Main Hero Banner`  
`│   │   │   ├── features-section.tsx  # Key Features`  
`│   │   │   ├── organization-cta.tsx  # Org Call-to-Action`  
`│   │   │   ├── project-cards.tsx     # Featured Projects`  
`│   │   │   ├── referral-program.tsx  # Referral Section`  
`│   │   │   ├── corporate-supporters.tsx # Sponsors`  
`│   │   │   └── call-to-action.tsx    # Final CTA`  
`│   │   ├── issues/`  
`│   │   │   ├── bug-card.tsx          # Single Bug Report Card`  
`│   │   │   └── bugs-section.tsx      # Bug Reports Grid`  
`│   │   ├── leaderboard/`  
`│   │   │   ├── leaderboard-card.tsx  # User Rank Card`  
`│   │   │   └── leaderboard-section.tsx # Leaderboard Table`  
`│   │   ├── organizations/`  
`│   │   │   ├── organizations-tools.tsx # Org Management Tools`  
`│   │   │   └── tools-section.tsx     # General Tools Section`  
`│   │   ├── projects/`  
`│   │   │   └── projects-tools.tsx    # Project Management`  
`│   │   └── users/`  
`│   │       └── users-tools.tsx       # User Management Tools`  
`│   │`  
`│   └── lib/                          # Business Logic & Utilities`  
`│       ├── types.ts                  # TypeScript Interfaces`  
`│       ├── utils.ts                  # Helper Functions`  
`│       ├── auth.ts                   # Authentication Functions`  
`│       ├── api/`  
`│       │   ├── client.ts             # Axios API Client Setup`  
`│       │   ├── auth.ts               # Auth API Methods`  
`│       │   └── queries.ts            # API Query Definitions`  
`│       ├── hooks/                    # Custom React Hooks`  
`│       │   ├── use-auth.ts           # Auth State Management`  
`│       │   ├── use-hackathons.ts     # Hackathons Data`  
`│       │   ├── use-issues.ts         # Issues/Bugs Data`  
`│       │   ├── use-leaderboard.ts    # Leaderboard Data`  
`│       │   └── use-organizations.ts  # Organizations Data`  
`│       └── providers/`  
`│           └── query-provider.tsx    # TanStack React Query Provider`  
`│`  
`├── public/                           # Static Assets`  
`│   ├── fonts/                        # Custom Fonts`  
`│   ├── icons/                        # Icon Assets`  
`│   └── images/                       # Image Assets`  
`│`  
`├── Configuration Files`  
`│   ├── next.config.mjs               # Next.js Config`  
`│   ├── tsconfig.json                 # TypeScript Config`  
`│   ├── tailwind.config.js            # Tailwind CSS Config`  
`│   ├── postcss.config.js             # PostCSS Config`  
`│   ├── package.json                  # Dependencies`  
`│   ├── wrangler.toml                 # Cloudflare Workers Config`  
`│   └── .env.example                  # Environment Variables Template`  
`│`  
`└── Documentation Files`  
    `├── README.md                     # Project Overview`  
    `├── SETUP.md                      # Setup Instructions`  
    `├── DEPLOYMENT.md                 # Deployment Guide`  
    `├── DESIGN.md                     # Design System`  
    `├── API_FIXES_GUIDE.md            # API Integration Guide`  
    `├── IMPLEMENTATION_ROADMAP.md     # Development Roadmap`  
    `└── CONTRIBUTING.md               # Contributing Guidelines`

# **BACKEND (Existing Infrastructure)**

* Django API: Running on existing VPS (no changes required)  
* Database: PostgreSQL (existing Django database remains unchanged)  
* Authentication: JWT tokens (already implemented in Django)

# **API ACCESS**

* Django REST API: Full access to existing endpoints at \`https://owaspblt.org/api/v1/\`  
* CORS Configuration: Backend team to whitelist Cloudflare Pages domains

# **CONCLUSION**

This migration represents a strategic investment in the future of OWASP BLT, positioning the platform as a technically superior solution for global security research collaboration. By leveraging Next.js 15's cutting-edge features, TypeScript's type safety, and Cloudflare's edge network, we will deliver a world-class user experience while maintaining the robust Django backend that powers BLT's core functionality. The phased approach ensures continuous delivery of value, with initial pages already live and demonstrating the viability of the architecture. Completion of this migration will establish BLT as a reference implementation for modern security tooling and attract a new generation of contributors to the OWASP community.

---

Donnie

Mentor for OWASP BLT

---

Ananya

Contributor 

---

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAAHCAYAAACIq3DzAAAAQUlEQVR4Xu3WMQ0AIADAMFziCFGYgx8FLOnRZwo25l4HAICO8QYAAP5m4AAAYgwcAECMgQMAiDFwAAAxBg4AIOYClIUh9UOLBN8AAAAASUVORK5CYII=>