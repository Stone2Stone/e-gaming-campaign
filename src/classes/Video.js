import { canvasContext } from "../dom-elements";
import { firstVideoFrameImage } from "../images";
import keys from "../keys";
import player from "../player";

class Video {
  constructor({ video, position }) {
    this.video = video;
    this.position = position;
  }

  draw() {
    canvasContext.drawImage(
      this.video,
      this.position.x,
      this.position.y,
      this.video.videoWidth / 4,
      this.video.videoHeight / 4
    );
  }

  update() {
    canvasContext.drawImage(
      firstVideoFrameImage,
      this.position.x,
      this.position.y,
      this.video.videoWidth / 4,
      this.video.videoHeight / 4
    );
    if (keys.videoOne.paused) return;
    this.draw();
  }
}

export default Video;
