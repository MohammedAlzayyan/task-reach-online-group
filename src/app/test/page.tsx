"use client";

import * as React from "react";

import { Box, Typography, Stack } from "@mui/material";

import SwiperComponent from "@/components/Swiper";

import ArrowRightIcon from "@/components/SVG/ArrowRight";
import ImageListComponent from "@/components/ImageList";
import TestSwiper from "@/components/testSwiper";

export default function Test() {
  const slides = [
    "../assets/images/placeholder3.png",
    "../assets/images/placeholder1.png",
    "../assets/images/placeholder2.png",
  ];
  return (
    <div>
      <SwiperComponent
        slides={slides}
        pagination={{ clickable: true }}
        spaceBetween={70}
        slidesPerView={3}
        initialSlide={1}
      />

      <Box sx={{ px: 20 }}>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
        >
          <Typography variant="h5" component="h2" sx={{ fontSize: 18 }}>
            Categories
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 1 }}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontSize: 16, color: "#554AF0" }}
            >
              See all
            </Typography>
            <ArrowRightIcon />
          </Stack>
        </Stack>
        <TestSwiper />
      </Box>
      <ImageListComponent />
    </div>
  );
}
