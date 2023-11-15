import PostsPage from "./routes/posts/PostsPage";
import MainPage from "./routes/main/MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
        <Route path="*" element={<p>Ничего не найдено</p>} />
      </Routes>
    </div>
  );
}

export default App;
