import React from "react";
import { Photo, photos } from "@/utils/photos";
import Image from "next/image";

export default function page({ params }: { params: { id: string } }) {
  const images: Photo[] = photos;
  const image: Photo = images.find((photo: Photo) => photo.id === params.id)!;
  console.log(image);
  return (
    <div>
      <h1>Image Data</h1>
      <Image src={image.imageSrc} alt="" width={800} height={800} />
    </div>
  );
}
