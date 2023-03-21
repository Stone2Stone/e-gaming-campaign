import {
  characterDownFImage,
  characterDownMImage,
  characterLeftFImage,
  characterLeftMImage,
  characterRightFImage,
  characterRightMImage,
  characterUpFImage,
  characterUpMImage,
  NPCFiveFourImage,
  NPCFiveOneImage,
  NPCFiveThreeImage,
  NPCFiveTwoImage,
  NPCOneFourImage,
  NPCOneOneImage,
  NPCOneThreeImage,
  NPCOneTwoImage,
  SCCOneFourImage,
  SCCOneOneImage,
  SCCOneThreeImage,
  SCCOneTwoImage,
  SCCTwoFourImage,
  SCCTwoOneImage,
  SCCTwoThreeImage,
  SCCTwoTwoImage,
} from "./images";
import Character from "./classes/Character";

export const characterOne = new Character({
  position: {
    x: -50,
    y: -220,
  },
  image: characterUpMImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: characterUpMImage,
    left: characterLeftMImage,
    down: characterDownMImage,
    right: characterRightMImage,
  },
  moving: true,
  startPosition: {
    x: -50,
    y: -220,
  },
  endPosition: {
    x: -50,
    y: -1120,
  },
  direction: "up",
});

export const characterTwo = new Character({
  position: {
    x: -900,
    y: -1320,
  },
  image: NPCOneFourImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: NPCOneTwoImage,
    left: NPCOneThreeImage,
    down: NPCOneOneImage,
    right: NPCOneFourImage,
  },
  moving: true,
  startPosition: {
    x: -900,
    y: -1320,
  },
  endPosition: {
    x: 900,
    y: -1320,
  },
  direction: "right",
});

export const characterThree = new Character({
  position: {
    x: 2150,
    y: -1320,
  },
  image: NPCFiveFourImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: NPCFiveTwoImage,
    left: NPCFiveThreeImage,
    down: NPCFiveOneImage,
    right: NPCFiveFourImage,
  },
  moving: true,
  scale: 1,
  startPosition: {
    x: 2150,
    y: -1320,
  },
  endPosition: {
    x: 2150,
    y: -2020,
  },
  direction: "up",
});

export const characterFour = new Character({
  position: {
    x: 2150,
    y: -2350,
  },
  image: SCCOneFourImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: SCCOneTwoImage,
    left: SCCOneThreeImage,
    down: SCCOneOneImage,
    right: SCCOneFourImage,
  },
  moving: true,
  scale: 1,
  startPosition: {
    x: 2150,
    y: -2350,
  },
  endPosition: {
    x: 3750,
    y: -2350,
  },
  direction: "right",
});

export const characterFive = new Character({
  position: {
    x: -200,
    y: -1320,
  },
  image: SCCTwoFourImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: SCCTwoTwoImage,
    left: SCCTwoThreeImage,
    down: SCCTwoOneImage,
    right: SCCTwoFourImage,
  },
  moving: true,
  startPosition: {
    x: -200,
    y: -1320,
  },
  endPosition: {
    x: 1200,
    y: -1320,
  },
  direction: "right",
});
