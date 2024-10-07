"use client"
import { getBook } from "@/sanity/utils/getbook";
import { BookPageTypes } from "@/types/bookpageTypes";
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
  return (
    <div>
      {isLoading && <div>Chargement en cours ...</div>}
      {error && <div> {error} </div>}
      <div>ZINE PAGE</div>
    </div>
  );
}
