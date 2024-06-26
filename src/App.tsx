import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import PostList from "./features/posts/PostList"
import Post from "./features/posts/Post"
import PageNotFound from "./components/PageNotFound"
import AddPostPage from "./features/posts/AddPostPage"

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostList />} />
                <Route path="/post" element={<AddPostPage />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default App
