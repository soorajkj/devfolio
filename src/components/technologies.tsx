"use client";

import { Fragment } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { tools } from "@constants/tools";
import { Icon } from "@components/core/icon";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function Technologies() {
  return (
    <Fragment>
      <div className="space-y-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        >
          {tools.slice(0, 7).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!inline-flex !w-auto">
                <div className="group inline-flex min-w-48 cursor-pointer items-center justify-center space-x-3 rounded-lg border border-dashed px-6 py-3 font-family-roboto-mono hover:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/5 hover:dark:border-zinc-800">
                  <Icon icon={_.icon} width={24} height={24} />
                  <span>{_.technology}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {tools.slice(7, 14).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!inline-flex !w-auto">
                <div className="group inline-flex min-w-48 cursor-pointer items-center justify-center space-x-3 rounded-lg border border-dashed px-6 py-3 font-family-roboto-mono hover:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/5 hover:dark:border-zinc-800">
                  <Icon icon={_.icon} width={24} height={24} />
                  <span>{_.technology}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        >
          {tools.slice(14).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!inline-flex !w-auto">
                <div className="group inline-flex min-w-48 cursor-pointer items-center justify-center space-x-3 rounded-lg border border-dashed px-6 py-3 font-family-roboto-mono hover:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/5 hover:dark:border-zinc-800">
                  <Icon icon={_.icon} width={24} height={24} />
                  <span>{_.technology}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Fragment>
  );
}
