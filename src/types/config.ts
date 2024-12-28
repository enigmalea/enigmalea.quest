export type BlogPostData = {
  content: string;
  title: string;
  published: Date;
  updated?: Date;
  description: string;
  tags: string[];
  draft?: boolean;
  image?: string;
  category: string[];
};
