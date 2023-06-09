import { BrowserRouter, Route, Link } from "react-router-dom";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { React } from 'react'


function Navbar() {
  return (
    <header>
      <nav className="z-10 flex w-full flex-row justify-between lg:px-8" aria-label="Global">
        <div className=" inset-0 z-10 bg-transparent w-full flex flex-row justify-between py-4">
          <div href="#" className="m-1.5 p-1.5 flex flex-row justify-between items-center">
            <button as="a" href="https://www.linkedin.com/in/susan-lee-12957a217/" target="_blank" rel="noreferrer" className="mr-8"><FiLinkedin size={24}/></button>
            <button onClick={() => window.location.href = 'mailto:leesusan@stanford.edu'}><FiMail size={24}/></button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-x divide-gray-500/10">
              <div className="flex flex-row">
                <Link to="/" 
                  className="mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-50"
                >Home
                </Link>
                <Link to="/resume" 
                  className="mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-50"
                >Resume
                </Link>
                <Link to="/projects" 
                  className="mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-50"
                >Projects
                </Link>
                <Link to="/blog" 
                  className="mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-primary-500 hover:bg-gray-50"
                >Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;