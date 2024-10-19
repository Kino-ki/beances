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
        className={`antialiased bg-paperbg bg-cover font-sourcecode relative no-scrollbar`}
      >
        <header className="absolute top-0 w-full ">
          <NavBar />
        </header>
        <main className="absoltute">{children}</main>
        <footer className="absolute bottom-0 w-full  ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
