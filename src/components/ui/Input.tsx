import styles from './Input.module.css';

export const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />
};

