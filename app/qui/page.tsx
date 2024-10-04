"use client";
import { getQuiPage } from "@/sanity/utils/getquipage";
import { QuiPageTypes } from "@/types/quipageTypes";
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
  },[] );


  console.log(quiData);

  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div>PAGE QUI</div>
    </div>
  );
}
