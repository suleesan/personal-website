import { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion"; // oooh framer!
import stanford1 from "./images/stanford 1.jpeg";
import stanford2 from "./images/stanford 2.jpeg";
import stanford3 from "./images/stanford 3.jpeg";

const Carousel = () => {
  const images = [stanford1, stanford2, stanford3];
  const extendedImages = [...images, ...images, ...images];
  const xTranslation = useMotionValue(0);
  const gap = 16;

  useEffect(() => {
    const totalWidth = (300 + gap) * images.length;

    const finalPosition = -totalWidth;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [xTranslation, images.length]);

  return (
    <div className="flex justify-center overflow-hidden items-center mx-72">
      <motion.div className="flex" style={{ x: xTranslation, gap: `${gap}px` }}>
        {extendedImages.map((image, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`carousel-${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
