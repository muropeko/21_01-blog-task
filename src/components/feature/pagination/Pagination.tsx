import { ArrowLeft, ArrowRight } from "lucide-react";
import { SelectLimit } from "../select/SelectLimit";
import styles from "./Pagination.module.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  limit?: number;
  changeLimit?: (newLimit: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  limit,
  changeLimit,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button onClick={prevPage} disabled={currentPage <= 1}>
        <ArrowLeft />
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button onClick={nextPage} disabled={currentPage >= totalPages}>
        <ArrowRight />
      </button>

      {limit !== undefined && changeLimit && (
        <SelectLimit limit={limit} onChange={changeLimit} />
      )}
    </div>
  );
};
