import { PostList } from "./components/feature"
import { usePosts } from "./hooks/usePosts"

function App() {
  const { posts, loading } = usePosts()

return (
  <div className="container">
    <PostList posts={posts} loading={loading} />
  </div>
)
}

export default App
