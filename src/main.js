import keys from "./keys";
import checkPlayerLocation from "./functions/checkPlayerLocation";
import player from "./player";
import {
  freeFormPopUpImages,
  freeMapScriptEl,
  freeMapFormButtonEl,
  congratsFormButtonEl,
  congratsFormPopUpEl,
  videoOne,
} from "./dom-elements";

checkPlayerLocation(player.location);

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      keys.ArrowUp.pressed = true;
      break;
    case "ArrowLeft":
      e.preventDefault();
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowDown":
      e.preventDefault();
      keys.ArrowDown.pressed = true;
      break;
    case "ArrowRight":
      e.preventDefault();
      keys.ArrowRight.pressed = true;
      break;
    case " ":
      if (keys.game.paused) return;
      e.preventDefault();
      keys.game.paused = true;
      checkPlayerLocation(player.location);
      !congratsFormPopUpEl.classList.contains("hide") &&
        congratsFormPopUpEl.classList.add("hide");
      break;
  }
});

addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowLeft":
      e.preventDefault();
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowDown":
      e.preventDefault();
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowRight":
      e.preventDefault();
      keys.ArrowRight.pressed = false;
      break;
  }
});

playVideo();

freeMapFormButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  !freeFormPopUpImages.classList.contains("hide") &&
    freeFormPopUpImages.classList.add("hide");

  freeMapScriptEl.classList.contains("hide") &&
    freeMapScriptEl.classList.remove("hide");
});

congratsFormButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  keys.congratsForm.active = false;
  switch (player.location) {
    case "auditorium":
      open(
        "https://r1.dotdigital-pages.com/p/7FTD-29G/red-hat-enterprise-linux",
        "mozillaWindow",
        "popup"
      );
      break;
    case "control room":
      open(
        "https://r1.dotdigital-pages.com/p/7FTD-29I/red-hat-ansible-automation-platform",
        "mozillaWindow",
        "popup"
      );
      break;
    case "arcade":
      open(
        "https://r1.dotdigital-pages.com/p/7FTD-29J/red-hat-openshift",
        "mozillaWindow",
        "popup"
      );
      break;
  }
});

async function playVideo() {
  try {
    await videoOne.play();
  } catch (err) {
    console.log(err);
  }
}

export function handlePlayButton(isPaused) {
  keys.videoOne.paused = isPaused;
  switch (keys.videoOne.paused) {
    case true:
      videoOne.pause();
      break;
    case false:
      videoOne.play();
      break;
  }
}
