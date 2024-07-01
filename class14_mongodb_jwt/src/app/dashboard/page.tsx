"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function page() {
  const [user, setUser] = useState("");

  const router = useRouter();

  const getUser = async () => {
    try {
      const response = await fetch("/api/users/profile");
      const res = await response.json();
      if (res.error) {
        alert(res.error);
        router.push("/login");
      } else {
        setUser(res.data);
      }
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl text-gray-900">
        Welcome! <span className=" text-blue-800">{user}</span>
      </h1>
    </div>
  );
}
