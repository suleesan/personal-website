import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <div className="flex max-w-xl flex-col items-start justify-between rounded-lg shadow-md shadow-slate-500/50 sm: p-8 hover:bg-neutral-50">
    <Link to={`/post/${post.slug}`}>
      <div className="flex items-center gap-x-2 sm:gap-x-4 mb-2 text-xs">
        <span className="text-gray-500">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>
      {post.image && (
        <div className="pt-2 h-48 overflow-hidden flex justify-center items-center">
          <img
            alt={post.title}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            src={post.image.url}
          />
        </div>
      )}
      <div>
        <h3 className="mt-3 text-base sm:text-lg font-semibold leading-6 text-primary-500 group-hover:text-primary-700">
          {post.title}
        </h3>
        <div className="flex text-center items-center justify-start mb-4 w-full">
          <div className="flex">
            <p className="inline align-middle text-gray-700 font-medium text-sm ml-0">
              {post.author.name}
            </p>
          </div>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
    </Link>
  </div>
);

export default PostCard;
