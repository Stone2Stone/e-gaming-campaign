import { collisionDetection } from "../functions/collisionDetection";
import keys from "../keys";
import Sprite from "./Sprite";

class Character extends Sprite {
  constructor({
    position,
    image,
    frames = { max: 1 },
    sprites,
    scale = 1,
    moving = false,
    startPosition,
    endPosition,
    direction,
  }) {
    super({ position, image, frames, sprites, scale, moving });
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.direction = direction;
  }

  automate() {
    this.draw();

    switch (this.direction) {
      case "up":
        if (this.position.y != this.endPosition.y) {
          this.image = this.sprites.up;
          this.position.y = this.position.y - 1;
        } else {
          this.direction = "down";
        }
        break;
      case "down":
        if (this.position.y != this.startPosition.y) {
          this.image = this.sprites.down;
          this.position.y = this.position.y + 1;
        } else {
          this.direction = "up";
        }
        break;
      case "left":
        if (this.position.x != this.endPosition.x) {
          this.image = this.sprites.right;
          this.position.x = this.position.x + 1;
        } else {
          this.direction = "right";
        }
        break;
      case "right":
        if (this.position.x != this.startPosition.x) {
          this.image = this.sprites.left;
          this.position.x = this.position.x - 1;
        } else {
          this.direction = "left";
        }
        break;
    }
  }
}

export default Character;
