import React, { Component } from "react";

const posts = [
  {
    id: 1,
    title: `Lessons: What I've Learned from Stanford`,
    href: "#",
    description:
      "Stanford’s motto translates to “the wind of freedom blows.” When I first came to Stanford, I had no idea how...",
    date: "Mar 05, 2023",
    datetime: "2023-03-05",
    category: { title: "Life", href: "#" },
  },
  // More posts...
];

export default class Blog extends Component {
  render() {
    return (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-bold tracking-tight text-primary-500 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Tidbits from my life. Still under construction.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between rounded-lg shadow-md shadow-slate-500/50 p-8 hover:bg-slate-50"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium bg-primary-500 hover:bg-primary-700 text-white"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
