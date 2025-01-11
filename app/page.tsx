"use client";
import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";
import { useEffect, useState } from "react";
import triangle from "../public/images/Polygon.png";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import "@/app/MaskStyles.css";
import { motion as m } from "framer-motion";
import useMousePosition from "@/components/useMousePosition";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(209, 99, 136, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
  },
};

export default function HomePage() {
  const [homeData, setHomeData] = useState<HomePageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 150;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePage();
        setHomeData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const text = homeData ? homeData.text : null;

  return (
    <div className=" flex flex-col justify-end">
      {/* Static Background  */}

      <div className="h-[95vh] md:h-[93vh] bg-quioriginal md:bg-quibg bg-center bg-contain bg-fixed bg-no-repeat -mt-16">
        {isLoading && (
          <div className="flex flex-col text-center h-[60%] justify-center my-auto font-sourcecode text-xl">
            Chargement en cours ...
          </div>
        )}
        {error && (
          <div className="flex flex-col text-center h-[60%] justify-center my-auto font-sourcecode text-xl">
            {" "}
            {error}{" "}
          </div>
        )}
      </div>
      {text && (
        <div className="z-10 bg-paperbg md:shadow-[1px_-5px_40px_3px_rgba(0,0,0,0.06)] border-t border-pinku">
          <div className="flex justify-center -mt-24  ">
            <Image
              src={triangle}
              width={60}
              height={10}
              alt="triangle"
              className="z-10"
            />
          </div>
          <div className="md:mx-32 mx-4 my-20 md:text-2xl text-md font-sourcecode leading-7 text-pretty tracking-wide ">
            <PortableText value={text} components={components} />
          </div>
        </div>
      )}

      {/* Spotlight Mask */}
      <div className="md:flex md:visible hidden ">
        <m.div
          className="absolute z-0 top-0 left-0 -mt-16 bg-quioriginal bg-fixed bg-contain bg-center bg-no-repeat mask"
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
