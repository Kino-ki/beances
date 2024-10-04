import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { OuPageTypes } from "@/types/oupageTypes";

const client = createClient(config);
export async function getOuPage(): Promise<OuPageTypes[]> {
  const res = client.fetch(
    groq`*[_type == "ou"] {
            _id,
          _createdAt,
          slug,
          name,
          paperdiffusion,
          paperdescription,
          webdiffusion,
          webdescription
        }`
  );
  return res;
}
