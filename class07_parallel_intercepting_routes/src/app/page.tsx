import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let array1 = [1, 2, 3];
  const products: any = [
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      price: 599.99,
      description: "High-end smartphone with advanced features.",
    },
    {
      id: 2,
      name: "Laptop",
      category: "Electronics",
      price: 1299.99,
      description: "Powerful laptop with a sleek design.",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Wearable Tech",
      price: 199.99,
      description: "Fitness tracker with heart rate monitor.",
    },
    {
      id: 4,
      name: "Headphones",
      category: "Electronics",
      price: 99.99,
      description: "Wireless headphones with noise cancellation.",
    },
    {
      id: 5,
      name: "Backpack",
      category: "Fashion",
      price: 49.99,
      description: "Stylish backpack for everyday use.",
    },
    {
      id: 6,
      name: "Coffee Maker",
      category: "Kitchen Appliances",
      price: 79.99,
      description: "Automatic coffee maker with programmable settings.",
    },
    {
      id: 7,
      name: "Wireless Mouse",
      category: "Computer Accessories",
      price: 29.99,
      description: "Ergonomic mouse with wireless connectivity.",
    },
    {
      id: 8,
      name: "Yoga Mat",
      category: "Fitness",
      price: 19.99,
      description: "Non-slip yoga mat for yoga and exercise routines.",
    },
    {
      id: 9,
      name: "Sunglasses",
      category: "Fashion",
      price: 79.99,
      description: "Polarized sunglasses with UV protection.",
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 69.99,
      description: "Portable speaker with long battery life.",
    },
  ];
  // x = 10;

  return (
    <main>
      <h1>Product Page</h1>
      {products.map((element: any, index: number) => {
        return (
          <div key={element.id}>
            <h1>{element.name}</h1>
            <p>{element.price}</p>
            <Link href={`/products/${element.id}`}>See details</Link>
          </div>
        );
      })}
    </main>
  );
}
