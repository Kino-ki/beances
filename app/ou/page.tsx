"use client";

import { getOuPage } from "@/sanity/utils/getoupage";
import { OuPageTypes } from "@/types/oupageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import "@/app/MaskStyles.css";
import useMousePosition from "@/components/useMousePosition";
import { motion as m } from "framer-motion";
import background from "@/public/images/bgou.png"
import Image from "next/image";

export default function OuPage() {
  const [ouData, setOuData] = useState<OuPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 150;


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
      <div className="relative md:pt-40 pb-40 min-h-[100vh] md:bg-oubg md:bg-right-bottom md:bg-no-repeat ">
      {isLoading && <div className=" md:mt-40 text-center text-xl font-sourcecode">Chargement en cours ...</div> }
        
        {error && <div className=" md:mt-40 text-center text-xl font-sourcecode"> {error} </div>}
        {ouData && (
          <div className="flex flex-col md:justify-start justify-center text-center md:text-start">
            <h1 className="font-burnout md:text-[5.5rem] text-5xl md:ml-20 text-jaune tracking-wide mx-auto md:my-0 my-16">
              {name}
            </h1>
            <div className="flex  justify-between md:mt-12">
              <div className="flex flex-col justify-start md:gap-10 gap-5 mx-8 md:w-[30%] md:ml-28">
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
            </div>
          </div>
        )}
      </div>

      {/* Spotlight Mask */}
      <div className="md:flex md: visible hidden">
      <m.div
        className="absolute z-10 top-0 left-0 pt-40 pb-40 min-h-[100vh] bg-ouoriginal bg-right-bottom bg-no-repeat mask "
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          opacity: 1,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true) }
        onMouseUp={() => setIsClicked(false) }
      >
      </m.div>
      </div>

    </div>
  );
}
