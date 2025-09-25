import type { MetadataRoute } from "next";

// robots with sitemap reference
export const dynamic = "force-static"; // force static for output: export

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://iamsaief.github.io/sitemap.xml",
  };
}
