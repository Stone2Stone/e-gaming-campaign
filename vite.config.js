import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/e-gaming-campaign/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        howto: resolve(__dirname, "how-to.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },
});
