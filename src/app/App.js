import PostsPage from "../pages/posts/PostsPage";
import MainPage from "../pages/main/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
        <Route path="*" element={<p>Такой страницы не существует</p>} />
      </Routes>
    </div>
  );
}

export default App;
