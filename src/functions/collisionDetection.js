function collisionDetection({ collision1, collision2 }) {
  return (
    collision1.position.x + collision1.width >= collision2.position.x &&
    collision1.position.x <= collision2.position.x + collision2.width &&
    collision1.position.y <= collision2.position.y + collision2.height &&
    collision1.position.y + collision1.height >= collision2.position.y
  );
}

export default collisionDetection;
