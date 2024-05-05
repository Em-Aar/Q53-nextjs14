import React from "react";
import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const images = photos;
  // console.log(images)
  return (
    <div className="grid grid-cols-3 gap-8">
      {images.map((photo: Photo) => (
        <Link key={photo.id} href={`/shop/photos/${photo.id}`}>
          <Image src={photo.imageSrc} alt="" height={500} width={500} />
        </Link>
      ))}
    </div>
  );
}
