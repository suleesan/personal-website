import React from "react";

// helper functions for rendering rich text from graphql

export const renderText = (text, obj = {}) => {
  let content = text;

  if (obj.bold) content = <b>{content}</b>;
  if (obj.italic) content = <em>{content}</em>;
  if (obj.underline) content = <u>{content}</u>;

  return content;
};

export const renderChildren = (children) => {
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

export const getContentFragment = (obj, index) => {
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
