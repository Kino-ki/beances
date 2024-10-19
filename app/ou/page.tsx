"use client";

import { getOuPage } from "@/sanity/utils/getoupage";
import { OuPageTypes } from "@/types/oupageTypes";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";

export default function OuPage() {
  const [ouData, setOuData] = useState<OuPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  console.log(ouData);

  const {
    name,
    paperdiffusion,
    paperdescription,
    webdiffusion,
    webdescription,
  } = ouData || {};

  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div className=" pt-40 pb-40 min-h-[100vh]">
        {ouData && (
          <div className="flex flex-col justify-start">
            <h1 className="font-burnout md:text-[5.5rem] md:ml-20 text-jaune tracking-wide ">
              {name}
            </h1>
            <div className="flex justify-between mt-12">
              <div className="flex flex-col justify-start gap-10 md:w-[30%] ml-28">
                <h2 className="font-cyberpunk text-lg">{paperdiffusion} </h2>
                <p>
                  {paperdescription && (
                    <PortableText value={paperdescription} />
                  )}
                </p>
                <h2 className="font-cyberpunk text-lg"> {webdiffusion} </h2>
                <p>
                  {webdescription && <PortableText value={webdescription} />}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
