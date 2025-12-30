# BLT React on Cloudflare

This is the **React/Next.js frontend** for the OWASP Bug Logging Tool (BLT), designed to connect to the [Core BLT Django REST Framework API](https://github.com/OWASP-BLT/BLT). This repository serves as the modern React implementation that maintains the same UI and database logic as the main BLT repository.

## 🎯 Architecture Overview

This React frontend connects to the existing Django backend, maintaining:
- ✅ **Same Database**: Uses the same PostgreSQL database via Django REST Framework
- ✅ **Same Logic**: All business logic remains in Django
- ✅ **Same UI**: Matches the design and user experience of Core BLT
- ✅ **Modern Stack**: React/Next.js for better performance and developer experience

## 📊 Technology Stack Comparison

| Module | Core BLT | BLT-on-Cloudflare | Why this change? |
|--------|----------|-------------------|------------------|
| **Language** | Python | TypeScript (TSX) | Ensures strict "data contracts" between API and UI, reducing runtime crashes |
| **Framework** | Django (Monolithic) | Next.js (App Router) | Provides SEO-friendly Static Generation (SSG) and instant page transitions |
| **Hosting** | VPS / Docker | Cloudflare Pages | Zero-latency global delivery via Cloudflare's Edge network; infinite scalability |
| **UI/Styling** | Tailwind CSS | Tailwind CSS | Drastically reduces CSS bundle size by stripping unused styles at build time |
| **API Layer** | Django Templates | Django REST Framework (DRF) | Converts Python logic into JSON, making data accessible to any frontend |
| **Data Fetching** | Server-Side Querying | TanStack Query (React Query) | Handles caching, loading states, and "optimistic updates" for seamless UI |
| **Authentication** | Session Cookies | JWT (JSON Web Tokens) | Allows secure authentication across different domains (.org to .dev) |
| **Icons/Assets** | FontAwesome / PNG | Lucide React / FontAwesome | Lightweight, tree-shakeable SVG icons optimized for React |

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Access to Core BLT Django API (running on `http://localhost:8000` or your API URL)
- Cloudflare account (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/OWASP-BLT/BLT-React-on-Cloudflare.git
cd BLT-React-on-Cloudflare
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set your Django API URL:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

4. Make sure the Core BLT Django API is running (see [Core BLT Repository](https://github.com/OWASP-BLT/BLT))

## 🏃 Development

1. Start the Django API server (from Core BLT repo):
```bash
# In Core BLT directory
python manage.py runserver
```

2. Start the Next.js development server:
```bash
npm run dev
```

The React app will be available at `http://localhost:3000` and will connect to the Django API.

## 🏗️ Project Structure

```
BLT-React-on-Cloudflare/
│
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes (if needed for Cloudflare Workers)
│   ├── [feature-pages]/         # Feature routes
│   ├── layout.tsx                # Root layout with QueryProvider
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── home/                     # Home page sections
│   ├── issues/                   # Bug reporting components
│   ├── hackathons/               # Hackathon components
│   ├── leaderboard/              # Leaderboard components
│   ├── organizations/            # Organization components
│   ├── projects/                 # Project components
│   ├── header.tsx                # Site header/navigation
│   └── footer.tsx                # Site footer
│
├── lib/                          # Core utilities & logic
│   ├── api/                      # API client and endpoints
│   │   ├── client.ts             # Axios client with JWT handling
│   │   ├── auth.ts               # Authentication API
│   │   └── queries.ts            # Data fetching functions
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-auth.ts           # Authentication hook
│   │   ├── use-issues.ts         # Issues data hook
│   │   ├── use-organizations.ts  # Organizations data hook
│   │   ├── use-hackathons.ts     # Hackathons data hook
│   │   └── use-leaderboard.ts    # Leaderboard data hook
│   └── providers/                # React context providers
│       └── query-provider.tsx     # TanStack Query provider
│
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.mjs
    ├── tailwind.config.js
    └── .env.example
```

## 🔌 API Integration

This frontend connects to the Django REST Framework API endpoints:

### Authentication Endpoints
- `POST /api/auth/login/` - Login with username/password
- `POST /api/auth/signup/` - Register new user
- `POST /api/auth/logout/` - Logout user
- `GET /api/auth/me/` - Get current user
- `POST /api/auth/refresh/` - Refresh JWT token

### Data Endpoints (adjust based on your Django API)
- `GET /api/organizations/` - List organizations
- `GET /api/issues/` - List issues/bugs
- `GET /api/hackathons/` - List hackathons
- `GET /api/leaderboard/earners/` - Top earners
- `GET /api/leaderboard/reporters/` - Top bug reporters
- And more...

## 🔐 Authentication Flow

1. User logs in via `/login` page
2. Frontend sends credentials to Django API `/api/auth/login/`
3. Django returns JWT tokens (`access` and `refresh`)
4. Frontend stores tokens in HTTP-only cookies
5. All subsequent API requests include `Authorization: Bearer <token>` header
6. On token expiry, frontend automatically refreshes using refresh token

## 🚢 Deployment

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `.next`
4. Set Node.js version: `18` or higher
5. Add environment variable: `NEXT_PUBLIC_API_BASE_URL=https://your-django-api.com/api`
6. Deploy!

### Environment Variables for Production

Make sure to set:
- `NEXT_PUBLIC_API_BASE_URL` - Your Django API URL

## 🔗 Links

- **Core BLT Repository**: [OWASP-BLT/BLT](https://github.com/OWASP-BLT/BLT)
- **Live Site**: [owaspblt.org](https://www.owaspblt.org)
- **OWASP Project Page**: [OWASP Bug Logging Tool](https://owasp.org/www-project-bug-logging-tool/)

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the AGPL-3.0 License - see the LICENSE file for details.

## 👥 Authors

- OWASP BLT Team

## 🙏 Acknowledgments

- OWASP Foundation for supporting the BLT project
- Cloudflare for providing Pages platform
- All contributors to the Core BLT project
