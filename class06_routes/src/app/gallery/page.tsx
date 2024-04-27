import Link from "next/link";
import React from "react";

export default function page({ params }: any) {
  return (
    <div>
      Gallery
      <Link href={`/photos/12`}>Photos</Link>
    </div>
  );
}
