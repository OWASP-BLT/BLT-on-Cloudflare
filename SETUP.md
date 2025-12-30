# Setup Guide: BLT React Frontend

This guide explains how to set up the React frontend to connect to the Core BLT Django backend.

## Prerequisites

1. **Core BLT Django API** must be running (see [Core BLT Repository](https://github.com/OWASP-BLT/BLT))
2. Node.js 18+ installed
3. npm or yarn package manager

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14 (React framework)
- TanStack Query (data fetching)
- Axios (HTTP client)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Lucide React (icons)
- js-cookie (JWT token storage)

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your Django API URL:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

**For Production:**
```env
NEXT_PUBLIC_API_BASE_URL=https://api.owaspblt.org/api
```

### 3. Start Django API

In the Core BLT repository:

```bash
# Make sure Django REST Framework is set up
python manage.py runserver
```

The API should be available at `http://localhost:8000/api`

### 4. Start React Frontend

```bash
npm run dev
```

The React app will be available at `http://localhost:3000`

## Architecture

### Data Flow

```
React Frontend (Next.js)
    ↓ (HTTP requests with JWT)
Django REST Framework API
    ↓ (queries)
PostgreSQL Database
```

### Authentication Flow

1. User logs in via React frontend
2. Frontend sends credentials to Django `/api/auth/login/`
3. Django returns JWT tokens (`access` and `refresh`)
4. Frontend stores tokens in cookies
5. All API requests include `Authorization: Bearer <token>` header
6. On token expiry, frontend automatically refreshes token

### API Endpoints

The frontend expects these Django REST Framework endpoints:

#### Authentication
- `POST /api/auth/login/` - Login
- `POST /api/auth/signup/` - Register
- `POST /api/auth/logout/` - Logout
- `GET /api/auth/me/` - Get current user
- `POST /api/auth/refresh/` - Refresh token

#### Data
- `GET /api/organizations/` - List organizations
- `GET /api/issues/` - List issues/bugs
- `GET /api/hackathons/` - List hackathons
- `GET /api/leaderboard/earners/` - Top earners
- `GET /api/leaderboard/reporters/` - Top bug reporters
- `GET /api/leaderboard/contributors/` - Top PR contributors
- `GET /api/leaderboard/referrals/` - Top referrals

**Note:** Adjust these endpoints based on your actual Django API structure.

## Key Files

### API Client
- `lib/api/client.ts` - Axios client with JWT handling
- `lib/api/auth.ts` - Authentication API functions
- `lib/api/queries.ts` - Data fetching functions

### React Hooks
- `lib/hooks/use-auth.ts` - Authentication hook
- `lib/hooks/use-issues.ts` - Issues data hook
- `lib/hooks/use-organizations.ts` - Organizations hook
- `lib/hooks/use-hackathons.ts` - Hackathons hook
- `lib/hooks/use-leaderboard.ts` - Leaderboard hooks

### Components
- `components/` - All React components organized by feature
- `app/` - Next.js pages using App Router

## Development Workflow

### Adding a New Feature

1. **Create API function** in `lib/api/queries.ts`:
```typescript
export const myFeatureApi = {
  getAll: () => apiClient.get('/my-feature/'),
  getById: (id: number) => apiClient.get(`/my-feature/${id}/`),
};
```

2. **Create React hook** in `lib/hooks/use-my-feature.ts`:
```typescript
export function useMyFeature() {
  return useQuery({
    queryKey: ['my-feature'],
    queryFn: () => myFeatureApi.getAll(),
  });
}
```

3. **Use in component**:
```typescript
import { useMyFeature } from '@/lib/hooks/use-my-feature';

export default function MyComponent() {
  const { data, isLoading } = useMyFeature();
  // ...
}
```

## Testing API Connection

1. Start Django API: `python manage.py runserver`
2. Start React app: `npm run dev`
3. Open browser console and check for API calls
4. Verify JWT tokens are stored in cookies

## Troubleshooting

### CORS Issues

If you see CORS errors, add to Django `settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://your-frontend-domain.com",
]

CORS_ALLOW_CREDENTIALS = True
```

### API Not Found

- Check `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Verify Django API is running
- Check Django API endpoints match expected paths

### Authentication Not Working

- Check JWT tokens in browser cookies
- Verify Django JWT settings
- Check API response format matches expected structure

## Deployment

See [README.md](README.md) for Cloudflare Pages deployment instructions.

## Next Steps

1. **Match Django API endpoints** - Update `lib/api/queries.ts` to match your actual Django API
2. **Add more features** - Create hooks and components for additional features
3. **Add error handling** - Implement proper error boundaries and error messages
4. **Add loading states** - Show loading indicators while fetching data
5. **Add form validation** - Use Zod for form validation (already included)
