import Sprite from "./classes/Sprite";
import {
  islandImage,
  auditoriumImage,
  arcadeImage,
  libraryImage,
  controlRoomImage,
  screenMsgImage,
  islandOverlayImage,
  auditoriumOverlayImage,
  controlRoomOverlayImage,
  libraryOverlayImage,
  arcadeOverlayImage,
} from "./images";
import offset from "./offset";

export const islandBg = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: islandImage,
});

export const islandOverlay = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: islandOverlayImage,
});

export const auditoriumBg = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: auditoriumImage,
});

export const auditoriumOverlay = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: auditoriumOverlayImage,
});

export const libraryBg = new Sprite({
  position: {
    x: -800,
    y: offset.y, //-2225
  },
  image: libraryImage,
});

export const libraryOverlay = new Sprite({
  position: {
    x: -800, //-512
    y: offset.y, //-2225
  },
  image: libraryOverlayImage,
});

export const arcadeBg = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: arcadeImage,
});

export const arcadeOverlay = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: arcadeOverlayImage,
});

export const controlRoomBg = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: controlRoomImage,
});

export const controlRoomOverlay = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: controlRoomOverlayImage,
});

export const screenBg = new Sprite({
  position: {
    x: 0, // offset.x,
    y: 0, //offset.y,
  },
  image: screenMsgImage,
});
