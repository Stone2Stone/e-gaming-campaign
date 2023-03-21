import { canvasContext } from "../dom-elements";
import { firstVideoFrameImage, logoVideoFrameImage } from "../images";
import keys from "../keys";
import player from "../player";

class Video {
  constructor({ video, position, videoFrame, videoNum }) {
    this.video = video;
    this.position = position;
    this.videoFrame = videoFrame;
    this.videoNum = videoNum;
  }

  draw() {
    canvasContext.drawImage(
      this.video,
      this.position.x,
      this.position.y,
      1280 / 3,
      720 / 3
    );
  }

  update() {
    canvasContext.drawImage(
      this.videoFrame,
      this.position.x,
      this.position.y,
      1280 / 3,
      720 / 3
    );

    // canvasContext.drawImage(
    //   logoVideoFrameImage,
    //   this.position.x,
    //   this.position.y,
    //   1280 / 3,
    //   720 / 3
    // );

    switch (this.videoNum) {
      case 1:
        if (keys.videoOne.paused) return;
        this.draw();
        break;
      case 2:
        if (keys.videoTwo.paused) return;
        this.draw();
        break;
      case 3:
        if (keys.videoThree.paused) return;
        this.draw();
        break;
    }
  }
}

export default Video;
