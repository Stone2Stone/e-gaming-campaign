import { canvasContext } from "../canvas";

class Boundary {
  static width = 64;
  static height = 64;
  constructor({ position, symbol }) {
    this.position = position;
    this.symbol = symbol;
    this.width = 64;
    this.height = 64;
  }

  draw(color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Boundary;
