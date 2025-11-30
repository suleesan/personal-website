import React, { useState, useRef, useCallback, useEffect } from "react";

function Draggable({
  children,
  initialX = 0,
  initialY = 0,
  containerRef,
  zIndex = 1,
  onMouseDown: onMouseDownCallback,
}) {
  const positionRef = useRef({ x: initialX, y: initialY });
  const offsetRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const animationRef = useRef();
  const elementRef = useRef(null);
  const zIndexRef = useRef(zIndex);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      positionRef.current = { x: initialX, y: initialY };
      setPosition({ x: initialX, y: initialY });
      initializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    zIndexRef.current = zIndex;
  }, [zIndex]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
      return;
    }

    e.preventDefault();
    if (!containerRef?.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();

    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const currentPos = positionRef.current;
    const offset = {
      x: mouseX - currentPos.x,
      y: mouseY - currentPos.y,
    };

    offsetRef.current = offset;
    setDragging(true);

    // call the callback to bring window to front AFTER setting drag state
    // use requestAnimationFrame to avoid interfering with drag initialization
    if (onMouseDownCallback) {
      requestAnimationFrame(() => {
        onMouseDownCallback();
      });
    }
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging || !containerRef?.current || !elementRef.current) return;

      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      animationRef.current = requestAnimationFrame(() => {
        const containerRect = containerRef.current.getBoundingClientRect();

        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        const currentOffset = offsetRef.current;
        let newX = mouseX - currentOffset.x;
        let newY = mouseY - currentOffset.y;

        const elementW = elementRef.current.offsetWidth || 0;
        const elementH = elementRef.current.offsetHeight || 0;

        const maxX = Math.max(0, containerRect.width - elementW);
        const maxY = Math.max(0, containerRect.height - elementH);

        const newPosition = {
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        };
        positionRef.current = newPosition;
        setPosition(newPosition);
      });
    },
    [dragging, containerRef]
  );

  const handleMouseUp = () => {
    setDragging(false);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging, handleMouseMove]);

  // Clone children and pass drag handler
  const childrenWithDragHandler = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        onDragStart: handleMouseDown,
        isDragging: dragging,
      });
    }
    return child;
  });

  return (
    <div
      ref={elementRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: dragging ? zIndexRef.current + 1000 : zIndexRef.current,
        userSelect: "none",
      }}
    >
      {childrenWithDragHandler}
    </div>
  );
}

Draggable.displayName = "Draggable";

export default Draggable;
