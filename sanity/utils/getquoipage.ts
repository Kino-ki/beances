import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { QuoiPageTypes } from "@/types/quoipageTypes";

const client = createClient(config);

export async function getQuoiPage(): Promise<QuoiPageTypes[]> {
  const res = client.fetch(
    groq`*[_type == "quoi"] {
                  _id,
          _createdAt,
          title,
           "slug": slug.current,
           author,
           "bookimage" : bookimage.asset -> url,
        } `
  );
  return res;
}
