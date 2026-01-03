# SK Enterprise - Static Next.js Website

A modern, responsive business website built with Next.js 15, React 19, and Tailwind CSS featuring SK Enterprise's signature green branding.

## Features

- ✅ **Static Site Generation** - Fully exportable static website
- 🎨 **Modern UI/UX** - Built with Tailwind CSS with custom green theme matching the logo
- 🖼️ **Brand Integration** - SK Enterprise logo integrated throughout
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Turbopack
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎯 **SEO Optimized** - Proper meta tags and structure
- 🧩 **Component-Based** - Modular and reusable components

## Design Theme

The website uses a professional green color scheme that matches the SK Enterprise logo:
- **Primary Green**: #16a34a (Green-600)
- **Secondary Green**: #15803d (Green-700)
- **Accent Green**: #22c55e (Green-500)
- **Background**: White with green accents

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Package Manager:** npm

## Project Structure

```
sk-enterprise/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Header/Footer
│   │   ├── page.js            # Homepage
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Header.js          # Navigation header
│       ├── Footer.js          # Footer with links
│       ├── Hero.js            # Hero section
│       ├── About.js           # About section
│       ├── Services.js        # Services section
│       └── Contact.js         # Contact form section
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd sk-enterprise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (creates static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build static export (same as build)

## Building for Production

To create a static export of your site:

```bash
npm run build
```

This will generate an `out` folder containing all static HTML, CSS, and JavaScript files. You can deploy this folder to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## Customization

### Update Content

1. **Company Information:**
   - Edit `src/components/Hero.js` for hero content
   - Edit `src/components/About.js` for about section
   - Edit `src/components/Services.js` for services
   - Edit `src/components/Contact.js` for contact details

2. **Styling:**
   - Modify `tailwind.config.js` for custom colors/themes
   - Edit `src/app/globals.css` for global styles
   - Use Tailwind utility classes in components

3. **Meta Tags:**
   - Update `src/app/layout.js` for SEO metadata

### Add New Pages

1. Create new folder in `src/app/`
2. Add `page.js` file
3. Update navigation in `src/components/Header.js`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `out` folder to `gh-pages` branch

## Features Overview

### Sections

1. **Hero Section** - Eye-catching landing with CTA buttons and stats
2. **About Section** - Company information and values
3. **Services Section** - 6 service cards with details
4. **Contact Section** - Contact form and business information

### Components

- Responsive navigation with mobile menu
- Interactive service cards
- Working contact form (frontend only)
- Social media links
- Smooth scroll navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to SK Enterprise.

## Contact

For questions or support, contact:
- Email: info@skenterprise.com
- Phone: +1 (234) 567-890

---

Built with ❤️ using Next.js 15
