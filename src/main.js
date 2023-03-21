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
  videoTwo,
  videoThree,
  congratsFormPopUpImage,
  ansibleAutomationPlatformScript,
  enterPriseScript,
  openShiftScript,
} from "./dom-elements";

setTimeout(() => {
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
        if (keys.game.paused) {
          player.moving = false;
          return;
        }
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
}, 100);

checkPlayerLocation(player.location);

freeMapFormButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  !freeFormPopUpImages.classList.contains("hide") &&
    freeFormPopUpImages.classList.add("hide");

  freeMapScriptEl.classList.contains("hide") &&
    freeMapScriptEl.classList.remove("hide");
});

congratsFormButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  switch (player.location) {
    case "auditorium":
      !congratsFormPopUpImage.classList.contains("hide") &&
        congratsFormPopUpImage.classList.add("hide");

      enterPriseScript.classList.contains("hide") &&
        enterPriseScript.classList.remove("hide");
      break;
    case "control room":
      !congratsFormPopUpImage.classList.contains("hide") &&
        congratsFormPopUpImage.classList.add("hide");

      ansibleAutomationPlatformScript.classList.contains("hide") &&
        ansibleAutomationPlatformScript.classList.remove("hide");
      break;
    case "arcade":
      !congratsFormPopUpImage.classList.contains("hide") &&
        congratsFormPopUpImage.classList.add("hide");

      openShiftScript.classList.contains("hide") &&
        openShiftScript.classList.remove("hide");
      break;
  }
});

export function handleVideoOne(isPaused) {
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

export function handleVideoTwo(isPaused) {
  keys.videoTwo.paused = isPaused;
  switch (keys.videoTwo.paused) {
    case true:
      videoTwo.pause();
      break;
    case false:
      videoTwo.play();
      break;
  }
}

export function handleVideoThree(isPaused) {
  keys.videoThree.paused = isPaused;
  switch (keys.videoThree.paused) {
    case true:
      videoThree.pause();
      break;
    case false:
      videoThree.play();
      break;
  }
}
