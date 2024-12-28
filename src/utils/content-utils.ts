import type { BlogPostData } from "../types/config";
import { getCollection } from "astro:content";

export async function getSortedPosts(): Promise<
  { body: string; data: BlogPostData; id: string }[]
> {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as { body: string; data: BlogPostData; id: string }[];

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });

  return sorted;
}
