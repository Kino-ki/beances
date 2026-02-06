import QuiLayout from "@/components/pagescomponents/QuiLayout";
import { getQuiPage } from "@/sanity/utils/getquipage";
import { QuiPageTypes } from "@/types/quipageTypes";

export default async function QuiPage() {
  const quiData: QuiPageTypes[] = await getQuiPage();

  return <QuiLayout quiData={quiData} />;
}
