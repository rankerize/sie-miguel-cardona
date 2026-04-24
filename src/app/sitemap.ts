import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://siediving.com";

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/cursos-padi/open-water", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/cursos-padi/advanced", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/destinos/santa-marta", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/destinos/providencia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/destinos/isla-fuerte", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}/es${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${SITE_URL}/es${path}`,
        en: `${SITE_URL}/en${path}`,
        "x-default": `${SITE_URL}/es${path}`,
      },
    },
  }));
}
