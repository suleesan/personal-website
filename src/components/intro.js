import React from "react";
import headshot from "../images/Susan Lee Casual Headshot.JPEG";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Intro() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-4 sm:px-6 pt-10 sm:pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7FBCFF] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col mx-auto sm:flex-row items-center text-left w-full max-w-4xl gap-20">
          <div className="w-2/3 flex flex-col gap-4">
            <h1 className="text-4xl sm:text-6xl -mx-16 font-bold tracking-tight text-primary-500">
              Susan Lee
            </h1>
            <p className="text-lg mt-6 font-serif sm:text-xl leading-7 text-gray-800">
              Hi! I'm Susan, a senior at Stanford studying Computer Science and
              Psychology. I'm also pursuing my master's degree in Computer
              Science with a focus in Human-Computer Interaction.
            </p>
            <p className="text-lg font-serif sm:text-xl leading-7 text-gray-800">
              I’m currently a software engineering intern at Netflix on the UI
              Developer Experience team working on all things UI: our design
              system and component library, observability, component testing,
              and more.
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
                className="text-primary-500"
              >
                <FiMail size={28} />
              </button>
            </div>
          </div>
          <img
            src={headshot}
            className="w-full sm:w-1/3 max-w-xs mt-12 rounded-lg aspect-square object-cover object-[50%_60%]"
            alt="Headshot"
          />
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
    </div>
  );
}
