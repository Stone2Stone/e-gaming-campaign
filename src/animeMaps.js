import { auditoriumBg, islandBg } from "./backgrounds";
import {
  auditoriumBoundaries,
  islandBoundaries,
  islandBuildingBoundaries,
} from "./collisions/mapCollisions";
import player from "./player";

export function animateIsland() {
  if (player.transition) return animateAuditorium();
  requestAnimationFrame(animateIsland);
  islandBg.draw();
  islandBoundaries.forEach((islandBoundary) => {
    islandBoundary.draw("transparent");
  });
  islandBuildingBoundaries.forEach((islandBuildingBoundary) => {
    islandBuildingBoundary.draw("transparent");
  });

  //check boundary symbol

  player.collisionBlocks = islandBoundaries;
  player.buildingBoundaries = islandBuildingBoundaries;
  player.moveItems = [
    islandBg,
    ...islandBoundaries,
    ...islandBuildingBoundaries,
  ];
  player.update();
}

export function animateAuditorium() {
  // if (player.transition) return animateIsland();
  requestAnimationFrame(animateAuditorium);
  auditoriumBg.draw();
  // auditoriumBoundaries.forEach((auditoriumoundary) => {
  //   auditoriumoundary.draw("transparent");
  // });
  // player.collisionBlocks = auditoriumBoundaries;
  // player.moveItems = [auditoriumBg, ...auditoriumBoundaries];
  player.moveItems = [auditoriumBg];
  player.update();
}
