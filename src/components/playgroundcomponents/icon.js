import { useState } from "react";

const Icon = ({
  image,
  caption,
  height = "100px",
  width = "100px",
  onClick,
  initialX = 0,
  initialY = 0,
  font = "var(--font-pokemon)",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col items-center justify-center hover:cursor-pointer transition-transform duration-200 ${
        isHovered ? "-translate-y-1" : ""
      }`}
      style={{
        width,
        height,
        position: "absolute",
        left: initialX,
        top: initialY,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img src={image} alt={caption} style={{ width, height }} />
      <div
        className={`text-sm text-black transition-colors ${
          isHovered ? "text-white bg-black" : ""
        }`}
        style={{ fontFamily: font }}
      >
        {caption}
      </div>
    </div>
  );
};

export default Icon;
