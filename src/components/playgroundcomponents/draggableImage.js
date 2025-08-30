import React, { useState, useRef, useCallback } from "react";

function DraggableImage({
  src,
  alt,
  initialX = 0,
  initialY = 0,
  style,
  ...props
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const animationRef = useRef();

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        animationRef.current = requestAnimationFrame(() => {
          setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
          });
        });
      }
    },
    [dragging, offset.x, offset.y]
  );

  const handleMouseUp = () => {
    setDragging(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
        ...style,
      }}
      {...props}
    />
  );
}

export default DraggableImage;
