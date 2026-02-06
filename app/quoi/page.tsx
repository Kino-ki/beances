import QuoiLayout from "@/components/pagescomponents/QuoiLayout";
import { getQuoiPage } from "@/sanity/utils/getquoipage";
import { QuoiPageTypes } from "@/types/quoipageTypes";

export default async function QuopPage() {
  const quoiData: QuoiPageTypes[] = await getQuoiPage();

  return <QuoiLayout quoiData={quoiData} />;
}
