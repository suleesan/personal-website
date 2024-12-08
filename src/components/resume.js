import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="flex justify-center content-center">
        <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
          <header>
            <div className="flex justify-items-start">
              <h1 className="text-3xl sm:text-5xl font-bold text-primary-500">
                Resume
              </h1>
            </div>
          </header>
          <main className="flex flex-col sm:flex-row gap-x-10 mt-10">
            <div className="">
              <section className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-6">
                <h2 className="text-xl sm:text-2xl mt-2 font-bold">
                  Education
                </h2>
                <ul className="mt-2">
                  <p className="font-bold text-lg">Stanford University</p>
                  <p className="font-semibold">B.S. Computer Science (2025)</p>
                  <p className="font-semibold">Minor in Psychology</p>
                  <p className="font-semibold">
                    M.S. Computer Science <p className="font-normal">(2026)</p>
                  </p>
                </ul>
                <ul className="mt-2">
                  <li className="mr-5">
                    <p className="font-bold text-lg">Coursework</p>
                    <p>Operating Systems Principles (C, C++)</p>
                    <p>Design and Analysis of Algorithms (Python)</p>
                    <p>Cross-Platform Mobile Development (React Native)</p>
                    <p>Web Programming Fundamentals (HTML, CSS, JavaScript)</p>
                    <p>Introduction to Databases (SQL)</p>
                    <p>
                      Artificial Intelligence: Principles and Techniques
                      (Python)
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Work Experience
                </h2>
                <ul className="mt-2">
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">Netflix</strong>
                      June 2024 - Present
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between italic">
                      Software Engineering Intern
                      <small className="not-italic">Los Gatos, CA</small>
                    </p>
                    <ul className="ml-4 py-2">UI Developer Experience Team.</ul>
                  </li>
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">Carta</strong>
                      January 2024 - Present
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between italic">
                      Frontend Engineer
                    </p>
                    <ul className="ml-4 py-2">
                      Developing the newest version of Carta, Stanford’s
                      official course search and planning platform, using React
                      and TypeScript; creating and improving features such as
                      searching course reviews, a student profile menu, and
                      displaying course data.
                    </ul>
                  </li>
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">
                        Develop for Good
                      </strong>
                      December 2023 - February 2024
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between italic">
                      Frontend Engineer
                    </p>
                    <ul className="ml-4 py-2">
                      Developed a responsive website using React, Chakra UI, and
                      Firebase for CHANGE Arts client project, enabling users to
                      search for arts events and for arts organization partners
                      to create accounts, upload, and share arts events with the
                      community.
                    </ul>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Skills
                </h2>
                <p>
                  Python, React.js, React Native, JavaScript, HTML, CSS, C++, C,
                  TypeScript Figma, Git, SQL, Linux, R, Swift
                </p>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Awards
                </h2>
                <ul className="mt-2">
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        National Merit Scholar
                      </strong>
                      2021
                    </p>
                  </li>
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        National Youth Orchestra 2 Violinist
                      </strong>
                      2018
                    </p>
                    <p>Part of Carnegie Hall's National Youth Ensembles</p>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
