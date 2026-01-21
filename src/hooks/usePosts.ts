import { useState, useEffect } from 'react';
import type { IPost } from '../shared/types/post.interface';
import { fetchPosts } from '../service/post';

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
};