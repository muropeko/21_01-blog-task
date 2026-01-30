import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, type PostsResponse } from "../../service/post";

interface Props {
  page?: number
  limit?: number
  searchTerm?: string
}

export const usePosts = ({ page = 1, limit = 10, searchTerm }: Props) => {
  const queryClient = useQueryClient()

  const { data, isLoading, isError, isFetching } = useQuery<PostsResponse>({
    queryKey: ["posts", page, limit, searchTerm],
    queryFn: () =>
      fetchPosts({
        _page: page,
        _limit: limit,
        title_like: searchTerm,
      }),
    placeholderData: (previous) => previous,
    staleTime: 60_000,
    refetchOnMount: false
  })

  const posts = data?.data ?? []
  const totalPages = data?.total ? Math.ceil(data.total / limit) : 1

  useEffect(() => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["posts", nextPage, limit, searchTerm],
        queryFn: () => fetchPosts({ _page: nextPage, _limit: limit, title_like: searchTerm }),
        staleTime: 60_000
      })
    }

  }, [page, limit, totalPages, searchTerm, queryClient])

  return { posts, isLoading, isError, isFetching, totalPages };
};