import type { MetadataRoute } from "next";

// robots with sitemap reference
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://iamsaief.github.io/sitemap.xml",
  };
}
