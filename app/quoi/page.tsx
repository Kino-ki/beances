"use client";

import { getQuoiPage } from "@/sanity/utils/getquoipage";
import { QuoiPageTypes } from "@/types/quoipageTypes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuoiPage() {
  const [quoiData, setQuoiData] = useState<QuoiPageTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

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
    <div className="flex flex-col">
      <h1 className="flex text-start font-burnout text-8xl my-10 text-violetta ml-32 tracking-wider">
        CATALOGUE
      </h1>
      <div>
        {isLoading && <div>Chargement en cours ...</div>}
        {error && <div> {error} </div>}
        <div className="bg-catalbg bg-fixed h-[75vh] m-20 mt-0 flex flex-col justify-center ">
          <div className="flex flex-row justify-evenly items-center px-10 h-full backdrop-blur-[2px] ">
            {quoiData &&
              quoiData.map((book) => (
                <Link
                  href={`/zines/${book.slug}/`}
                  key={book._id}
                  className="shadow-[0px_0px_38px_2px_rgba(200,162,200,0.88)] relative "
                  onMouseEnter={() => setHoveredBook(book._id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <Image
                    src={book.bookimage}
                    width={200}
                    height={80}
                    alt={book.slug}
                    className={`object-cover ${hoveredBook === book._id && `scale-110  transition-transform duration-500 ease-in-out`}`}
                  />{" "}
                  {hoveredBook === book._id && (
                    <div className="absolute top-0 text-center h-full w-full text-[#2B2828]  font-semibold flex flex-col justify-center backdrop-blur-[1px]">
                      <h2>{book.title} </h2>
                    </div>
                  )}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
