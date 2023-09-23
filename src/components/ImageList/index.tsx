import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Box } from "@mui/material";
import Image from "next/image";

const itemData = [
  {
    img: "/assets/images/img1.svg",
    title: "image1",
    rows: 2,
    cols: 6,
  },
  {
    img: "/assets/images/img2.svg",
    title: "Image2",
    rows: 1,
    cols: 6,
  },
  {
    img: "/assets/images/img3.svg",
    title: "Image3",
    rows: 1,
    cols: 6,
  },
];

const ImageListComponent = () => {
  return (
    <Box sx={{ px: { xs: 5, md: 15 } }}>
      <ImageList
        sx={{}}
        variant="quilted"
        cols={12}
        // rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <Image
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={200}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImageListComponent;
