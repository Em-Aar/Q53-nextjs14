"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <button
        className="text-gray-800 font-[900]"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Submit
      </button> */}

      {/* <h1 className="text-red-500 font-bold text-5xl">Hello</h1>
      <h2 className="text">Hello1</h2>
      <h3>Hello2</h3>
      <h4>Hello3</h4>
      <h5>Hello4</h5>
      <span>This is Span1</span>
      <span>This is Span2</span> */}
      <div className="p-[5px] bg-red-500 w-[200px] m-[10px] border-[10px] border-black rounded-sm">
        Box Model
      </div>
    </main>
  );
}
