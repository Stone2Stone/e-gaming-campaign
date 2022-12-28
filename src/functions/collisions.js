import Boundary from "../classes/Boundary";
import Coin from "../classes/Coin";
import offset from "../offset";

Array.prototype.parse2D = function (width) {
  const rows = [];
  for (let i = 0; i < this.length; i += width) {
    rows.push(this.slice(i, width + i));
  }
  return rows;
};

export const getCollisionsMap = (collisionData, collisionWidth, currentMap) => {
  const boundaries = [];
  const collisionsMap = collisionData.parse2D(collisionWidth);
  collisionsMap.forEach((row, rowIndex) => {
    row.forEach((symbol, symbolIndex) => {
      if (symbol != 0) {
        boundaries.push(
          new Boundary({
            position: {
              x: symbolIndex * Boundary.width + currentMap.position.x,
              y: rowIndex * Boundary.height + currentMap.position.y,
            },
            symbol: symbol,
          })
        );
      }
    });
  });

  return boundaries;
};

export const getSpawnCollision = (
  collisionData,
  collisionWidth,
  currentMap
) => {
  const collisionSpawn = collisionData.parse2D(collisionWidth);
  let spawn;
  collisionSpawn.forEach((row, rowIndex) => {
    row.forEach((symbol, symbolIndex) => {
      if (symbol != 0) {
        spawn = new Boundary({
          position: {
            x: symbolIndex * Boundary.width + currentMap.position.x,
            y: rowIndex * Boundary.height + currentMap.position.y,
          },
          symbol: symbol,
        });
      }
    });
  });

  return spawn;
};

export const getPopUpCollisionMap = (
  collisionData,
  collisionWidth,
  currentMap,
  symbol
) => {
  const popUp = [];
  const collisionsMap = collisionData.parse2D(collisionWidth);
  collisionsMap.forEach((row, rowIndex) => {
    row.forEach((currentSymbol, symbolIndex) => {
      if (currentSymbol <= symbol - 1 && currentSymbol != 0) {
        popUp.push(
          new Coin({
            position: {
              x: symbolIndex * Coin.width + currentMap.position.x,
              y: rowIndex * Coin.height + currentMap.position.y,
            },
            symbol: currentSymbol,
            frames: {
              max: 8,
            },
          })
        );
      } else if (currentSymbol === symbol) {
        popUp.push(
          new Boundary({
            position: {
              x: symbolIndex * Boundary.width + currentMap.position.x,
              y: rowIndex * Boundary.height + currentMap.position.y,
            },
            symbol: symbol,
          })
        );
      }
    });
  });

  return popUp;
};
