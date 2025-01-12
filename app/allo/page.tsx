"use client";
import { getAlloPage } from "@/sanity/utils/getallopage";
import { AlloPageTypes } from "@/types/allopageTypes";
import { PortableText, PortableTextComponents } from "next-sanity";
import { useEffect, useState } from "react";
import fblogo from "@/public/images/logofb.png";
import instalogo from "@/public/images/logoinsta.png";
import Image from "next/image";
import triangle from "@/public/images/redpoly.png";
import diphtong from "@/public/images/diphtonglogo.png";
import toast from "react-hot-toast";
import "@/app/MaskStyles.css";
import { motion as m } from "framer-motion";
import useMousePosition from "@/components/useMousePosition";
import Link from "next/link";

const components: PortableTextComponents = {
  marks: {
    purple: ({ children }) => (
      <span style={{ color: "rgba(209, 99, 136, 1)" }}>{children}</span>
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

export default function AlloPage() {
  const [alloData, setAlloData] = useState<AlloPageTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : 150;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlloPage();
        setAlloData(data[0]);
      } catch (err) {
        console.error("Failed to fetch allo page:", err);
        setError("Erreur de chargement de page. Veuillez réessayer.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const ClipboardCopy = () => {
    navigator.clipboard
      .writeText("beances.editions@protonmail.com")
      .then(() => {
        toast.success("Adresse copiée dans le presse-papiers");
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
      });
  };

  const { title, firsttext, secondtext } = alloData || {};

  return (
    <div className="flex flex-col justify-end relative ">
      <div className="lg:bg-auto bg-contain bg-no-repeat md:bg-allobg bg-allooriginal lg:-mt-20  mr-8 lg:mr-20 h-[75vh] md:h-[90vh]  bg-center">
        {isLoading && (
          <div className="flex flex-col-reverse text-center md:h-96 text-xl">
            Chargement en cours ...
          </div>
        )}
        {error && (
          <div className="flex flex-col-reverse text-center md:h-96 text-xl">
            {error}
          </div>
        )}
      </div>

      {alloData && (
        <div className="flex flex-col justify-start h-full md:text-lg ">
          <div className="flex justify-center md:-mt-14  w-full mb-3 md:mb-8 z-10">
            <Link href="#text-content">
              <Image
                src={triangle}
                width={60}
                height={10}
                alt="triangle"
                className=""
              />
            </Link>
          </div>
          <div className="md:shadow-[1px_-5px_40px_3px_rgba(0,0,0,0.06)] pt-12 md:py-20 z-10 border-t border-gblue ">
            {title && (
              <div className=" flex flex-row lg:justify-start lg:mx-[5%]  lg:text-[5rem] text-6xl lg:pb-10">
                <h1 className="font-burnout tracking-widest md:tracking-wider lg:w-auto text-center w-full md:my-0 text-gblue">
                  {title}
                </h1>
              </div>
            )}

            <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly my-10 px-10">
              <div className="flex flex-col justify-evenly items-center gap-10  w-full ">
                <p>Découvre nos réseaux !</p>
                <div className="flex md:flex-col flex-row gap-10 ">
                  <div className="my-auto">
                    <Image
                      src={fblogo}
                      width={52}
                      height={10}
                      alt="logo facebook"
                      className="hover:scale-110 transition-all ease-in-out mx-auto"
                    />
                  </div>

                  <div className="my-auto">
                    <Image
                      src={instalogo}
                      width={60}
                      height={10}
                      alt="logo instagram"
                      className="hover:scale-110 transition-all ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col md:justify-start text-center lg:text-start gap-10 w-full lg:px-[10%] lg:border-x-2 lg:border-gblue "
                id="text-content"
              >
                <p>{firsttext && <PortableText value={firsttext} />}</p>

                <p
                  onClick={ClipboardCopy}
                  className="underline hover:font-bold font-semibold transition-all ease-in-out duration-75 text-base md:text-xl cursor-pointer"
                >
                  beances.editions@protonmail.com
                </p>
              </div>

              <div className="flex flex-col text-center w-full justify-evenly ">
                <p>
                  {secondtext && (
                    <PortableText value={secondtext} components={components} />
                  )}{" "}
                </p>
                <div className="flex justify-center mt-12">
                  <p className="my-auto mt-2 mr-5 ">Développement web :</p>
                  <div>
                    <Image
                      src={diphtong}
                      width={30}
                      height={30}
                      alt="diphtong logo"
                    />
                  </div>
                  <p className="mt-11 md:ml-2 ml-1 text-sm">studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Spotlight Mask */}

      <div className="md:flex justify-center md:visible hidden ">
        <m.div
          className="absolute z-0 bg-allooriginal bg-auto bg-top -mt-[3.1rem] -ml-10 bg-no-repeat mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            opacity: 1,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        ></m.div>
      </div>
    </div>
  );
}
