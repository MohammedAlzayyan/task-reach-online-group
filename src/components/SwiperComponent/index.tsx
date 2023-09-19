import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Navigation, Pagination, History } from "swiper/modules";

import { Box } from "@mui/material";

type SwiperComponentProps = {
  children: React.ReactNode;
  slides: string[];
  pagination: boolean | any;
  spaceBetween: number;
  slidesPerView: number;
  initialSlide?: number;
  breakpoints: {};
};

const SwiperComponent = ({
  slides,
  pagination,
  spaceBetween,
  slidesPerView,
  initialSlide,
  breakpoints,
}: SwiperComponentProps) => {
  return (
    <Swiper
      // navigation={true}
      pagination={pagination}
      autoplay={{ delay: 3000 }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centeredSlides={true}
      initialSlide={initialSlide}
      modules={[Navigation, Pagination, History]}
      breakpoints={breakpoints}
    >
      {slides.map((slide: string, index: number) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
