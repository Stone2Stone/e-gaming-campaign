import { auditoriumBg, islandBg } from "../backgrounds";
import { getSpawnCollision } from "../functions/collisions";
import { auditoriumSpawn, islandSpawn } from "./spawnData";

export const islandSpawnCollisions = getSpawnCollision(
  islandSpawn,
  160,
  islandBg
);

export const auditoriumSpawnCollision = getSpawnCollision(
  auditoriumSpawn,
  72,
  auditoriumBg
);
