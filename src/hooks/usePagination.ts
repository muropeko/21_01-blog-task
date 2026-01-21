import { useState } from "react";
import type { IPost } from "../shared/types/post.interface";

interface Props {
    posts: IPost[];
    postsPerPage?: number;
}

export const usePagination = ({ posts, postsPerPage = 10 }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const visiblePosts = posts.slice(start, end);

    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    return {
        currentPage,
        totalPages,
        visiblePosts,
        nextPage,
        prevPage,
    };
};
