"use client";

import logo from "@/assets/logo.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <>

      {/* Nextjs Image Component */}

      {/* <button className="bg-blue-300 m-4 px-8 border-4 border-red-500">
        Click Me
      </button>

      
      <Image
        src={logo}
        alt="logo"
        className="w-24 h-24 rounded-full object-contain"
      />

      
      <Image
        src={
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
        width={500}
        height={500}
        onLoad={() => <p>Loading</p>}
        alt="url"
        className="w-32 h-32 object-cover"
      /> */}

      {/* <div>
        <div className="bg-gray-300 w-48 h-48 p-2">1</div>
        <div className="bg-gray-300 w-48 h-48 p-2">2</div>
        <div className="bg-gray-300 w-48 h-48 p-2">3</div>
      </div> */}

      {/* <ul className="bg-teal-600 flex justify-around h-48 items-center ">
        <li className="bg-red-400">Home</li>
        <li className="bg-red-400">About</li>
        <li className="bg-red-400">Contact</li>
      </ul> */}


      {/* Flex Wrap Concept */}
      <ul className="bg-teal-600 flex-wrap flex gap-5  h-48 ">
        <li className="bg-red-400">Home</li>
        <li className="bg-red-400">About</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
        <li className="bg-red-400">Contact</li>
      </ul>
    </>
  );
}
