import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinku: "#D16388",
        violetta: "#B37EAE",
        gblue: "#4BA3A5",
        jaune: "#FADE61",
      },
      backgroundImage: {
        paperbg: "url(/images/paper.png)",
        catalbg: "url(/images/catalbg.png)",
        zinebg: "url(/images/zinebg.png)",
      },
    },
    fontFamily: {
      sourcecode: ["Source Code Pro"],
      cyberpunk: ["cyberpunk"],
      burnout: ["burnout"],
      gillbold: ["gillbold"],
    },
  },
  plugins: [],
};
export default config;
