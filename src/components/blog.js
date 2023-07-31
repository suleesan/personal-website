import React, { useState, useEffect } from "react";
import { PostCard, Categories } from "./blogcomponents";
import { getPosts } from "../services/index";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getPosts();
        const sortedPosts = fetchedPosts.sort((a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt));
        setPosts(sortedPosts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to getStaticProps

  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> 
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
            From the blog
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
            Tidbits from my life.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post, index) => (
            <PostCard
              post={post.node}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

