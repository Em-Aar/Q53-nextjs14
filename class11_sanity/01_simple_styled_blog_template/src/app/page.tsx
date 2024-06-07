import BlogCard from "@/components/BlogCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Array(6).fill(0).map((_, i) => (
          <BlogCard key={i} />
        ))}

      </section>
    </main>
  );
}
