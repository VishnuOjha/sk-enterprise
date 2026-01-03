import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig, getLocalBusinessSchema } from "../lib/seo-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "False Ceiling in Ahmedabad | Best POP & Gypsum Work | SK Enterprise",
    template: "%s | SK Enterprise",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title:
      "False Ceiling in Ahmedabad | Best POP & Gypsum Work | SK Enterprise",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "SK Enterprise - False Ceiling & POP Work in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "False Ceiling in Ahmedabad | SK Enterprise",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  category: "Construction & Interior Design",
};

export default function RootLayout({ children }) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Additional SEO tags */}
        <link rel="canonical" href={siteConfig.url} />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Language and locale */}
        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="alternate" hrefLang="en-IN" href={siteConfig.url} />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
