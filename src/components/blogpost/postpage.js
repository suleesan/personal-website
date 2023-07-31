import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails, getPosts } from '../../services';
import PostDetail from '../blogcomponents/postdetail';

const PostDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPost = await getPostDetails(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    }

    async function fetchPaths() {
      try {
        const posts = await getPosts();
        const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));
        setPaths(paths);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPaths();
    fetchData();
  }, [slug]);

  // Check if the current slug is in the fetched paths array
  const validSlug = paths.some((path) => path.params.slug === slug);

  // Render the PostDetail component only if the slug is valid
  return validSlug ? (
    <div className="flex flex-col mt-16 mx-6 sm:mx-24">
      <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
        <PostDetail post={post} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PostDetails;
