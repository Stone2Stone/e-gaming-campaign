import {
  islandCollision,
  auditoriumCollision,
  arcadeCollision,
  libraryCollision,
  controlRoomCollision,
} from "./mapData";
import {
  exitArcade,
  exitAuditorium,
  exitControlRoom,
  exitIsland,
  exitLibrary,
} from "./buildingCollisions";
import getCollisionsMap from "../functions/collisions";
import {
  arcadeBg,
  auditoriumBg,
  controlRoomBg,
  islandBg,
  libraryBg,
} from "../backgrounds";

export const islandBoundaries = getCollisionsMap(
  islandCollision,
  160,
  islandBg
);

export const exitIslandBoundaries = getCollisionsMap(exitIsland, 160, islandBg);

export const auditoriumBoundaries = getCollisionsMap(
  auditoriumCollision,
  80,
  auditoriumBg
);

export const exitAuditoriumBoundaries = getCollisionsMap(
  exitAuditorium,
  80,
  auditoriumBg
);

export const arcadeBoundaries = getCollisionsMap(arcadeCollision, 68, arcadeBg);

export const exitArcadeBoundaries = getCollisionsMap(exitArcade, 68, arcadeBg);

export const libraryBoundaries = getCollisionsMap(
  libraryCollision,
  80,
  libraryBg
);

export const exitLibraryBoundaries = getCollisionsMap(
  exitLibrary,
  80,
  libraryBg
);

export const controlRoomBoundaries = getCollisionsMap(
  controlRoomCollision,
  60,
  controlRoomBg
);

export const exitControlRoomBoundaries = getCollisionsMap(
  exitControlRoom,
  60,
  controlRoomBg
);
