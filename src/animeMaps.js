import {
  auditoriumBg,
  islandBg,
  arcadeBg,
  libraryBg,
  controlRoomBg,
  islandOverlay,
  auditoriumOverlay,
  controlRoomOverlay,
  arcadeOverlay,
  libraryOverlay,
} from "./backgrounds";
import {
  auditoriumBoundaries,
  exitArcadeBoundaries,
  islandBoundaries,
  exitIslandBoundaries,
  exitAuditoriumBoundaries,
  exitLibraryBoundaries,
  arcadeBoundaries,
  libraryBoundaries,
  controlRoomBoundaries,
  exitControlRoomBoundaries,
} from "./collisions/mapCollisions";
// import { auditoriumPopUpCollisions } from "./collisions/PopUpCollisions";
import checkPlayerLocation from "./functions/checkPlayerLocation";
import { islandMiniMap } from "./mini-maps";
import player from "./player";

export function animateIsland() {
  if (player.location === "island") {
    requestAnimationFrame(animateIsland);
    islandBg.draw();
    islandBoundaries.forEach((islandBoundary) => {
      islandBoundary.draw("transparent");
    });
    exitIslandBoundaries.forEach((islandBuildingBoundary) => {
      islandBuildingBoundary.draw("transparent");
    });

    player.collisionBlocks = islandBoundaries;
    player.buildingBoundaries = exitIslandBoundaries;
    player.moveItems = [
      islandBg,
      islandOverlay,
      ...islandBoundaries,
      ...exitIslandBoundaries,
    ];
    player.update();
    islandOverlay.draw();
    islandMiniMap.update();
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export function animateAuditorium() {
  if (player.location === "auditorium") {
    requestAnimationFrame(animateAuditorium);
    auditoriumBg.draw();
    auditoriumBoundaries.forEach((auditoriumoundary) => {
      auditoriumoundary.draw("transparent");
    });
    exitAuditoriumBoundaries.forEach((exitArcadeBoundary) => {
      exitArcadeBoundary.draw("transparent");
    });
    // auditoriumPopUpCollisions.forEach((auditoriumPopUpCollision) => {
    //   auditoriumPopUpCollision.draw("#00ff00");
    // });
    player.buildingBoundaries = exitAuditoriumBoundaries;
    player.collisionBlocks = auditoriumBoundaries;
    player.moveItems = [
      auditoriumBg,
      auditoriumOverlay,
      ...auditoriumBoundaries,
      ...exitAuditoriumBoundaries,
    ];
    player.update();
    auditoriumOverlay.draw();
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export function animateArcade() {
  if (player.location === "arcade") {
    requestAnimationFrame(animateArcade);
    arcadeBg.draw();
    arcadeBoundaries.forEach((arcadeBoundary) => {
      arcadeBoundary.draw("transparent");
    });
    exitArcadeBoundaries.forEach((exitArcadeBoundary) => {
      exitArcadeBoundary.draw("transparent");
    });
    player.buildingBoundaries = exitArcadeBoundaries;
    player.collisionBlocks = arcadeBoundaries;
    player.moveItems = [
      arcadeBg,
      arcadeOverlay,
      ...arcadeBoundaries,
      ...exitArcadeBoundaries,
    ];
    player.update();
    arcadeOverlay.draw();
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export function animateLibrary() {
  if (player.location === "library") {
    requestAnimationFrame(animateLibrary);
    libraryBg.draw();
    libraryBoundaries.forEach((libraryBoundary) => {
      libraryBoundary.draw("transparent");
    });
    exitLibraryBoundaries.forEach((exitLibraryBoundary) => {
      exitLibraryBoundary.draw("transparent");
    });
    player.buildingBoundaries = exitLibraryBoundaries;
    player.collisionBlocks = libraryBoundaries;
    player.moveItems = [
      libraryBg,
      libraryOverlay,
      ...libraryBoundaries,
      ...exitLibraryBoundaries,
    ];
    player.update();
    libraryOverlay.draw();
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

export function animateControlRoom() {
  if (player.location === "control room") {
    requestAnimationFrame(animateControlRoom);
    controlRoomBg.draw();
    controlRoomBoundaries.forEach((controlRoomBoundary) => {
      controlRoomBoundary.draw("transparent");
    });
    exitControlRoomBoundaries.forEach((exitControlRoomBoundary) => {
      exitControlRoomBoundary.draw("black");
    });
    player.buildingBoundaries = exitControlRoomBoundaries;
    player.moveItems = [
      controlRoomBg,
      controlRoomOverlay,
      ...controlRoomBoundaries,
      ...exitControlRoomBoundaries,
    ];
    player.update();
    controlRoomOverlay.draw();
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}
