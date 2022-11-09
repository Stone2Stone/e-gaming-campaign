import Minimap from "./classes/Minimap";
import { islandMiniImage } from "./images";

export const islandMiniMap = new Minimap({
  image: islandMiniImage,
});

export const arcadeMiniMap = new Minimap({
  image: islandMiniMap,
});

export const auditoriumMiniMap = new Minimap({
  image: islandMiniMap,
});

export const libraryMiniMap = new Minimap({
  image: islandMiniMap,
});

export const controlRoomMiniMap = new Minimap({
  image: islandMiniMap,
});
