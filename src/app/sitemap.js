// app/sitemap.js - Dynamic sitemap generation for Next.js

export default function sitemap() {
  const baseUrl = "https://www.skenterprise.com"; // Replace with your actual domain

  // Static pages
  const routes = ["", "/about", "/services", "/gallery", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Service pages for better SEO
  const servicePages = [
    "/services/false-ceiling",
    "/services/pop-work",
    "/services/gypsum-solutions",
    "/services/led-lighting",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Location pages for local SEO
  const locationPages = [
    "/ahmedabad",
    "/ahmedabad/satellite",
    "/ahmedabad/bopal",
    "/ahmedabad/prahlad-nagar",
    "/gujarat",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...servicePages, ...locationPages];
}
