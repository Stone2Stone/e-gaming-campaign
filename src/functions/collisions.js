import Boundary from "../classes/Boundary";
import offset from "../offset";

Array.prototype.parse2D = function (width) {
  const rows = [];
  for (let i = 0; i < this.length; i += width) {
    rows.push(this.slice(i, width + i));
  }
  return rows;
};

const getCollisionsMap = (collisionData, collisionWidth, currentMap) => {
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

export default getCollisionsMap;
