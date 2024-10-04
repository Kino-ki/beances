import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { QuiPageTypes } from "@/types/quipageTypes";

const client = createClient(config);
export async function getQuiPage(): Promise<QuiPageTypes[]> {
  const res = client.fetch(
    groq`*[_type == "qui"] {
          _id,
          _createdAt,
          title,
          "slug": slug.current,
          text
          } `
  );
  return res;
}
