"use client";

export default function OrderButton({ id, available }: any) {
  const orderBook = async (id: any) => {
    try {
      const response = await fetch("/api", {
        method: "POST",

        body: JSON.stringify({
          id: id,
          clientEmail: "ibtisam123@example.com",
        }),
      });
      const data = await response.json();
      console.log(data);
      alert(`Your order is Successful with order id :${data.message.orderId}`);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold ${
        available
          ? "opacity-100 cursor-pointer"
          : "opacity-50 cursor-not-allowed"
      }`}
      disabled={!available}
      onClick={() => orderBook(id)}
    >
      {available ? "Order Now" : "Not Available"}
    </button>
  );
}
