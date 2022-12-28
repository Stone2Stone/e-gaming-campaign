import { canvas } from "./dom-elements";
import {
  playerDownImage,
  playerLeftImage,
  playerRightImage,
  playerUpImage,
  sailorBackImage,
  sailorFrontImage,
  sailorLeftImage,
  sailorRightImage,
} from "./images";
import Sprite from "./classes/Sprite";

const character = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerUpImage,
  frames: {
    max: 1,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage,
  },
});

export default character;
