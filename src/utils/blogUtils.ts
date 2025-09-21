import matter from 'gray-matter';
import { BlogPost } from "../components/BlogPost";

export const blogPosts: BlogPost[] = [
  // Will be populated from masrkdown files
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};