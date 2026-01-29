import { useState, useEffect } from "react";

export const usePagination = (initialLimit: number = 10, resetTrigger?: string) => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(initialLimit)

    const changeLimit = (newLimit: number) => {
        setLimit(newLimit)
        setPage(1)
    }

    useEffect(() => {
        setPage(1)
    }, [resetTrigger])

    return { page, setPage, limit, changeLimit };
};
