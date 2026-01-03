# SK Enterprise - Deployment Guide

## Quick Start (Local Development)

### Step 1: Install Dependencies
```bash
cd sk-enterprise
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

---

## Production Build (Static Export)

### Build the Static Site
```bash
npm run build
```

This creates an `out` folder with all static files ready for deployment.

---

## Deployment Options

### Option 1: Vercel (Easiest & Recommended)

Vercel is made by the creators of Next.js and offers the best integration.

#### Method A: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Method B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js - just click "Deploy"!

**Custom Domain:**
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

---

### Option 2: Netlify

#### Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Using Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import existing project"
3. Connect your Git repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click "Deploy site"

---

### Option 3: GitHub Pages

#### Setup
1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
}
```

3. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/sk-enterprise', // Replace with your repo name
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`, folder: `/ (root)`

Your site will be at: `https://yourusername.github.io/sk-enterprise`

---

### Option 4: AWS S3 + CloudFront

#### Step 1: Build
```bash
npm run build
```

#### Step 2: Create S3 Bucket
1. Go to AWS S3 Console
2. Create bucket (e.g., `sk-enterprise-website`)
3. Enable "Static website hosting"
4. Upload contents of `out` folder

#### Step 3: Setup CloudFront (Optional, for CDN)
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure custom domain if needed

#### Step 4: Deploy Script
```bash
# Install AWS CLI
# Configure: aws configure

# Sync files
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### Option 5: Traditional Web Hosting (cPanel, etc.)

#### Build
```bash
npm run build
```

#### Upload
1. Build creates `out` folder
2. Upload entire contents of `out` folder to your hosting
3. Typical locations:
   - cPanel: `public_html`
   - Apache: `/var/www/html`
   - Nginx: `/usr/share/nginx/html`

#### .htaccess for Apache (if needed)
Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Environment Variables (If Needed)

For API keys or configuration:

1. Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_CONTACT_EMAIL=info@skenterprise.com
```

2. Use in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**Note:** Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## Custom Domain Setup

### Vercel/Netlify
1. Go to project settings
2. Add custom domain
3. Update DNS records:
   - **A Record:** Points to their IP
   - **CNAME:** Points to their subdomain

### Your DNS Provider
Common records needed:
```
Type: A
Name: @
Value: [Host IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

---

## Performance Optimization

### Image Optimization
For static export, images are already optimized. To further optimize:

1. Use next-gen formats (WebP)
2. Compress images before adding
3. Use appropriate sizes

### Code Splitting
Next.js automatically code-splits. No action needed!

### Caching
Add caching headers in your hosting:

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Continuous Deployment

### Automatic Deployments

#### Vercel/Netlify with Git
1. Connect repository
2. Every push to `main` branch auto-deploys
3. Preview deployments for pull requests

#### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors
- Ensure `trailingSlash: true` in `next.config.js`
- Check routing configuration
- Verify all links use proper paths

### Slow Build Times
- Use `output: 'export'` (already configured)
- Optimize images before importing
- Remove unused dependencies

---

## Monitoring & Analytics

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `src/app/layout.js`:

```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Cost Comparison

| Platform | Cost | Best For |
|----------|------|----------|
| **Vercel** | Free tier generous, Pro $20/mo | Best overall |
| **Netlify** | Free tier available, Pro $19/mo | Great features |
| **GitHub Pages** | Free | Simple static sites |
| **AWS S3** | Pay per use (~$1-5/mo) | Full control |
| **Traditional Hosting** | $3-10/mo | Existing hosting |

---

## Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀
