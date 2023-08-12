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
                  <p className="font-semibold">B.S. Computer Science</p>
                  <p className="font-semibold">B.A. Psychology</p>
                  <p>2021 - 2025</p>
                </ul>
                <ul className="mt-2">
                  <li className="mr-5">
                    <p className="font-bold text-lg">Coursework</p>
                    <p>Programming Abstractions (C++)</p>
                    <p>Computer Organization and Systems (C)</p>
                    <p>Linear Algebra and Multivariable Calculus</p>
                    <p>Probability for Computer Scientists</p>
                    <p>Cross-Platform Mobile Development (React Native)</p>
                    <p>Design and Analysis of Algorithms</p>
                    <p>Web Programming Fundamentals (HTML, CSS, JavaScript)</p>
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
                      <strong className="font-bold text-lg">
                        General Atomics
                      </strong>
                      June 2023 - Present
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between italic">
                      Software Engineering Intern
                      <small className="not-italic">San Diego, CA</small>
                    </p>
                  </li>
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">
                        Stanford Music Library
                      </strong>
                      February 2022 - Present
                    </p>
                    <p className="italic">Circulation and Stacks Assistant</p>
                    <ul className="ml-4 py-2">
                      Worked at the circulation desk assisting students and
                      faculty with requests; discharged, checked out, and
                      shelved books.
                    </ul>
                    <ul className="ml-4 py-2">
                      Managed Opening Night!, Stanford’s database for opera and
                      oratorio premieres, researching and adding over 200 recent
                      premieres, and updating existing entries with new
                      information. 
                    </ul>
                  </li>
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">
                        Stanford Code in Place
                      </strong>
                      April 2023 - May 2023
                    </p>
                    <p className="italic">Section Leader</p>
                    <ul className="ml-4 py-2">
                      Led weekly discussion sections for Code in Place,
                      Stanford’s free coding course based on CS 106A, Stanford’s
                      introductory computer science course.
                    </ul>
                    <ul className="ml-4 py-2">
                      Taught a group of ~10 students various programming topics
                      in Python such as lists, dictionaries, and graphics
                      through interactive activities; taught programming logic
                      and debugging strategies and answered questions on student
                      forum.
                    </ul>
                  </li>
                  <li className="py-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                      <strong className="font-bold text-lg">
                        Stanford Luo Lab
                      </strong>
                      March 2022 - August 2022
                    </p>
                    <p className="italic">
                      Research Assistant under Zhuoran Li and Dr. Liqun Luo
                    </p>
                    <ul className="ml-4 py-2">
                      Developed a novel assay to identify proteins on the cell
                      surface that instruct neuronal connection specificity,
                      distinguishing whether the binding of two cell-surface
                      proteins across the cells promotes or inhibits neuronal
                      connections in the Drosophila olfactory circuit.
                    </ul>
                    <ul className="ml-4 py-2">
                      Visualized the connections between projection neurons
                      (PNs) and two types of Kenyon cells (KCs) in the calyx
                      throughout development using genetic techniques,
                      immunostaining, and confocal microscopy to better
                      understand the development of the PN-KC circuit in the
                      calyx.
                    </ul>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Student Organizations
                </h2>
                <ul className="mt-2">
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        Stanford Health Consulting Group
                      </strong>
                      March 2023 - June 2023
                    </p>
                    <p>Consultant</p>
                  </li>
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        Stanford Women in Computer Science
                      </strong>
                      September 2022 - Present
                    </p>
                    <p>Outreach Team</p>
                  </li>
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">Stanford Synapse</strong>
                      September 2021 - Present
                    </p>
                    <p>VP of Outreach and Quality Improvement</p>
                  </li>
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        Stanford Women in Design
                      </strong>
                      September 2021 - Present
                    </p>
                    <p>Design Partnerships Team</p>
                  </li>
                  <li className="pt-2">
                    <p className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <strong className="text-base">
                        Stanford Symphony Orchestra
                      </strong>
                      September 2021 - March 2022
                    </p>
                    <p>First Violin</p>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Skills
                </h2>
                <p>
                  Python, C++, C, React Native, React.js, JavaScript, HTML, CSS,
                  Git, Figma, Microsoft Office
                </p>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl mt-6 pb-1 border-b font-semibold">
                  Interests
                </h2>
                <p>
                  Violin and Piano, App and Web Development, Film Photography,
                  Blogging, Reading, Hiking, Pokemon
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
