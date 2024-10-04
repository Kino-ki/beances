import { PortableTextBlock } from "next-sanity";

export type QuiPageTypes = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  text: PortableTextBlock[];
};
