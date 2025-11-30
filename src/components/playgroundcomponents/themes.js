import spotifyBall from "./images/pokemon/spotifyBall.svg";
import photoBall from "./images/pokemon/photoBall.svg";
import terminalBall from "./images/pokemon/terminalBall.svg";
import PhotoWindow from "./photos";
import SpotifyWindow from "./spotify";
import Terminal from "./terminal";

export const themes = {
  pokemon: {
    background: "var(--color-pokemon-green)",
    titleFont: "var(--font-pokemon)",
    bodyFont: "var(--font-pokemon-body)",
    icons: [
      {
        id: "spotify",
        image: spotifyBall,
        caption: "Spotify",
        font: "var(--font-pokemon)",
        initialX: 50,
        initialY: 100,
        windowComponent: SpotifyWindow,
        windowProps: {
          initialX: 200,
          initialY: 100,
          titleColor: "var(--color-pokemon-green)",
          bodyColor: "var(--color-pokemon-black)",
        },
      },
      {
        id: "photos",
        image: photoBall,
        caption: "Photos",
        font: "var(--font-pokemon)",
        initialX: 50,
        initialY: 200,
        windowComponent: PhotoWindow,
        windowProps: {
          initialX: 250,
          initialY: 150,
          titleColor: "var(--color-pokemon-blue)",
          bodyColor: "var(--color-pokemon-white)",
        },
      },
      {
        id: "terminal",
        image: terminalBall,
        caption: "Terminal",
        font: "var(--font-pokemon)",
        initialX: 50,
        initialY: 300,
        windowComponent: Terminal,
        windowProps: {
          initialX: 300,
          initialY: 200,
          titleColor: "var(--color-pokemon-yellow)",
          bodyColor: "var(--color-pokemon-black)",
        },
      },
    ],
  },
};
