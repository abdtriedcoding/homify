"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ListingImageSlider = ({ urls }: { urls: string[] }) => {
  return (
    <div className="group h-96 w-full relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-96 w-full rounded-lg"
      >
        {urls.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={image}
                alt={"image"}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListingImageSlider;
