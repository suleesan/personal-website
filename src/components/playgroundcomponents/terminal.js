import Window from "./window";
import { useState, useRef, useEffect } from "react";

const Terminal = ({
  onClose,
  titleColor = "var(--color-pokemon-yellow)",
  bodyColor = "var(--color-pokemon-black)",
  titleFont,
  bodyFont,
  onDragStart,
  isDragging,
  spanColor = "var(--color-pokemon-yellow)",
  outputColor = "var(--color-pokemon-blue)",
  textColor = "var(--color-pokemon-white)",
  height = 400,
  width = 600,
}) => {
  const [userInput, setUserInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([
    {
      command: "",
      output: (
        <span style={{ color: outputColor }}>
          Welcome to Susan's terminal. Type 'about' to learn about Susan, or
          type 'help' for more options!
        </span>
      ),
    },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // execute a command and add it to the history
  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    let output;

    switch (trimmedCommand) {
      case "about":
        output = (
          <>
            <span style={{ color: outputColor }}>
              Hi! I’m Susan, and I’m from San Diego. I studied computer science
              and psychology at Stanford with a focus in human–computer
              interaction. I love understanding people just as much as building
              things, and I’m endlessly curious about how people think, feel,
              learn, and create. Whether through neuroscience, design, CS,
              writing, or music, I enjoy exploring human questions from
              different angles. To me, technology is ultimately a people
              problem, and I hope to use my interdisciplinary background to keep
              tackling challenges in tech in thoughtful, human-centered ways!
            </span>
            <br />
            <br />
            <span style={{ color: outputColor }}>
              I’m a big believer in happiness as the precursor to success (and
              it’s also important to your health), and I like to pave paths
              toward happiness in both my work and my personal life. I’m
              currently a software engineering intern at Netflix, where I lead
              projects and make tools to help pave the path toward an easy,
              efficient, and happy UI engineer experience. I’m broadly
              interested in developer tooling and productivity.
            </span>
            <br />
            <br />
            <span style={{ color: outputColor }}>
              I love creativity in all its forms: outside of work and classes, I
              play the violin (and sometimes make covers), design and code new
              features for this website, read, golf, lift, enjoy film
              photography, occasionally blog, play Pokemon, and review
              restaurants on Beli. I enjoy anything that keeps me curious and
              inspired!
            </span>
          </>
        );
        break;
      case "blog":
        output = (
          <span style={{ color: outputColor }}>
            I've written a lot of blog posts! Here are some of my favorites:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                <a
                  href="https://www.susanlee.dev/post/atla"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: outputColor, textDecoration: "underline" }}
                >
                  Avatar
                </a>
              </li>
              <li>
                <a
                  href="https://www.susanlee.dev/post/violin"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: outputColor, textDecoration: "underline" }}
                >
                  Violin
                </a>
              </li>
            </ul>
          </span>
        );
        break;
      case "beliefs":
        output = (
          <span style={{ color: outputColor }}>
            Some things I believe strongly in:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Prioritize spending time with your family and friends</li>
              <li>Happiness is the precursor to success</li>
              <li>Listening</li>
              <li>Balanced life</li>
            </ul>
          </span>
        );
        break;
      case "violin":
        output = (
          <span style={{ color: outputColor }}>
            I'm hoping to join an orchestra in SF post-grad (please reach out if
            you know of any opportunities!) Some of my violin highlights:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                I won Stanford's Glen & Barbara Smerage Violin Performance Prize
                in 2025
              </li>
              <li>
                I gave my senior recital featuring Hubay's Carmen Fantaisie,
                Tzigane, and Franck Sonata in 2025
              </li>
              <li>
                In high school, I was a part of NYO2 in 2018 and Heifetz in
                2019!
              </li>
              <li>
                My{" "}
                <a
                  href="https://www.youtube.com/@suleesan"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  YouTube channel
                </a>
                , featuring my official recordings and fun covers from Pokemon
                to Studio Ghibli!
              </li>
            </ul>
          </span>
        );
        break;
      case "help":
        output = (
          <span style={{ color: outputColor }}>
            Commands:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>about: Learn about me!</li>
              <li>help: Show this help message</li>
              <li>beliefs: Read about my beliefs</li>
              <li>blog: My favorite blog posts!</li>
              <li>violin: Some violin highlights</li>
              <li>clear: Clear the screen</li>
            </ul>
          </span>
        );
        break;
      case "clear":
        setCommandHistory([]);
        return;
      case "":
        return;
      default:
        output = (
          <span style={{ color: outputColor }}>
            Command not found: '{command}'. Type 'help' for available commands.
          </span>
        );
    }

    setCommandHistory((prev) => [
      ...prev,
      { command: command, output: output },
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      executeCommand(userInput);
      setUserInput("");
    }
  };

  return (
    <Window
      title="Terminal"
      actions={["close"]}
      width={width}
      height={height}
      titleColor={titleColor}
      bodyColor={bodyColor}
      titleFont={titleFont}
      bodyFont={bodyFont}
      onCloseClick={onClose}
      onDragStart={onDragStart}
      isDragging={isDragging}
    >
      <div
        ref={terminalRef}
        className="flex flex-col gap-2 text-sm p-4 overflow-y-auto"
        style={{ height: "100%", fontFamily: bodyFont }}
      >
        {commandHistory.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            {item.command && (
              <div className="flex justify-start gap-2">
                <span style={{ color: spanColor }}>&gt;</span>
                <span style={{ color: textColor }}>{item.command}</span>
              </div>
            )}
            <div className="ml-6">{item.output}</div>
          </div>
        ))}
        <div className="flex justify-start flex-row gap-2">
          <span style={{ color: spanColor }}>&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent border-none outline-none flex-1"
            style={{ color: textColor }}
            placeholder="Type 'help' for available commands"
            autoFocus
          />
        </div>
      </div>
    </Window>
  );
};

export default Terminal;
