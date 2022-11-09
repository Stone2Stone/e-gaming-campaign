import { canvas, canvasContext } from "../canvas";

class Minimap {
  constructor({ image }) {
    this.width = canvas.width / 3;
    this.height = canvas.height / 3;
    this.image = image;
  }

  draw() {
    canvasContext.drawImage(
      this.image,
      10,
      canvas.height - this.height - 10,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(10, canvas.height - (this.height - 10), 3, 3);
  }
}

export default Minimap;
