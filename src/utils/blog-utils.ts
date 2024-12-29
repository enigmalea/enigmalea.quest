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

export async function getUpdates(): Promise<
  { body: string; data: BlogPostData; id: string }[]
> {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return data.draft !== true && data.tags.includes("site update");
  })) as unknown as { body: string; data: BlogPostData; id: string }[];

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });

  const updates = sorted.slice(0, 3);

  return updates;
}

export type Tag = {
  name: string;
  count: number;
};

export async function getTagList(): Promise<Tag[]> {
  const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  const countMap: { [key: string]: number } = {};
  allBlogPosts.map((post: { data: { tags: string[] } }) => {
    post.data.tags.map((tag: string) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });

  // sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
  name: string;
  count: number;
};

export async function getCategoryList(): Promise<Tag[]> {
  const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  const countMap: { [key: string]: number } = {};
  allBlogPosts.map((post: { data: { category: string[] } }) => {
    post.data.category.map((cat: string) => {
      if (!countMap[cat]) countMap[cat] = 0;
      countMap[cat]++;
    });
  });

  // sort categories
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  return keys.map((key) => ({ name: key, count: countMap[key] }));
}
