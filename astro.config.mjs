import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://bolstatech-astro.pages.dev" : "http://localhost:4321",
  integrations: [tailwind()],
});
