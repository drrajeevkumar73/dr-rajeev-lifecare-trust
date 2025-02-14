"use client";
import Image, { StaticImageData } from "next/image";
import stru from "@/assets/approach-banner.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Button } from "@/components/ui/button";

interface CrausolProps {
  item: {
    id: number;
    img: string | StaticImageData;
    head: string;
    desc: string;
  }[];
}
export default function Carouselor({ item }: CrausolProps) {
  return (
    <div className="bg-[#fdd831] px-3 md:px-0">
      <Image src={stru} alt="" className="w-full" />
      <div className="space-y-16">
        <h6 className="text-center text-2xl font-bold md:text-3xl">
          Stories & Updates
        </h6>

        <Swiper
          initialSlide={1}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {item.map((v) => (
            <SwiperSlide key={v.id} className="md:!w-[1000px]">
              <div className="flex h-[500px] w-full flex-wrap justify-center overflow-hidden rounded-sm md:flex-nowrap">
                <div className="w-full space-y-6 bg-[#54c06a] p-3 text-white md:w-1/2">
                  <h6 className="text-2xl font-bold">{v.head}</h6>
                  <p className="text-justify">{v.desc}</p>
                  <Button className="btnshow w-full font-bold duration-.5">
                    Know More
                  </Button>
                </div>
                <Image
                  src={v.img}
                  height={1000}
                  alt=""
                  className="w-full object-cover md:w-2/3"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
