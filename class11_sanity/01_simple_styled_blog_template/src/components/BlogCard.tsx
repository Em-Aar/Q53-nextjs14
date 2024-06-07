import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={"/AI for Everyone.jpg"}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          How Businesses Can Use Generative AI to Grow and Perform Better
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          officia. Magni aliquid incidunt, ratione asperiores, provident
          doloremque animi voluptates nisi inventore nostrum ab minus
          accusantium?
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${1}`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
