import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base matches https://kanikadobliyal.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
