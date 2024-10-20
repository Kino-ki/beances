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
    <div className="flex flex-col min-h-[100vh]">
      <h1 className="flex text-start font-burnout text-8xl mt-44 mb-10 text-violetta ml-20 tracking-wider">
        CATALOGUE
      </h1>
      <div>
        {isLoading && <div>Chargement en cours ...</div>}
        {error && <div> {error} </div>}
        <div className=" m-20 mt-0 flex flex-col justify-center rounded-md mb-40 ">
          <div className="flex flex-row justify-evenly items-center px-10 h-full ">
            {quoiData &&
              quoiData.toReversed().map((book) => (
                <Link
                  href={`/zines/${book.slug}/`}
                  key={book._id}
                  className="relative overflow-hidden "
                  onMouseEnter={() => setHoveredBook(book._id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <Image
                    src={book.bookimage}
                    width={200}
                    height={80}
                    alt={book.slug}
                    className={` ${hoveredBook === book._id && `scale-105  transition-transform duration-500 ease-in-out`} `}
                  />{" "}
                  {hoveredBook === book._id && (
                    <div className="absolute top-0 text-center h-full w-full text-slate-200 font-semibold flex flex-col justify-evenly px-3 backdrop-blur-[8px]">
                      <h2 className="text-2xl font-gillbold">{book.title} </h2>
                      <h3 className="text-lg ">{book.author}</h3>
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
