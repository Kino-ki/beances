// import { getHomePage } from "@/sanity/utils/gethomepage";
import { HomePageTypes } from "@/types/homepageTypes";
import triangle from "@/public/images/Polygon.png";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import SpotlightMask from "@/components/SpotlightMask";
import Link from "next/link";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(179, 126, 174, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
  },
};
type HomedataProps = { homeData: HomePageTypes[] };

export default function HomeLayout({ homeData }: HomedataProps) {
  const { text } = homeData[0];

  return (
    <div className=" flex flex-col justify-end ">
      {/* Static Background  */}

      <div className="h-[95vh] lg:min-h-[92vh] bg-quioriginal lg:bg-quibg bg-center bg-scroll compt:bg-fixed bg-contain bg-no-repeat -mt-16 relative flex flex-col justify-end items-center pb-4">
        <Link href="#text" className=" w-fit  z-20 ">
          <Image
            src={triangle}
            width={60}
            height={10}
            alt="triangle"
            className=""
          />
        </Link>
      </div>
      {text && (
        <div className="z-20 bg-paperbg md:shadow-[1px_-5px_40px_3px_rgba(0,0,0,0.06)] border-t border-pinku ">
          <div
            className="md:mx-32 mx-4 my-20 md:text-2xl text-md font-sourcecode leading-7 text-pretty tracking-wide "
            id="text"
          >
            <PortableText value={text} components={components} />
          </div>
        </div>
      )}

      <SpotlightMask
        className="z-0 top-0 left-0 -mt-16 bg-quioriginal bg-fixed md:bg-scroll compt:bg-fixed bg-contain bg-center bg-no-repeat"
        yOffset={100}
      />
    </div>
  );
}
