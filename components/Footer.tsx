"use client";
import { usePathname } from "next/navigation";
import diphtong from "@/public/images/diphtonglogo.svg";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import toast from "react-hot-toast";

import mailImage from "@/public/images/mailicon.png";
import Link from "next/link";
import NewsletterInput from "./NewsletterInput";

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
    <div className=" backdrop-blur-sm text-sm md:text-base ">
      {!pathname.includes("admin") && (
        <div className="flex flex-col">
          <div className="lg:hidden border-t md:border-t-1 border-black py-5 h-fit pb-8 flex justify-center">
            <NewsletterInput />
          </div>

          <div className="px-5 py-2 flex justify-between lg:border-t lg:border-t-1 lg:border-black">
            <div className="flex md:w-[95%] md:justify-evenly justify-center items-center ">
              {!pathname.includes("allo") && (
                <div className="my-auto md:pl-3 ">
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/beances.editions/"}
                    className="font-burnout text-2xl"
                  >
                    <p className="md:flex hidden text-2xl">INSTAGRAM</p>
                    <Image
                      src={instalogo}
                      width={42}
                      height={20}
                      alt="logo instagram"
                      className="hover:scale-110 transition-all ease-in-out md:hidden "
                    />
                  </Link>
                </div>
              )}
              <div
                onClick={ClipboardCopy}
                className="my-auto visible md:hidden"
              >
                <Image
                  src={mailImage}
                  width={35}
                  height={20}
                  alt="logo email"
                  className="hover:scale-110 transition-all ease-in-out "
                />
              </div>
              <div className=" flex flex-col justify-center ">
                <p
                  onClick={ClipboardCopy}
                  className="font-sourcecode hidden md:visible md:flex underline hover:font-semibold transition-all ease-in-out"
                >
                  beances.editions@protonmail.com
                </p>
              </div>
              <div className="lg:flex hidden ">
                <NewsletterInput />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-sourcecode text-[0.7rem] justify-center mb-0 text-end">
                Copyright© <br /> 2024 <br /> BEANCES EDITIONS
              </div>
              {!pathname.includes("allo") && (
                <Image
                  src={diphtong}
                  width={35}
                  height={30}
                  alt="logo diphtong"
                  className=""
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
