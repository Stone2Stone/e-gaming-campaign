import { canvasContext } from "../dom-elements.js";
import { collisionDetection } from "../functions/collisionDetection.js";
import keys from "../keys.js";

class Sprite {
  constructor({
    position,
    image,
    frames = { max: 1 },
    sprites,
    scale = 1,
    moving = false,
    route = [],
    distances = [],
    direction = "vertical",
  }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, value: 0, elapsed: 0 };
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max / scale;
      this.height = this.image.height / scale;
    };
    this.moving = moving;
    this.sprites = sprites;
    this.route = route;
    this.distances = distances;
    this.direction = direction;
  }

  draw() {
    canvasContext.drawImage(
      this.image,
      this.frames.value * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );

    if (!this.moving) return;

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.value < this.frames.max - 1) this.frames.value++;
      else this.frames.value = 0;
    }
  }

  automate() {
    this.draw();
    this.position.y = this.position.y += keys.distance.count;
    if (keys.distance.count > 0) {
      this.image = this.sprites.down;
    }

    if (keys.distance.count < 0) {
      this.image = this.sprites.up;
    }
    for (let i = 0; i < this.distances.length; i++) {
      const collision = this.distances[i];
      if (
        collisionDetection({
          collision1: this,
          collision2: collision,
        })
      ) {
        keys.distance.count = -keys.distance.count;
      }
    }
  }
}

// canvas.width / 2 - this.image.width / 4 / 2,
// canvas.height / 2 - this.image.height / 2,

export default Sprite;
