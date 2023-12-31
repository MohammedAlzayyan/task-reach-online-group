import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Box, Typography } from "@mui/material";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export const TestSwiper = () => {
  const slides2 = [
    "../assets/images/elec1.svg",
    "../assets/images/elec2.svg",
    "../assets/images/elec3.svg",
    "../assets/images/elec1.svg",
    "../assets/images/elec2.svg",
    "../assets/images/elec3.svg",
  ];
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        navigation={true}
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
        modules={[Navigation, Pagination]}
      >
        {slides2.map((slide, index) => (
          <Box sx={{ px: 20 }} key={index}>
            <SwiperSlide style={{ transform: "none !important" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Image
                  src={slide}
                  alt={`Slide ${index}`}
                  width={150}
                  height={150}
                />
                <Typography
                  sx={{ fontSize: "20px", fontWeight: 600, color: "#151875" }}
                >
                  Electronics
                </Typography>
              </Box>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestSwiper;
