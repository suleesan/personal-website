import React, { useState } from "react";
import AvoglowLogin from "../images/Avoglow Login Page.png";
import AvoglowHome from "../images/Avoglow Home Page.png";
import AvoglowSymptoms from "../images/Avoglow Sympoms Page.png";
import AvoglowCalendar from "../images/Avoglow Calendar Page.png";
import Spotify from "../images/Spotify Top Tracks Project.png";
import Twitter from "../images/twitter clone.png";
import PersonalWebsite from "../images/personal website.png";
import WordleLight from "../images/Wordle Light.png";
import WordleDark from "../images/Wordle Dark.png";
import Pokedex from "../images/pokedex.png";
import KindKitchen1 from "../images/KindKitchen 18.25.49.png";
import KindKitchen2 from "../images/KindKitchen 18.25.56.png";
import KindKitchen3 from "../images/KindKitchen 18.26.04.png";
import KindKitchen4 from "../images/KindKitchen 18.26.24.png";

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
      project: "Twitter Clone",
      description:
        "I created a simple Twitter clone using HTML, CSS, and JavaScript. Using Node.js and Express.js, I implemented a REST API to interact with a MongoDB database to enable users to create a profile, log in, create posts, comment on other users’ posts on their feed, and follow or unfollow other users.",
      images: [Twitter],
    },
    {
      project: "This Website",
      description:
        "I designed this website from scratch using Figma and built it using React and styled it with Tailwind. I'm using GraphCMS (Hygraph) for the blog. I've attached an image of what my original Figma design looked like.",
      images: [PersonalWebsite],
    },
    {
      project: "Wordle",
      link: [
        "https://wordle-two-khaki.vercel.app/",
        "https://github.com/suleesan/wordle",
      ],
      description:
        "Click the title to try it out! Feeling too impatient to wait every day for a new Wordle, I decided to build my own using React. Features unlimited plays, light/dark mode, and valid guesses and answers according to the actual NYT Wordle. Future improvements: Hard Mode.",
      images: [WordleDark, WordleLight],
    },
    {
      project: "Pokedex",
      link: [
        "https://pokedex-one-cyan.vercel.app/",
        "https://github.com/suleesan/pokedex",
      ],
      description:
        "Click the title to play with my Pokedex! I'm currently cooking up a different project up that involves Pokemon, but while I was playing around with the PokeAPI, I thought I'd build a super quick Pokedex with React. It features the first 50 Pokemon in the Pokedex and has a search feature (currently still in the process of figuring out how to load more Pokemon efficiently). I also used Redux and local storage to archive data and reduce load time. Enjoy!",
      images: [Pokedex],
    },
    {
      project: "KindKitchen",
      link: [
        "https://devpost.com/software/openplate",
        "https://github.com/collinjung/kindkitchen",
      ],
      description:
        "For TreeHacks 2024, my team and I built KindKitchen using React Native and Convex. We aimed to connect patients to cultural, home-cooked meals provided by volunteers and allow users to opt-in to shared meal experiences to combat loneliness and isolation in their treatment journey. Users can specify dietary restrictions and preferences to filter meals, request a meal to be delivered, or alternatively if no meals are available, chat with an AI chatbot that provides easy-to-cook recipes tailored to the user’s restrictions/preferences.",
      images: [KindKitchen1, KindKitchen2, KindKitchen3, KindKitchen4],
    },
  ];

  return (
    <div className="flex flex-col mt-16 mx-6 sm:mx-24">
      <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
          Projects
        </h2>
      </div>
      <div id="accordion" className="sm:mx-8">
        {accordionData.map((item, index) => (
          <div key={index} className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
              onClick={() => handleOpen(index)}
            >
              <h2
                className={`flex flex-row justify-between text-xl sm:text-2xl font-bold ${
                  item.link ? "hover:text-primary-500" : ""
                }`}
              >
                {item.link ? (
                  <a
                    href={item.link[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 rounded-lg hover:px-2 hover:py-1.5 hover:bg-gray-100"
                  >
                    {item.project}
                  </a>
                ) : (
                  item.project
                )}
              </h2>
              <Icon id={index} open={openIndexes.includes(index)} />
            </button>
            {openIndexes.includes(index) && (
              <div className="overflow-hidden">
                <div className="inline-block w-full py-4 px-4 text-gray-700 text-sm font-light leading-normal">
                  <p className="text-lg">{item.description}</p>
                  {item.link && (
                    <p className="mt-2 text-lg">
                      For the code, click{" "}
                      <a
                        href={item.link[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:bg-gray-100 hover:px-1 rounded-lg"
                      >
                        here
                      </a>
                      .
                    </p>
                  )}
                  {item.images && (
                    <div className="flex flex-col sm:flex-row sm:flex-shrink mt-4">
                      {item.images.map((image, imageIndex) => (
                        <div className="w-full max-w-sm mx-auto mt-2 px-2">
                          <img
                            key={imageIndex}
                            src={image}
                            alt="project images"
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
