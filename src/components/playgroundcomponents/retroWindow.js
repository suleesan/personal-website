import React from "react";
import Window from "./window";
import stanford1 from "./images/stanford 1.jpeg";
import stanford2 from "./images/stanford 2.jpeg";
import stanford3 from "./images/stanford 3.jpeg";
import DraggableImage from "./draggableImage";

const RetroWindow = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Window title="Image Viewer" width={700} height={500} draggable={true}>
        <DraggableImage
          src={stanford1}
          alt="Draggable Image of Stanford 1"
          className="w-1/2"
          initialX={50}
          initialY={50}
        />
        <DraggableImage
          src={stanford2}
          alt="Draggable Image of Stanford 2"
          className="w-1/2"
          initialX={150}
          initialY={150}
        />
        <DraggableImage
          src={stanford3}
          alt="Draggable"
          className="w-1/2"
          initialX={300}
          initialY={300}
        />
      </Window>
    </div>
  );
};

export default RetroWindow;
