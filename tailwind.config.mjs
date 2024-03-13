/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        handlee: ["Handlee", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f2fbf3",
          100: "#e2f6e4",
          200: "#c6ecc9",
          300: "#99dca0",
          400: "#64c46f",
          500: "#3fa84b",
          600: "#2f8a3a",
          700: "#286d30",
          800: "#225228", //uso
          900: "#1f4825",
          950: "#0c2710",
        },
        secondary: {
          50: "#fef8ec",
          100: "#fcecc9",
          200: "#f8d78f",
          300: "#f5c15e", //uso
          400: "#f2a52d",
          500: "#eb8315",
          600: "#d0610f",
          700: "#ad4310",
          800: "#8c3414",
          900: "#732c14",
          950: "#421406",
        },
        tertiary: {
          50: "#fefefa", //uso
          100: "#fafbdf",
          200: "#f0f5b8",
          300: "#e0ea80",
          400: "#c7d846", //uso
          500: "#a7ba26",
          600: "#85981b",
          700: "#637218",
          800: "#505c19",
          900: "#434d19",
          950: "#232a09",
        },
      },
      backgroundImage: {
        "menu-arrow": "url('paissas/images/menu-arrow.webp')",
        "menu-riped": "url('paissas/images/menu-riped.png')",
      },
    },
  },
  plugins: [],
};
