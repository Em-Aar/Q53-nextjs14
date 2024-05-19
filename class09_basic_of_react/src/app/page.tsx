"use client";
import { useState, useEffect } from "react";

export default function Home() {
  let [x, setX] = useState(1); // [value:number,setter:function]

  // let x = 1;

  const updateVar = (val: any) => {
    setX(x + val);
    console.log(x);
  };
  return (
    <>
      <h1>{x}</h1>

      <button onClick={() => updateVar(3)}>Update x</button>
    </>
  );
}
