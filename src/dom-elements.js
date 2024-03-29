const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

const freeFormPopUpEl = document.querySelector(".free-map-form-popup");
const freeFormPopUpImages = freeFormPopUpEl.querySelector(".popup-img");
const freeMapScriptEl = freeFormPopUpEl.querySelector(".free-map-script");

const congratsFormPopUpEl = document.querySelector(".congrats-form-popup");
const congratsFormPopUpImage =
  congratsFormPopUpEl.querySelector(".congrats-images");

const freeMapFormEl = document.getElementById("free-map-form");
const congratsFormEl = document.getElementById("congrats-form");

const freeMapFormButtonEl = freeFormPopUpEl.querySelector("#freeMapFormBtn");
const congratsFormButtonEl =
  congratsFormPopUpEl.querySelector("#congratFormBtn");

const enterPriseScript =
  congratsFormPopUpEl.querySelector(".enterprise-script");
const ansibleAutomationPlatformScript = congratsFormPopUpEl.querySelector(
  ".ansible-automation-platform-script"
);
const openShiftScript = congratsFormPopUpEl.querySelector(".open-shift-script");

const coolStuffBannerEl = document.querySelector(".cool-stuff-banner");
const partnerPortalBannerEl = document.querySelector(".partner-portal-banner");
const PDFBannerEl = document.querySelector(".pdf-popup");
const PDFLink = PDFBannerEl.querySelector(".pdf-popup-link");
const openLinkBannerEl = document.querySelector(".open-link-popup");
const openLink = openLinkBannerEl.querySelector(".link-popup-link");

const videoOne = document.getElementById("video1");
const videoTwo = document.getElementById("video2");
const videoThree = document.getElementById("video3");

export {
  canvas,
  canvasContext,
  freeFormPopUpEl,
  freeFormPopUpImages,
  freeMapScriptEl,
  congratsFormPopUpEl,
  congratsFormPopUpImage,
  freeMapFormEl,
  congratsFormEl,
  freeMapFormButtonEl,
  congratsFormButtonEl,
  enterPriseScript,
  ansibleAutomationPlatformScript,
  openShiftScript,
  coolStuffBannerEl,
  partnerPortalBannerEl,
  PDFBannerEl,
  PDFLink,
  openLinkBannerEl,
  openLink,
  videoOne,
  videoTwo,
  videoThree,
};

/**
 * MINI MAP :
 * width: 410px
 * height: 230px
 */
