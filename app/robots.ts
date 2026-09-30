import type { MetadataRoute } from "next";
import { SITE_URL, IS_PRODUCTION_DOMAIN } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION_DOMAIN) {
    // Copie de lucru: nu se indexează.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
