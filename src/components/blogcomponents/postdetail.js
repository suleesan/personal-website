import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services";
import { getContentFragment } from "../../helpers";
import moment from "moment";

const PostDetail = ({ post }) => {
  const { slug } = useParams();
  const [storedPost, setStoredPost] = useState(post);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getPostDetails(slug);
      setStoredPost(data);
    } catch (error) {
      console.error("Error fetching post details", error);
    }
  };

  if (!storedPost) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-16 mb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
        {storedPost.title}
      </h2>
      <div className="my-4 flex flex-row items-center gap-4">
        <img
          alt={storedPost.author.name}
          src={storedPost.author.photo.url}
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <div>
          <p className="text-sm sm:text-l">{storedPost.author.name}</p>
          <p className="text-xs sm:text-m text-gray-700">
            {moment(storedPost.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="max-w-2xl font-serif">
        {storedPost.content.raw.children.map((block, index) =>
          getContentFragment(block, index)
        )}
      </div>
    </div>
  );
};

export default PostDetail;
