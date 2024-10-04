import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { AlloPageTypes } from "@/types/allopageTypes";

const client = createClient(config);
export async function getAlloPage(): Promise<AlloPageTypes[]> {
  const res = client.fetch(
    groq`*[_type == "allo"] {
                    _id,
          _createdAt,
          title,
          slug,
          firsttext,
          secondtext,
        } `
  );
  return res;
}
