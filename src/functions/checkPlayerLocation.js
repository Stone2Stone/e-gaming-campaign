import animateArcade from "../animations/animateArcade";
import animateAuditorium from "../animations/animateAuditorium";
import animateControlRoom from "../animations/animateControlRoom";
import animateIsland from "../animations/animateIsland";
import animateLibrary from "../animations/animateLibrary";
import { enterPriseScript } from "../dom-elements";
import keys from "../keys";
import player from "../player";

const checkPlayerLocation = (location) => {
  switch (location) {
    case "island":
      player.pickedCoins = 0;
      animateIsland();
      break;
    case "auditorium":
      animateAuditorium();
      break;
    case "arcade":
      keys.coolStuff.active = true;
      animateArcade();
      break;
    case "library":
      animateLibrary();
      break;
    case "control room":
      animateControlRoom();
      break;
  }
};

export default checkPlayerLocation;
