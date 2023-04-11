import {
  arcadeBg,
  auditoriumBg,
  controlRoomBg,
  islandBg,
  libraryBg,
} from "../backgrounds";
import {
  getPDFLinkCollisionMap,
  getPopUpCollisionMap,
} from "../functions/collisions";
import {
  arcadePopUp,
  auditoriumPopUp,
  controlRoomPopUp,
  coolStuffPopUp,
  freeMapPopUp,
  libraryPopUp,
  openLinkPopUp,
  PartnerPortalPopUp,
  pdfPopUp,
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
  49,
  libraryBg,
  2
);

export const freeMapPopUpCollisions = getPopUpCollisionMap(
  freeMapPopUp,
  160,
  islandBg,
  66987
);

export const coolStuffPopUpCollisions = getPopUpCollisionMap(
  coolStuffPopUp,
  160,
  islandBg,
  66988
);

export const partnerPortalPopUpCollisions = getPDFLinkCollisionMap(
  PartnerPortalPopUp,
  49,
  libraryBg,
  [
    45711, 45712, 45713, 45714, 45715, 45716, 45717, 45721, 45722, 45723, 45724,
    45727,
  ]
);

export const pdfPopUpCollisions = getPDFLinkCollisionMap(
  pdfPopUp,
  49,
  libraryBg,
  [45725]
);

export const linkPopUpCollisions = getPopUpCollisionMap(
  openLinkPopUp,
  49,
  libraryBg,
  45723
);
