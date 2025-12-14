# GitHub Pages Setup Guide

This guide will help you set up GitHub Pages for the BLT-on-Cloudflare repository.

## Prerequisites

- Repository owner or admin access to enable GitHub Pages
- The repository must be public (or GitHub Pro/Enterprise for private repos)

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/OWASP-BLT/BLT-on-Cloudflare`
2. Click on **Settings** (in the repository menu)
3. Scroll down to the **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions** from the dropdown menu
5. That's it! The deployment workflow is already configured.

### 2. Trigger Initial Deployment

The workflow will automatically run when:
- You push to the `main` branch
- You manually trigger it

To manually trigger the first deployment:

1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow from the left sidebar
3. Click the **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

### 3. Monitor Deployment

1. Go to the **Actions** tab
2. Click on the running workflow to see progress
3. The workflow will:
   - Install Node.js and dependencies
   - Build the site with `npm run build`
   - Deploy to GitHub Pages

### 4. Access Your Site

Once deployment is complete:

- Your site will be available at: `https://owasp-blt.github.io/BLT-on-Cloudflare/`
- The URL will be shown in the deployment summary

### 5. Custom Domain (Optional)

To use a custom domain:

1. In repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `blt.example.com`)
3. Add a `CNAME` file to the `public/` directory containing your domain
4. Configure DNS records:
   - **For subdomain** (e.g., `blt.example.com`):
     - Add a `CNAME` record pointing to `owasp-blt.github.io`
   - **For apex domain** (e.g., `example.com`):
     - Add `A` records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
5. Check **Enforce HTTPS** (GitHub will provision SSL automatically)

## Workflow Configuration

The GitHub Actions workflow is defined in `.github/workflows/deploy-pages.yml` and includes:

- **Trigger**: Runs on every push to `main` branch or manual trigger
- **Build**: Installs dependencies and builds the site
- **Deploy**: Uploads and deploys the `public/` directory to GitHub Pages

## Automatic Deployments

After initial setup, the site will automatically redeploy whenever:
- Changes are pushed to the `main` branch
- The workflow is manually triggered

## Troubleshooting

### Issue: "Pages build and deployment" workflow not found

**Solution**: Ensure you selected **GitHub Actions** as the source in Settings > Pages, not a branch.

### Issue: Build fails with "npm ci" error

**Solution**: Make sure `package-lock.json` is committed to the repository. Run:
```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### Issue: 404 errors for CSS/JS files

**Solution**: This is already fixed in the current configuration. All assets use relative paths.

### Issue: Custom domain shows 404

**Solution**: 
1. Verify DNS records are correct
2. Wait for DNS propagation (can take up to 24 hours)
3. Ensure `CNAME` file exists in `public/` directory
4. Re-save the custom domain in GitHub Pages settings

### Issue: Changes not appearing on the site

**Solution**:
1. Check that changes were pushed to `main` branch
2. Verify the workflow ran successfully in the Actions tab
3. Clear browser cache or try incognito mode
4. GitHub Pages has a CDN cache that may take a few minutes to update

## Development Workflow

When making changes to the site:

1. Edit files in `src/` directory
2. Run `npm run build` to generate updated `public/index.html`
3. Commit both source files and built files
4. Push to `main` branch
5. GitHub Actions will automatically deploy

## Monitoring and Analytics

To monitor your GitHub Pages site:

1. **Deployment History**: Check Actions tab for past deployments
2. **Traffic**: Go to repository Insights > Traffic (requires admin access)
3. **Custom Analytics**: Add Google Analytics or similar to `src/index.js`

## Security

- GitHub Pages automatically provides HTTPS
- All dependencies are pinned in `package-lock.json`
- The site is static with no server-side processing

## Support

If you encounter issues:
1. Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Review workflow logs in the Actions tab
3. Open an issue in the repository

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Repository README](README.md)
- [Deployment Guide](DEPLOYMENT.md)
