import {
  islandCollision,
  oceanCollision,
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
import { getCollisionsMap } from "../functions/collisions";
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

export const oceanBoundaries = getCollisionsMap(oceanCollision, 160, islandBg);

export const auditoriumBoundaries = getCollisionsMap(
  auditoriumCollision,
  72,
  auditoriumBg
);

export const exitAuditoriumBoundaries = getCollisionsMap(
  exitAuditorium,
  72,
  auditoriumBg
);

export const arcadeBoundaries = getCollisionsMap(arcadeCollision, 56, arcadeBg);

export const exitArcadeBoundaries = getCollisionsMap(exitArcade, 56, arcadeBg);

export const libraryBoundaries = getCollisionsMap(
  libraryCollision,
  49,
  libraryBg
);

export const exitLibraryBoundaries = getCollisionsMap(
  exitLibrary,
  49,
  libraryBg
);

export const controlRoomBoundaries = getCollisionsMap(
  controlRoomCollision,
  56,
  controlRoomBg
);

export const exitControlRoomBoundaries = getCollisionsMap(
  exitControlRoom,
  56,
  controlRoomBg
);
