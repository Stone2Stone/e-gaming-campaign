import {
  controlRoomBg,
  controlRoomMsg,
  controlRoomOverlay,
  sccControlRoomFiveBg,
  sccControlRoomFourBg,
  sccControlRoomOneBg,
  sccControlRoomSixBg,
  sccControlRoomThreeBg,
  sccControlRoomTwoBg,
  spaceBarBg,
} from "../backgrounds";
import {
  controlRoomBoundaries,
  exitControlRoomBoundaries,
} from "../collisions/mapCollisions";
import { controlRoomPopUpCollisions } from "../collisions/PopUpCollisions";
import { controlRoomMiniMap, gameLogo } from "../mini-maps";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import { canvasContext } from "../dom-elements";
import Boundary from "../classes/Boundary";
import keys from "../keys";
import coinCount from "../coinCount";
import { activateCongratsForm } from "../functions/activateForm";

function animateControlRoom() {
  if (!keys.game.paused) return;
  if (player.location === "control room") {
    requestAnimationFrame(animateControlRoom);
    let gradient = canvasContext.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#06A2EB");
    gradient.addColorStop(1, "transparent");
    canvasContext.fillStyle = gradient;
    controlRoomBg.draw();
    controlRoomBoundaries.forEach((controlRoomBoundary) => {
      controlRoomBoundary.draw("transparent");
    });
    controlRoomPopUpCollisions.forEach((controlRoomPopUpCollision, index) => {
      controlRoomPopUpCollision.draw("transparent");
      if (controlRoomPopUpCollision instanceof Boundary) {
        return;
      }
      if (player.checkSinglePopUpCollision(controlRoomPopUpCollision)) {
        player.popUpCollisions.splice(index, 1);
        coinCount.controlRoom.count = coinCount.controlRoom.count + 1;
        player.pickedCoins = coinCount.controlRoom.count;
        if (player.pickedCoins === coinCount.controlRoom.max) {
          coinCount.controlRoom.complete = true;
          keys.congratsForm.active = true;
        }
      }
    });
    exitControlRoomBoundaries.forEach((exitControlRoomBoundary) => {
      exitControlRoomBoundary.draw("transparent");
    });
    player.pickedCoins = coinCount.controlRoom.count;
    player.buildingBoundaries = exitControlRoomBoundaries;
    player.collisionBlocks = controlRoomBoundaries;
    player.popUpCollisions = controlRoomPopUpCollisions;
    player.moveItems = [
      controlRoomBg,
      controlRoomOverlay,
      ...controlRoomBoundaries,
      ...exitControlRoomBoundaries,
      ...controlRoomPopUpCollisions,
    ];
    player.totalCoins = 6;
    player.update();
    controlRoomOverlay.draw();
    controlRoomMiniMap.update();
    gameLogo.draw();
    activateCongratsForm();
    let symbol = player.checkPopUpCollision(controlRoomPopUpCollisions);
    switch (symbol) {
      case 1:
        sccControlRoomOneBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 2:
        sccControlRoomTwoBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 3:
        sccControlRoomThreeBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 4:
        sccControlRoomFourBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 5:
        sccControlRoomFiveBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 6:
        sccControlRoomSixBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 7:
        controlRoomMsg.draw();
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateControlRoom;
