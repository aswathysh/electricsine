const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://rubiksoftwares.com/electricsine-api/public/api";

async function fetchSitemapData() {
  try {
    const response = await fetch(`${API_URL}/sitemap`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to load sitemap: ${response.status}`);
    }

    const xmlText = await response.text();
    return xmlText;
  } catch (error) {
    console.error("Sitemap API fetch error:", error);
    return null;
  }
}

function parseSitemapXml(xmlText) {
  if (!xmlText) return [];

  const urlBlocks = xmlText.match(/<url>[\s\S]*?<\/url>/g) || [];

  return urlBlocks
    .map((block) => {
      const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1]?.trim();
      const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.trim();
      const changefreq = block
        .match(/<changefreq>(.*?)<\/changefreq>/)?.[1]
        ?.trim();
      const priority = block.match(/<priority>(.*?)<\/priority>/)?.[1]?.trim();

      if (!loc) return null;

      return {
        url: loc,
        lastModified: lastmod ? new Date(lastmod) : new Date(),
        changeFrequency: changefreq || "weekly",
        priority: priority ? parseFloat(priority) : 0.5,
      };
    })
    .filter(Boolean);
}

export default async function sitemap() {
  const xmlText = await fetchSitemapData();
  return parseSitemapXml(xmlText);
}
