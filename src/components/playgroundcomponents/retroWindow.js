import React from "react";
import Window from "./window";
import stanford1 from "./images/stanford 1.jpeg";
import stanford2 from "./images/stanford 2.jpeg";
import stanford3 from "./images/stanford 3.jpeg";
import film1 from "./images/film1.jpg";
import film2 from "./images/film2.jpg";
import film3 from "./images/film3.jpg";
import DraggableImage from "./draggableImage";

const RetroWindow = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Window title="Viewer" width={800} height={500} draggable={true}>
        <DraggableImage
          src={stanford1}
          alt="Draggable Image of Stanford 1"
          className="w-[250px]"
          initialX={50}
          initialY={50}
        />
        <DraggableImage
          src={stanford2}
          alt="Draggable Image of Stanford 2"
          className="w-[250px]"
          initialX={200}
          initialY={50}
        />
        <DraggableImage
          src={stanford3}
          alt="Draggable"
          className="w-[250px]"
          initialX={350}
          initialY={50}
        />
        <DraggableImage
          src={film1}
          alt="Draggable"
          className="w-[250px]"
          initialX={50}
          initialY={250}
        />
        <DraggableImage
          src={film2}
          alt="Draggable"
          className="w-[250px]"
          initialX={200}
          initialY={250}
        />
        <DraggableImage
          src={film3}
          alt="Draggable"
          className="w-[250px]"
          initialX={350}
          initialY={250}
        />
      </Window>
    </div>
  );
};

export default RetroWindow;
