import type { IPost } from '../../../shared/types/post.interface';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postBody}>{post.body}</p>
    </div>
  );
};
