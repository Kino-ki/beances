"use client";
import { getQuiPage } from "@/sanity/utils/getquipage";
import { QuiPageTypes } from "@/types/quipageTypes";
import { PortableText, PortableTextComponents } from "next-sanity";
import { useEffect, useState } from "react";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(179, 126, 174, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
    blue: ({ children }) => (
      <span style={{ color: "#0000EE" }}>{children}</span>
    ),
    strong: ({ children }) => (
      <span style={{ fontWeight: "bold" }}> {children} </span>
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

  const { title, text } = quiData || {};

  return (
    <div className=" overflow-y-scroll no-scrollbar">
      {isLoading && (
        <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl ">
          Chargement en cours ...
        </div>
      )}
      {error && (
        <div className="h-[100vh] flex flex-col justify-center text-center font-sourcecode text-xl ">
          {" "}
          {error}{" "}
        </div>
      )}
      {quiData && (
        <div className=" flex flex-col">
          {title ? (
            <h1 className="flex md:ml-[8%] md:text-start text-center font-burnout md:text-[5rem] text-[3rem] leading-tight my-5 mx-auto md:my-20 text-pinku tracking-wider">
              {title}
            </h1>
          ) : (
            <h1 className="flex md:ml-[11%] md:text-start font-burnout md:text-7xl text-5xl mx-auto md:my-20 my-11 text-pinku tracking-wider"></h1>
          )}
          <p className="md:mx-[10%] mx-3 md:mb-10 md:text-2xl text-md font-sourcecode leading-loose text-pretty tracking-wide pb-10 ">
            {text && <PortableText value={text} components={components} />}
          </p>
        </div>
      )}
    </div>
  );
}
