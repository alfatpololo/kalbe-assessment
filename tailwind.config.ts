import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "fontFamily": {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary : "#106A64"
      },
      fontWeight: {
        regular: "400",
        semiBold: "600",
        medium: "500",
        black: "900"
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
};
export default config;
