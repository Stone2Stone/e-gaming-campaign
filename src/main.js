import keys from "./keys";
import checkPlayerLocation from "./functions/checkPlayerLocation";
import player from "./player";
import {
  freeMapFormSectionEl,
  freeMapFormEl,
  congratsFormEl,
  congratsFormSectionEl,
} from "./dom-elements";
import { activateCongratsForm } from "./functions/activateForm";

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

freeMapFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: freeMapFormEl.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      freeMapFormEl.reset();
      freeMapFormSectionEl.innerHTML = `<p style="color: #ffffff;">Thank you for filling in the form</p>`;
    } else {
      response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
          console.log(
            data["errors"].map((error) => error["message"]).join(", ")
          );
        } else {
          console.log("Oops! There was a problem submitting your form");
        }
      });
    }
  });
});
congratsFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: congratsFormEl.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      congratsFormEl.reset();
      congratsFormSectionEl.innerHTML = `<p style="color: #ffffff;">Thank you for filling in the form</p>`;
      keys.congratsForm.active = false;
      activateCongratsForm();
    } else {
      response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
          console.log(
            data["errors"].map((error) => error["message"]).join(", ")
          );
        } else {
          console.log("Oops! There was a problem submitting your form");
        }
      });
    }
  });
});
