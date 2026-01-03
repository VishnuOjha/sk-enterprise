// SEO Configuration for SK Enterprise

export const siteConfig = {
  name: "SK Enterprise",
  description:
    "Professional False Ceiling, POP, and Gypsum Work in Ahmedabad, Gujarat. Expert installation services for residential and commercial spaces with 15+ years of experience.",
  url: "https://www.skenterprise.com", // Replace with your actual domain
  ogImage: "/og-image.jpg",
  keywords: [
    "false ceiling in ahmedabad",
    "false ceiling near me",
    "false ceiling in india",
    "gypsum false ceiling ahmedabad",
    "pop work ahmedabad",
    "false ceiling contractor ahmedabad",
    "best false ceiling in ahmedabad",
    "false ceiling installation ahmedabad",
    "suspended ceiling ahmedabad",
    "dropped ceiling ahmedabad",
    "false ceiling work in gujarat",
    "pop false ceiling ahmedabad",
    "gypsum board ceiling ahmedabad",
    "office false ceiling ahmedabad",
    "home false ceiling ahmedabad",
    "false ceiling design ahmedabad",
    "false ceiling cost ahmedabad",
    "cheap false ceiling ahmedabad",
    "false ceiling contractor near me",
    "gypsum work ahmedabad",
    "pop work near me",
    "partition work ahmedabad",
    "false ceiling with light ahmedabad",
    "led false ceiling ahmedabad",
    "pvc false ceiling ahmedabad",
    "metal false ceiling ahmedabad",
  ],
  author: "SK Enterprise - Shri Kisan Ojha",
  telephone: "+919714620060",
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
  },
};

export const servicePages = {
  falseCeiling: {
    title: "False Ceiling Installation in Ahmedabad | SK Enterprise",
    description:
      "Expert false ceiling installation in Ahmedabad. Gypsum, PVC, and metal ceiling solutions for homes and offices. Free consultation. Call +91 9714620060",
    keywords:
      "false ceiling ahmedabad, suspended ceiling, dropped ceiling, gypsum ceiling ahmedabad",
  },
  popWork: {
    title: "POP Work in Ahmedabad | Plaster of Paris Services | SK Enterprise",
    description:
      "Professional POP work in Ahmedabad. Wall textures, decorative moldings, and elegant finishes. 15+ years experience. Best prices guaranteed.",
    keywords:
      "pop work ahmedabad, plaster of paris, pop ceiling, pop design ahmedabad",
  },
  gypsumWork: {
    title: "Gypsum Work in Ahmedabad | Partition & Cladding | SK Enterprise",
    description:
      "Quality gypsum partition walls, wall cladding, and custom designs in Ahmedabad. Fire-resistant and durable solutions. Contact us today!",
    keywords:
      "gypsum work ahmedabad, gypsum partition, gypsum board, drywall ahmedabad",
  },
};

// Schema.org structured data
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.url,
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225", // Replace with actual coordinates
    longitude: "72.5714",
  },
  url: siteConfig.url,
  telephone: siteConfig.telephone,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  founder: {
    "@type": "Person",
    name: "Shri Kisan Ojha",
  },
  foundingDate: "2008",
  areaServed: [
    {
      "@type": "City",
      name: "Ahmedabad",
    },
    {
      "@type": "State",
      name: "Gujarat",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "False Ceiling Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "False Ceiling Installation",
          description:
            "Professional false ceiling installation using gypsum, PVC, and metal materials",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "POP Work",
          description: "Plaster of Paris work for walls and ceilings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gypsum Solutions",
          description: "Gypsum partition walls and wall cladding",
        },
      },
    ],
  },
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
