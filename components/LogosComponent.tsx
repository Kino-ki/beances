"use client";

import { getLogos } from "@/sanity/utils/getlogos";
import { LogosTypes } from "@/types/logosTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LogosComponent() {
  const [logosData, setLogosData] = useState<LogosTypes[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLogos();
        setLogosData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(logosData);

  return (
    <div className="grid grid-cols-3 gap-8 lg:p-4">
      {logosData &&
        logosData.map((item) => (
          <div
            key={item._id}
            className="w-28 h-28  rounded-full border-2 border-gray-100 bg-neutral-700 md:backdrop-blur-[1px] bg-opacity-20 items-center overflow-hidden flex flex-col justify-center"
          >
            <Image
              src={item.logo}
              width={150}
              height={100}
              alt={item.name}
              className="object-contain pointer-events-none"
            />
          </div>
        ))}
    </div>
  );
}
