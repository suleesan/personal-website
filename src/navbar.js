import { Link } from "react-router-dom";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { React } from "react";

function Navbar() {
  return (
    <header>
      <nav
        className="z-10 flex w-full flex-row justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="inset-0 z-10 bg-transparent w-full flex flex-row justify-between py-4">
          <div className="m-1.5 p-1.5 flex flex-row justify-between items-center">
            <a
              href="https://www.linkedin.com/in/susan-lee-12957a217/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 sm:mr-8 text-primary-500"
            >
              <FiLinkedin size={24} />
            </a>
            <button
              onClick={() =>
                (window.location.href = "mailto:leesusan@stanford.edu")
              }
              className="text-primary-500"
            >
              <FiMail size={24} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-x divide-gray-500/10">
              <div className="flex flex-row px-1.5">
                <Link
                  to="/"
                  className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/resume"
                  className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
                >
                  Resume
                </Link>
                <Link
                  to="/projects"
                  className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
                >
                  Projects
                </Link>
                <Link
                  to="/blog"
                  className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
