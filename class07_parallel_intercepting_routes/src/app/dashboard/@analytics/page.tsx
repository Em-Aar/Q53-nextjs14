import delay from "@/utils/delay";
import Link from "next/link";
import React from "react";

export default async function page() {
await delay(5000);
//   x = 20;
  return (
    <div className="w-96 h-96 bg-red-200 border shadow-md">
      <h2>Analytics Summary</h2>
      <Link
        href={"/dashboard/details"}
        className="bg-gray-900 px-4 py-2 rounded-md text-white"
      >
        Analytics Details
      </Link>
    </div>
  );
}
