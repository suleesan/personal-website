import React, { useState } from "react";
import AvoglowLogin from "../images/Avoglow Login Page.png";
import AvoglowHome from "../images/Avoglow Home Page.png";
import AvoglowSymptoms from "../images/Avoglow Sympoms Page.png";
import AvoglowCalendar from "../images/Avoglow Calendar Page.png";
import Spotify from "../images/Spotify Top Tracks Project.png";
import BlogPage from "../images/blogpost.png";
import LoginBlog from "../images/logincomment.png";
import CommentBlog from "../images/makingacomment.png";
import PersonalWebsite from "../images/personal website.png";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        open === true ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Projects() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleOpen = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  const accordionData = [
    {
      project: "Avoglow",
      description:
        "Avoglow is a skincare app inspired by Clue. My friends and I created this app using React Native. Users can record their daily skin symptoms (such as breakouts and dryness), save their logs into a calendar, and access skincare tips. We also created support for user authentication with Supabase.",
      images: [AvoglowLogin, AvoglowHome, AvoglowSymptoms, AvoglowCalendar],
    },
    {
      project: "Top Spotify Tracks",
      description:
        "Using React Native, I made an app that created a playlist of a user’s top Spotify tracks, utilizing the Spotify API to enable users to connect with their account.",
      images: [Spotify],
    },
    {
      project: "Prototype of This Website",
      description:
        "I designed an early version of this website using HTML, CSS, and JavaScript. I also used REST APIs, Node.js, Express, and MongoDB for the backend to create a commenting feature on the blog page. By logging in with a name, users could access all the comments posted on the blog, make their own comments, and also edit their display name.",
      images: [BlogPage, LoginBlog, CommentBlog],
    },
    {
      project: "This website!",
      description:
        "I designed this website from scratch using Figma and built it using React. I've attached an image of what my original Figma design looked like.",
      images: [PersonalWebsite],
    },
    {
      project: "Building: Pokemon Gym",
      description:
        "Still in design, but currently creating an app combining my love for Pokemon and the gym.",
      images: [],
    },
  ];

  return (
    <div className="flex flex-col mt-16 mx-24">
      <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
        <h2 className="text-5xl font-bold tracking-tight text-primary-500 sm:text-5xl">
          Projects
        </h2>
      </div>
      <div id="accordion" className="mx-8">
        {accordionData.map((item, index) => (
          <div key={index} className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
              onClick={() => handleOpen(index)}
            >
              <h2 className="flex flex-row justify-between text-2xl font-bold">
                {item.project}
              </h2>
              <Icon id={index} open={openIndexes.includes(index)} />
            </button>
            {openIndexes.includes(index) && (
              <div className="overflow-hidden">
                <div className="inline-block w-full py-4 px-4 text-gray-700 text-sm font-light leading-normal">
                  <p className="text-lg">{item.description}</p>
                  {item.images && (
                    <div className="flex flex-shrink mt-4">
                      {item.images.map((image, imageIndex) => (
                        <div className="w-full max-w-sm mx-auto mt-2 px-2">
                          <img
                            key={imageIndex}
                            src={image}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
