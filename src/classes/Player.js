import Sprite from "./Sprite";
import keys from "../keys";
import collisionDetection from "../functions/collisionDetection";
import player from "../player";
import { animateAuditorium, animateIsland } from "../animeMaps";
import { canvas, canvasContext } from "../canvas";

class Player extends Sprite {
  constructor({
    position,
    image,
    frames = { max: 1 },
    moving,
    sprites,
    collisionBlocks = [],
    buildingBoundaries = [],
    transition = false,
    moveItems,
  }) {
    super({ position, image, frames, moving, sprites });
    this.collisionBlocks = collisionBlocks;
    this.buildingBoundaries = buildingBoundaries;
    this.moveItems = moveItems;
    this.transition = transition;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    this.draw();
    this.moving = false;
    if (keys.ArrowUp.pressed) {
      this.moving = true;
      this.image = this.sprites.up;
      this.loopCollisionBlock(0, 3);
      this.horizontalCollision(3);
      this.checkBuildingCollision();
    } else if (keys.ArrowLeft.pressed) {
      this.moving = true;
      this.image = this.sprites.left;
      this.loopCollisionBlock(3, 0);
      this.verticalCollision(3);
      this.checkBuildingCollision();
    } else if (keys.ArrowDown.pressed) {
      this.moving = true;
      this.image = this.sprites.down;
      this.loopCollisionBlock(0, -3);
      this.horizontalCollision(-3);
      this.checkBuildingCollision();
    } else if (keys.ArrowRight.pressed) {
      this.moving = true;
      this.image = this.sprites.right;
      this.loopCollisionBlock(-3, 0);
      this.verticalCollision(-3);
      this.checkBuildingCollision();
    }
  }

  loopCollisionBlock(currentX, currentY) {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const boundary = this.collisionBlocks[i];
      if (
        collisionDetection({
          collision1: this,
          collision2: {
            ...boundary,
            position: {
              x: boundary.position.x + currentX,
              y: boundary.position.y + currentY,
            },
          },
        })
      ) {
        this.moving = false;
        break;
      }
    }
  }

  checkBuildingCollision() {
    for (let i = 0; i < this.buildingBoundaries.length; i++) {
      const buildingBoundary = this.buildingBoundaries[i];
      if (
        collisionDetection({
          collision1: this,
          collision2: buildingBoundary,
        })
      ) {
        player.transition = true;
        console.log("CONNECTED");
        break;
      }
    }
  }

  verticalCollision(moveNumber) {
    this.moving &&
      this.moveItems.forEach((moveItem) => (moveItem.position.x += moveNumber));
  }

  horizontalCollision(moveNumber) {
    this.moving &&
      this.moveItems.forEach((moveItem) => (moveItem.position.y += moveNumber));
  }
}

export default Player;
