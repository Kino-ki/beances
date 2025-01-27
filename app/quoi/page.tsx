"use client";

import { getQuoiPage } from "@/sanity/utils/getquoipage";
import { QuoiPageTypes } from "@/types/quoipageTypes";
import Image from "next/image";
import nextbook from "@/public/images/bookpicture.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/app/MaskStyles.css";
import useMousePosition from "@/components/useMousePosition";
import { motion as m } from "framer-motion";

export default function QuoiPage() {
  const [quoiData, setQuoiData] = useState<QuoiPageTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 150;

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
  return (
    <div className="flex flex-col min-h-screen">
      <div className="  compt:bg-zinebg lg:bg-fixed compt:bg-right-bottom bg-contain bg-fixed compt:bg-no-repeat bg-clearbg bg-right-top">
        <h1 className="flex justify-center lg:justify-start font-burnout md:text-[5rem] text-center text-[4rem] mt-5 px-20 lg:px-0 leading-tight md:my-10 text-violetta md:ml-[5%] md:tracking-wider">
          NOS LIVRES
        </h1>
        <div>
          {isLoading && (
            <div className=" text-center text-xl font-sourcecode">
              Chargement en cours ...
            </div>
          )}
          {error && (
            <div className=" text-center text-xl font-sourcecode">
              {" "}
              {error}{" "}
            </div>
          )}
          <div className="  mt-10 flex flex-col justify-center rounded-md">
            <div className="flex lg:flex-row lg:flex-wrap flex-col lg:pt-10 lg:gap-[7rem] md:gap-12  gap-16 justify-start lg:items-start px-10 mb-10 md:ml-[4%] ">
              {quoiData &&
                quoiData.toReversed().map((book) => (
                  <Link
                    href={`/zines/${book.slug}/`}
                    key={book._id}
                    className="relative z-20 flex lg:flex-col lg:justify-start flex-col-reverse items-center gap-1 lg:min-h-[60vh]  "
                    onMouseEnter={() => setHoveredBook(book._id)}
                    onMouseLeave={() => setHoveredBook(null)}
                  >
                    {book.bookimage ? (
                      <div className="overflow-hidden h-full">
                        <Image
                          src={book.bookimage}
                          width={200}
                          height={80}
                          alt={book.slug}
                          className={`shadow-xl w-auto md:w-64 ${
                            hoveredBook === book._id
                              ? "scale-105 transition-transform duration-500 ease-in-out"
                              : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="overflow-hidden h-full">
                        <Image
                          src={nextbook}
                          width={200}
                          height={80}
                          alt="next book"
                          className={`shadow-xl w-auto md:w-64`}
                        />
                      </div>
                    )}
                    <div className="flex flex-col md:mt-5 mb-3 text-center  md:w-[15rem]">
                      <h2 className=" flex justify-center text-lg md:text-xl font-gillbold ">
                        {book.title}{" "}
                      </h2>
                      <h3 className="text-md md:text-lg ">{book.author}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:visible lg:flex hidden">
        <m.div
          className="absolute z- bg-alu bg-fixed bg-contain bg-right-bottom bg-no-repeat mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            opacity: 1,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        ></m.div>
      </div>
    </div>
  );
}
