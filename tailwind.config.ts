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
      "secondary-bg": "rgba(var(--secondary-bg))",
      "tertiary-bg": "rgba(var(--tertiary-bg))",

      "primary-text": "rgba(var(--primary-text))",
      "secondary-text": "rgba(var(--secondary-text))",
      "tertiary-text": "rgba(var(--tertiary-text))"
    },
    extend: {
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
