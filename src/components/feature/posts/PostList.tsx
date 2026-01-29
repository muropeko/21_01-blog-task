import { PostCard, PostSkeleton } from ".";
import type { IPost } from "../../../shared/types/post.interface";
import { Pagination } from "../pagination";
import styles from "./PostList.module.css";

interface PostListProps {
  posts: IPost[];
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  limit: number;
  changeLimit: (newLimit: number) => void;
}

export const PostList = ({
  posts,
  loading,
  page,
  setPage,
  totalPages,
  limit,
  changeLimit,
}: PostListProps) => {
  const nextPage = () => setPage(Math.min(page + 1, totalPages))
  const prevPage = () => setPage(Math.max(page - 1, 1))

  return (
    <div className={styles.container}>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        limit={limit}
        changeLimit={changeLimit}
      />

      <div className={styles.postList}>
        {loading
          ? Array.from({ length: limit }).map((_, i) => <PostSkeleton key={i} />)
          : posts.length > 0
          ? posts.map((post) => <PostCard key={post.id} post={post} />)
          : <h1>No posts</h1>}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
};
