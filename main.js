import { mapImage, playerDownImage } from "./images";
import { canvas, canvasContext } from "./canvas.js";

mapImage.onload = () => {
  canvasContext.drawImage(mapImage, -736, -602);
  playerDownImage.onload = () => {
    canvasContext.drawImage(
      playerDownImage,
      0,
      0,
      playerDownImage.width / 4,
      playerDownImage.height,
      canvas.width / 2 - playerDownImage.width / 4 / 2,
      canvas.height / 2 - playerDownImage.height / 2,
      playerDownImage.width / 4,
      playerDownImage.height
    );
  };
};

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      console.log("Up");
      break;
    case "w":
      console.log("Up");
      break;
    case "ArrowLeft":
      console.log("Left");
      break;
    case "a":
      console.log("Left");
      break;
    case "ArrowDown":
      console.log("Down");
      break;
    case "s":
      console.log("Down");
      break;
    case "ArrowRight":
      console.log("Right");
      break;
    case "d":
      console.log("Right");
      break;
  }
});
