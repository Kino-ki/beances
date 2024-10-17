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
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      {quiData && (
        <div className=" flex flex-col">
          <h1 className="flex text-start font-burnout text-8xl my-32 text-pinku ml-32 tracking-wider">{title}</h1>
          <p className="mx-28 mb-20 text-2xl font-sourcecode leading-loose text-pretty tracking-wide ">{text && <PortableText value={text} />}</p>
        </div>
      )}

    </div>
  );
}
