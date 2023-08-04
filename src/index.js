import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Blog from './components/blog';
import PostDetails from './components/blogpost/postpage';
import { PostProvider } from './components/blogcomponents/postcontext';

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Intro />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
            <Route path="blog" element={<Blog/>} />
            <Route path="post/:slug" element={<PostDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
