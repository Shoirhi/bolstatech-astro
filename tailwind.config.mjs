/** @type {import('tailwindcss').Config} */

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "margin-top": rem(64),
              "margin-bottom": rem(24),
              "letter-spacing": "0.04em",
              "line-height": 1.5,
              "font-size": rem(32),
              "@media(min-width: 768px)": {
                "line-height": 1.4,
                "font-size": rem(36),
              },
            },
            h2: {
              "margin-top": rem(64),
              "margin-bottom": rem(24),
              "letter-spacing": "0.04em",
              "line-height": 1.5,
              "font-size": rem(28),
              "@media(min-width: 768px)": {
                "font-size": rem(32),
              },
            },
            h3: {
              "margin-top": rem(40),
              "margin-bottom": rem(24),
              "letter-spacing": "0.04em",
              "line-height": 1.5,
              "font-size": rem(24),
              "@media(min-width: 768px)": {
                "font-size": rem(28),
              },
            },
            h4: {
              "margin-top": rem(40),
              "margin-bottom": rem(16),
              "letter-spacing": "0.04em",
              "line-height": 1.5,
              "font-size": rem(20),
              "@media(min-width: 768px)": {
                "font-size": rem(24),
              },
            },
            h4: {
              "margin-top": rem(40),
              "margin-bottom": rem(16),
              "letter-spacing": "0.04em",
              "line-height": 1.7,
              "font-size": rem(16),
              "@media(min-width: 768px)": {
                "line-height": 1.5,
                "font-size": rem(20),
              },
            },
            p: {
              "margin-top": rem(16),
              "margin-bottom": rem(16),
              "letter-spacing": "0.04em",
              "line-height": 1.7,
            },
            ul: {
              "margin-top": rem(16),
              "margin-bottom": rem(16),
              "letter-spacing": "0.04em",
              "line-height": 1.7,
            },
            ol: {
              "margin-top": rem(16),
              "margin-bottom": rem(16),
              "letter-spacing": "0.04em",
              "line-height": 1.7,
            },
            figure: {
              "margin-top": rem(16),
              "margin-bottom": rem(16),
            }
          },
        },
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
