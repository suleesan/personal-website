import React, { useState, useRef, useEffect } from "react";

// i want to repeatedly call a function after a certain amount of time
function useInterval(callback, delay) {
  const savedCallback = useRef(); // persist and no re-renders

  useEffect(() => {
    savedCallback.current = callback; // update callback
  }, [callback]);

  useEffect(() => {
    if (delay === null) return; // if no delay, stop the interval

    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay); // initiate and then clean up the interval
    return () => clearInterval(id);
  }, [delay]);
}

export const TypewriterCycle = ({
  words,
  timePerChar = 50,
  deleteSpeed = 30,
  delayBeforeDelete = 1500,
  showCarat = true,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [caratBlinkingOn, setCaratBlinkingOn] = useState(true);

  const targetText = words[currentWordIndex];

  useInterval(
    () => {
      if (pause) return; // skip if paused

      if (!isDeleting) {
        if (displayedText.length < targetText.length) {
          setDisplayedText(targetText.slice(0, displayedText.length + 1)); // add char every timePerChar
        } else {
          setPause(true); // pause the interval itself before delete
          setTimeout(() => {
            setIsDeleting(true); // okay now start delete
            setPause(false); // stop pausing the interval
          }, delayBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(targetText.slice(0, displayedText.length - 1)); // delete char every deleteSpeed
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // word gone, change the word
        }
      }
    },
    isDeleting ? deleteSpeed : timePerChar
  );

  useInterval(() => {
    setCaratBlinkingOn((prev) => !prev); // toggles the carat every 500 ms
  }, 500);

  return (
    <span className={`relative ${className}`}>
      {displayedText}
      {showCarat && (
        <span className="inline-block">{caratBlinkingOn ? "_" : ""}</span>
      )}
    </span>
  );
};

const Typewriter = () => {
  const words = ["Software Developer", "Student", "Violinist"];

  return (
    <div
      style={{
        fontSize: "24px",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      I am a...{" "}
      <TypewriterCycle
        words={words}
        timePerChar={50}
        deleteSpeed={30}
        delayBeforeDelete={1500}
        showCarat={true}
        className="text-primary-500"
      />
    </div>
  );
};

export default Typewriter;
