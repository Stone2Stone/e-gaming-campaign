import { canvas, canvasContext } from "../dom-elements";

class Minimap {
  constructor({ image, position, scale = 3 }) {
    this.image = image;
    this.image.onload = () => {
      this.width = this.image.width / scale;
      this.height = this.image.height / scale;
    };
    this.position = position;
  }

  draw() {
    canvasContext.drawImage(
      this.image,
      this.position.x, //10,
      this.position.y, //canvas.height - this.height - 50,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
  }
}

export default Minimap;
