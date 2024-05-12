import OrderButton from "@/components/OrderButton";
import Link from "next/link";
import React from "react";

export default async function page({ params }: any) {
  const id = params.id;

  const response = await fetch(
    `https://simple-books-api.glitch.me/books/${id}`
  );

  const data = await response.json();

  const orderBook = async () => {
    console.log(id);
    
  };

  //   https://simple-books-api.glitch.me/books/${id}
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{data.type}</p>
        <OrderButton id={data.id} available={data.available} />
        <Link className="block text-blue-500 mt-4 hover:underline" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
