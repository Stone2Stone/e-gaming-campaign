import Sprite from "./Sprite";
import keys from "../keys";
import collisionDetection from "../functions/collisionDetection";

class Player extends Sprite {
  constructor({
    position,
    image,
    frames = { max: 1 },
    moving,
    sprites,
    speed = 7,
    collisionBlocks = [],
    buildingBoundaries = [],
    location = "arcade",
    moveItems,
  }) {
    super({ position, image, frames, moving, sprites });
    this.collisionBlocks = collisionBlocks;
    this.buildingBoundaries = buildingBoundaries;
    this.moveItems = moveItems;
    this.location = location;
    this.speed = speed;
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
      this.loopCollisionBlock(0, this.speed);
      this.horizontalCollision(this.speed);
      this.checkBuildingCollision();
    } else if (keys.ArrowLeft.pressed) {
      this.moving = true;
      this.image = this.sprites.left;
      this.loopCollisionBlock(this.speed, 0);
      this.verticalCollision(this.speed);
      this.checkBuildingCollision();
    } else if (keys.ArrowDown.pressed) {
      this.moving = true;
      this.image = this.sprites.down;
      this.loopCollisionBlock(0, -this.speed);
      this.horizontalCollision(-this.speed);
      this.checkBuildingCollision();
    } else if (keys.ArrowRight.pressed) {
      this.moving = true;
      this.image = this.sprites.right;
      this.loopCollisionBlock(-this.speed, 0);
      this.verticalCollision(-this.speed);
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
        switch (buildingBoundary.symbol) {
          case 66884:
            this.location = "auditorium";
            break;
          case 57492:
            this.location = "library";
            break;
          case 96037:
            this.location = "control room";
            break;
          case 28461:
            this.location = "arcade";
            break;
          default:
            this.location = "island";
            break;
        }
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
