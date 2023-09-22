"use client";

import SwiperComponent from "@/components/SwiperComponent";
import ImageListComponent from "@/components/ImageList";
import ElectronicSwiper from "@/components/ElectronicSwiper";

import { Box, Typography, Stack } from "@mui/material";

import ArrowRightIcon from "@/components/SVG/ArrowRight";

export default function Home() {
  const slides = [
    "../assets/images/placeholder3.png",
    "../assets/images/placeholder1.png",
    "../assets/images/placeholder2.png",
  ];
  return (
    <main>
      <SwiperComponent
        slides={slides}
        spaceBetween={120}
        slidesPerView={3}
        initialSlide={1}
      />

      <Box sx={{ px: { xs: 5, md: 15 } }}>
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
        <ElectronicSwiper />
      </Box>
      <ImageListComponent />
    </main>
  );
}
