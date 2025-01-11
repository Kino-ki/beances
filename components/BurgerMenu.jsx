"use client";
import menulogo from "@/public/images/burgermenu.png";
import blogo from "@/public/images/logo.png";
import cross from "@/public/images/cross.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function BurgerMenu() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(false);
  };
  return (
    <div className="md:hidden flex justify-between backdrop-blur-[2px] ">
      <div className="my-auto">
        <Link href="/">
          <Image
            src={blogo}
            width={150}
            height={100}
            alt="béances logo"
            className="pl-4 py-3"
          />
        </Link>
      </div>
      <div className=" flex flex-col items-end">
        <div className=" my-auto">
          <Image
            src={menulogo}
            alt="burger menu"
            width={90}
            height={100}
            className=" pr-4 py-3 rounded-lg"
            onClick={() => setIsClicked(true)}
          />
        </div>
        {isClicked && (
          <div className=" absolute h-screen w-screen">
            <div className="absolute right-2 top-1" onClick={handleClick}>
              <Image src={cross} width={90} height={100} alt="cross logo" />
            </div>
            <div className=" h-full w-full text-center p-12 font-cyberpunk bg-burgerbg ">
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
                  <Link href="/allo">ALLO?</Link>
                </li>
              </ul>
            </div>
            this is the menu
          </div>
        )}
      </div>
    </div>
  );
}
