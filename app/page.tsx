"use client";
import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [homeData, setHomeData] = useState<HomePageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePage();
        setHomeData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Erreur de chargement de page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(homeData);

  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
    </div>
  );
}
