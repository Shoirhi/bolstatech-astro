import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { seoConfig } from "./src/constants";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://bolstatech.com" : "http://localhost:4321",
  redirects: {
    "/blog": "/blog/p/1"
  },
  image: {
    domains: ["images.microcms-assets.io"]
  },
  integrations: [tailwind(), sitemap(), serviceWorker(), webmanifest({
    name: seoConfig.siteName,
    icon: "src/images/favicon.svg",
    config: {
      icon: "src/images/favicon.svg",
      iconPurpose: ["any", "maskable"]
    },
    short_name: seoConfig.siteName,
    description: seoConfig.description,
    start_url: "/",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  })]
});