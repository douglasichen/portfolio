import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [deno(), react()],
    build: {
        outDir: "dist",
        assetsDir: "assets",
        // Ensure CSS is properly extracted
        cssCodeSplit: false,
    },
});
