import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../../services';
import moment from 'moment';

// the actual article layout, used in postpage
const PostDetail = ({ post }) => {
  const { slug } = useParams()
  const [storedPost, setStoredPost] = useState(post); // Store the post in a state

  async function fetchData() {
    try {
      const data = await getPostDetails(slug);
      setStoredPost(data)
    } catch (error) {
      console.error('Error fetching post details', error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
  
    if (obj) {
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
  
    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
      case 'paragraph':
        return <p key={index} className="mt-6">{modifiedText}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
      case 'numbered-list':
        // For numbered lists, render the content as an ordered list (<ol>)
        return (
          <ol key={index} className="list-decimal ml-8 mb-8">
            {obj.children.map((listItem, listItemIndex) => {
              const listItemText = listItem.children[0].children[0].children[0].text;
              return <li key={listItemIndex}>{listItemText}</li>;
            })}
          </ol>
        );
      case 'image':
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
  
  if (storedPost) {
    return (
      <div className="flex flex-col mt-16 mx-6 sm:mx-24">
        <div className="mx-auto lg:mx-0 mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
            {storedPost.title}
          </h2>
          <p className="text-l sm:text-xl my-8">{storedPost.author.name}</p>
          <span className="text-sm text-gray-700">{moment(storedPost.createdAt).format('MMM DD, YYYY')}</span>
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

  return <p>Loading...</p>

};
  

export default PostDetail