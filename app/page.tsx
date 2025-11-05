import HomeLayout from "@/components/pagescomponents/HomeLayout";
import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";

export default async function HomePage() {
  const homeData: HomePageTypes[] = await getHomePage();

  return <HomeLayout homeData={homeData} />;
}
