import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Béances éditions",
  description: "Béances éditions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-paperbg bg-cover font-sourcecode relative`}
      >
        <header className="absolute top-0 w-full  z-50 ">
          <NavBar />
        </header>
        <main className="absoltute">{children}</main>
        <footer className="absolute bottom-0 w-full  z-50 ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
