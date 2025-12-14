# Deployment Guide

This project can be deployed to **GitHub Pages** (recommended) or **Cloudflare Pages**.

## Prerequisites

Before deploying, ensure you have:

1. Node.js v16+ and npm installed
2. A GitHub account (for GitHub Pages) or Cloudflare account (for Cloudflare Pages)

## Project Structure

This project is configured as a static site with the following structure:

- `src/index.js` - Contains the HTML template (for reference/Workers deployment)
- `public/` - Static assets directory (CSS, JS, and generated HTML)
- `.github/workflows/deploy-pages.yml` - GitHub Actions deployment workflow
- `wrangler.toml` - Cloudflare Pages configuration (optional)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Build the static site:
```bash
npm run build
```

This generates `public/index.html` from the template in `src/index.js`.

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8787`

Alternatively, use any local web server:
```bash
# Using Python 3
cd public && python3 -m http.server 8000

# Using Node.js http-server
npx http-server public -p 8000
```

## GitHub Pages Deployment (Recommended)

### Automatic Deployment

This repository is configured for automatic deployment to GitHub Pages:

1. **Setup** (One-time):
   - Go to repository **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - That's it! The workflow is already configured.

2. **Automatic Builds**:
   - Every push to the `main` branch triggers the deployment workflow
   - The workflow runs `npm run build` to generate static files
   - Files from the `public/` directory are deployed to GitHub Pages
   - Your site will be live at: `https://owasp-blt.github.io/BLT-on-Cloudflare/`

3. **Manual Deployment**:
   - Go to **Actions** tab in GitHub
   - Select **Deploy to GitHub Pages** workflow
   - Click **Run workflow** button
   - Select the branch and click **Run workflow**

### Workflow Configuration

The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) automatically:
- Checks out the code
- Sets up Node.js environment
- Installs dependencies with `npm ci`
- Builds the site with `npm run build`
- Deploys the `public/` directory to GitHub Pages

### Custom Domain (Optional)

To use a custom domain with GitHub Pages:

1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `blt.yourdomain.com`)
3. Add a `CNAME` file to the `public/` directory with your domain
4. Configure DNS:
   - For apex domain: Add A records pointing to GitHub Pages IPs
   - For subdomain: Add CNAME record pointing to `<username>.github.io`
5. GitHub will automatically provision SSL certificates

### Monitoring

View deployment status and logs:
1. Go to **Actions** tab in GitHub
2. Click on the latest workflow run
3. View build and deployment logs
4. Check deployment status and any errors

## Cloudflare Pages Deployment

### Automatic Deployment (Recommended)

1. **Connect Your Repository to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** > **Create application** > **Pages**
   - Connect your GitHub/GitLab account
   - Select the `BLT-on-Cloudflare` repository

2. **Configure Build Settings:**
   - **Build command:** `npm run deploy` (or `npm run build`)
   - **Build output directory:** `public`
   - **Root directory:** `/` (leave as default)

3. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare Pages will automatically build and deploy your site
   - Your site will be available at: `https://blt-on-cloudflare.pages.dev`

### Manual Build

To build locally for testing:
```bash
npm run build
```

This will generate the `public/index.html` file from the template in `src/index.js`.

## Configuration

The `wrangler.toml` file is configured for Cloudflare Pages:

```toml
name = "blt-on-cloudflare"
compatibility_date = "2024-01-01"
pages_build_output_dir = "./public"
```

This tells Cloudflare Pages to serve files from the `./public` directory.

## Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `blt.yourdomain.com`)
5. Follow the instructions to add DNS records

Cloudflare will automatically provision SSL certificates for your custom domain.

## Environment Variables

If you need to add environment variables for Pages:

1. Go to your project in Cloudflare Pages dashboard
2. Navigate to **Settings** > **Environment variables**
3. Add your variables for production and preview environments

## Monitoring

View your deployment logs and analytics:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. View **Deployments** for build logs
4. View **Analytics** for traffic insights

## Troubleshooting

### Issue: "wrangler.toml does not appear to be valid"

This warning can be ignored. The build system will use the `pages_build_output_dir` setting and continue with the deployment.

### Issue: Build fails with "Cannot find module"

**Solution**: Ensure all dependencies are listed in `package.json`:
```bash
npm install
```

### Issue: Static assets not loading

**Solution**: Verify your assets are in the `public/` directory:
```
public/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

### Issue: Changes to src/index.js not reflected

**Solution**: Remember to rebuild after modifying the template:
```bash
npm run build
```

Then commit the updated `public/index.html`.

## Alternative: Cloudflare Workers Deployment

If you prefer to deploy as a Cloudflare Worker instead of Pages:

1. Restore the Workers configuration in `wrangler.toml`:
```toml
name = "blt-on-cloudflare"
main = "src/index.js"
compatibility_date = "2024-01-01"

[site]
bucket = "./public"
```

2. Login to Cloudflare:
```bash
npx wrangler login
```

3. Deploy:
```bash
npx wrangler deploy
```

Note: Workers deployment requires authentication and may have different limits than Pages.

## Performance Optimization

Cloudflare Pages automatically provides:
- Global CDN distribution
- Automatic HTTPS
- Brotli compression
- HTTP/2 and HTTP/3 support
- Unlimited bandwidth (on Free plan)

## Costs

Cloudflare Pages Free tier includes:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 100 custom domains per project
- More than enough for most use cases

## Support

For issues:
1. Check [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
2. Visit [Cloudflare Community](https://community.cloudflare.com/)
3. Check [GitHub Issues](https://github.com/OWASP-BLT/BLT-on-Cloudflare/issues)
