"use client";
// import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";
import { useState } from "react";
import triangle from "@/public/images/Polygon.png";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import "@/app/MaskStyles.css";
import { motion as m } from "framer-motion";
import useMousePosition from "@/components/useMousePosition";
import Link from "next/link";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(179, 126, 174, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
  },
};
type HomedataProps = { homeData: HomePageTypes[] };

export default function HomeLayout({ homeData }: HomedataProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 0;

  const { text } = homeData[0];

  return (
    <div className=" flex flex-col justify-end ">
      {/* Static Background  */}

      <div className="h-[95vh] lg:min-h-[92vh] bg-quioriginal lg:bg-quibg bg-center bg-fixed md:bg-scroll compt:bg-fixed bg-contain  bg-no-repeat -mt-16 relative">
        <Link
          href="#text"
          className=" w-fit mx-auto absolute bottom-5 right-[50%] z-50"
        >
          <Image
            src={triangle}
            width={60}
            height={10}
            alt="triangle"
            className=""
          />
        </Link>
      </div>
      {text && (
        <div className="z-50 bg-paperbg md:shadow-[1px_-5px_40px_3px_rgba(0,0,0,0.06)] border-t border-pinku ">
          <div
            className="md:mx-32 mx-4 my-20 md:text-2xl text-md font-sourcecode leading-7 text-pretty tracking-wide "
            id="text"
          >
            <PortableText value={text} components={components} />
          </div>
        </div>
      )}

      {/* Spotlight Mask */}
      <div className="compt:flex compt:visible hidden ">
        <m.div
          className="absolute z-0 top-0 left-0 -mt-16 bg-quioriginal bg-fixed md:bg-scroll compt:bg-fixed bg-contain bg-center bg-no-repeat mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y + 100 - size / 2}px`,
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
