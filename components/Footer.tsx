"use client";
import { usePathname } from "next/navigation";
import diphtong from "@/public/images/diphtonglogo.png";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className=" backdrop-blur-sm ">
      {!pathname.includes("admin") && (
        <div className="px-5 mt-5 py-4 flex justify-between border-t border-t-1 border-black">
          <div className="flex flex-col justify-between">
            <div className="flex justify-start gap-10">
              <Image
                src={fblogo}
                width={30}
                height={20}
                alt="logo facebook"
                className="hover:scale-110 transition-all ease-in-out"
              />
              <Image
                src={instalogo}
                width={30}
                height={20}
                alt="logo instagram"
                className="hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div className="font-sourcecode  underline hover:font-semibold transition-all ease-in-out">
              beances.editions@protonmail.com
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-sourcecode flex flex-col text-sm justify-center mb-0 text-end">
              Copyright© <br/> 2024 <br/> BEANCES EDITIONS
            </div>
            <Image src={diphtong} width={30} height={20} alt="logo diphtong" />
          </div>
        </div>
      )}
    </div>
  );
}
