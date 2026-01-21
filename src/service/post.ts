import type { IPost } from "../shared/types/post.interface";

export const fetchPosts = async (): Promise<IPost[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};
