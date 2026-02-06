import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { BookPageTypes } from "@/types/bookpageTypes";

const client = createClient(config);

export async function getBook(slug: string): Promise<BookPageTypes> {
  const res = await client.fetch(
    groq`*[_type == "quoi" && slug.current == $slug][0] {
        _id,
          _createdAt,
          title,
           "slug": slug.current,
           author,
           translator,
           "bookimage" : bookimage.asset -> url,
           "authorimage" : authorimage.asset -> url,
           summary,
           biography
        } `,
    { slug }
  );
  return res;
}
