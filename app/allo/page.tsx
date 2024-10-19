"use client";

import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";

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
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div className=" pt-40 pb-40 min-h-[100vh]">
        {alloData && (
          <div className="flex flex-col justify-start">
            <h1 className="font-burnout text-[5.5rem] ml-20 text-gblue tracking-wider ">
              {title}
            </h1>
            <div className="flex justify-between mt-12">
              <div className="flex flex-col justify-start gap-10 md:w-[30%] ml-28">
                <p>{firsttext && <PortableText value={firsttext} />}</p>
                <p className="underline hover:font-semibold transition-all ease-in-out duration-75">
                  beances.editions@protonmail.com
                </p>
                <div className="flex justify-start gap-16 ml-20">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
