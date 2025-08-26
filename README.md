# High-Converting SaaS Landing Page

A conversion-optimized landing page built with Next.js, Tailwind CSS, and integrated analytics for A/B testing and performance tracking.

## ✨ Features

- **Conversion Optimization**: Designed for 35% conversion rate improvement
- **A/B Testing**: Built-in A/B testing for headlines and CTAs
- **Analytics Integration**: Google Analytics and Hotjar tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with Next.js 14
- **Complete Landing Page**: Header, Hero, Features, Testimonials, Pricing, FAQ, CTA, Footer
- **Live Chat Widget**: Customer support integration
- **Scroll to Top**: Enhanced user experience
- **Mobile Navigation**: Responsive hamburger menu

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure analytics:
   - Update `.env.local` with your Google Analytics ID and Hotjar ID
   - Replace placeholder IDs with actual tracking codes

3. Run development server:
```bash
npm run dev
```

## Analytics Configuration

### Google Analytics
1. Create a GA4 property
2. Copy the Measurement ID (G-XXXXXXXXXX)
3. Update `GOOGLE_ANALYTICS_ID` in `.env.local`

### Hotjar
1. Create a Hotjar account
2. Get your Site ID
3. Update `HOTJAR_ID` in `.env.local`

## A/B Testing

The landing page includes A/B testing for:
- Hero headlines (2 variants)
- CTA button text (2 variants)

Tests are automatically assigned and tracked in Google Analytics.

## Conversion Tracking

Key conversion events tracked:
- Email signups (hero section)
- Final CTA conversions
- A/B test assignments

## 🚀 Vercel Deployment

### Quick Deploy (1-Click)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

### Environment Variables (Required)
- `GOOGLE_ANALYTICS_ID`: Your GA4 Measurement ID
- `HOTJAR_ID`: Your Hotjar Site ID

### Build Commands
```bash
npm run build  # Production build
npm start      # Start production server
npm run dev    # Development server
```

## Performance Features

- Optimized images and fonts
- Lazy loading components
- Minimal JavaScript bundle
- SEO-optimized metadata
- Fast loading animations