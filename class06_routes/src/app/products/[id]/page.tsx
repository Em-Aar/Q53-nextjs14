import React from "react";

export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/products/")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(data);
  return data.products.map((post: any) => ({
    id: post?.id?.toString(),
  }));
}

// return array of params

export default async function page({ params }: { params: { id: string } }) {
  console.log(params);

  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await response.json();
  // console.log(product)

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
