"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { ZoomInIcon } from "lucide-react";

interface AwardshowProps {
  item: {
    id: number;
    img: string | StaticImageData;
    desc: string;
  }[];
}

export default function Awardshow({ item }: AwardshowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(isLoaded);
  // Image URLs extract karein
  const images = item.map((v) =>
    typeof v.img === "string" ? v.img : (v.img as StaticImageData).src,
  );

  // Preload image
  useEffect(() => {
    if (isOpen) {
      const img = new window.Image();
      img.src = images[photoIndex];
      img.onload = () => setIsLoaded(true);
    }
  }, [isOpen, photoIndex, images]);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {item.map((v, index) => (
        <div
          key={v.id}
          className="group group relative cursor-pointer overflow-hidden border shadow-xl"

          onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
            setIsLoaded(false);
          }}
        >
          <Image
            src={v.img}
            alt={v.desc}
            width={360}
            height={300}
            className="h-[300px] object-cover"
          />
          <div
            className="absolute top-[100%]  left-0 h-full w-full space-y-6 bg-[rgba(0,0,0,0.5)] p-3 duration-300 group-hover:top-0"
            
          >
           
          </div>

          <div className="absolute -top-full left-1/2 h-fit w-full -translate-1/2 bg-black p-3 duration-300 group-hover:top-1/2">
            <p className="text-white">{v.desc}</p>
          </div>

          <div className="w-[50px] h-[50px] bg-primary rounded-tl-2xl absolute right-0 bottom-0 flex justify-center items-center" >
          <ZoomInIcon className="mx-auto text-white" />
          </div>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
            setIsLoaded(false);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
            setIsLoaded(false);
          }}
          wrapperClassName="custom-lightbox"
        />
      )}
    </div>
  );
}
