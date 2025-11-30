import spotifyBall from "./images/pokemon/spotifyBall.svg";
import photoBall from "./images/pokemon/photoBall.svg";
import terminalBall from "./images/pokemon/terminalBall.svg";
import moon from "./images/sailormoon/moon.svg";
import star from "./images/sailormoon/star.svg";
import ribbon from "./images/sailormoon/ribbon.svg";
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
  sailorMoon: {
    background: "var(--color-sailor-moon-pink)",
    titleFont: "var(--font-sailor-moon)",
    bodyFont: "var(--font-sailor-moon-body)",
    icons: [
      {
        id: "spotify",
        image: star,
        caption: "Spotify",
        font: "var(--font-sailor-moon)",
        initialX: 50,
        initialY: 100,
        windowComponent: SpotifyWindow,
        windowProps: {
          initialX: 200,
          initialY: 100,
          titleColor: "var(--color-sailor-moon-blue)",
          titleFont: "var(--font-sailor-moon)",
          bodyFont: "var(--font-sailor-moon-body)",
        },
      },
      {
        id: "photos",
        image: moon,
        caption: "Photos",
        font: "var(--font-sailor-moon)",
        initialX: 50,
        initialY: 200,
        windowComponent: PhotoWindow,
        windowProps: {
          initialX: 250,
          initialY: 150,
          titleColor: "var(--color-sailor-moon-purple)",
          titleFont: "var(--font-sailor-moon)",
          bodyFont: "var(--font-sailor-moon-body)",
        },
      },
      {
        id: "terminal",
        image: ribbon,
        caption: "Terminal",
        font: "var(--font-sailor-moon)",
        initialX: 50,
        initialY: 300,
        windowComponent: Terminal,
        windowProps: {
          initialX: 300,
          initialY: 200,
          titleColor: "var(--color-sailor-moon-gold)",
          spanColor: "var(--color-sailor-moon-pink)",
          outputColor: "var(--color-sailor-moon-darkpink)",
          titleFont: "var(--font-sailor-moon)",
          bodyFont: "var(--font-sailor-moon-body)",
        },
      },
    ],
  },
};
