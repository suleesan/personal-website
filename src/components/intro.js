import React from "react";
// import headshot from "../images/Susan Lee Casual.jpeg";
import headshot2 from "../images/Susan Lee Casual 2.jpg";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Intro() {
  return (
    <div className="bg-white relative">
      <div className="relative isolate px-4 sm:px-6 pt-10 sm:pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7FBCFF] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* <svg
          width="86"
          height="62"
          viewBox="0 0 86 62"
          fill="none"
          className="progress fixed top-12 left-12 w-12 h-auto z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82.5 3L4 25L24 37.5M82.5 3L59.5 58.5L34 43M82.5 3L34 43M82.5 3L24 37.5M34 43L26.5 59.5M24 37.5L26.5 59.5M26.5 59.5L44 49.0784"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
        <svg width="0" height="0">
          <defs>
            <path
              id="cloud"
              d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"
            />
          </defs>
        </svg>

        {[
          "top-[5vh] left-[60vw]",
          "top-[100vh] left-[15vw]",
          "top-[160vh] left-[70vw]",
        ].map((position, index) => (
          <svg
            key={index}
            viewBox="0 0 640 512"
            width="100"
            className={`cloud absolute ${position} w-[12vw] h-auto fill-black`}
          >
            <use href="#cloud"></use>
          </svg>
        ))} */}

        <div className="flex flex-col mx-auto sm:flex-row items-center text-left w-full max-w-4xl gap-20">
          <div className="w-2/3 flex flex-col gap-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary-500">
              Susan Lee
            </h1>
            <p className="text-lg mt-6 font-serif sm:text-xl leading-7 text-gray-800">
              Hi! I'm Susan, and I recently graduated from Stanford with a B.S.
              in Computer Science and a minor in Psychology. I'm finishing up my
              M.S. in Computer Science with a focus in Human-Computer
              Interaction.
            </p>
            <p className="text-lg font-serif sm:text-xl leading-7 text-gray-800">
              I’m currently a software engineering intern at Netflix on the UI
              Developer Experience team making UI development easy and
              efficient, contributing to our design system and component
              library, observability efforts, E2E/component testing, and more.
            </p>
            <div className="flex justify-start gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/susan-lee-12957a217/"
                target="_blank"
                rel="noreferrer"
                className="text-primary-500"
              >
                <FiLinkedin size={28} />
              </a>
              <button
                onClick={() =>
                  (window.location.href = "mailto:leesusan@stanford.edu")
                }
                className="text-primary-500 mt-0.5"
              >
                <FiMail size={28} />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 max-w-xs mt-12 stamp-border">
            <img
              src={headshot2}
              className=" rounded-sm aspect-square object-cover"
              alt="Headshot"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      {/* <style>
        {`
      .progress {
        position: fixed;
        top: 3rem;
        left: 3rem;
        width: 3rem;
        height: auto;
        z-index: 1;
        offset-path: path('M.5 122.7s24.7-275 276.9 0c327.1 356.7 266.1-330.3 548-33.3 256.9 270.7 271.1 0 271.1 0');
        animation: move auto linear;
        animation-timeline: scroll(root);
      }

      .cloud {
        width: 12vw;
        height: auto;
        position: absolute;
      }

      @keyframes move {
        0% { offset-distance: 0%; }
        100% { offset-distance: 100%; }
      }
    `}
      </style> */}
    </div>
  );
}
