import ZinePageLayout from "@/components/pagescomponents/ZinePageLayout";
import { getBook } from "@/sanity/utils/getbook";
import { BookPageTypes } from "@/types/bookpageTypes";

type Props = {
  params: { book: string };
};

export default async function ZinePage({ params }: Props) {
  const slug = params.book;
  const bookData: BookPageTypes = await getBook(slug);

  return <ZinePageLayout bookData={bookData} />;
}
