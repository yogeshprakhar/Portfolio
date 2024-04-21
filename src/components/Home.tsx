"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

export function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className=" h-96 flex w-full flex-row justify-evenly">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="ml-2 text-4xl mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hello, my name is
            </h2>
            <h1 className="ml-2 pb-4 text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Yogesh Prakhar
            </h1>
          </div>
          <div className="flex gap-5 pl-10">
            <Link target="_blank" href={"#"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <AiOutlineShareAlt />
                <span>Contact</span>
              </HoverBorderGradient>
            </Link>
            <Link target="_blank" href={"#"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <MdOutlineFileDownload />
                <span>Resume</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={"/one.jpg"}
            width={350}
            height={350}
            alt="Picture of author"
          />
        </div>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

{
  /* <Link href={"#"}>
  <Button
    borderRadius="1.75rem"
    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
  >
    Contact
  </Button>
</Link>; */
}
