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
  const [openMusicIndexes, setOpenMusicIndexes] = useState([]); // For music projects

  const handleOpen = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  const handleOpenMusic = (index) => {
    setOpenMusicIndexes((prevIndexes) => {
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
          with React. It features Pokemon from Generations I to IV in the
          Pokedex and has a search feature. It fetches Pokemon upon
          click/search; I also used Redux and local storage to save the data and
          reduce load time. Enjoy!
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

  const musicProjects = [
    {
      project: "Pokemon Gold/Silver/Crystal Violin Cover",
      link: ["https://youtu.be/fUDsSFXgPqQ?si=dVLjqvXTnfHX_0Jf"],
      description: (
        <>
          <p className="text-lg">
            Recorded in 2020, I meticulously combed through various
            transcriptions, combined them, and edited them after listening to
            the original soundtrack countless times to create the most accurate
            cover I could. This was one of the times I was grateful for perfect
            pitch because many of the transcriptions I found had errors that I
            had to fix. It was also difficult to piece these together because of
            Acapella's 1 minute limit for videos back then. I also had to edit
            the transcriptions I found as they were usually piano transcriptions
            and had to figure out how to divide them up into different violin
            parts. I poured my soul into this cover and the result is this
            video!
          </p>
          <p className="text-lg mt-4">
            My personal favorite tracks are Violet/Olivine City, the SURF THEME,
            Route 26, and the ending credits.
          </p>
        </>
      ),
      images: [],
    },
    {
      project: "Howl's Moving Castle Violin and Piano Cover",
      link: ["https://youtu.be/imgXrUz7hso?si=FiyEmBLfbnlXUldU"],
      description: (
        <p className="text-lg">
          Also recorded in 2020, this is one of my earlier attempts at creating
          covers (and certainly sounds a bit rougher). I similarly found various
          transcriptions of the theme, combined them, figured out the different
          parts, and edited them for accuracy to create this cover. Fun fact: I
          tuned my G string down to an F for one of the cuts (one of my FAVORITE
          parts of the piece). Can you find it?
        </p>
      ),
      images: [],
    },
    {
      project: "Your Lie in April Chopin Ballade No. 1 Violin/Piano Cover",
      link: ["https://youtu.be/-yIUO15h3zY?si=dzwuWgRCOsRuBx2B"],
      description: (
        <p className="text-lg">
          Also recorded in 2020 (I had a lot of time on my hands). I think this
          one was the most difficult one I put together as I am a much better
          violinist than I am a pianist. I learned the entirety of Chopin's
          Ballade on my own to make this cover, but chose to only record the
          excerpt with the violin (coincidentally also my favorite part of the
          original piano piece as well). Learning the piano part was definitely
          the hardest part of this project. While not perfect, I loved making
          this!
        </p>
      ),
      images: [],
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
                key={index}
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
      <div className="mx-auto lg:mx-0 mb-10 mt-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500 mb-4">
          Music Projects
        </h2>
        <p className="mx-8 text-lg">
          I was really reluctant to finally make these public (originally they
          were my "secret" projects), but I really had a lot of fun making these
          back in high school and put a lot of effort into them, despite my
          limited technology (Apple earbuds). Enjoy!
        </p>
      </div>
      <div>
        <div id="accordion" className="sm:mx-8 mb-24">
          {musicProjects.map((item, index) => (
            <div key={index} className="block relative w-full">
              <button
                type="button"
                className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
                onClick={() => handleOpenMusic(index)}
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
                <Icon id={index} open={openMusicIndexes.includes(index)} />
              </button>
              {openMusicIndexes.includes(index) && (
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
      </div>
    </div>
  );
}
