import React from "react";
import headshot from "../images/Susan Lee Headshot.png";

export default function Intro() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-2 sm:px-6 pt-14 lg:px-8">
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
        <div className="w-full px-8 sm:px-16 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-row">
            <div className="w-3/4 mr-8 sm:mr-16">
              <h1 className="text-4xl font-bold tracking-tight text-primary-500 sm:text-6xl">
                Susan Lee
              </h1>
              <div className="sm:text-justify">
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
                  Hi! I'm Susan, a junior at Stanford studying Computer Science
                  and Psychology. I'm interested in front-end development and am
                  eager to learn more about web design. I'm also fascinated
                  about the human mind and am interested in understanding and
                  helping people through psychology and cognitive science.
                </p>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
                  In my free time, I enjoy playing the violin and piano, playing
                  Pokemon, watching the latest Netflix shows, trying new food,
                  film photography, and reading.
                </p>
              </div>
            </div>
            <div className="sm:w-1/4 w-1/2 sm:-mt-12">
              <img
                src={headshot}
                className="rounded-lg mx-auto w-48 sm:w-full"
                alt="Headshot"
              />
            </div>
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
    </div>
  );
}
