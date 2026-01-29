import styles from "./SelectLimit.module.css";

interface Props {
  limit: number
  onChange: (value: number) => void
}

export const SelectLimit = ({ limit, onChange }: Props) => {
  const options = [5, 10, 20, 50]

  return (
    <div className={styles.wrapper}>
      <select
        value={limit}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.select}
      >
        {options.map(n => <option value={n}>{n} per page</option>)}

      </select>
    </div>
  );
};
