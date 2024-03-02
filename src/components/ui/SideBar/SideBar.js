import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

import sideBarNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className={"my-5"}>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} alt="top-news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again.
            </Typography>
            <Typography gutterBottom className="my-3">
              By Md Imon Hossain - Mar 01 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at his layout
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
