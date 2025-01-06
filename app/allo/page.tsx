"use client";

import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import triangle from "@/public/images/redpoly.png";
import toast from "react-hot-toast";

export default function AlloPage() {

  const [alloData, setAlloData] = useState<AlloPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlloPage();
        setAlloData(data[0]);
      } catch (err) {
        console.error("Failed to fetch allo page:", err);
        setError("Erreur de chargement de page. Veuillez réessayer.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const ClipboardCopy = () => {
    navigator.clipboard
      .writeText("beances.editions@protonmail.com")
      .then(() => {
        toast.success('Adresse copiée dans le presse-papiers');
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
      });
  };

  const { title, firsttext, secondtext } = alloData || {};

  return (
    <div className="flex flex-col justify-end ">
      <div className="bg-contain bg-no-repeat bg-allobg h-[90vh]  bg-fixed mt-16 bg-center ">
        {isLoading && (
          <div className="flex flex-col-reverse text-center md:h-96 text-xl">
            Chargement en cours ...
          </div>
        )}
        {error && (
          <div className="flex flex-col-reverse text-center md:h-96 text-xl">
            {error}
          </div>
        )}
        {title && (
          <div className=" flex flex-row lg:justify-between lg:mx-[10%]  lg:text-[5.5rem] text-6xl lg:pt-12"> 
          <h1 className="font-burnout lg:text-vertical lg:text-start text-center lg:w-auto w-full md:my-0 text-gblue">
            {title}
          </h1>
          </div>
        )}
      </div>

      {alloData && (
        <div className="flex flex-col justify-start h-full md:text-lg  ">
          <div className="flex justify-center -mt-24  w-full ">
            <Image
              src={triangle}
              width={60}
              height={10}
              alt="triangle"
              className=""
            />
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly my-20 px-10">
          <div className="flex flex-col justify-evenly pt-5 items-center gap-10  w-full ">
              <p>Découvre nos réseaux !</p>
              <Image
                src={fblogo}
                width={50}
                height={10}
                alt="logo facebook"
                className="hover:scale-110 transition-all ease-in-out"
              />
              <Image
                src={instalogo}
                width={50}
                height={10}
                alt="logo instagram"
                className="hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div className="flex flex-col md:justify-start text-center lg:text-start gap-10 w-full lg:px-[10%] lg:border-x-2 lg:border-gblue ">
              <p>{firsttext && <PortableText value={firsttext} />}</p>

              <p
                onClick={ClipboardCopy}
                className="underline hover:font-bold font-semibold transition-all ease-in-out duration-75 text-base md:text-xl cursor-pointer"
              >
                beances.editions@protonmail.com
              </p>
            </div>

            <div className="flex flex-col mt-[2%] text-center w-full ">
              <p>
                {secondtext && <PortableText value={secondtext } /> }{" "}
                <span className="underline hover:font-semibold transition-all ease-in-out duration-75">
                  ici
                </span>{" "}
              </p>
              {/* <p>Développé par Diphtong Studio</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
