"use client";
import { QuiPageTypes } from "@/types/quipageTypes";
import { PortableText, PortableTextComponents } from "next-sanity";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(179, 126, 174, 1)" }}>{children}</span>
    ),
    pink: ({ children }) => (
      <span style={{ color: "rgba(233, 70, 124, 1)" }}>{children}</span>
    ),
    blue: ({ children }) => (
      <span style={{ color: "#0000EE" }}>{children}</span>
    ),
    strong: ({ children }) => (
      <span style={{ fontWeight: "bold" }}> {children} </span>
    ),
  },
};

type QuiLayoutProps = {
  quiData: QuiPageTypes[];
};

export default function QuiLayout({ quiData }: QuiLayoutProps) {
  const { title, text } = quiData[0] || {};

  return (
    <div className=" overflow-y-scroll no-scrollbar">
      {quiData && (
        <div className=" flex flex-col">
          {title ? (
            <h1 className="flex md:ml-[8%] md:text-start text-center font-burnout md:text-[5rem] text-[3rem] leading-tight my-5 mx-auto md:my-20 text-pinku tracking-wider">
              {title}
            </h1>
          ) : (
            <h1 className="flex md:ml-[11%] md:text-start font-burnout md:text-7xl text-5xl mx-auto md:my-20 my-11 text-pinku tracking-wider"></h1>
          )}
          <p className="md:mx-[10%] mx-3 md:mb-10 md:text-2xl text-md font-sourcecode leading-loose text-pretty tracking-wide pb-10 ">
            {text && <PortableText value={text} components={components} />}
          </p>
        </div>
      )}
    </div>
  );
}
