import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-8 flex justify-cente gap-x-4 font-bold bg-purple-500 ">
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </nav>
  );
}
