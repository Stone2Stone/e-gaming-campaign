import { canvas } from "./dom-elements";
import Minimap from "./classes/Minimap";
import {
  arcadeMiniImage,
  auditoriumMiniImage,
  controlRoomMiniImage,
  gameLogoImage,
  islandMiniImage,
  libraryMiniImage,
} from "./images";

export const islandMiniMap = new Minimap({
  image: islandMiniImage,
  position: {
    x: 10,
    y: canvas.height - canvas.height / 4 - 55,
  },
  scale: 5,
});

export const arcadeMiniMap = new Minimap({
  image: arcadeMiniImage,
  position: {
    x: 10,
    y: canvas.height - canvas.height / 4 + 24,
  },
});

export const auditoriumMiniMap = new Minimap({
  image: auditoriumMiniImage,
  position: {
    x: 10,
    y: canvas.height - canvas.height / 4 - 60,
  },
});

export const libraryMiniMap = new Minimap({
  image: libraryMiniImage,
  position: {
    x: 10,
    y: canvas.height - canvas.height / 4 - 60,
  },
});

export const controlRoomMiniMap = new Minimap({
  image: controlRoomMiniImage,
  position: {
    x: 10,
    y: canvas.height - canvas.height / 4 - 60,
  },
});

export const gameLogo = new Minimap({
  image: gameLogoImage,
  position: {
    x: 930,
    y: canvas.height - canvas.height / 4 - 30,
  },
  scale: 2,
});
