"use client";

import { OuPageTypes } from "@/types/oupageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useRef, useState } from "react";
import "@/app/MaskStyles.css";
import useMousePosition from "@/components/useMousePosition";
import { motion as m } from "framer-motion";
import background from "@/public/images/ou-original.png";
import Image from "next/image";

type OuLayoutProps = {
  ouData: OuPageTypes[];
};

export default function OuLayout({ ouData }: OuLayoutProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [localX, setLocalX] = useState(0);
  const [localY, setLocalY] = useState(0);
  const maskRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 0;

  useEffect(() => {
    if (!maskRef.current) return;
    const rect = maskRef.current.getBoundingClientRect();
    setLocalX(x - rect.left);
    setLocalY(y - rect.top);
  }, [x, y]);

  const {
    name,
    paperdiffusion,
    paperdescription,
    webdiffusion,
    webdescription,
  } = ouData[0] || {};

  return (
    <div className="relative">
      {/* Static Background */}
      <div className=" md:pt-20 pb-10  min-h-[80vh] ">
        {ouData && (
          <div className="flex flex-col lg:flex-row lg:justify-between ">
            <div className="flex flex-col lg:justify-start justify-center text-center lg:text-start md:mx-auto md:gap-8 ">
              <h1 className="font-burnout md:text-[4rem] text-[3rem] leading-tight my-5 lg:ml-20 text-jaune tracking-wide mx-auto  md:my-0 ">
                {name}
              </h1>

              <div className="flex flex-col justify-start text-center lg:text-start md:gap-5 gap-5 mx-8  lg:ml-28 lg:w-[35vw]">
                <h2 className="font-cyberpunk md:text-lg">{paperdiffusion} </h2>
                <div className="text-md">
                  {paperdescription && (
                    <PortableText value={paperdescription} />
                  )}
                </div>
                <Image
                  src={background}
                  width={350}
                  height={50}
                  alt="background"
                  className="items-center mx-auto visible md:hidden"
                />
                <h2 className="font-cyberpunk md:text-lg"> {webdiffusion} </h2>
                <div className="text-md">
                  {webdescription && <PortableText value={webdescription} />}
                </div>
              </div>
            </div>
            <div className="relative md:h-[50vh] lg:h-[60vh] w-full ">
              <div className=" lg:bg-oubg md:bg-ouoriginal h-full w-full bg-contain lg:my-auto  md:bg-center md:bg-no-repeat">
                {" "}
              </div>
              {/* Spotlight Mask */}
              <div className="compt:flex justify-between compt:visible hidden w-full ">
                <m.div
                  ref={maskRef}
                  className="absolute z-0 top-0 left-1 bg-contain bg-ouoriginal bg-center my-auto bg-no-repeat mask  "
                  animate={{
                    WebkitMaskPosition: `${localX - size / 2}px ${localY + 60 - size / 2}px`,
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
          </div>
        )}
      </div>
    </div>
  );
}
