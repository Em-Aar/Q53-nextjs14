export function GET(request: Request) {
  return Response.json({
    name: "John Doe get",
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  const response = await fetch("https://simple-books-api.glitch.me/orders", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer ac696ae8b35c849f3be9957f4e88dea8985607ee3d57ca0020edb46f601d3db7",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      bookId: data.id,
      clientEmail: data.clientEmail,
    }),
  });
  const responseData = await response.json();
  console.log(responseData);
  return Response.json({
    message: responseData,
  });
}
