"use client";
import menulogo from "@/public/images/burgermenu.png";
import blogo from "@/public/images/logobe/logo.webp";
import cross from "@/public/images/cross.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function BurgerMenu() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isClicked) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(false);
  };
  return (
    <div className="lg:hidden flex justify-between backdrop-blur-[2px] ">
      <div className="my-auto">
        <Link href="/">
          <Image
            src={blogo}
            width={150}
            height={100}
            alt="béances logo"
            className="pl-4 py-3  md:w-52 "
          />
        </Link>
      </div>
      <div className=" flex flex-col items-end">
        <div className=" my-auto">
          <Image
            src={menulogo}
            alt="burger menu"
            width={75}
            height={100}
            className=" pr-4 py-3 rounded-lg md:w-28"
            onClick={() => setIsClicked(true)}
          />
        </div>
        {isClicked && (
          <div className="fixed inset-0 z-[1000] h-screen w-screen overflow-y-auto">
            <button
              type="button"
              className="absolute right-2 top-1 z-10"
              onClick={handleClick}
              aria-label="Fermer le menu"
            >
              <Image src={cross} width={90} height={100} alt="cross logo" />
            </button>
            <div className=" h-full w-full text-center p-12 font-cyberpunk bg-burgerbg bg-cover ">
              <ul className=" flex flex-col justify-center gap-16 text-5xl text-gray-800  h-full">
                <li
                  className={`transition-colors ease-in-out `}
                  onClick={handleClick}
                >
                  <Link href="/qui">QUI?</Link>
                </li>
                <li
                  className={`transition-colors ease-in-out `}
                  onClick={handleClick}
                >
                  <Link href="/quoi">QUOI?</Link>
                </li>
                <li
                  className={`transition-colors ease-in-out `}
                  onClick={handleClick}
                >
                  <Link href="/ou">Où?</Link>
                </li>
                <li
                  className={`transition-colors ease-in-out `}
                  onClick={handleClick}
                >
                  <Link href="/allo">ALLÔ?</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
