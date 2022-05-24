import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blue-sunflower/",
  plugins: [
    vue(),
    VitePWA({
      /* https://vite-plugin-pwa.netlify.app/guide/prompt-for-update.html#generate-sw-source-map */
      workbox: {
        sourcemap: true,
      },

      /* https://vite-plugin-pwa.netlify.app/guide/generate.html */
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Blue Sunflower",
        short_name: "Blue Sunflower",
        description: "Doops tracks his sport while Boops cheers him on!",
        theme_color: "#2d89ef" /* blue */,
      },
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
