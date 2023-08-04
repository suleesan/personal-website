import React, { useState, useEffect } from 'react';
import moment from 'moment';

// the actual article layout, used in postpage
const PostDetail = ({ post }) => {
  // console.log(post)
  // const [storedPost, setStoredPost] = useState(post); // Store the post in a state

  // useEffect(() => {
  //   // Save the post data to Local Storage whenever it changes
  //   localStorage.setItem(post.slug, JSON.stringify(storedPost));
  // }, [storedPost, post.slug]);

  // const getContentFragment = (index, text, obj, type) => {
  //   let modifiedText = text;
  
  //   if (obj) {
  //     if (obj.bold) {
  //       modifiedText = [<b key={index}>{text}</b>];
  //     }
  
  //     if (obj.italic) {
  //       modifiedText = [<em key={index}>{text}</em>];
  //     }
  
  //     if (obj.underline) {
  //       modifiedText = [<u key={index}>{text}</u>];
  //     }
  //   }
  
  //   switch (type) {
  //     case 'heading-three':
  //       return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
  //     case 'paragraph':
  //       return <p key={index} className="mb-8">{modifiedText}</p>;
  //     case 'heading-four':
  //       return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
  //     case 'numbered-list':
  //       // For numbered lists, render the content as an ordered list (<ol>)
  //       return <ol key={index} className="list-decimal ml-8 mb-8">{modifiedText}</ol>;
  //     case 'image':
  //       if (obj) {
  //         return (
  //           <img
  //             key={index}
  //             alt={obj.title}
  //             height={obj.height}
  //             width={obj.width}
  //             src={obj.src}
  //           />
  //         );
  //       } else {
  //         // If obj is null, return the original text without modification
  //         return text;
  //       }
  //     default:
  //       return modifiedText;
  //   }
  // };

  return (
    <p>Please check back later!</p>
    // <div className="flex flex-col mt-16 mx-6 sm:mx-24">
    //   <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
    //     <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
    //       {storedPost.title}
    //     </h2>
    //     <p>{storedPost.author.name}</p>
    //     <span>{moment(storedPost.createdAt).format('MMM DD, YYYY')}</span>
    //     {console.log(storedPost.content.raw)}
    //     {storedPost.content.raw.children.map((typeObj, index) => {
    //       const children = typeObj.children.map((item, itemindex) =>
    //         getContentFragment(itemindex, item.text, item)
    //       );

    //       return getContentFragment(index, children, typeObj, typeObj.type);
    //     })}
    //   </div>
    // </div>
  );
};
  
//   return (
//     <div className="flex flex-col mt-16 mx-6 sm:mx-24">
//       <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
//         <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
//           {post.title}
//         </h2>
//         <p>{post.author.name}</p>
//         <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
//         {console.log(post.content.raw)}
//         {/* the article has different components that we need itemindex for */}
//         {post.content.raw.children.map((typeObj, index) => {
//             const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

//             return getContentFragment(index, children, typeObj, typeObj.type);
//           })}
//       </div>
//     </div>
//   )
// }

export default PostDetail