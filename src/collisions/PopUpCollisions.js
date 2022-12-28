import {
  arcadeBg,
  auditoriumBg,
  controlRoomBg,
  islandBg,
  libraryBg,
} from "../backgrounds";
import { getPopUpCollisionMap } from "../functions/collisions";
import {
  arcadePopUp,
  auditoriumPopUp,
  controlRoomPopUp,
  freeMapPopUp,
  libraryPopUp,
} from "./popUpsData";

export const auditoriumPopUpCollisions = getPopUpCollisionMap(
  auditoriumPopUp,
  72,
  auditoriumBg,
  7
);

export const arcadePopUpCollisions = getPopUpCollisionMap(
  arcadePopUp,
  56,
  arcadeBg,
  6
);

export const controlRoomPopUpCollisions = getPopUpCollisionMap(
  controlRoomPopUp,
  56,
  controlRoomBg,
  7
);

export const libraryPopUpCollisions = getPopUpCollisionMap(
  libraryPopUp,
  74,
  libraryBg,
  2
);

export const freeMapPopUpCollisions = getPopUpCollisionMap(
  freeMapPopUp,
  160,
  islandBg,
  66987
);
