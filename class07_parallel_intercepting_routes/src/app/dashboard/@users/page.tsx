import delay from "@/utils/delay";
import React from "react";

export default async function page() {
  await delay(3000);
  return <div className="w-96 h-96 bg-gray-200 border shadow-md">Users</div>;
}
