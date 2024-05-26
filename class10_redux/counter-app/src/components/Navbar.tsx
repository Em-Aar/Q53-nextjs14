"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const counter = useSelector((state: any) => state.counter);

  return (
    <header className="sticky w-full top-0 z-10 flex justify-between items-center  px-10 py-2 bg-gray-900 text-slate-100">
      <nav className="flex gap-x-4">
        <Link className="text-sm bg-gray-700 px-2 py-1 rounded " href={"/"}>
          Home
        </Link>
        <Link
          className="text-sm bg-gray-700 px-2 py-1 rounded "
          href={"/products"}
        >
          Products
        </Link>
      </nav>
      <div className="flex gap-x-2 items-center">
        <p>Counter Value: </p>
        <span className="block text-2xl font-bold text-green-500">
          {counter}
        </span>
      </div>
    </header>
  );
}
