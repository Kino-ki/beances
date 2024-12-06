"use client";
import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";
import { useEffect, useState } from "react";
import triangle from "../public/images/Polygon.png";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";

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
      <div className="h-[90vh] bg-quibg bg-center bg-contain bg-fixed bg-no-repeat mt-20">
        {isLoading && 
        <div className="flex flex-col text-center h-[60%] justify-center my-auto font-sourcecode text-xl">Chargement en cours ...</div>}
        {error && <div className="flex flex-col text-center h-[60%] justify-center my-auto font-sourcecode text-xl"> {error} </div>}
      </div>
      {text &&<div>
      <div className="flex justify-center -mt-24">
        <Image src={triangle} width={60} height={10} alt="triangle" />
      </div>
      <div className="md:mx-32 mx-4 my-20 mb-40 md:text-2xl font-sourcecode leading-10 text-pretty tracking-wide ">
         <PortableText value={text} components={components} />
      </div>
      </div>}
    </div>
  );
}
