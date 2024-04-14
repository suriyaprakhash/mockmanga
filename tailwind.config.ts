import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-bg": "rgba(var(--primary-bg))",
      "primary-text": "rgba(var(--primary-text))",

      "secondary-bg": "rgba(var(--secondary-bg))",
      "secondary-text": "rgba(var(--secondary-text))",

      
      "dropdown-bg": "rgba(var(--dropdown-bg))",
      "dropdown-text": "rgba(var(--dropdown-text))",
      "dropdown-tray-bg": "rgba(var(--dropdown-tray-bg))",

      "button-bg": "rgba(var(--button-bg))",
      "button-text": "rgba(var(--button-text))",
      "button-bg-hover": "rgba(var(--button-bg-hover))",

      "button-danger-bg": "rgba(var(--button-danger-bg))",
      "button-danger-text": "rgba(var(--button-danger-text))",
      "button-danger-bg-hover": "rgba(var(--button-danger-bg-hover))",

    },
    extend: {
      animation: {
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
