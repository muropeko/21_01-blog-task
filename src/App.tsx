import { SearchInput, PostList } from "./components/feature";
import { usePosts } from "./hooks/queries/usePosts";
import { usePagination } from "./hooks/usePagination";
import { useSearchInput } from "./hooks/useSearchInput";

export const App = () => {
  const search = useSearchInput()
  const { page, setPage, limit, changeLimit } = usePagination(10, search.searchTerm)

  const { posts, isLoading, isFetching, totalPages } = usePosts({ page, limit, searchTerm: search.searchTerm })

  return (
    <div className="container p-4">
      <SearchInput search={search} />

      <PostList
        posts={posts}
        loading={isLoading || isFetching}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        limit={limit}
        changeLimit={changeLimit}
      />
    </div>
  );
};

export default App;