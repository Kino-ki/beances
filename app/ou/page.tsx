import OuLayout from "@/components/pagescomponents/OuLayout";
import { getOuPage } from "@/sanity/utils/getoupage";
import { OuPageTypes } from "@/types/oupageTypes";

export default async function OuPage() {
  const ouData: OuPageTypes[] = await getOuPage();

  return <OuLayout ouData={ouData} />;
}
