import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services";
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

  const renderText = (text, obj = {}) => {
    let content = text;

    if (obj.bold) content = <b>{content}</b>;
    if (obj.italic) content = <em>{content}</em>;
    if (obj.underline) content = <u>{content}</u>;

    return content;
  };

  const renderChildren = (children) => {
    return children.map((child, index) => {
      if (child.type === "link" && child.href) {
        return (
          <a
            key={index}
            href={child.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {renderChildren(child.children || [])}
          </a>
        );
      }

      if (child.text !== undefined) {
        return (
          <React.Fragment key={index}>
            {renderText(child.text, child)}
          </React.Fragment>
        );
      }

      // Handle nested blocks like list-item, paragraph, etc.
      return getContentFragment(child, index);
    });
  };

  const getContentFragment = (obj, index) => {
    const children = renderChildren(obj.children || []);

    switch (obj.type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {children}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {children}
          </h4>
        );
      case "paragraph":
        return (
          <p key={index} className="mt-6 leading-relaxed">
            {children}
          </p>
        );
      case "bulleted-list":
        return (
          <ul key={index} className="list-disc ml-8 mb-4">
            {obj.children.map((item, idx) => getContentFragment(item, idx))}
          </ul>
        );
      case "numbered-list":
        return (
          <ol key={index} className="list-decimal ml-8 mb-4">
            {obj.children.map((item, idx) => getContentFragment(item, idx))}
          </ol>
        );
      case "list-item":
        return (
          <li key={index} className="mb-2">
            {renderChildren(obj.children)}
          </li>
        );
      case "image":
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            <img
              alt={obj.title || "image"}
              src={obj.src}
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        );
      default:
        return <span key={index}>{children}</span>;
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
    <div className="flex flex-col mt-16 mb-16 max-w-4xl mx-auto">
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
