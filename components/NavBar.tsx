"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import beancesPic from "../public/images/logobe/logo.png";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="z-50">
      {!pathname.includes("admin") && (
        <div className=" hidden lg:visible lg:flex justify-between px-8 backdrop-blur-[2px] border-b border-black  ">
          <Link href="/">
            <Image
              src={beancesPic}
              width={250}
              height={50}
              alt="navbar image"
            />
          </Link>
          <div className="font-cyberpunk flex flex-col justify-center">
            <ul className="flex justify-evenly gap-5 text-5xl text-gray-800">
              <li
                className={`transition-colors ease-in-out ${pathname.includes("quoi") ? "hover:text-[#8f648b]" : pathname.includes("ou") ? "hover:text-[#d2bb53]" : pathname.includes("allo") ? "hover:text-[#2d6163]" : "hover:text-[#a74f6c]"}`}
              >
                <Link href="/qui">QUI?</Link>
              </li>
              <li
                className={`transition-colors ease-in-out ${pathname.includes("qui") ? "hover:text-[#a74f6c]" : pathname.includes("ou") ? "hover:text-[#d2bb53]" : pathname.includes("allo") ? "hover:text-[#2d6163]" : "hover:text-[#8f648b]"}`}
              >
                <Link href="/quoi">QUOI?</Link>
              </li>
              <li
                className={`transition-colors ease-in-out ${pathname.includes("qui") ? "hover:text-[#a74f6c]" : pathname.includes("quoi") ? "hover:text-[#8f648b]" : pathname.includes("allo") ? "hover:text-[#2d6163]" : "hover:text-[#d2bb53] "}`}
              >
                <Link href="/ou">Où?</Link>
              </li>
              <li
                className={`transition-colors ease-in-out ${pathname.includes("qui") ? "hover:text-[#a74f6c]" : pathname.includes("quoi") ? "hover:text-[#8f648b]" : pathname.includes("ou") ? "hover:text-[#d2bb53]" : "hover:text-[#2d6163]"}`}
              >
                <Link href="/allo">ALLÔ?</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
