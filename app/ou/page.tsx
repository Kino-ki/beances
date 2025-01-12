"use client";

import { getOuPage } from "@/sanity/utils/getoupage";
import { OuPageTypes } from "@/types/oupageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import "@/app/MaskStyles.css";
import useMousePosition from "@/components/useMousePosition";
import { LogosComponent } from "@/components/LogosComponent";
import { motion as m } from "framer-motion";
import background from "@/public/images/ou-original.png";
import Image from "next/image";

export default function OuPage() {
  const [ouData, setOuData] = useState<OuPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOuPage();
        setOuData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const {
    name,
    paperdiffusion,
    paperdescription,
    webdiffusion,
    webdescription,
  } = ouData || {};

  return (
    <div className="relative">
      {/* Static Background */}
      <div className="relative md:pt-20 pb-10  min-h-[88vh] md:bg-oubg  md:bg-right md:bg-no-repeat ">
        {isLoading && (
          <div className=" md:mt-40 text-center text-xl font-sourcecode">
            Chargement en cours ...
          </div>
        )}

        {error && (
          <div className=" md:mt-40 text-center text-xl font-sourcecode">
            {" "}
            {error}{" "}
          </div>
        )}
        {ouData && (
          <div className="flex flex-col md:justify-start justify-center text-center md:text-start">
            <h1 className="font-burnout md:text-[5rem] text-[3rem] leading-tight my-5 px-10 md:ml-20 text-jaune tracking-wide mx-auto md:my-0 ">
              {name}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:mt-12 ">
              <div className="flex flex-col justify-start text-center lg:text-start md:gap-10 gap-5 mx-8 md:w-[30%] md:ml-28">
                <h2 className="font-cyberpunk md:text-lg">{paperdiffusion} </h2>
                <p>
                  {paperdescription && (
                    <PortableText value={paperdescription} />
                  )}
                </p>
                <Image
                  src={background}
                  width={350}
                  height={50}
                  alt="background"
                  className="items-center visible md:hidden"
                />
                <h2 className="font-cyberpunk ms:text-lg"> {webdiffusion} </h2>
                <p>
                  {webdescription && <PortableText value={webdescription} />}
                </p>
              </div>
              <div className=" mx-auto z-10 lg:h-[50vh] hover:md:shadow-inner transition-all ease-in-out duration-200 lg:-mt-10 mt-10 no-scrollbar overflow-y-auto">
                <LogosComponent />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Spotlight Mask */}
      <div className="md:flex md:visible hidden">
        <m.div
          className="absolute z-0 top-0 -ml-1 mt-[0.7rem] min-h-[88vh] bg-ouoriginal bg-right bg-no-repeat mask "
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
