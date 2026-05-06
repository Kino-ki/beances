import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const NewsletterModal = dynamic(() => import("@/components/NewsletterModal"), {
  ssr: false,
});
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";

const sourceCode = localFont({
  src: "../public/fonts/SourceCodePro_VariableFont_wght.ttf",
  variable: "--font-sourcecode",
  display: "swap",
});

const cyberpunk = localFont({
  src: "../public/fonts/Cybrpnuk2.ttf",
  variable: "--font-cyberpunk",
  display: "swap",
});

const burnout = localFont({
  src: "../public/fonts/Burnoutfadeaway.ttf",
  variable: "--font-burnout",
  display: "swap",
});

const gillbold = localFont({
  src: "../public/fonts/gillSansUltraBold.ttf",
  variable: "--font-gillbold",
  display: "swap",
});

const punktypo = localFont({
  src: "../public/fonts/Punktype.ttf",
  variable: "--font-punktypo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Béances éditions, microédition transbigouine",
  description:
    "Béances Éditions, maison d’édition indépendante, queer et féministe, publie des voix lesbo-queer, lesbiennes et trans pour faire résonner des récits engagés.",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCode.variable} ${cyberpunk.variable} ${burnout.variable} ${gillbold.variable} ${punktypo.variable}`}>
      <body
        className={`antialiased font-sourcecode relative no-scrollbar`}
      >
        <div className="fixed inset-0 -z-10 bg-paperbg bg-cover bg-center" aria-hidden="true" />
        <Toaster position="top-center" />
        <header className=" sticky top-0 w-full z-50 ">
          <NavBar />
          <BurgerMenu />
        </header>
        <main className="absoltute">
          <div className="z-40 fixed bottom-1 md:bottom-10 md:left-5 w-full md:w-[60%] lg:w-[30%] ">
            <NewsletterModal />
          </div>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Analytics />

          <div className="fixed top-50"></div>
        </main>
        <footer className=" ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
