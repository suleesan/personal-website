import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services";
import moment from "moment";

// the actual article layout
const PostDetail = ({ post }) => {
  const { slug } = useParams();
  const [storedPost, setStoredPost] = useState(post); // Store the post in a state

  async function fetchData() {
    try {
      const data = await getPostDetails(slug);
      setStoredPost(data);
    } catch (error) {
      console.error("Error fetching post details", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    // Handle text formatting
    if (obj) {
      if (obj.href) {
        modifiedText = (
          <a
            key={index}
            href={obj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {text}
          </a>
        );
      }
      if (obj.bold) {
        modifiedText = [<b key={index}>{text}</b>];
      }
      if (obj.italic) {
        modifiedText = [<em key={index}>{text}</em>];
      }
      if (obj.underline) {
        modifiedText = [<u key={index}>{text}</u>];
      }
    }

    // Handle different types
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mt-6">
            {modifiedText}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText}
          </h4>
        );
      case "numbered-list":
        return (
          <ol key={index} className="list-decimal ml-8 mb-8">
            {obj.children.map((listItem, listItemIndex) => {
              return renderListItems(listItemIndex, listItem);
            })}
          </ol>
        );
      case "bulleted-list":
        return (
          <ul key={index} className="list-disc ml-8 mb-8">
            {obj.children.map((listItem, listItemIndex) => {
              return renderListItems(listItemIndex, listItem);
            })}
          </ul>
        );
      case "image":
        if (obj) {
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        } else {
          // If obj is null, return the original text without modification
          return text;
        }
      default:
        return modifiedText;
    }
  };

  const renderListItems = (index, listItem) => {
    // rendering for nested list-item structures
    return (
      <li key={index} className="mb-4">
        {listItem.children.map((child, childIndex) => {
          if (child.type === "list-item-child") {
            return getContentFragment(
              childIndex,
              child.children[0].text,
              child,
              child.type
            );
          } else {
            return getContentFragment(
              childIndex,
              child.text,
              child,
              child.type
            );
          }
        })}
      </li>
    );
  };

  if (storedPost) {
    return (
      <div className="flex flex-col mt-16 mb-16 max-w-4xl mx-auto justify-center items-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
          {storedPost.title}
        </h2>
        <p className="text-l sm:text-xl my-8">{storedPost.author.name}</p>
        <span className="text-sm text-gray-700">
          {moment(storedPost.createdAt).format("MMM DD, YYYY")}
        </span>
        <div className="mx-auto max-w-2xl">
          {storedPost.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Loading...</p>
    </div>
  );
};

export default PostDetail;
