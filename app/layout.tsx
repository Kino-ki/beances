import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NewsletterModal from "@/components/NewsletterModal";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Béances éditions | Maison d'édition indépendante queer  ",
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
    <html lang="en">
      <body
        className={`antialiased bg-paperbg bg-fixed bg-cover font-sourcecode relative no-scrollbar`}
      >
        <Toaster position="top-center" />
        <header className=" sticky top-0 w-full z-50 ">
          <NavBar />
          <BurgerMenu />
        </header>
        <main className="absoltute">
          <div className="z-50 fixed bottom-1 md:bottom-10 md:left-5 w-full md:w-[60%] lg:w-[30%] ">
            <NewsletterModal />
          </div>
          {children}
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
