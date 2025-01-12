import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Béances éditions",
  description: "Béances éditions",
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
        <main className="absoltute">{children}</main>
        <footer className=" ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
