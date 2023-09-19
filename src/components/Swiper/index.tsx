// components/SwiperComponent.js
import React, { useMemo } from "react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css"; // Create a CSS file for custom styling

import { Navigation, Pagination, History } from "swiper/modules";

type SwiperComponentProps = {
  slides: string[];
  pagination: boolean | any;
  spaceBetween: number;
  slidesPerView: number;
  initialSlide?: number;
  breakpoints: {};
  swiperClassName: string;
  swiperSlideClassName: string;
};

const SwiperComponent = ({
  slides,
  pagination,
  spaceBetween,
  slidesPerView,
  initialSlide,
  breakpoints,
  swiperClassName,
  swiperSlideClassName,
}: SwiperComponentProps) => {
  const swiperProparities = useMemo(() => {
    return {
      pagination: {
        clickable: pagination,
      },
      spaceBetween: spaceBetween,
      slidesPerView: slidesPerView,
      initialSlide: initialSlide,
      breakpoints: breakpoints,
    };
  }, [pagination, spaceBetween, slidesPerView, initialSlide, breakpoints]);

  // const classNameSwiper = useMemo(() => {
  //   const swiperClass = ["swiper-container"];
  //   if (className) {
  //     swiperClass.push(className);
  //   }

  //   return {swiperClass};
  // }, []);

  return (
    <Swiper
      // navigation={true}
      autoplay={{ delay: 3000 }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centeredSlides={true}
      initialSlide={initialSlide}
      modules={[Navigation, Pagination, History]}
      breakpoints={breakpoints}
      className={"mySwiper"}
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
