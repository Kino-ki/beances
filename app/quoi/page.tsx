"use client";

import { getQuoiPage } from "@/sanity/utils/getquoipage";
import { QuoiPageTypes } from "@/types/quoipageTypes";
import Image from "next/image";
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
  console.log(quoiData);
  return (
    <div className="flex flex-col ">
    <div className=" min-h-[90vh] bg-zinebg bg-fixed bg-right-bottom bg-contain bg-no-repeat ">
      <h1 className="flex md:text-start text-center mx-auto md:mix-blend-screen   font-burnout md:text-8xl text-[4rem] mt-12 md:my-0 md:mt-36 md:mb-10 text-violetta md:ml-20 tracking-wider">
        NOS LIVRES
      </h1>
      <div>
        {isLoading && 
        <div className=" text-center text-xl font-sourcecode">Chargement en cours ...</div>
        }
        {error && <div className=" text-center text-xl font-sourcecode"> {error} </div>}
        <div className="  mt-10 flex flex-col justify-center rounded-md ">
          <div className="flex md:flex-row flex-col gap-10 md:gap-0 md:h-96 justify-start items-center px-10 mb-10 ">
            {quoiData &&
              quoiData.toReversed().map((book) => (
                <Link
                  href={`/zines/${book.slug}/`}
                  key={book._id}
                  className="relative overflow-hidden z-20 flex md:flex-col flex-col-reverse justify-center items-center  "
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
                    <div className={`flex flex-col md:mt-5 mb-5 text-center transition-opacity duration-300 ${hoveredBook === book._id ? "md:opacity-100" : "md:opacity-0"}`}>
                      <h2 className="text-xl font-gillbold">{book.title} </h2>
                      <h3 className="text-lg ">{book.author}</h3>
                    </div>

                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    <div className="md:visible md:flex hidden">
    <m.div
        className="absolute z-10 bg-alu bg-fixed bg-contain bg-right-bottom bg-no-repeat mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          opacity: 1,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true) }
        onMouseUp={() => setIsClicked(false) }
        >
      </m.div>
        </div>
    </div>

  );
}
