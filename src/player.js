import { canvas } from "./canvas";
import {
  playerDownImage,
  playerLeftImage,
  playerRightImage,
  playerUpImage,
} from "./images";
import Player from "./classes/Player";

const player = new Player({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage,
  },
  location: "audiorium",
  speed: 7,
});

export default player;
