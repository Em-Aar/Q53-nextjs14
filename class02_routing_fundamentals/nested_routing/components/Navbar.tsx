import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="px-24 py-2 flex justify-between items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/services/security"}>Security</Link>
        <Link href={"/services/consultancy"}>Consultancy</Link>
      </nav>
    </>
  );
}
