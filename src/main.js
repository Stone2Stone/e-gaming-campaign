import {
  foregroundImage,
  islandImage,
  mapImage,
  playerDownImage,
  playerLeftImage,
  playerRightImage,
  playerUpImage,
} from "./images";
import { canvas } from "./canvas.js";
import collisions from "../data/collisions";
import indoorOne from "../data/indoors";
import Sprite from "./Sprite";
import keys from "./keys";
import Boundary from "./Boundary";
import { collisionDetection } from "./collisions";

const indoorsMap = [];

const indoors = [];

const collisionsMap = [];

const boundaries = [];

const offset = {
  x: -734,
  y: -600,
};

for (let i = 0; i < collisions.length; i += 160) {
  collisionsMap.push(collisions.slice(i, 160 + i));
}

for (let i = 0; i < indoorOne.length; i += 160) {
  indoorsMap.push(indoorOne.slice(i, 160 + i));
}

collisionsMap.forEach((row, rowIndex) => {
  row.forEach((symbol, symbolIndex) => {
    if (symbol === 20415) {
      boundaries.push(
        new Boundary({
          position: {
            x: symbolIndex * Boundary.width + offset.x,
            y: rowIndex * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

indoorsMap.forEach((row, rowIndex) => {
  row.forEach((symbol, symbolIndex) => {
    if (symbol === 20415) {
      indoors.push(
        new Boundary({
          position: {
            x: symbolIndex * Boundary.width + offset.x,
            y: rowIndex * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

console.log(indoors);

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: islandImage,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

const moveItems = [background, foreground, ...boundaries, ...indoors];

function animate() {
  requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  indoors.forEach((indoor) => {
    indoor.draw();
  });
  player.draw();
  // foreground.draw();

  if (
    keys.ArrowUp.pressed ||
    keys.ArrowLeft.pressed ||
    keys.ArrowDown.pressed ||
    keys.ArrowLeft
  ) {
    for (let i = 0; i < indoors.length; i++) {
      const indoor = indoors[i];
      if (
        collisionDetection({
          collision1: player,
          collision2: indoor,
        })
      ) {
        console.log("remove entered");
        break;
      }
    }
  }

  let moving = true;
  player.moving = false;
  if (keys.ArrowUp.pressed && lastKey === "ArrowUp") {
    player.moving = true;
    player.image = player.sprites.up;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          collision1: player,
          collision2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    moving && moveItems.forEach((moveItem) => (moveItem.position.y += 3));
  } else if (keys.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    player.moving = true;
    player.image = player.sprites.left;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          collision1: player,
          collision2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    moving && moveItems.forEach((moveItem) => (moveItem.position.x += 3));
  } else if (keys.ArrowDown.pressed && lastKey === "ArrowDown") {
    player.moving = true;
    player.image = player.sprites.down;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          collision1: player,
          collision2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    moving && moveItems.forEach((moveItem) => (moveItem.position.y -= 3));
  } else if (keys.ArrowRight.pressed && lastKey === "ArrowRight") {
    player.moving = true;
    player.image = player.sprites.right;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          collision1: player,
          collision2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    moving && moveItems.forEach((moveItem) => (moveItem.position.x -= 3));
  }
}

animate();

let lastKey = "";
addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      lastKey = "ArrowUp";
      break;
    case "w":
      keys.ArrowUp.pressed = true;
      lastKey = "ArrowUp";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      lastKey = "ArrowLeft";
      break;
    case "a":
      keys.ArrowLeft.pressed = true;
      lastKey = "ArrowLeft";
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = true;
      lastKey = "ArrowDown";
      break;
    case "s":
      keys.ArrowDown.pressed = true;
      lastKey = "ArrowDown";
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      lastKey = "ArrowRight";
      break;
    case "d":
      keys.ArrowRight.pressed = true;
      lastKey = "ArrowRight";
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "w":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "a":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
    case "s":
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "d":
      keys.ArrowRight.pressed = false;
      break;
  }
});
