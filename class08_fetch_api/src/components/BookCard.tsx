import Link from "next/link";
import React from "react";

export default function BookCard({ name, type, available, id }: any) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{type}</p>
      <p className="text-gray-600">
        {available ? "Available" : "Not Available"}
      </p>
      <Link className="text-blue-500 hover:underline" href={`/book/${id}`}>
        See details
      </Link>
    </div>
  );
}
