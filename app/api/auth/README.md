# API Routes (Stubs)

**Note**: These API routes are stubs. The actual API is provided by the Django REST Framework backend.

This React frontend connects directly to the Django API at `NEXT_PUBLIC_API_BASE_URL`.

The authentication flow:
1. Frontend sends requests to Django API (`/api/auth/login/`, etc.)
2. Django handles authentication and returns JWT tokens
3. Frontend stores tokens and includes them in subsequent requests

These Next.js API routes can be removed or used as proxies if needed for Cloudflare Workers compatibility.

