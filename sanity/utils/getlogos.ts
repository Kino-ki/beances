import { createClient, groq } from "next-sanity";
import config from "../config/client-config";
import { LogosTypes } from "@/types/logosTypes";

const client = createClient(config);

export async function getLogos() : Promise<LogosTypes>  {
    const res = client.fetch(
        groq ` *[_type == "logos"] {
            _id,
            _createdAt,
            name,
            "logo" : logo.asset -> url,
        }`,
    );
    return res;
    
}
