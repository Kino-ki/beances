import { PortableTextBlock } from "next-sanity";

export type AlloPageTypes = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  firsttext: PortableTextBlock[];
  secondtext: PortableTextBlock[];
};
