import { canvas } from "./dom-elements";
import Sprite from "./classes/Sprite";
import {
  islandImage,
  auditoriumImage,
  arcadeImage,
  libraryImage,
  controlRoomImage,
  AuditoriumMsgImage,
  islandOverlayImage,
  auditoriumOverlayImage,
  controlRoomOverlayImage,
  libraryOverlayImage,
  arcadeOverlayImage,
  sccAuditoriumImageOne,
  sccAuditoriumImageTwo,
  sccAuditoriumImageThree,
  sccAuditoriumImageFour,
  sccAuditoriumImageFive,
  sccAuditoriumImageSix,
  sccArcadeImageOne,
  sccArcadeImageTwo,
  sccArcadeImageThree,
  sccArcadeImageFour,
  sccArcadeImageFive,
  arcadeMsgImage,
  sccControlRoomImageOne,
  sccControlRoomImageTwo,
  sccControlRoomImageThree,
  sccControlRoomImageFour,
  sccControlRoomImageFive,
  sccControlRoomImageSix,
  controlRoomMsgImage,
  libraryMsgImage,
  spaceBarImage,
  freeMapImage,
} from "./images";
import offset from "./offset";

export const islandBg = new Sprite({
  position: {
    x: -2225,
    y: -3800,
  },
  image: islandImage,
});

export const islandOverlay = new Sprite({
  position: {
    x: -2225,
    y: -3800,
  },
  image: islandOverlayImage,
});

export const auditoriumBg = new Sprite({
  position: {
    x: -1630,
    y: -2200,
  },
  image: auditoriumImage,
});

export const auditoriumOverlay = new Sprite({
  position: {
    x: -1630,
    y: -2200,
  },
  image: auditoriumOverlayImage,
});

export const libraryBg = new Sprite({
  position: {
    x: -250,
    y: -1900,
  },
  image: libraryImage,
});

export const libraryOverlay = new Sprite({
  position: {
    x: -250,
    y: -1900,
  },
  image: libraryOverlayImage,
});

export const arcadeBg = new Sprite({
  position: {
    x: -1350,
    y: -1200,
  },
  image: arcadeImage,
});

export const arcadeOverlay = new Sprite({
  position: {
    x: -1350,
    y: -1200,
  },
  image: arcadeOverlayImage,
});

export const controlRoomBg = new Sprite({
  position: {
    x: -1730,
    y: -2545,
  },
  image: controlRoomImage,
});

export const controlRoomOverlay = new Sprite({
  position: {
    x: -1730,
    y: -2545,
  },
  image: controlRoomOverlayImage,
});

//OTHER

export const AuditoriumMsg = new Sprite({
  position: {
    x: 260,
    y: 50,
  },
  image: AuditoriumMsgImage,
});

export const sccAuditoriumOneBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageOne,
});

export const sccAuditoriumTwoBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageTwo,
});

export const sccAuditoriumThreeBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageThree,
});

export const sccAuditoriumFourBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageFour,
});

export const sccAuditoriumFiveBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageFive,
});

export const sccAuditoriumSixBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccAuditoriumImageSix,
});

export const arcadeMsgBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: arcadeMsgImage,
});

export const sccArcadeOneBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccArcadeImageOne,
});

export const sccArcadeTwoBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccArcadeImageTwo,
});

export const sccArcadeThreeBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccArcadeImageThree,
});

export const sccArcadeFourBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccArcadeImageFour,
});

export const sccArcadeFiveBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccArcadeImageFive,
});

export const controlRoomMsg = new Sprite({
  position: {
    x: 245,
    y: 30,
  },
  image: controlRoomMsgImage,
});

export const sccControlRoomOneBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageOne,
});

export const sccControlRoomTwoBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageTwo,
});

export const sccControlRoomThreeBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageThree,
});

export const sccControlRoomFourBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageFour,
});

export const sccControlRoomFiveBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageFive,
});

export const sccControlRoomSixBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: sccControlRoomImageSix,
});

export const libraryMsgBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: libraryMsgImage,
});

export const spaceBarBg = new Sprite({
  position: {
    x: 475,
    y: 475,
  },
  image: spaceBarImage,
  scale: 5,
});

export const freeMapBg = new Sprite({
  position: {
    x: 245,
    y: 50,
  },
  image: freeMapImage,
});
