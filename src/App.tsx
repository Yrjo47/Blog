import { Routes, Route } from "react-router-dom"

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index />
                <Route path=":postId" />
            </Route>
            <Route path="/*" />
        </Routes>
    )
}

export default App
