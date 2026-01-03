// app/sitemap.js
export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://shrikishanenterprise.com";

  // Use a fixed date or build-time date
  const lastModified = new Date().toISOString();

  const routes = ["", "/about", "/services", "/gallery", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const servicePages = [
    "/services/false-ceiling",
    "/services/pop-work",
    "/services/gypsum-solutions",
    "/services/led-lighting",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationPages = [
    "/ahmedabad",
    "/ahmedabad/satellite",
    "/ahmedabad/bopal",
    "/ahmedabad/prahlad-nagar",
    "/gujarat",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...servicePages, ...locationPages];
}
