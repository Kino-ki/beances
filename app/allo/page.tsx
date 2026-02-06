import AlloLayout from "@/components/pagescomponents/AlloLayout";
import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";

export default async function AlloPage() {
  const alloData : AlloPageTypes[] = await getAlloPage()
  return (
    <AlloLayout alloData={alloData} />
  )
  
}