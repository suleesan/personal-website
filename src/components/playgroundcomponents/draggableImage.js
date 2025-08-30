import React, { useState, useRef, useCallback } from "react";

function DraggableImage({
  src,
  alt,
  initialX = 0,
  initialY = 0,
  style,
  containerRef, // must point at a relatively-positioned container
  ...props
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // mouse-to-image offset within container coords
  const animationRef = useRef();
  const imgRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (!containerRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Convert mouse position to container space, then compute offset from image's top-left
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    setDragging(true);
    setOffset({
      x: mouseX - position.x,
      y: mouseY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging || !containerRef?.current || !imgRef.current) return;

      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      animationRef.current = requestAnimationFrame(() => {
        const containerRect = containerRef.current.getBoundingClientRect();

        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        let newX = mouseX - offset.x;
        let newY = mouseY - offset.y;

        // get image size to correctly constrain image within body
        const imgW = imgRef.current.offsetWidth || 0;
        const imgH = imgRef.current.offsetHeight || 0;

        // keep WHOLE image inside the container
        const maxX = Math.max(0, containerRect.width - imgW);
        const maxY = Math.max(0, containerRect.height - imgH);

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      });
    },
    [dragging, offset.x, offset.y, containerRef]
  );

  const handleMouseUp = () => {
    setDragging(false);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  return (
    <img
      ref={imgRef}
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
        cursor: dragging ? "grabbing" : "grab",
        transform: dragging ? "scale(1.05)" : "scale(1)",
        transition: dragging ? "none" : "transform 0.2s ease",
        zIndex: dragging ? 1000 : 1,
        ...style,
      }}
      {...props}
    />
  );
}

export default DraggableImage;
