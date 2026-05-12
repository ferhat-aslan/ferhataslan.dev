import type {QueryParams} from "sanity";
import {loadQuery} from "./load-query";

export type SanityPostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  mainImage?: unknown;
};

export type SanityPost = SanityPostListItem & {
  body?: unknown[];
};

export type SanityPostRssItem = {
  title: string;
  slug: string;
  publishedAt?: string;
  body?: unknown[];
};

export async function getAllPostSlugs() {
  const res = await loadQuery<string[]>({
    query: `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){"slug": slug.current}.slug`,
  });

  return res.data ?? [];
}

export async function getAllPostsForListing() {
  const res = await loadQuery<SanityPostListItem[]>({
    query: `
      *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        mainImage,
      }
    `,
  });

  return res.data ?? [];
}

export async function getPostBySlug(slug: string) {
  const params: QueryParams = {slug};
  const res = await loadQuery<SanityPost | null>({
    query: `
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        mainImage,
        body,
      }
    `,
    params,
  });

  return res.data ?? null;
}

export async function getAllPostsForRss(limit = 50) {
  const res = await loadQuery<SanityPostRssItem[]>({
    query: `
      *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit]{
        title,
        "slug": slug.current,
        publishedAt,
        body
      }
    `,
    params: {limit},
  });

  return res.data ?? [];
}
