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
  if (keys.congratsForm.active === true) {
    congratsFormPopUpEl.classList.contains("hide") &&
      congratsFormPopUpEl.classList.remove("hide");
  } else {
    !congratsFormPopUpEl.classList.contains("hide") &&
      congratsFormPopUpEl.classList.add("hide");
  }
};

export { activateFreeMapForm, activateCongratsForm };
