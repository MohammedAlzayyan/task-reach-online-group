import { SwiperSlide } from "swiper/react";

import "./style.css";

export const Slide = ({ children }: { children: React.ReactNode }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};

export default Slide;
