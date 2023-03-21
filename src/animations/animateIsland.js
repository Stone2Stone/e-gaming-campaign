import { islandBg, islandOverlay } from "../backgrounds";
import {
  exitIslandBoundaries,
  islandBoundaries,
  oceanBoundaries,
} from "../collisions/mapCollisions";
import { gameLogo, islandMiniMap } from "../mini-maps";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import { islandSpawnCollisions } from "../collisions/spawnCollision";
import keys from "../keys";
import {
  coolStuffPopUpCollisions,
  freeMapPopUpCollisions,
} from "../collisions/PopUpCollisions";
import {
  activateCoolStuffLink,
  activateFreeMapForm,
} from "../functions/activateForm";
import {
  characterFive,
  characterFour,
  characterOne,
  characterThree,
  characterTwo,
} from "../character";
import { canvasContext, freeFormPopUpImages } from "../dom-elements";

function animateIsland() {
  if (!keys.game.paused) return;
  if (player.location === "island") {
    requestAnimationFrame(animateIsland);
    islandBg.draw();
    islandBoundaries.forEach((islandBoundary) => {
      islandBoundary.draw("transparent");
    });
    exitIslandBoundaries.forEach((islandBuildingBoundary) => {
      islandBuildingBoundary.draw("transparent");
    });
    freeMapPopUpCollisions.forEach((freeMapPopUpCollision) => {
      freeMapPopUpCollision.draw("transparent");
    });
    coolStuffPopUpCollisions.forEach((coolStuffPopUpCollision) => {
      coolStuffPopUpCollision.draw("transparent");
    });
    islandSpawnCollisions.draw("transparent");
    player.collisionBlocks = islandBoundaries;
    player.buildingBoundaries = exitIslandBoundaries;
    player.popUpCollisions = freeMapPopUpCollisions;
    player.moveItems = [
      islandBg,
      islandOverlay,
      characterOne,
      characterTwo,
      characterThree,
      characterFour,
      characterFive,
      ...islandBoundaries,
      ...exitIslandBoundaries,
      ...oceanBoundaries,
      ...freeMapPopUpCollisions,
      ...coolStuffPopUpCollisions,
    ];
    characterTwo.automate();
    player.update();
    characterOne.automate();
    characterThree.automate();
    characterFour.automate();
    characterFive.automate();
    islandOverlay.draw();
    islandMiniMap.update();
    gameLogo.draw();
    let symbol = player.checkPopUpCollision(freeMapPopUpCollisions);
    switch (symbol) {
      case 66987:
        keys.freeMapForm.active = true;
        if (freeFormPopUpImages.classList.contains("hide")) {
          canvasContext.fillStyle = "white";
          canvasContext.fillRect(880, 0, 400, 720);
        }
        activateFreeMapForm();
        break;
      default:
        keys.freeMapForm.active = false;
        activateFreeMapForm();
        break;
    }
    let linkPopUp = player.checkPopUpCollision(coolStuffPopUpCollisions);
    switch (linkPopUp) {
      case 66988:
        keys.coolStuff.active = true;
        activateCoolStuffLink();
        break;
      default:
        keys.coolStuff.active = false;
        activateCoolStuffLink();
        break;
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateIsland;
