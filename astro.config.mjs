import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://bolstatech.com" : "http://localhost:4321",
  redirects: {
    "/blog": "/blog/p/1",
  },
  integrations: [tailwind()],
});
