import type { IPost } from "../../../shared/types/post.interface";
import { PostCard } from "./PostCard";
import styles from "./PostList.module.css";

interface PostListProps {
  posts: IPost[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.postList}>
      {posts.length ? (
        posts.map(post => <PostCard key={post.id} post={post} />)
      ) : (
        <h1>No posts</h1>
      )}
    </div>
  );
};