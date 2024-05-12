import Link from "next/link";
import BookCard from "@/components/BookCard";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    method: "GET",
  });
  // console.log(response)

  const data: Book[] = await response.json();

  console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Books</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((book: Book) => (
          <BookCard
            key={book.id}
            name={book.name}
            id={book.id}
            type={book.type}
            available={book.available}
          />
        ))}
      </div>
    </div>
  );
}
