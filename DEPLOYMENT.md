# Deployment Guide

## Prerequisites

Before deploying to Cloudflare Workers, ensure you have:

1. A Cloudflare account (free tier works)
2. Wrangler CLI installed and authenticated
3. Node.js v16+ and npm installed

## Setup Wrangler

1. Install Wrangler globally (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

This will open a browser window for authentication.

## Configuration

1. Update `wrangler.toml` with your account details:
```toml
name = "blt-on-cloudflare"
main = "src/index.js"
compatibility_date = "2024-01-01"

# Optional: Add your account_id and route
# account_id = "your-account-id"
# route = "blt.yourdomain.com/*"

[site]
bucket = "./public"
```

2. To find your account ID:
```bash
wrangler whoami
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8787`

## Deployment

### Deploy to Cloudflare Workers

1. Deploy to production:
```bash
npm run deploy
```

2. Your site will be deployed to a `workers.dev` subdomain by default:
```
https://blt-on-cloudflare.<your-subdomain>.workers.dev
```

### Custom Domain Setup

1. Add a custom domain in your `wrangler.toml`:
```toml
routes = [
  { pattern = "blt.yourdomain.com", zone_name = "yourdomain.com" }
]
```

2. Add DNS records in Cloudflare:
   - Go to your domain's DNS settings
   - Add a CNAME record pointing to your worker

3. Deploy again:
```bash
npm run deploy
```

## Monitoring

View your worker logs:
```bash
npm run tail
```

Or:
```bash
wrangler tail
```

## Troubleshooting

### Issue: "No account_id found"
**Solution**: Add your account_id to `wrangler.toml` or use:
```bash
wrangler deploy --account-id=YOUR_ACCOUNT_ID
```

### Issue: "Failed to publish"
**Solution**: Ensure you're logged in:
```bash
wrangler login
```

### Issue: Static assets not loading
**Solution**: Verify the `[site]` section in `wrangler.toml`:
```toml
[site]
bucket = "./public"
```

## Environment Variables

If you need to add environment variables:

1. Create a `.dev.vars` file for local development:
```
API_KEY=your-api-key
```

2. Add secrets for production:
```bash
wrangler secret put API_KEY
```

## CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

Add `CLOUDFLARE_API_TOKEN` to your repository secrets.

## Performance Optimization

The worker is optimized for performance:
- Static assets served from Cloudflare's edge
- Minimal JavaScript execution
- CSS utility classes for small file size
- Optimized HTML structure

## Security

- All assets served over HTTPS
- No server-side vulnerabilities (static content)
- Cloudflare DDoS protection enabled by default

## Scaling

Cloudflare Workers automatically scale:
- No configuration needed
- Handles millions of requests
- Global edge network deployment

## Costs

Free tier includes:
- 100,000 requests per day
- 10ms CPU time per request
- More than enough for most use cases

Paid plans available for higher usage.

## Support

For issues:
1. Check [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
2. Visit [Wrangler GitHub](https://github.com/cloudflare/workers-sdk)
3. Join [Cloudflare Discord](https://discord.gg/cloudflaredev)
