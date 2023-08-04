import { createContext, useContext, useState, useEffect } from "react";
import { getPosts } from "../../services";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to getStaticProps

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
