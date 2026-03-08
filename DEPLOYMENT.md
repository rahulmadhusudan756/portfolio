# Portfolio Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js portfolio.

### Method 1: GitHub Integration (Automatic Deployment)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your portfolio repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Automatic Updates**
   - Every push to `main` branch will automatically deploy
   - Preview deployments for pull requests
   - Rollback to previous versions anytime

### Method 2: Vercel CLI (Quick Deploy)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd portfolio
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy: Y
   - Which scope: (your account)
   - Link to existing project: N
   - Project name: (press enter for default)
   - Directory: ./ (press enter)
   - Want to override settings: N

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update DNS Records**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records for apex domain

3. **SSL Certificate**
   - Automatically provisioned by Vercel
   - No configuration needed

## Alternative Deployment Options

### Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### GitHub Pages (Static Export)

1. Update `next.config.js`:
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy `out` folder to GitHub Pages

### Self-Hosted (VPS/Cloud)

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Install PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   ```

3. **Start the application:**
   ```bash
   pm2 start npm --name "portfolio" -- start
   ```

4. **Setup Nginx as reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Pre-Deployment Checklist

- [ ] Update all personal information in `data/portfolio-data.ts`
- [ ] Add your resume PDF to `public/` folder
- [ ] Update social media links
- [ ] Test all project links (GitHub, demos)
- [ ] Verify contact form functionality
- [ ] Test responsive design on multiple devices
- [ ] Check console for any errors
- [ ] Optimize images (compress, resize)
- [ ] Review and update meta tags in `app/layout.tsx`
- [ ] Test build locally: `npm run build && npm start`

## Environment Variables

If you need environment variables (e.g., for contact form API):

1. **Local Development:**
   Create `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. **Vercel:**
   - Go to Project Settings → Environment Variables
   - Add variables for Production, Preview, and Development

## Performance Optimization

1. **Enable Analytics:**
   - Vercel Analytics (built-in)
   - Google Analytics (add to layout)

2. **Monitor Performance:**
   - Use Vercel Speed Insights
   - Check Lighthouse scores
   - Monitor Core Web Vitals

3. **Caching:**
   - Vercel handles caching automatically
   - Configure in `next.config.js` if needed

## Troubleshooting

### Build Errors

- Check Node.js version (18.x+)
- Clear `.next` folder and rebuild
- Verify all imports are correct
- Check for TypeScript errors

### Deploy Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify no private packages or local imports

### Performance Issues

- Optimize images (use WebP format)
- Lazy load components
- Minimize JavaScript bundle size
- Use Next.js Image component

## Continuous Deployment

With Vercel GitHub integration:
- Push to `main` → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment with unique URL

## Monitoring

1. **Vercel Analytics:**
   - Real-time analytics
   - Web Vitals monitoring
   - Free with Hobby plan

2. **Error Tracking:**
   - Consider adding Sentry for error tracking
   - Monitor console errors in production

## Updating Your Portfolio

1. Update content in `data/portfolio-data.ts`
2. Test locally: `npm run dev`
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Vercel automatically deploys changes

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
