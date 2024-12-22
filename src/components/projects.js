import React, { useState } from "react";
import AvoglowLogin from "../images/Avoglow Login Page.png";
import AvoglowHome from "../images/Avoglow Home Page.png";
import AvoglowSymptoms from "../images/Avoglow Sympoms Page.png";
import AvoglowCalendar from "../images/Avoglow Calendar Page.png";
import Spotify from "../images/Spotify Top Tracks Project.png";
import Twitter from "../images/twitter clone.png";
import WordleLight from "../images/Wordle Light.png";
import WordleDark from "../images/Wordle Dark.png";
import Pokedex from "../images/pokedex.png";
import KindKitchen1 from "../images/KindKitchen 18.25.49.png";
import KindKitchen2 from "../images/KindKitchen 18.25.56.png";
import KindKitchen3 from "../images/KindKitchen 18.26.04.png";
import KindKitchen4 from "../images/KindKitchen 18.26.24.png";
import CourseCalendar from "../images/CourseCalendar.png";
import { verifyPassword } from "../protected/passwordUtils";

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
  const [openSecretIndexes, setOpenSecretIndexes] = useState([]); // For secret projects
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [protectedProjects, setProtectedProjects] = useState([]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await verifyPassword(password);
      setProtectedProjects(data);
      setIsAuthorized(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleOpen = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  const handleOpenSecret = (index) => {
    setOpenSecretIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const accordionData = [
    {
      project: "Avoglow",
      description: (
        <p className="text-lg">
          Avoglow is a skincare app inspired by Clue. My friends and I created
          this app using React Native. Users can record their daily skin
          symptoms (such as breakouts and dryness), save their logs into a
          calendar, and access skincare tips. We also created support for user
          authentication with Supabase.
        </p>
      ),
      images: [AvoglowLogin, AvoglowHome, AvoglowSymptoms, AvoglowCalendar],
    },
    {
      project: "Top Spotify Tracks",
      description: (
        <p className="text-lg">
          Using React Native, I made an app that created a playlist of a user’s
          top Spotify tracks, utilizing the Spotify API to enable users to
          connect with their account.
        </p>
      ),
      images: [Spotify],
    },
    {
      project: "Twitter Clone",
      description: (
        <p className="text-lg">
          I created a simple Twitter clone using HTML, CSS, and JavaScript.
          Using Node.js and Express.js, I implemented a REST API to interact
          with a MongoDB database to enable users to create a profile, log in,
          create posts, comment on other users’ posts on their feed, and follow
          or unfollow other users.
        </p>
      ),
      images: [Twitter],
    },
    {
      project: "Wordle",
      link: [
        "https://wordle-two-khaki.vercel.app/",
        "https://github.com/suleesan/wordle",
      ],
      description: (
        <p className="text-lg">
          Click the title to try it out! Feeling too impatient to wait every day
          for a new Wordle, I decided to build my own using React. Features
          unlimited plays, light/dark mode, and valid guesses and answers
          according to the actual NYT Wordle. Future improvements: Hard Mode.
        </p>
      ),
      images: [WordleDark, WordleLight],
    },
    {
      project: "Pokedex",
      link: [
        "https://pokedex-one-cyan.vercel.app/",
        "https://github.com/suleesan/pokedex",
      ],
      description: (
        <p className="text-lg">
          Click the title to play with my Pokedex! I'm currently cooking up a
          different project that involves Pokemon, but while I was playing
          around with the PokeAPI, I thought I'd build a super quick Pokedex
          with React. It features the first 50 Pokemon in the Pokedex and has a
          search feature (currently still in the process of figuring out how to
          load more Pokemon efficiently). I also used Redux and local storage to
          archive data and reduce load time. Enjoy!
        </p>
      ),
      images: [Pokedex],
    },
    {
      project: "KindKitchen",
      link: [
        "https://devpost.com/software/openplate",
        "https://github.com/collinjung/kindkitchen",
      ],
      description: (
        <p className="text-lg">
          For TreeHacks 2024, my team and I built KindKitchen using React Native
          and Convex. We aimed to connect patients to cultural, home-cooked
          meals provided by volunteers and allow users to opt-in to shared meal
          experiences to combat loneliness and isolation in their treatment
          journey. Users can specify dietary restrictions and preferences to
          filter meals, request a meal to be delivered, or alternatively if no
          meals are available, chat with an AI chatbot that provides
          easy-to-cook recipes tailored to the user’s restrictions/preferences.
        </p>
      ),
      images: [KindKitchen1, KindKitchen2, KindKitchen3, KindKitchen4],
    },
    {
      project: "Course Calendar",
      link: [
        "https://course-calendar.vercel.app/",
        "https://github.com/suleesan/course-calendar",
      ],
      description: (
        <p className="text-lg">
          This is a simple course planner built with React and Supabase where I
          plan out my course schedules for every quarter. I used to do this on
          my iPad and draw out the classes; solutions exist (ex: Carta,
          onCourse) where they'll automatically plan out quarters for you, but I
          like the manual aspect. Users can add/delete/update classes per
          quarter, switch between quarters, and share their calendars. All data
          is saved with local storage. View mine{" "}
          <a
            href="https://course-calendar.vercel.app/?id=df856d13-5769-4869-af5f-807484548d91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:bg-gray-100 hover:px-1 rounded-lg"
          >
            here
          </a>
          !
        </p>
      ),
      images: [CourseCalendar],
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
        {accordionData
          .slice()
          .reverse()
          .map((item, index) => (
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
                    {item.description}
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
      <div className="mt-12">
        {!isAuthorized ? (
          <div className="mb-24">
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-primary-500">
              Secret Projects :P
            </h3>
            <div className="flex justify-center mt-8">
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-md"
                />
                <button
                  type="submit"
                  className="ml-4 bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div id="accordion" className="sm:mx-8 mb-24">
            {protectedProjects.map((item, index) => (
              <div key={index} className="block relative w-full">
                <button
                  type="button"
                  className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
                  onClick={() => handleOpenSecret(index)}
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
                        {item.project_name}
                      </a>
                    ) : (
                      item.project_name
                    )}
                  </h2>
                  <Icon id={index} open={openSecretIndexes.includes(index)} />
                </button>
                {openSecretIndexes.includes(index) && (
                  <div className="overflow-hidden">
                    <div className="inline-block w-full py-4 px-4 text-gray-700 text-sm font-light leading-normal">
                      <p className="text-lg">{item.description}</p>
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
        )}
      </div>
    </div>
  );
}
