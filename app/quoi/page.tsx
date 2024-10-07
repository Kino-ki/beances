"use client";

import { getQuoiPage } from "@/sanity/utils/getquoipage";
import { QuoiPageTypes } from "@/types/quoipageTypes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuoiPage() {
  const [quoiData, setQuoiData] = useState<QuoiPageTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuoiPage();
        setQuoiData(data);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de la page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(quoiData);
  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div>PAGE QUOI</div>
      {quoiData &&
        quoiData.map((book) => (
          <Link href={`/zines/${book.slug}/`} key={book._id}>
            {" "}
            {book.title}{" "}
          </Link>
        ))}
    </div>
  );
}
