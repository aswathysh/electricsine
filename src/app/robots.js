export default function robots() {
  const baseUrl = "https://electricsine.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // hide pages from search engines
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
