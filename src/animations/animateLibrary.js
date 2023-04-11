import { libraryBg, libraryMsgBg, libraryOverlay } from "../backgrounds";
import {
  exitLibraryBoundaries,
  libraryBoundaries,
} from "../collisions/mapCollisions";
import {
  libraryPopUpCollisions,
  linkPopUpCollisions,
  partnerPortalPopUpCollisions,
  pdfPopUpCollisions,
} from "../collisions/PopUpCollisions";
import { gameLogo, libraryMiniMap } from "../mini-maps";
import player from "../player";
import checkPlayerLocation from "../functions/checkPlayerLocation";
import pdfImage from "../../assets/library/PDF.png";
import onlineImage from "../../assets/library/online.png";
import {
  canvasContext,
  openLink,
  PDFLink,
  videoOne,
  videoThree,
  videoTwo,
} from "../dom-elements";
import keys from "../keys";
import Video from "../classes/Video";
import {
  videoOneCollisions,
  videoThreeCollisions,
  videoTwoCollisions,
} from "../collisions/videoCollision";
import { collisionDetection } from "../functions/collisionDetection";
import { handleVideoOne, handleVideoThree, handleVideoTwo } from "../main";
import {
  firstVideoFrameImage,
  secondVideoFrameImage,
  thirdVideoFrameImage,
} from "../images";
import {
  activateOpenLink,
  activatePartnerPortalLink,
  activatePDFLink,
} from "../functions/activateForm";
import pdf from "../pdf";
import PDF from "../classes/PDF";

const firstVideo = new Video({
  video: videoOne,
  position: {
    x: 520,
    y: -1565,
  },
  videoFrame: firstVideoFrameImage,
  videoNum: 1,
});

const secondVideo = new Video({
  video: videoTwo,
  position: {
    x: 1160,
    y: -1565,
  },
  videoFrame: secondVideoFrameImage,
  videoNum: 2,
});

const thirdVideo = new Video({
  video: videoThree,
  position: {
    x: 1800,
    y: -1565,
  },
  videoFrame: thirdVideoFrameImage,
  videoNum: 3,
});

