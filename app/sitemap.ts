import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about"];
  const projects = getProjectSlugs().map((slug) => `/projects/${slug}`);
  return [...pages, ...projects].map((path) => ({ url: `${siteUrl}${path}` }));
}