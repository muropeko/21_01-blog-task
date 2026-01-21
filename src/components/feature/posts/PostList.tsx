import type { IPost } from "../../../shared/types/post.interface";
import { PostCard } from "./PostCard";
import { PostSkeleton } from "./PostSkeleton";
import styles from "./PostList.module.css";
import { usePagination } from "../../../hooks/usePagination";
import { Pagination } from "../pagination";

interface PostListProps {
  posts: IPost[];
  loading: boolean;
}

export const PostList = ({ posts, loading }: PostListProps) => {
  const {
    currentPage,
    totalPages,
    visiblePosts,
    nextPage,
    prevPage,
  } = usePagination({
    posts
  });

  const pagination = (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );

  return (
    <>
      {pagination}

      <div className={styles.postList}>
        {loading ? (
          <PostSkeleton />
        ) : visiblePosts.length > 0 ? (
          visiblePosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <h1>No posts</h1>
        )}
      </div>

      {pagination}
    </>
  );
};
