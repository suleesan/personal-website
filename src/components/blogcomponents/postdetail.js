import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services";
import moment from "moment";

// the actual article layout
const PostDetail = ({ post }) => {
  const { slug } = useParams();
  const [storedPost, setStoredPost] = useState(post);

  async function fetchData() {
    try {
      const data = await getPostDetails(slug);
      setStoredPost(data);
    } catch (error) {
      console.error("Error fetching post details", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0); // fix bug where post opens to middle of page...?
    fetchData();
  }, []);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    // Handle text
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
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <img
                alt={obj.title}
                style={{
                  maxWidth: "400px",
                  maxHeight: "400px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                src={obj.src}
              />
            </div>
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
      <div className="flex flex-col mt-16 mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
          {storedPost.title}
        </h2>
        <div className="my-4 flex flex-row items-center gap-4">
          <img
            alt={storedPost.author.name}
            src={storedPost.author.photo.url}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <p className="text-sm sm:text-l">{storedPost.author.name}</p>
            <p className="text-xs sm:text-m text-gray-700">
              {moment(storedPost.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div class="w-full h-[1px] bg-gray-300" />
        <div className="max-w-2xl font-serif">
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
