import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Blog from "./components/blog";
import PostDetail from "./components/blogcomponents/postdetail";
import Playground from "./components/playground";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          <Route path="post/:slug" element={<PostDetail />} />
          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
