"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import beancesPic from "../public/images/navtitle.png";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="z-50 ">
      {!pathname.includes("admin") && (
        <div className=" hidden lg:visible lg:flex justify-between px-8 backdrop-blur-[2px] border-b border-black  ">
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
              <li className={`transition-colors ease-in-out ${pathname.includes("quoi")? "hover:text-violetta" : pathname.includes("ou") ? "hover:text-jaune" :  pathname.includes("allo")? "hover:text-gblue" : "hover:text-pinku" }` }>
                <Link href="/qui">QUI?</Link>
              </li>
              <li className={`transition-colors ease-in-out ${pathname.includes("qui")? "hover:text-pinku" : pathname.includes("ou") ? "hover:text-jaune" :  pathname.includes("allo")? "hover:text-gblue" : "hover:text-violetta"  }` }>
                <Link href="/quoi">QUOI?</Link>
              </li>
              <li className={`transition-colors ease-in-out ${pathname.includes("qui")? "hover:text-pinku" :pathname.includes("quoi")? "hover:text-violetta" : pathname.includes("allo")? "hover:text-gblue" : "hover:text-jaune" }`}>
                <Link href="/ou">Où?</Link>
              </li>
              <li className={`transition-colors ease-in-out ${pathname.includes("qui")? "hover:text-pinku" :pathname.includes("quoi")? "hover:text-violetta" :  pathname.includes("ou") ? "hover:text-jaune"   : "hover:text-gblue" }`}>
                <Link href="/allo">ALLO?</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
