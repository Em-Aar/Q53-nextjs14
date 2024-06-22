import { NextResponse } from "next/server";


const booksData = [
    {
        "id": 1,
        "name": "The Russian",
        "type": "fiction",
        "available": true
    },
    {
        "id": 2,
        "name": "Just as I Am",
        "type": "non-fiction",
        "available": false
    },
    {
        "id": 3,
        "name": "The Vanishing Half",
        "type": "fiction",
        "available": true
    },
    {
        "id": 4,
        "name": "The Midnight Library",
        "type": "fiction",
        "available": true
    },
    {
        "id": 5,
        "name": "Untamed",
        "type": "non-fiction",
        "available": true
    },
    {
        "id": 6,
        "name": "Viscount Who Loved Me",
        "type": "fiction",
        "available": true
    }
]
export function GET(request: Request) {
//   const url = new URL(request.url);
//   console.log(url.searchParams.get("v"));
  return NextResponse.json(booksData);
}

export async function POST(request: Request,) {
  const { password, username } = await request.json();
  console.log(password, username);

  // register user in database

  return NextResponse.json({ method: "POST" });
}

export async function PUT(request: Request) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({ method: "PUT" });
}



