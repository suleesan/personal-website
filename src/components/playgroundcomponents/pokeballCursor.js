import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokeballSVG from "../../images/Pokeball.svg";
import OpenPokeballSVG from "../../images/Open Pokeball.svg";
import "./pokeball-cursor.css";

// Global mouse position tracker
let globalMouseX = 0;
let globalMouseY = 0;

// Update global mouse position on every mouse move
if (typeof window !== "undefined") {
  document.addEventListener("mousemove", (e) => {
    globalMouseX = e.clientX;
    globalMouseY = e.clientY;
  });
}

const PokeballCursor = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [position, setPosition] = useState(() => ({
    x: globalMouseX,
    y: globalMouseY,
  }));
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/playground") {
      document.body.classList.remove("pokeball-cursor");
      return;
    }

    document.body.classList.add("pokeball-cursor");

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.onclick ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("tabindex") !== null ||
        computedStyle.cursor === "pointer" ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("hover:cursor-pointer") ||
        target.getAttribute("href") !== null ||
        target.getAttribute("to") !== null;

      if (isInteractive) {
        setIsOpening(true);
      }
    };

    const handleMouseOut = () => {
      setIsOpening(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("pokeball-cursor");
    };
  }, [location.pathname]);

  if (location.pathname !== "/playground") {
    return null;
  }

  return (
    <div
      className={`pokeball-cursor-container ${isOpening ? "opening" : ""}`}
      style={{
        position: "fixed",
        left: position.x - 15,
        top: position.y - 15,
        width: "30px",
        height: "30px",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <img
        src={isOpening ? OpenPokeballSVG : PokeballSVG}
        alt="pokéball cursor"
        className="w-full h-full"
      />
    </div>
  );
};

export default PokeballCursor;
