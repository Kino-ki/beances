"use client";

import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";
import { useEffect, useState } from "react";

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
  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div>Allo PAGE</div>
    </div>
  );
}
