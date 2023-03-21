import { canvasContext } from "../dom-elements";

class PDF {
  static width = 68;
  static height = 120;
  constructor({ position, symbol = 0, frames, image }) {
    this.position = position;
    this.image = new Image();
    this.symbol = symbol;
    this.frames = { ...frames, value: 0, elapsed: 0 };
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.image.src = image;
    this.link = { active: true };
    this.loaded = false;
  }

  draw() {
    if (!this.loaded) return;
    canvasContext.drawImage(
      this.image, //image
      this.frames.value * this.width, //sx
      0, //sy
      this.image.width / this.frames.max, //sw
      this.image.height, //sh
      this.position.x, //dx
      this.position.y, //dy
      this.image.width / this.frames.max, //dw
      this.image.height //dh
    );

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.value < this.frames.max - 1) this.frames.value++;
      else this.frames.value = 0;
    }
  }

  update() {
    this.draw();
  }
}

export default PDF;
