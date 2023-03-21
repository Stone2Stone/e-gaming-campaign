import {
  congratsFormPopUpEl,
  coolStuffBannerEl,
  freeFormPopUpEl,
  openLinkBannerEl,
  partnerPortalBannerEl,
  PDFBannerEl,
} from "../dom-elements";
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

const activateCoolStuffLink = () => {
  if (keys.coolStuff.active === true) {
    coolStuffBannerEl.classList.contains("hide") &&
      coolStuffBannerEl.classList.remove("hide");
  } else {
    !coolStuffBannerEl.classList.contains("hide") &&
      coolStuffBannerEl.classList.add("hide");
  }
};

const activatePartnerPortalLink = () => {
  if (keys.partnerPortal.active === true) {
    partnerPortalBannerEl.classList.contains("hide") &&
      partnerPortalBannerEl.classList.remove("hide");
  } else {
    !partnerPortalBannerEl.classList.contains("hide") &&
      partnerPortalBannerEl.classList.add("hide");
  }
};

const activatePDFLink = () => {
  if (keys.pdfPopUp.active === true) {
    PDFBannerEl.classList.contains("hide") &&
      PDFBannerEl.classList.remove("hide");
  } else {
    !PDFBannerEl.classList.contains("hide") &&
      PDFBannerEl.classList.add("hide");
  }
};

const activateOpenLink = () => {
  if (keys.openLinkPopUp.active === true) {
    openLinkBannerEl.classList.contains("hide") &&
      openLinkBannerEl.classList.remove("hide");
  } else {
    !openLinkBannerEl.classList.contains("hide") &&
      openLinkBannerEl.classList.add("hide");
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

export {
  activateFreeMapForm,
  activateCoolStuffLink,
  activatePartnerPortalLink,
  activateCongratsForm,
  activatePDFLink,
  activateOpenLink,
};
