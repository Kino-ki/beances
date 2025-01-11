"use client";
import { getBook } from "@/sanity/utils/getbook";
import { BookPageTypes } from "@/types/bookpageTypes";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  params: { book: string };
};
export default function BookPage({ params }: Props) {
  const [bookData, setBookData] = useState<BookPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const slug = params.book;
      console.log(slug);
      try {
        const data = await getBook(slug);
        setBookData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur de chargement de la page. Veuillez réessayer");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params.book]);
  console.log(bookData);

  const {
    title,
    author,
    translator,
    year,
    bookimage,
    authorimage,
    summary,
    biography,
  } = bookData || {};
  return (
    <div className=" md:h-[100vh]  md:bg-zinegris bg-contain md:bg-right-bottom bg-fixed bg-clearbg bg-right-top md:bg-no-repeat  md:mr-20">

      <div className="flex md:flex-col flex-row  justify-center">
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
        {bookData && (
          <div className="flex md:flex-row flex-col justify-between h-full   ">
            <div className="flex flex-col justify-start  md:mt-40 md:ml-24 gap-5 md:w-[50%]">
              <h1 className="font-burnout md:text-6xl  text-center md:text-start text-5xl  ">
                {title} <p className="md:text-5xl text-3xl ">{author}</p>
              </h1>
              <div className=" md:text-lg mt-2">({year}) </div>
              <div className="md:text-lg tracking-tighter">
                Traducteurice:{" "}
                <span className="font-medium"> {translator} </span>{" "}
              </div>
              <div className="flex justify-center md:hidden ">
              {bookimage && (
                <Image
                  src={bookimage}
                  width={150}
                  height={10}
                  alt="zine cover "
                />
              )}
            </div>
              <div className="overflow-hidden overflow-y-auto  no-scrollbar  md:h-[50vh] flex flex-col justify-start gap-5 text-pretty p-5 md:hover:shadow-inner transition-all ease-in-out delay-100">
                <p className="underline">Résumé:</p>
                {summary && (
                  <p>
                    <PortableText value={summary} />
                  </p>
                )}
                <p className="underline">Auteurice: </p>
                {authorimage && (
                  <Image
                    src={authorimage}
                    width={300}
                    height={30}
                    alt="author image"
                    className="shadow-xl"
                  />
                )}
                {biography && (
                  <p>
                    <PortableText value={biography} />
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex md:flex-col mt-20 justify-center mx-auto hidden md:visible">
              {bookimage && (
                <Image
                  src={bookimage}
                  width={250}
                  height={10}
                  alt="zine cover "
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
