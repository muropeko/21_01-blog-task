import type { IPost } from "../../../shared/types/post.interface";
import { PostCard } from "./PostCard";
import styles from "./PostList.module.css";
import { PostSkeleton } from "./PostSkeleton";

interface PostListProps {
  posts: IPost[];
  loading: boolean;
}

export const PostList = ({ posts, loading }: PostListProps) => {
  return (
    <div className={styles.postList}>
      {loading ? (
        <PostSkeleton />
      ) : posts.length > 0 ? (
        posts.map(post => <PostCard key={post.id} post={post} />)
      ) : (
        <h1>No posts</h1>
      )}
    </div>
  );
};
