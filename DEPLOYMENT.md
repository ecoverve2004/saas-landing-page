# Vercel Deployment Guide

## Quick Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   - In Vercel dashboard → Settings → Environment Variables
   - Add:
     - `GOOGLE_ANALYTICS_ID` = `G-XXXXXXXXXX`
     - `HOTJAR_ID` = `XXXXXXX`

## Alternative: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   vercel login
   vercel --prod
   ```

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to Project → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## Performance Optimization

- **Automatic**: Vercel provides edge caching, image optimization, and CDN
- **Analytics**: Built-in Vercel Analytics available
- **Monitoring**: Real-time performance metrics

## Environment Variables

Required for full functionality:
- `GOOGLE_ANALYTICS_ID`: Your GA4 Measurement ID
- `HOTJAR_ID`: Your Hotjar Site ID

## Build Commands

- **Build**: `npm run build`
- **Start**: `npm start`
- **Dev**: `npm run dev`

## Troubleshooting

- **Build fails**: Check Node.js version (use 18+)
- **Analytics not working**: Verify environment variables
- **Styling issues**: Clear `.next` folder and rebuild