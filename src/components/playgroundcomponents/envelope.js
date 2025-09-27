import React, { useState, useEffect } from "react";
import pikachu from "../../images/pikachu.png";
import "./envelope.css";

function Envelope({ onTransitionComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPikachu, setShowPikachu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // show envelope
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // auto-open envelope after it appears
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    // showing pikachu after envelope opens
    const pikachuTimer = setTimeout(() => {
      setShowPikachu(true);
    }, 1400);

    // go to playground
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
      if (onTransitionComplete) {
        setTimeout(() => {
          onTransitionComplete();
        }, 1000);
      }
    }, 2400);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(openTimer);
      clearTimeout(pikachuTimer);
      clearTimeout(transitionTimer);
    };
  }, [onTransitionComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
    >
      <div className="h-[380px] p-5 rounded-lg">
        <div
          id="envelope"
          className={`relative w-[280px] h-[180px] mx-auto top-[150px] bg-[#e6f3ff] shadow-lg cursor-pointer border-2 rounded-b-md transition-all duration-500 ${
            isOpen ? "open" : "close"
          }`}
        >
          {/* Top flap */}
          <div className="flap absolute w-0 h-0 z-30 top-0 left-0 border-l-[140px] border-r-[140px] border-b-[82px] border-t-[98px] border-l-transparent border-r-transparent border-b-transparent border-t-primary-300 origin-top pointer-events-none"></div>

          {/* Bottom pocket */}
          <div className="absolute w-0 h-0 z-20 bottom-0 left-0 border-l-[140px] border-r-[140px] border-b-[90px] border-t-[90px] border-l-[#e6f3ff] border-r-[#e6f3ff] border-b-[#e6f3ff] border-t-transparent rounded-b-md"></div>

          {/* Letter */}
          <div
            className={`relative bg-white w-[90%] mx-auto h-[90%] rounded-md shadow-lg flex flex-col items-center justify-center box-border transition-transform duration-400 ease-in-out z-10 ${
              isOpen
                ? "transform -translate-y-[60px] transition-delay-600"
                : "transform translate-y-0"
            }`}
          >
            <div
              className={`relative z-10 text-center flex flex-col items-center gap-1 transition-opacity duration-500 ${
                showPikachu ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={pikachu}
                alt="Pikachu"
                className="w-[60px] h-[60px] object-contain"
              />
              <div className="text-lg font-bold text-black">Welcome!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
