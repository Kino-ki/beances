import { PortableTextBlock } from "next-sanity";

export type BookPageTypes = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  author: string;
  translator: string;
  year: string;
  bookimage: string;
  authorimage: string;
  summary: PortableTextBlock[];
  biography: PortableTextBlock[];
};
