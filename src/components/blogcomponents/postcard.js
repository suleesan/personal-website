import React from "react";
import moment from "moment";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <div className="flex max-w-xl flex-col items-start justify-between rounded-lg shadow-md shadow-slate-500/50 sm: p-8 hover:bg-neutral-50">
    <div className="flex items-center gap-x-2 sm:gap-x-4 text-xs">
      <span className="text-gray-500">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </span>
    </div>
    <div className="group relative">
      <h3 className="mt-3 text-base sm:text-lg font-semibold leading-6 text-primary-500 group-hover:text-primary-700">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="flex text-center items-center justify-start mb-8 w-full">
        <div className="flex mb-4 lg:mb-0">
          {/* TODO import a better profile pic LOL */}
          {/* <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
            style={{ borderRadius: '50%' }} // Add this style to make the image circular
          /> */}
          <p className="inline align-middle text-gray-700 font-medium text-sm ml-0">
            {post.author.name}
          </p>
        </div>
      </div>
      <p className="mt-4 sm:mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {post.description}
      </p>
    </div>
  </div>
);

export default PostCard;
