"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import beancesPic from "../public/images/navtitle.png";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div>
      {!pathname.includes("admin") && (
        <div className="flex justify-between px-8 backdrop-blur-[2px] border-b border-black  ">
          <Link href="/">
            <Image
              src={beancesPic}
              width={500}
              height={50}
              alt="navbar image"
            />
          </Link>
          <div className="font-cyberpunk flex flex-col justify-center">
            <ul className="flex justify-evenly gap-5 text-5xl text-gray-800">
              <li className="hover:text-pinku transition-colors ease-in-out">
                <Link href="/qui">QUI?</Link>
              </li>
              <li className="hover:text-violetta transition-colors ease-in-out">
                <Link href="/quoi">QUOI?</Link>
              </li>
              <li className="hover:text-jaune transition-colors ease-in-out">
                <Link href="/ou">Où?</Link>
              </li>
              <li className="hover:text-gblue transition-colors ease-in-out">
                <Link href="/allo">ALLO?</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
