import React from "react";
import { Typewriter, Carousel } from "./playgroundcomponents";

export default function Playground() {
  return (
    <div className="bg-white py-8 sm:py-16 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-500">
            Playground
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-8 pb-10">
            Some explorations! (Not mobile friendly).
          </p>
        </div>
        <div className="space-y-10">
          <Typewriter />
          <Carousel />
        </div>
      </div>
    </div>
  );
}
