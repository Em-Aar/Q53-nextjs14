import Link from "next/link";
import React from "react";
import { Youtube } from "./icons";

export default function FooterLearn() {
  return (
    <section className="bg-accentDarkPrimary px-6 sm:px-8 md:px-12 py-6 flex flex-col items-center justify-between gap-y-4  w-full md:w-1/2 ">
      <h4 className="text-2xl xs:text-4xl sm:text-4xl lg:text-5xl font-semibold text-light uppercase ">
        <span className="text-dark font-bold">Become a web developer</span>
        &nbsp;Learn for Free
      </h4>
      <Link
        href={"https://www.youtube.com/@Em-Aar?sub_confirmation=1"}
        target="_blank"
        className=" bg-dark text-light px-6 py-3 text-xl shadow-md shadow-accentDarkPrimary/30  rounded-lg  hover:bg-light hover:text-dark font-semibold w-auto text-center uppercase flex items-center gap-x-2 "
      >
        Watch on <Youtube className={"w-8 h-8 inline"} />
      </Link>
    </section>
  );
}
