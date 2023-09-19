import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide from "./Slide";

import "./style.css";

import { Navigation, Pagination, History } from "swiper/modules";

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
  children,
  pagination,
  spaceBetween,
  slidesPerView,
  initialSlide,
  breakpoints,
}: SwiperComponentProps) => {
  return (
    <Swiper
      navigation={true}
      pagination={pagination}
      autoplay={{ delay: 3000 }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centeredSlides={true}
      initialSlide={initialSlide}
      modules={[Navigation, Pagination, History]}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

SwiperComponent.Slide = Slide;

export default SwiperComponent;
