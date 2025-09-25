import type { MetadataRoute } from "next";

// minimal static sitemap for a single-page portfolio
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iamsaief.github.io";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
