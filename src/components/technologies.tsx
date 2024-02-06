"use client";

import { Fragment } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@components/core/icon";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const techs = [
  { icon: "", technology: "Javascript" },
  { icon: "", technology: "HTML5" },
  { icon: "", technology: "CSS3" },
  { icon: "", technology: "React JS" },
  { icon: "", technology: "Next JS" },
  { icon: "", technology: "Tailwind CSS" },
  { icon: "", technology: "SCSS" },
  { icon: "", technology: "Bootstrap" },
  { icon: "", technology: "Typescript" },
  { icon: "", technology: "JQuery" },
  { icon: "", technology: "Git" },
  { icon: "", technology: "Redux" },
  { icon: "", technology: "HTML Email" },
  { icon: "", technology: "Node JS" },
  { icon: "", technology: "Express JS" },
  { icon: "", technology: "Mongo DB" },
  { icon: "", technology: "Supabase" },
  { icon: "", technology: "Firebase" },
  { icon: "", technology: "Framer Motion" },
  { icon: "", technology: "Material UI" },
  { icon: "", technology: "Chakra UI" },
  { icon: "", technology: "Figma" },
  { icon: "", technology: "Styled Components" },
];

export default function Technologies() {
  return (
    <Fragment>
      <div className="container">
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
          {techs.slice(0, 13).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!inline-flex !w-auto">
                <div className="inline-flex cursor-pointer items-center justify-center space-x-4 rounded-full border border-dashed px-6 py-4 opacity-70 hover:opacity-100 dark:border-gray-800 dark:bg-gray-800/10 hover:dark:border-gray-600">
                  <Icon icon="code" />
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
          {techs.slice(13).map((_, i) => {
            return (
              <SwiperSlide key={i} className="mt-4 !inline-flex !w-auto">
                <div className="inline-flex cursor-pointer items-center justify-center space-x-4 rounded-full border border-dashed px-6 py-4 opacity-70 hover:opacity-100 dark:border-gray-800 dark:bg-gray-800/10 hover:dark:border-gray-600">
                  <Icon icon="code" />
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
