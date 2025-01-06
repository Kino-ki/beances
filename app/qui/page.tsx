"use client";
import { getQuiPage } from "@/sanity/utils/getquipage";
import { QuiPageTypes } from "@/types/quipageTypes";
import { PortableText , PortableTextComponents} from "next-sanity";
import { useEffect, useState } from "react";



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
    
    <div className="h-[89.5vh] overflow-y-scroll no-scrollbar">
      {isLoading && 
      <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl ">Chargement en cours ...</div>}
      {error && <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl "> {error} </div>}
      {quiData && (
        <div className=" flex flex-col md:mt-[5%]">
          {
            title ? (
              <h1 className="flex  md:text-start font-burnout md:text-8xl text-7xl mx-auto md:my-24 my-12 text-pinku md:ml-40 tracking-wider">{title}</h1>
            ) : (
              <h1 className="flex  md:text-start font-burnout md:text-8xl text-7xl mx-auto md:my-24 my-12 text-pinku md:ml-40 tracking-wider"></h1> 
            )
          }
          <p className="md:mx-[10%] mx-3 mb-10 md:text-2xl text-xl font-sourcecode leading-loose text-pretty tracking-wide pb-10 ">{text && <PortableText value={text} components={components} />}</p>
        </div>

      )}



    </div>
  );
}
