import { freeMapBg, islandBg, islandOverlay } from "../backgrounds";
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
import { freeMapPopUpCollisions } from "../collisions/PopUpCollisions";
import { activateFreeMapForm } from "../functions/activateForm";

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
    islandSpawnCollisions.draw("transparent");
    player.collisionBlocks = islandBoundaries;
    player.buildingBoundaries = exitIslandBoundaries;
    player.popUpCollisions = freeMapPopUpCollisions;
    player.moveItems = [
      islandBg,
      islandOverlay,
      ...islandBoundaries,
      ...exitIslandBoundaries,
      ...oceanBoundaries,
      ...freeMapPopUpCollisions,
    ];
    player.position = islandSpawnCollisions.position;
    player.update();
    islandOverlay.draw();
    islandMiniMap.update();
    gameLogo.draw();
    let symbol = player.checkPopUpCollision(freeMapPopUpCollisions);
    switch (symbol) {
      case 66987:
        keys.freeMapForm.active = true;
        activateFreeMapForm();
        break;
      default:
        keys.freeMapForm.active = false;
        activateFreeMapForm();
        break;
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateIsland;
