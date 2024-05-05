import { Photo, photos } from '@/utils/photos';
import Image from 'next/image'
import React from 'react'

export default function page({params}:{params:{id:string}}) {

    const images: Photo[] = photos;
  const image: Photo = images.find((photo: Photo) => photo.id === params.id)!;
  return (
    <div 
    className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/70">
      <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-6">
        <Image
          alt=""
          src={image.imageSrc}
          height={600}
          width={600}
          className="w-full object-cover aspect-square col-span-2"
        />
      </div>
    </div>
  )
}
