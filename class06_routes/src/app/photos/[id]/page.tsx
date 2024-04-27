import Link from "next/link";
import React from "react";

export default function page({params}:{params:{id:string}}) {
  return (
    <div>
        <h2>Photo:{params.id}</h2>
      
    </div>
  );
}
