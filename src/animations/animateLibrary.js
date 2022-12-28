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
import { canvasContext } from "../dom-elements";
import keys from "../keys";

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
    // pdf.update();

    player.buildingBoundaries = exitLibraryBoundaries;
    player.collisionBlocks = libraryBoundaries;
    player.moveItems = [
      libraryBg,
      libraryOverlay,
      ...libraryBoundaries,
      ...exitLibraryBoundaries,
      ...libraryPopUpCollisions,
      pdf,
    ];
    player.update();
    libraryOverlay.draw();
    libraryMiniMap.update();
    gameLogo.draw();
    let symbol = player.checkPopUpCollision(libraryPopUpCollisions);
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
