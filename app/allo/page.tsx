"use client";

import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import background from "@/public/images/bgallo.png"

export default function AlloPage() {
  const [alloData, setAlloData] = useState<AlloPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlloPage();
        setAlloData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(alloData);

  const { title, firsttext, secondtext } = alloData || {};
  return (
    <div className="md:bg-allobg md:bg-no-repeat md:bg-right md:mx-60 min-h-[100vh] ">
      {isLoading && 
      <div className=" flex flex-col-reverse text-center md:h-96 text-xl ">Chargement en cours ...</div>
      
      }
      {error && <div className=" flex flex-col-reverse text-center md:h-96 text-xl "> {error} </div>}
      <div className=" md:pt-40 md:pb-40 ">
        {alloData && (
          <div className="flex flex-col justify-start">
            <h1 className="font-burnout md:text-[5.5rem] text-7xl md:ml-20 md:text-start text-center my-12 md:my-0 text-gblue tracking-wider ">
              {title}
            </h1>
              <div className="flex flex-col md:justify-start text-center md:text-start md:mt-20 px-5 md:px-0  gap-10 md:w-[30%] md:ml-28 md:text-xl">
                <p>{firsttext && <PortableText value={firsttext} />}</p>

                <p className="underline hover:font-semibold transition-all ease-in-out duration-75 text-base md:text-lg">
                  beances.editions@protonmail.com
                </p>
                <div className="flex justify-start gap-16 md:ml-20 mx-auto">
                  <Image
                    src={fblogo}
                    width={30}
                    height={10}
                    alt="logo facebook"
                    className="hover:scale-110 transition-all ease-in-out"
                  />
                  <Image
                    src={instalogo}
                    width={30}
                    height={10}
                    alt="logo instagram"
                    className="hover:scale-110 transition-all ease-in-out"
                  />
                </div>
                <p>
                  {secondtext && <PortableText value={secondtext} />}{" "}
                  <span className="underline hover:font-semibold transition-all ease-in-out duration-75">
                    ici
                  </span>{" "}
                </p>
              </div>
              <div className="md:hidden py-20 flex justify-center">

                <Image src={background} alt="background allo" width={350} height={50} />
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