const pdfOne = new PDF({
  position: {
    x: 831,
    y: -575,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfTwo = new PDF({
  position: {
    x: 1855,
    y: -575,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfThree = new PDF({
  position: {
    x: 447,
    y: -175,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfFour = new PDF({
  position: {
    x: 831,
    y: -175,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfFive = new PDF({
  position: {
    x: 1340,
    y: -175,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfSix = new PDF({
  position: {
    x: 1855,
    y: -175,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const pdfSeven = new PDF({
  position: {
    x: 2239,
    y: -175,
  },
  frames: {
    max: 6,
  },
  image: pdfImage,
});

const onlineOne = new PDF({
  position: {
    x: 1220,
    y: 240,
  },
  frames: {
    max: 4,
  },
  image: onlineImage,
});

const onlineTwo = new PDF({
  position: {
    x: 1475,
    y: 240,
  },
  frames: {
    max: 4,
  },
  image: onlineImage,
});

const onlineThree = new PDF({
  position: {
    x: 2310,
    y: -530,
  },
  frames: {
    max: 4,
  },
  image: onlineImage,
});

const onlineFour = new PDF({
  position: {
    x: 385,
    y: -530,
  },
  frames: {
    max: 4,
  },
  image: onlineImage,
});

const pdfLinkOne =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/%24R07ROHU.pdf";
const pdfLinkTwo =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/%24RB31CXX.pdf";
const pdfLinkThree =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/%24RG1J6FP.pdf";
const pdfLinkFour =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/%24RG4IM5V.pdf";
const pdfLinkFive =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/service-now.pdf";
const pdfLinkSix = "https://stone2stone.s3.eu-west-2.amazonaws.com/ilmt.pdf";
const pdfLinkSeven =
  "https://stone2stone.s3.eu-west-2.amazonaws.com/network-automation.pdf";

const openLinkOne = "https://www.ansible.com/";
const openLinkTwo =
  "https://www.redhat.com/en/events/open-demos-emea?extIdCarryOver=true&intcmp=7013a0000038BNzAAM&sc_cid=7013a0000034eA3AAI";
const openLinkThree =
  "https://www.redhat.com/en/technologies/cloud-computing/openshift";
const openLinkFour =
  "https://redhatdg.co1.qualtrics.com/jfe/form/SV_25JhSmJFBbdWzg9?sc_cid=7013a000002q6eVAAQ";

function animateLibrary() {
  keys.game.paused = true;
  if (!keys.game.paused) return;
  if (player.location === "library") {
    requestAnimationFrame(animateLibrary);
    let gradient = canvasContext.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#06A2EB");
    gradient.addColorStop(1, "transparent");
    canvasContext.fillStyle = gradient;
    libraryBg.draw();
    libraryBoundaries.forEach((libraryBoundary) => {
      libraryBoundary.draw("transparent");
    });
    libraryPopUpCollisions.forEach((libraryPopUpCollision) => {
      libraryPopUpCollision.draw("transparent");
    });
    exitLibraryBoundaries.forEach((exitLibraryBoundary) => {
      exitLibraryBoundary.draw("transparent");
    });
    videoOneCollisions.forEach((videoOneCollision) => {
      videoOneCollision.draw("transparent");
    });
    videoTwoCollisions.forEach((videoTwoCollision) => {
      videoTwoCollision.draw("transparent");
    });
    videoThreeCollisions.forEach((videoThreeCollision) => {
      videoThreeCollision.draw("transparent");
    });
    partnerPortalPopUpCollisions.forEach((partnerPortalPopUpCollision) => {
      partnerPortalPopUpCollision.draw("transparent");
    });
    pdfPopUpCollisions.forEach((pdfPopUpCollision) => {
      pdfPopUpCollision.draw("transparent");
    });
    linkPopUpCollisions.forEach((linkPopUpCollision) => {
      linkPopUpCollision.draw("transparent");
    });
    pdfOne.update();
    pdfTwo.update();
    pdfThree.update();
    pdfFour.update();
    pdfFive.update();
    pdfSix.update();
    pdfSeven.update();
    onlineOne.update();
    onlineTwo.update();
    onlineThree.update();
    onlineFour.update();
    player.buildingBoundaries = exitLibraryBoundaries;
    player.collisionBlocks = libraryBoundaries;
    player.moveItems = [
      libraryBg,
      libraryOverlay,
      ...libraryBoundaries,
      ...exitLibraryBoundaries,
      ...libraryPopUpCollisions,
      ...videoOneCollisions,
      ...videoTwoCollisions,
      ...videoThreeCollisions,
      ...partnerPortalPopUpCollisions,
      ...pdfPopUpCollisions,
      ...linkPopUpCollisions,
      firstVideo,
      secondVideo,
      thirdVideo,
      pdfOne,
      pdfTwo,
      pdfThree,
      pdfFour,
      pdfFive,
      pdfSix,
      pdfSeven,
      onlineOne,
      onlineTwo,
      onlineThree,
      onlineFour,
    ];
    player.update();
    libraryOverlay.draw();
    libraryMiniMap.update();
    gameLogo.draw();
    firstVideo.update();
    secondVideo.update();
    thirdVideo.update();
    let symbol = player.checkPopUpCollision(libraryPopUpCollisions);
    videoOneEvent();
    videoTwoEvent();
    videoThreeEvent();
    switch (symbol) {
      case 1:
        break;
      case 2:
        libraryMsgBg.draw();
        break;
    }
    let partnerPortalPopUp = player.checkPopUpCollision(
      partnerPortalPopUpCollisions
    );
    switch (partnerPortalPopUp) {
      case 45727:
        keys.partnerPortal.active = true;
        activatePartnerPortalLink();
        break;
      case 45711:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkOne) PDFLink.href = pdfLinkOne;
        activatePDFLink();
        break;
      case 45712:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkTwo) PDFLink.href = pdfLinkTwo;
        activatePDFLink();
        break;
      case 45713:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkThree) PDFLink.href = pdfLinkThree;
        activatePDFLink();
        break;
      case 45714:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkFour) PDFLink.href = pdfLinkFour;
        activatePDFLink();
        break;
      case 45715:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkFive) PDFLink.href = pdfLinkFive;
        activatePDFLink();
        break;
      case 45716:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkSix) PDFLink.href = pdfLinkSix;
        activatePDFLink();
        break;
      case 45717:
        keys.pdfPopUp.active = true;
        if (PDFLink.href != pdfLinkSeven) PDFLink.href = pdfLinkSeven;
        activatePDFLink();
        break;
      case 45721:
        keys.openLinkPopUp.active = true;
        if (openLink.href != openLinkOne) openLink.href = openLinkOne;
        activateOpenLink();
        break;
      case 45722:
        keys.openLinkPopUp.active = true;
        if (openLink.href != openLinkTwo) openLink.href = openLinkTwo;
        activateOpenLink();
        break;
      case 45723:
        keys.openLinkPopUp.active = true;
        if (openLink.href != openLinkThree) openLink.href = openLinkThree;
        activateOpenLink();
        break;
      case 45724:
        keys.openLinkPopUp.active = true;
        if (openLink.href != openLinkFour) openLink.href = openLinkFour;
        activateOpenLink();
        break;
      default:
        keys.partnerPortal.active = false;
        keys.pdfPopUp.active = false;
        keys.openLinkPopUp.active = false;
        activatePartnerPortalLink();
        activatePDFLink();
        activateOpenLink();
        break;
    }
  } else {
    checkPlayerLocation(player.location);
    return;
  }
}

function videoOneEvent() {
  for (let i = 0; i < videoOneCollisions.length; i++) {
    const collision = videoOneCollisions[i];

    if (
      collisionDetection({
        collision1: player,
        collision2: collision,
      })
    ) {
      handleVideoOne(false);
      return;
    }
  }

  handleVideoOne(true);
}
function videoTwoEvent() {
  for (let i = 0; i < videoTwoCollisions.length; i++) {
    const collision = videoTwoCollisions[i];

    if (
      collisionDetection({
        collision1: player,
        collision2: collision,
      })
    ) {
      handleVideoTwo(false);
      return;
    }
  }

  handleVideoTwo(true);
}

function videoThreeEvent() {
  for (let i = 0; i < videoThreeCollisions.length; i++) {
    const collision = videoThreeCollisions[i];

    if (
      collisionDetection({
        collision1: player,
        collision2: collision,
      })
    ) {
      handleVideoThree(false);
      return;
    }
  }

  handleVideoThree(true);
}

export default animateLibrary;
