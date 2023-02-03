import {
  auditoriumBg,
  AuditoriumMsg,
  auditoriumOverlay,
  sccAuditoriumFiveBg,
  sccAuditoriumFourBg,
  sccAuditoriumOneBg,
  sccAuditoriumSixBg,
  sccAuditoriumThreeBg,
  sccAuditoriumTwoBg,
  spaceBarBg,
} from "../backgrounds";
import {
  auditoriumBoundaries,
  exitAuditoriumBoundaries,
} from "../collisions/mapCollisions";
import { auditoriumPopUpCollisions } from "../collisions/PopUpCollisions";
import { auditoriumMiniMap, gameLogo } from "../mini-maps";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import { auditoriumSpawnCollision } from "../collisions/spawnCollision";
import keys from "../keys";
import Boundary from "../classes/Boundary";
import coinCount from "../coinCount";
import { activateCongratsForm } from "../functions/activateForm";

function animateAuditorium() {
  if (!keys.game.paused) return;
  if (player.location === "auditorium") {
    requestAnimationFrame(animateAuditorium);
    auditoriumBg.draw();
    auditoriumBoundaries.forEach((auditoriumoundary) => {
      auditoriumoundary.draw("transparent");
    });
    exitAuditoriumBoundaries.forEach((exitArcadeBoundary) => {
      exitArcadeBoundary.draw("transparent");
    });
    auditoriumPopUpCollisions.forEach((auditoriumPopUpCollision, index) => {
      auditoriumPopUpCollision.draw("transparent");
      if (auditoriumPopUpCollision instanceof Boundary) {
        return;
      }
      if (player.checkSinglePopUpCollision(auditoriumPopUpCollision)) {
        player.popUpCollisions.splice(index, 1);
        coinCount.auditorium.count = coinCount.auditorium.count + 1;
        player.pickedCoins = coinCount.auditorium.count;
        if (player.pickedCoins === coinCount.auditorium.max) {
          coinCount.auditorium.isComplete = true;
          keys.congratsForm.active = true;
        }
      }
    });
    player.pickedCoins = coinCount.auditorium.count;
    player.buildingBoundaries = exitAuditoriumBoundaries;
    player.collisionBlocks = auditoriumBoundaries;
    player.popUpCollisions = auditoriumPopUpCollisions;
    player.moveItems = [
      auditoriumBg,
      auditoriumOverlay,
      ...auditoriumBoundaries,
      ...exitAuditoriumBoundaries,
      ...auditoriumPopUpCollisions,
    ];
    player.position = auditoriumSpawnCollision.position;
    player.totalCoins = 6;
    player.update();
    auditoriumOverlay.draw();
    auditoriumMiniMap.update();
    gameLogo.draw();
    activateCongratsForm();
    let symbol = player.checkPopUpCollision(auditoriumPopUpCollisions);
    switch (symbol) {
      case 1:
        sccAuditoriumOneBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 2:
        sccAuditoriumTwoBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 3:
        sccAuditoriumThreeBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 4:
        sccAuditoriumFourBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 5:
        sccAuditoriumFiveBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 6:
        sccAuditoriumSixBg.draw();
        spaceBarBg.draw();
        keys.game.paused = false;
        break;
      case 7:
        AuditoriumMsg.draw();
        break;
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export default animateAuditorium;
