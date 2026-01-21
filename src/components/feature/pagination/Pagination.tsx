import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Pagination.module.css";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
}

export const Pagination = ({ 
    currentPage, 
    totalPages, 
    nextPage, 
    prevPage 
}: PaginationProps) => {
    return (
        <div className={styles.pagination}>
            <button onClick={prevPage} disabled={currentPage <= 1}><ArrowLeft /></button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage >= totalPages}><ArrowRight /></button>
        </div>
    );
};
