"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
        e.preventDefault();
        const response = await fetch ("api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const res = await response.json()
        if(res.error){
          alert(res.error)
        }
        alert(res.message)
        setUser({name: "", email: "", password: ""})
        router.push('/login')
        
    } catch (error: any) {
        alert(error.message);
    }

  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 px-10 py-4 shadow-md rounded max-w-sm flex flex-col justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-700">Sign Up</h1>

        {/* Form fields */}
        <div className="mt-6">
          {/* Name Field */}
          <div className="pb-4">
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
              minLength={3}
              maxLength={20}
              type="text"
              name="name"
              placeholder="Name"
              className="mt-1 w-full rounded text-sm p-2"
            />
          </div>

          {/* Email Field */}
          <div className="pb-4">
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              required
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 w-full rounded  text-sm p-2"
            />
          </div>

          {/* Password Field */}
          <div className="pb-4">
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              required
              min={8}
            //   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              type="password"
              name="password"
              placeholder="Password"
              className="block mt-1 w-full rounded  text-sm p-2"
            />
          </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`mt-4 w-full bg-teal-500 text-white p-2 rounded `}
            >
              Sign Up
            </button>
        </div>
      </form>
    </main>
  );
}
