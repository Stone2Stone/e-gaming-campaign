import {
  animateArcade,
  animateAuditorium,
  animateControlRoom,
  animateIsland,
  animateLibrary,
} from "../animeMaps";
function checkPlayerLocation(location) {
  switch (location) {
    case "island":
      animateIsland();
      break;
    case "auditorium":
      animateAuditorium();
      break;
    case "arcade":
      animateArcade();
      break;
    case "library":
      animateLibrary();
      break;
    case "control room":
      animateControlRoom();
      break;
  }
}

export default checkPlayerLocation;
