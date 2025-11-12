"use client";
import { PortableText, PortableTextComponents } from "next-sanity";
import { useState } from "react";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import triangle from "@/public/images/redpoly.png";
import diphtong from "@/public/images/diphtonglogo.svg";
import toast from "react-hot-toast";
import "@/app/MaskStyles.css";
import { motion as m } from "framer-motion";
import useMousePosition from "@/components/useMousePosition";
import Link from "next/link";
import { AlloPageTypes } from "@/types/allopageTypes";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(179, 126, 174, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
    blue: ({ children }) => (
      <span style={{ color: "#0000EE" }}>{children}</span>
    ),
    strong: ({ children }) => (
      <span style={{ fontWeight: "bold" }}> {children} </span>
    ),
  },
};

type AlloLayoutProps = {
  alloData: AlloPageTypes[];
};

export default function AlloLayout({ alloData }: AlloLayoutProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 0;

  const ClipboardCopy = () => {
    navigator.clipboard
      .writeText("beances.editions@protonmail.com")
      .then(() => {
        toast.success("Adresse copiée dans le presse-papiers");
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
      });
  };

  const { title, firsttext, secondtext } = alloData[0] || {};

  return (
    <div className="flex flex-col justify-end relative ">
      <div className="lg:bg-auto compt:bg-[60px_60px] lg:bg-[10px_10px] bg-repeat md:bg-repeat bg-[20px_20px] bg-contain lg:bg-allobg bg-allooriginal -mt-20  h-[95vh] lg:h-[90vh] md:h-[85vh] "></div>

      {alloData && (
        <div className="flex flex-col relative justify-start h-full md:text-lg ">
          <div className="absolute -top-24 left-[45%] md:left-[50%]  mb-3 md:mb-8 z-10">
            <Link href="#text-content">
              <Image
                src={triangle}
                width={60}
                height={10}
                alt="triangle"
                className=""
              />
            </Link>
          </div>
          <div className="md:shadow-[1px_-5px_40px_3px_rgba(0,0,0,0.06)] pt-12 md:py-20 z-10 border-t border-gblue ">
            {title && (
              <div className=" flex flex-row lg:justify-start lg:mx-[5%]  lg:text-[5rem] text-6xl lg:pb-10">
                <h1 className="font-burnout tracking-widest md:tracking-wider lg:w-auto text-center w-full md:my-0 text-gblue">
                  {title}
                </h1>
              </div>
            )}

            <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly my-10 px-10">
              <div className="flex flex-col justify-evenly items-center gap-10  w-full ">
                <p>Découvre nos réseaux !</p>
                <div className="flex md:flex-col flex-row gap-10 ">
                  <div className="my-auto">
                    <Link
                      target="_blank"
                      href={"https://www.instagram.com/beances.editions/"}
                    >
                      <Image
                        src={instalogo}
                        width={60}
                        height={10}
                        alt="logo instagram"
                        className="hover:scale-110 transition-all ease-in-out"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col md:justify-start text-center lg:text-start gap-10 w-full md:px-[5%] compt:px-[10%] lg:border-x-2 lg:border-gblue "
                id="text-content"
              >
                {firsttext && <PortableText value={firsttext} />}

                <p
                  onClick={ClipboardCopy}
                  className="underline hover:font-bold font-semibold transition-all -mx-10 md:-mx-0 ease-in-out duration-75 text-base md:text-xl cursor-pointer"
                >
                  beances.editions@protonmail.com
                </p>
              </div>

              <div className="flex flex-col text-center w-full justify-evenly ">
                {secondtext && (
                  <PortableText value={secondtext} components={components} />
                )}{" "}
                <div className="flex justify-center mt-12">
                  <div className="flex ">
                    <p className="my-auto mr-2 text-end text-sm h-full ">
                      <span className="font-semibold"> Développement:</span>
                      <br />
                      agence web
                    </p>
                    <a href="https://www.diphtong.ca/home" target="_blank">
                      <Image
                        src={diphtong}
                        width={35}
                        height={30}
                        alt="diphtong logo"
                        className="hover:scale-110 transition-all ease-in-out "
                      />
                    </a>
                  </div>
                  <p className="mt-11 md:ml-2 ml-1 text-sm"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Spotlight Mask */}

      <div className="compt:flex justify-center compt:visible hidden ">
        <m.div
          className="absolute z-0 bg-allooriginal  lg:-mt-20  lg:bg-auto bg-[60px_60px] mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            opacity: 1,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        ></m.div>
      </div>
    </div>
  );
}
