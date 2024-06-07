import Link from "next/link";
import React from "react";
import FooterContactForm from "./FooterContactForm";
import FooterLearn from "./FooterLearn";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full bg-black  mt-12">
      <section className="flex flex-col md:flex-row">
        <FooterLearn />
        <FooterContactForm />
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <p className="">
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;</span>
          </p>
          <Link href={"https://nextjs.org/"} target="_blank">
            <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
          </Link>
          <span className="text-light">&nbsp;&&nbsp;</span>
          <Link href={"https://sanity.io/"} target="_blank">
            <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
          </Link>
        </div>
      
        <div>
          <p className="text-xs text-light">
            © 2024 <span className="text-light font-bold">&nbsp;DEV</span>
            <span className="text-accentDarkPrimary font-bold">
              LAB&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>



      </section>

    </footer>
  );
}
