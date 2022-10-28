import { islandCollision, auditoriumCollision } from "./mapData";
import { islandBuidlings } from "./buildingCollisions";
import getCollisionsMap from "../functions/collisions";

export const auditoriumBoundaries = getCollisionsMap(auditoriumCollision, 80);

export const islandBuildingBoundaries = getCollisionsMap(islandBuidlings, 160);

export const islandBoundaries = getCollisionsMap(islandCollision, 160);
