// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Project-Natan-Blochin-314163452/",
  plugins: [react(), tailwindcss(), flowbiteReact()],
});
