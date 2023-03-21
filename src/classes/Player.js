import Sprite from "./Sprite";
import keys from "../keys";
import { collisionDetection } from "../functions/collisionDetection";
import { canvasContext } from "../dom-elements";

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
    oceanCollisions = [],
    location = "island",
    moveItems,
  }) {
    super({ position, image, frames, moving, sprites });
    this.collisionBlocks = collisionBlocks;
    this.buildingBoundaries = buildingBoundaries;
    this.oceanCollisions = oceanCollisions;
    this.moveItems = moveItems;
    this.location = location;
    this.speed = speed;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.inOcean = false;
    this.pickedCoins = 0;
    this.totalCoins = 0;
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
    const param = window.location.search
      ? new URLSearchParams(window.location.search).get("name")
      : "";
    const val =
      this.location === "island" || this.location === "library"
        ? `🟢 ${param}`
        : `🟢 ${this.pickedCoins}/${this.totalCoins} ${param}`;
    canvasContext.save();
    canvasContext.fillStyle = "black";
    canvasContext.beginPath();
    canvasContext.roundRect(
      this.position.x + 23 - canvasContext.measureText(val).width / 2 - 10,
      this.position.y - 25,
      canvasContext.measureText(val).width + 20,
      24,
      5
    );
    canvasContext.fill();
    canvasContext.fillStyle = "white";
    canvasContext.textAlign = "center";
    canvasContext.textBaseline = "middle";
    canvasContext.font = "12px GT Walsheim Pro";
    canvasContext.fillText(val, this.position.x + 23, this.position.y - 12);
    canvasContext.restore();
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

  checkSinglePopUpCollision(popUpCollision) {
    if (
      collisionDetection({
        collision1: this,
        collision2: popUpCollision,
      })
    ) {
      return popUpCollision.symbol;
    }
  }

  checkPopUpCollision(popUpCollisions) {
    for (let i = 0; i < popUpCollisions.length; i++) {
      const popUpCollision = popUpCollisions[i];
      if (
        collisionDetection({
          collision1: this,
          collision2: popUpCollision,
        })
      ) {
        return popUpCollision.symbol;
      }
    }
  }

  videoCollision(videoCollisions) {
    for (let i = 0; i < videoCollisions.length; i++) {
      const collision = videoCollisions[i];

      if (
        collisionDetection({
          collision1: this,
          collision2: collision,
        })
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  verticalCollision(moveNumber) {
    if (!this.moving) return;
    this.moveItems.forEach((moveItem) => {
      moveItem.position.x += moveNumber;
      if (!moveItem.endPosition) return;
      moveItem.endPosition.x += moveNumber;
      if (!moveItem.startPosition) return;
      moveItem.startPosition.x += moveNumber;
    });
  }

  horizontalCollision(moveNumber) {
    if (!this.moving) return;
    this.moveItems.forEach((moveItem) => {
      moveItem.position.y += moveNumber;
      if (!moveItem.endPosition) return;
      moveItem.endPosition.y += moveNumber;
      if (!moveItem.startPosition) return;
      moveItem.startPosition.y += moveNumber;
    });
  }
}

export default Player;
