import coinCount from "../coinCount";
import { congratsFormPopUpEl, freeFormPopUpEl } from "../dom-elements";
import keys from "../keys";

const activateFreeMapForm = () => {
  if (keys.freeMapForm.active === true) {
    freeFormPopUpEl.classList.contains("hide") &&
      freeFormPopUpEl.classList.remove("hide");
  } else {
    !freeFormPopUpEl.classList.contains("hide") &&
      freeFormPopUpEl.classList.add("hide");
  }
};

const activateCongratsForm = () => {
  // if (coinCount.arcade.complete) return;
  // if (coinCount.auditorium.complete) return;
  // if (coinCount.controlRoom.complete) return;

  if (!keys.congratsForm.active) {
    !congratsFormPopUpEl.classList.contains("hide") &&
      congratsFormPopUpEl.classList.add("hide");
    return;
  }

  congratsFormPopUpEl.classList.contains("hide") &&
    congratsFormPopUpEl.classList.remove("hide");
};

export { activateFreeMapForm, activateCongratsForm };
