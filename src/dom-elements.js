const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

const freeFormPopUpEl = document.querySelector(".free-map-form-popup");
const congratsFormPopUpEl = document.querySelector(".congrats-form-popup");

const freeMapFormEl = document.getElementById("free-map-form");
const congratsFormEl = document.getElementById("congrats-form");

const freeMapFormSectionEl = freeMapFormEl.querySelector(".form-section");
const congratsFormSectionEl = congratsFormEl.querySelector(".form-section");
export {
  canvas,
  canvasContext,
  freeFormPopUpEl,
  congratsFormPopUpEl,
  freeMapFormEl,
  congratsFormEl,
  freeMapFormSectionEl,
  congratsFormSectionEl,
};

/**
 * MINI MAP :
 * width: 410px
 * height: 230px
 */
