"use client";
import { usePathname } from "next/navigation";
import diphtong from "@/public/images/diphtonglogo.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import toast from "react-hot-toast";

import mailImage from "@/public/images/mailicon.png";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const ClipboardCopy = () => {
    navigator.clipboard
      .writeText("beances.editions@protonmail.com")
      .then(() => {
        toast.success("Adresse copiée dans le presse-papiers");
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
          <div className="flex md:w-[55%] md:justify-between justify-center items-center">
            <div className="flex justify-start md:gap-10 gap-5">
              {!pathname.includes("allo") && (
                <div className="flex justify-start md:gap-8 gap-[1.10rem] ">
                  <div className="my-auto md:pl-3">
                    <Link
                      target="_blank"
                      href={"https://www.instagram.com/beances.editions/"}
                    >
                      <Image
                        src={instalogo}
                        width={42}
                        height={20}
                        alt="logo instagram"
                        className="hover:scale-110 transition-all ease-in-out"
                      />
                    </Link>
                  </div>
                </div>
              )}
              <div onClick={ClipboardCopy} className="my-auto">
                <Image
                  src={mailImage}
                  width={35}
                  height={20}
                  alt="logo email"
                  className="hover:scale-110 transition-all ease-in-out visible md:hidden"
                />
              </div>
            </div>
            <div className="">
              <p
                onClick={ClipboardCopy}
                className="font-sourcecode hidden md:visible md:flex underline hover:font-semibold transition-all ease-in-out"
              >
                beances.editions@protonmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-sourcecode flex flex-col md:text-sm text-xs justify-center mb-0 text-end">
              Copyright© <br /> 2024 <br /> BEANCES EDITIONS
            </div>
            {!pathname.includes("allo") && (
              <Image
                src={diphtong}
                width={30}
                height={20}
                alt="logo diphtong"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
