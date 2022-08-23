import { canvasContext } from "./canvas";

class Boundary {
  static width = 64;
  static height = 64;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Boundary;
