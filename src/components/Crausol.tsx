"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image, { StaticImageData } from "next/image";

interface CrausolProps {
  id: string;
  img: string | StaticImageData;
}

interface CrausolState {
  items: CrausolProps[];
}

export default function Crausol({ items }: CrausolState) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper cursor-grab"
    >
      {items.map((v) => (
        <SwiperSlide key={v.id} className="md:!w-[390px] !w-[300px] ">
          <div className="group space-y-4 overflow-hidden rounded-3xl bg-secondary shadow hover:shadow-xl cursor-pointer">
            <Image
              src={v.img}
              alt=""
              width={390}
              height={400}
              className="aspect-square h-[250px] w-[500px] object-cover"
            />

            <div className="p-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, esse
              cupiditate magni est eligendi veniam non aspernatur! Nesciunt
              facere maiores quod, amet, animi harum error culpa ipsam
              perferendis officiis eligendi!
            </div>
            <div className="h-[5px] w-full bg-primary duration-.5 group-hover:h-[10px]"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
