import rss from "@astrojs/rss";
import { siteConfig } from "@/site-config";
import { getAllPostsForRss } from "../../sanity/lib/posts";
import { portableTextToPlainText } from "../../sanity/lib/portable-text";

export const GET = async () => {
	const posts = await getAllPostsForRss();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.title,
			description: portableTextToPlainText(post.body ?? []).slice(0, 160) || post.title,
			pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
			link: `posts/${post.slug}`,
		})),
	});
};
