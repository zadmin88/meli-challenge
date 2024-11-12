// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { resolve } from "path";
// import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern", // or "modern"
      },
    },
  },
  build: {
    sourcemap: true,
    brotliSize: true, // Enable Brotli compression
  },
});
