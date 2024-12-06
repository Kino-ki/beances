"use client";
import { getQuiPage } from "@/sanity/utils/getquipage";
import { QuiPageTypes } from "@/types/quipageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";

export default function QuiPage() {
  const [quiData, setQuiData] = useState<QuiPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuiPage();
        setQuiData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de la page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(quiData);
  const { title, text } = quiData || {};

  return (
    <div className="">
      {isLoading && 
      <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl ">Chargement en cours ...</div>}
      {error && <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl "> {error} </div>}
      {quiData && (
        <div className=" flex flex-col bg-paperbg">
          <h1 className="flex md:mt-44 md:text-start font-burnout md:text-8xl text-7xl mx-auto md:my-24 my-12 text-pinku md:ml-40 tracking-wider">{title}</h1>
          <p className="md:mx-40 mx-3 md:mb-60 mb-40 md:text-2xl text-xl font-sourcecode leading-loose text-pretty tracking-wide ">{text && <PortableText value={text} />}</p>
        </div>
      )}

    </div>
  );
}
