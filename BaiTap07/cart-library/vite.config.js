import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react(), cssInjectedByJsPlugin()],
      root: "demo",
      build: {
        outDir: "../dist",
      },
    };
  } else {
    return {
      plugins: [react(), cssInjectedByJsPlugin()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.js"),
          name: "CartLibrary",
          fileName: (format) => `cart-library.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
        cssCodeSplit: false
      },
    };
  }
});
