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
    <div className="bg-zinebg h-[120vh] w-full bg-fixed bg-cover">
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div className="">
        {bookData && (
          <div className="flex justify-between  ">
            <div className="flex flex-col justify-start mt-40 ml-24 gap-1 w-[50%]">
              <h1 className="text-violetta font-burnout text-7xl   ">
                {title} - <span className="text-5xl ">{author}</span>
              </h1>
              <div className=" text-lg">({year}) </div>
              <div className="text-lg">
                Traducteurice:{" "}
                <span className="font-medium"> {translator} </span>{" "}
              </div>
              <div className="overflow-hidden overflow-y-auto h-[50vh] flex flex-col justify-start gap-5 text-pretty">
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
                  />
                )}
                {biography && (
                  <p>
                    <PortableText value={biography} />
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-7 mr-40  my-auto">
              {bookimage && (
                <Image
                  src={bookimage}
                  width={250}
                  height={10}
                  alt="zine cover"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
