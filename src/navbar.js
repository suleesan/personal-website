import { Link } from "react-router-dom";
import { React } from "react";
import logo from "./images/logo.svg";

function Navbar() {
  return (
    <header>
      <nav
        className="z-10 flex w-full flex-row justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="inset-0 z-10 w-full flex flex-row items-center justify-between py-4">
          <Link to="/">
            <img
              src={logo}
              alt={"logo depicting susan lee with a paper plane"}
              className="w-40"
            />
          </Link>
          <div className="flex flex-row px-1.5">
            <Link
              to="/projects"
              className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
            >
              Projects
            </Link>
            {/* <Link
              to="/blog"
              className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
            >
              Blog
            </Link> */}
            <Link
              to="/playground"
              className="sm:mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-100"
            >
              Playground
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
