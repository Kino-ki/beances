import { PortableTextBlock } from "next-sanity";

export type OuPageTypes = {
  _id: string;
  _createdAt: Date;
  slug: string;
  name: string;
  paperdiffusion: string;
  paperdescription: PortableTextBlock[];
  webdiffusion: string;
  webdescription: PortableTextBlock[];
};
