import React, { useState } from "react";
import { Envelope } from "./playgroundcomponents";
import ThemeBackground from "./playgroundcomponents/themeBackground";

export default function Playground() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showPlayground, setShowPlayground] = useState(false);

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false);
    setShowPlayground(true);
  };

  return (
    <div className="bg-white pt-8 sm:pt-16 relative">
      {showEnvelope && (
        <Envelope onTransitionComplete={handleEnvelopeComplete} />
      )}
      {showPlayground && (
        <>
          <ThemeBackground theme="pokemon" />
        </>
      )}
    </div>
  );
}
