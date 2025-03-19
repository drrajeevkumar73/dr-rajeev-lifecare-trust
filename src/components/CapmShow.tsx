"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DelhiHomeCamp, KolkataHomeCamp, PatnaHomeCamp, RanchiHomeCamp } from "@/app/(LandingPage)/(PublicPage)/(Home)/Allarry";

export default function CampShow() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lightbox खोलने से पहले इमेज प्री-लोड करें
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openLightbox = (images: any[], index: SetStateAction<number>) => {
    const imgList = images.map((img) => img.image);
    setCurrentImages(imgList);
    setPhotoIndex(index);
    setIsOpen(true);
    setIsLoaded(false); // लोडिंग स्टेट रीसेट करें
  };

  // इमेज लोड होने तक लाइटबॉक्स वेट करेगा
  useEffect(() => {
    if (isOpen) {
      const img = new window.Image();
      img.src = currentImages[photoIndex];
      img.onload = () => setIsLoaded(true);
    }
  }, [isOpen, photoIndex, currentImages]);

  return (
    <div className="mx-auto w-full">
      <Tabs defaultValue="Ranchi">
        <TabsList className="mx-auto flex w-fit flex-wrap gap-3 md:gap-5">
          <TabsTrigger value="Ranchi" className="cursor-pointer">Ranchi</TabsTrigger>
          <TabsTrigger value="Kolkata" className="cursor-pointer">Kolkata</TabsTrigger>
          <TabsTrigger value="Delhi" className="cursor-pointer">Delhi</TabsTrigger>
          <TabsTrigger value="Patna" className="cursor-pointer">Patna</TabsTrigger>
        </TabsList>

        {/* Ranchi Camp Images */}
        <TabsContent value="Ranchi" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RanchiHomeCamp.map((i, index) => (
            <Image
              key={index}
              src={i.image}
              alt={`Ranchi Camp ${index + 1}`}
              width={600}
              height={400}
              unoptimized={true}
              className="h-[300px] w-full rounded-md object-cover shadow-md hover:scale-105 cursor-pointer transition"
              onClick={() => openLightbox(RanchiHomeCamp, index)}
            />
          ))}
        </TabsContent>

        {/* Kolkata Camp Images */}
        <TabsContent value="Kolkata" className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {KolkataHomeCamp.map((i, index) => (
            <Image
              key={index}
              src={i.image}
              alt={`Kolkata Camp ${index + 1}`}
              width={600}
              height={400}
              unoptimized={true}
              className="h-[300px] w-full rounded-md object-cover shadow-md hover:scale-105 cursor-pointer transition"
              onClick={() => openLightbox(KolkataHomeCamp, index)}
            />
          ))}
        </TabsContent>

        {/* Delhi Camp Images */}
        <TabsContent value="Delhi" className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {DelhiHomeCamp.map((i, index) => (
            <Image
              key={index}
              src={i.image}
              alt={`Delhi Camp ${index + 1}`}
              width={600}
              height={400}
              unoptimized={true}
              className="h-[300px] w-full rounded-md object-cover shadow-md hover:scale-105 cursor-pointer transition"
              onClick={() => openLightbox(DelhiHomeCamp, index)}
            />
          ))}
        </TabsContent>

        {/* Patna Camp Images */}
        <TabsContent value="Patna" className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {PatnaHomeCamp.map((i, index) => (
            <Image
              key={index}
              src={i.image}
              alt={`Patna Camp ${index + 1}`}
              width={600}
              height={400}
              unoptimized={true}
              className="h-[300px] w-full rounded-md object-cover shadow-md hover:scale-105 cursor-pointer transition"
              onClick={() => openLightbox(PatnaHomeCamp, index)}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length);
            setIsLoaded(false);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % currentImages.length);
            setIsLoaded(false);
          }}
          wrapperClassName="custom-lightbox"
        />
      )}

      {/* Loading Animation */}
      {isOpen && !isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}
