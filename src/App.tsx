import { PostList, SearchInput } from "./components/feature"
import { usePosts } from "./hooks/usePosts"

function App() {
  const { posts, loading } = usePosts()

  return (
    <div className="container">
      <SearchInput posts={posts} />
      <PostList posts={posts} loading={loading} />
    </div>
  )
}

export default App
