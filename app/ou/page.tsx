"use client";

import { getOuPage } from "@/sanity/utils/getoupage";
import { OuPageTypes } from "@/types/oupageTypes";
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

  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div>OU PAGE</div>
    </div>
  );
}
