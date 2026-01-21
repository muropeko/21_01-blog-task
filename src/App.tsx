import { useEffect, useState } from "react"
import { PostList } from "./components/feature"
import type { IPost } from "./shared/types/post.interface"

function App() {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
      setPosts(data)
    }
    fetchPosts()
  }, [])

return (
  <div className="container">
    <PostList posts={posts} />
  </div>
)
}

export default App
