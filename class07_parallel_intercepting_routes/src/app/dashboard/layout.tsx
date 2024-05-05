import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
  users,
  analytics,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const isLoggedIn = true;
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
      {isLoggedIn ? (
        <div className="mt-12 flex justify-center items-center gap-4">
          {users}
          {analytics}
        </div>
      ) : (
        <div className="mt-12 flex justify-center items-center gap-4">
          <Link
            href={"/login"}
            className="bg-gray-900 px-4 py-2 rounded-md text-white"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
