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
    <div className=" md:min-h-[90vh]  compt:bg-zinegris bg-contain md:bg-right-bottom bg-fixed bg-clearbg bg-right-top md:bg-no-repeat pb-3 md:pb-0  md:mr-20">
      <div className="flex md:flex-col flex-row  justify-center">
        {isLoading && <div>Chargement en cours ...</div>}
        {error && <div> {error} </div>}
        {bookData && (
          <div className="flex lg:flex-row flex-col justify-between h-full   ">
            <div className="flex flex-col justify-start mt-5 md:mt-10 md:ml-24 gap-2  mb-5 lg:w-[50%]">
              <h1 className="font-punktypo  md:text-[3.25rem] text-center md:text-start text-4xl  ">
                {title}{" "}
              </h1>
              <div className="flex flex-col justify-start px-3">
                <p className="md:text-2xl text-lg font-sourcecode ">{author}</p>
                <div className=" md:text-lg text-sm  lg:px-1">({year}) </div>
                <div className="md:text-lg tracking-tighter">
                  Traducteurice:{" "}
                  <span className="font-medium "> {translator} </span>{" "}
                </div>
              </div>
              <div className="flex justify-center lg:hidden ">
                {bookimage && (
                  <Image
                    src={bookimage}
                    width={180}
                    height={10}
                    alt="zine cover"
                    className="md:w-60 md:my-5"
                  />
                )}
              </div>
              <div className=" hover:bg-paperbg overflow-hidden overflow-y-auto  no-scrollbar lg:h-[60vh] flex flex-col justify-start gap-5 text-pretty p-5 md:hover:shadow-inner transition-all ease-in-out delay-100">
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
            <div className="lg:flex lg:flex-col  justify-center mx-auto hidden lg:visible">
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
