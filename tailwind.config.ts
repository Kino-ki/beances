import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        compt: "1200px",
      },
      colors: {
        pinku: "#D16388",
        violetta: "#B37EAE",
        gblue: "#4BA3A5",
        jaune: "#EAD05D",
      },
      backgroundImage: {
        paperbg: "url(/images/paper.webp)",
        catalbg: "url(/images/catalbg.png)",
        zinebg: "url(/images/zinebg.png)",
        oubg: "url(/images/bgou.png)",
        ouoriginal: "url(/images/ou-original.png)",
        allobg: "url(/images/bgallo.png)",
        quibg: "url(/images/quibg.png)",
        quioriginal: "url(/images/qui-original.png)",
        allooriginal: "url(/images/allo-original.png)",
        alu: "url(/images/alu.png) ",
        zinegris: "url(/images/zinegris.png) ",
        clearbg: "url(/images/clearbg.png) ",
        burgerbg: "url(/images/burger-bg.png) ",
        summarybg: "url(/images/doublepaper.png) ",
        oppabg: "url(/images/opapaper.svg) ",
      },
    },
    fontFamily: {
      sourcecode: ["var(--font-sourcecode)"],
      cyberpunk: ["var(--font-cyberpunk)"],
      burnout: ["var(--font-burnout)"],
      gillbold: ["var(--font-gillbold)"],
      punktypo: ["var(--font-punktypo)"],
    },
  },
  plugins: [],
};
export default config;
