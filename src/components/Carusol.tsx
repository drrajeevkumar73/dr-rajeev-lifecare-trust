"use client";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

interface itemsPorps {
  items: {
    id: number;
    Heading: string;
    desc: string;
    img: string | StaticImageData;
  }[];
}

function CardCarusol({ items }: itemsPorps) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        breakpoints={{
          200: {
            // For screens larger than 640px
            slidesPerView: 1, // Show 1 slide on small screens
          },
          640: {
            // For screens larger than 640px
            slidesPerView: 2, // Show 2 slide on small screens
          },
          1024: {
            // For screens larger than 1024px (like laptops/desktops)
            slidesPerView: 3, // Show 3 slides on larger screens
          },
        }}
        className="mySwiper"
      >
        {items.map((v) => (
          <SwiperSlide className="bg-secondary space-y-6 border" key={v.id}>
            <div className="overflow-hidden">
              <Image
                src={v.img}
                alt="doctorcamp"
                className="aspect-square h-[309px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-6 p-2">
              <p className="font-bold">{v.Heading}</p>

              <p className="line-clamp-5 text-justify">{v.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CardCarusol;

interface LongImageProps {
  logItems: {
    id: number;
    Heading: string;
    desc: string;
    desc1: string;
    desc3: string;
    img: string | StaticImageData;
  }[];
}

export function BannerCarusol({ logItems }: LongImageProps) {
  return (
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
      navigation={true}
    >
      {logItems.map((v) => (
        <SwiperSlide className="md:w-[1000px]!" key={v.id}>
          <div className="flex md:h-[700px] w-full flex-wrap justify-center overflow-hidden rounded-sm md:flex-nowrap">
            <div className="w-full space-y-6 bg-[#54c06a] p-3 text-white md:w-1/2">
              <h6 className="text-2xl font-bold">{v.Heading}</h6>
              <p className="text-justify">{v.desc}</p>
              <p className="text-justify">{v.desc1}</p>
              <p className="text-justify">{v.desc3}</p>
            </div>
            <Image
              src={v.img}
              height={1000}
              alt=""
              className="h-full w-full object-cover md:w-2/3"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
