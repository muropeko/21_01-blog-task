import styles from "./PostSkeleton.module.css";

interface PostSkeletonProps {
  count?: number;
}

export const PostSkeleton = ({ count = 10 }: PostSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className={styles.postSkeleton}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonBody} />
          <div className={`${styles.skeletonBody} ${styles.short}`} />
        </div>
      ))}
    </>
  );
};
