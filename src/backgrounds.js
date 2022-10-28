import Sprite from "./classes/Sprite";
import { foregroundImage, islandImage, auditoriumImage } from "./images";
import offset from "./offset";

export const islandBg = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: islandImage,
});

export const islandForeground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

export const auditoriumBg = new Sprite({
  position: {
    x: -1500,
    y: -2750,
  },
  image: auditoriumImage,
});
