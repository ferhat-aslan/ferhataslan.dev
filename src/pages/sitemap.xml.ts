import type {APIRoute} from "astro";
import {getAllPostSlugs} from "../../sanity/lib/posts";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async () => {
  const base = (import.meta.env.SITE || "").replace(/\/+$/, "");
  const slugs = await getAllPostSlugs();

  const staticUrls = ["/", "/posts/", "/projects/", "/about/", "/interest/"];

  const urls = [
    ...staticUrls.map((path) => `${base}${path}`),
    ...slugs.map((slug) => `${base}/posts/${slug}/`),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((loc) => `<url><loc>${xmlEscape(loc)}</loc></url>`).join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
