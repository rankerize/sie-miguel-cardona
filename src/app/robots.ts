import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://siediving.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,       // Unified sitemap with hreflang
      `${SITE_URL}/sitemap-es.xml`,    // ES only → submit to GSC España/Colombia
      `${SITE_URL}/sitemap-en.xml`,    // EN only → submit to GSC English markets
    ],
  };
}
