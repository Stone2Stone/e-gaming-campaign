import { libraryBg, libraryMsgBg, libraryOverlay } from "../backgrounds";
import {
  exitLibraryBoundaries,
  libraryBoundaries,
} from "../collisions/mapCollisions";
import { libraryPopUpCollisions } from "../collisions/PopUpCollisions";
import { gameLogo, libraryMiniMap } from "../mini-maps";
import pdf from "../pdf";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import { canvas, canvasContext, videoOne } from "../dom-elements";
import keys from "../keys";
import Video from "../classes/Video";
import { videoOneCollisions } from "../collisions/videoCollision";
import { collisionDetection } from "../functions/collisionDetection";
import { handlePlayButton } from "../main";

const video = new Video({
  video: videoOne,
  position: {
    x: 500,
    y: -1585,
  },
});

function animateLibrary() {
  keys.game.paused = true;
  if (!keys.game.paused) return;
  if (player.location === "library") {
    requestAnimationFrame(animateLibrary);
    let gradient = canvasContext.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#06A2EB");
    gradient.addColorStop(1, "transparent");
    canvasContext.fillStyle = gradient;
    libraryBg.draw();
    libraryBoundaries.forEach((libraryBoundary) => {
      libraryBoundary.draw("transparent");
    });
    libraryPopUpCollisions.forEach((libraryPopUpCollision) => {
      libraryPopUpCollision.draw("transparent");
    });
    exitLibraryBoundaries.forEach((exitLibraryBoundary) => {
      exitLibraryBoundary.draw("transparent");
    });
    videoOneCollisions.forEach((videoOneCollision) => {
      videoOneCollision.draw("transparent");
    });
    player.buildingBoundaries = exitLibraryBoundaries;
    player.collisionBlocks = libraryBoundaries;
    player.moveItems = [
      libraryBg,
      libraryOverlay,
      ...libraryBoundaries,
      ...exitLibraryBoundaries,
      ...libraryPopUpCollisions,
      ...videoOneCollisions,
      video,
    ];
    player.update();
    libraryOverlay.draw();
    libraryMiniMap.update();
    gameLogo.draw();
    video.update();
    let symbol = player.checkPopUpCollision(libraryPopUpCollisions);
    for (let i = 0; i < videoOneCollisions.length; i++) {
      const collision = videoOneCollisions[i];

      if (
        collisionDetection({
          collision1: player,
          collision2: collision,
        })
      ) {
        handlePlayButton(false);
        return;
      }
    }

    handlePlayButton(true);

    switch (symbol) {
      case 1:
        break;
      case 2:
        libraryMsgBg.draw();
        console.log(libraryMsgBg.position);
        break;
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateLibrary;
