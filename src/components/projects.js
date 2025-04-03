import React, { useState } from "react";

import { projects, musicProjects } from "./projectdata/projectData";

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

  return (
    <div className="flex flex-col mt-16 mx-6 sm:mx-24">
      <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
          Projects
        </h2>
      </div>
      <div id="accordion" className="sm:mx-8">
        {projects
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
                <div className="overflow-hidden flex flex-row">
                  <div className="inline-block w-[50%] py-4 px-4 font-serif text-sm leading-normal">
                    {item.description}
                    {item.link && (
                      <p className="mt-2">
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
                  </div>
                  <div className="w-[50%] py-4 px-4">
                    {item.images && (
                      <div className="flex flex-col sm:flex-row sm:flex-shrink">
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
          A mix of classical music projects and fun, silly high school projects!
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
                <div className="overflow-hidden flex flex-row">
                  <div className="w-[50%] inline-block py-4 px-4 text-sm leading-normal">
                    <p className="font-serif">{item.description}</p>
                  </div>
                  <div className="w-[50%] py-4 px-4">
                    {item.images && (
                      <div className=" flex flex-col sm:flex-row sm:flex-shrink">
                        {item.images.map((image, imageIndex) => (
                          <div className="w-full max-w-sm mx-auto px-2">
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
