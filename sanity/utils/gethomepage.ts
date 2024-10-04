import { createClient, groq } from "next-sanity";
import { HomePageTypes } from "@/types/homepageTypes";
import config from "../config/client-config";

const client = createClient(config);
export async function getHomePage(): Promise<HomePageTypes[]> {
  const res = client.fetch(
    groq`*[_type == "homepage"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        text
        }`
  );
  return res;
}
