import Link from "next/link";
import React from "react";

export default async function page() {
  const response = await fetch('https://dummyjson.com/products?limit=10')
  const {products} = await response.json()
//   console.log({products})
 

  return (
    <div>
      {
        products.map((product:any) => (
            <Link key={product.id} href={`/products/${product.id}`} ><h2 >{product.title}</h2></Link>
        )
      )})
    </div>
  );
}
