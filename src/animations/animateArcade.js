import {
  arcadeBg,
  arcadeMsgBg,
  arcadeOverlay,
  sccArcadeFiveBg,
  sccArcadeFourBg,
  sccArcadeOneBg,
  sccArcadeThreeBg,
  sccArcadeTwoBg,
  spaceBarBg,
} from "../backgrounds";
import {
  arcadeBoundaries,
  exitArcadeBoundaries,
} from "../collisions/mapCollisions";
import { arcadePopUpCollisions } from "../collisions/PopUpCollisions";
import { arcadeMiniMap, gameLogo } from "../mini-maps";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import Boundary from "../classes/Boundary";
import keys from "../keys";
import coinCount from "../coinCount";
import { activateCongratsForm } from "../functions/activateForm";
import {
  canvasContext,
  congratsFormPopUpImage,
  openShiftScript,
} from "../dom-elements";

function animateArcade() {
  if (!keys.game.paused) return;
  if (player.location === "arcade") {
    requestAnimationFrame(animateArcade);
    arcadeBg.draw();
    arcadeBoundaries.forEach((arcadeBoundary) => {
      arcadeBoundary.draw("transparent");
    });
    arcadePopUpCollisions.forEach((arcadePopUpCollision, index) => {
      arcadePopUpCollision.draw("transparent");
      if (arcadePopUpCollision instanceof Boundary) {
        return;
      }
      if (player.checkSinglePopUpCollision(arcadePopUpCollision)) {
        player.popUpCollisions.splice(index, 1);
        coinCount.arcade.count = coinCount.arcade.count + 1;
        player.pickedCoins = coinCount.arcade.count;
        if (player.pickedCoins === coinCount.arcade.max) {
          coinCount.arcade.isComplete = true;
          keys.congratsForm.active = !keys.congratsForm.active;
        }
      }
    });
    exitArcadeBoundaries.forEach((exitArcadeBoundary) => {
      exitArcadeBoundary.draw("transparent");
    });
    player.pickedCoins = coinCount.arcade.count;
    player.buildingBoundaries = exitArcadeBoundaries;
    player.collisionBlocks = arcadeBoundaries;
    player.popUpCollisions = arcadePopUpCollisions;
    player.moveItems = [
      arcadeBg,
      arcadeOverlay,
      ...arcadeBoundaries,
      ...exitArcadeBoundaries,
      ...arcadePopUpCollisions,
    ];
    player.totalCoins = 5;
    player.update();
    arcadeOverlay.draw();
    arcadeMiniMap.update();
    gameLogo.draw();
    activateCongratsForm();
    let symbol = player.checkPopUpCollision(arcadePopUpCollisions);
    switch (symbol) {
      case 1:
        sccArcadeOneBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 2:
        sccArcadeTwoBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 3:
        sccArcadeThreeBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 4:
        sccArcadeFourBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 5:
        sccArcadeFiveBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 6:
        arcadeMsgBg.draw();
        if (!keys.congratsForm.active) break;
        keys.congratsForm.active = false;
        activateCongratsForm();
        congratsFormPopUpImage.classList.contains("hide") &&
          congratsFormPopUpImage.classList.remove("hide");

        !openShiftScript.classList.contains("hide") &&
          openShiftScript.classList.add("hide");
        break;
    }
    if (!openShiftScript.classList.contains("hide")) {
      canvasContext.fillStyle = "white";
      canvasContext.fillRect(880, 0, 400, 720);
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateArcade;
