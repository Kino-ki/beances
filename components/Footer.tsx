"use client";
import { usePathname } from "next/navigation";
import diphtong from "@/public/images/diphtonglogo.png";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import mailImage from "@/public/images/mailicon.png"

export default function Footer() {
  const pathname = usePathname();

  const ClipboardCopy = () => {
    navigator.clipboard
      .writeText("beances.editions@protonmail.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
        alert("Failed to copy email. Please try again.");
      });
  };

  return (
    <div className=" backdrop-blur-sm text-sm md:text-base">
      {!pathname.includes("admin") && (
        <div className="px-5 md:py-4 py-2 flex justify-between border-t md:border-t-1 md:border-black">
          <div className="flex flex-col md:justify-between justify-center">
            <div className="flex justify-start md:gap-10 gap-5">
            <Image
                src={mailImage}
                width={30}
                height={20}
                alt="logo email"
                className="hover:scale-110 transition-all ease-in-out visible md:hidden"
              />
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
            <p onClick={ClipboardCopy} className="font-sourcecode hidden md:visible md:flex underline hover:font-semibold transition-all ease-in-out">
              beances.editions@protonmail.com
            </p>
          </div>
          <div className="flex gap-4">
            <div className="font-sourcecode flex flex-col md:text-sm text-xs justify-center mb-0 text-end">
              Copyright© <br/> 2024 <br/> BEANCES EDITIONS
            </div>
            <Image src={diphtong} width={30} height={20} alt="logo diphtong" />
          </div>
        </div>
      )}
    </div>
  );
}
