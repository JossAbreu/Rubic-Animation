import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@layouts": fileURLToPath(
        new URL("./src/components/layouts/", import.meta.url)
      ),
      "@atoms": fileURLToPath(
        new URL("./src/components/atoms/", import.meta.url)
      ),
      "@molecules": fileURLToPath(
        new URL("./src/components/molecules/", import.meta.url)
      ),
      "@organisms": fileURLToPath(
        new URL("./src/components/organisms/", import.meta.url)
      ),
      "@modules": fileURLToPath(new URL("./src/modules/", import.meta.url)),
      "@widgets": fileURLToPath(
        new URL("./src/components/widgets/", import.meta.url)
      ),
      "@shared": fileURLToPath(new URL("./src/shared/", import.meta.url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", import.meta.url)
      ),
    },
  },
});
