import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className={"w-full my-5"}>
      <Container>
        <Image
          src={headingImage}
          width={500}
          height={500}
          alt="headingImage"
          className="mx-auto"
        />
        <Typography
          color={"gray"}
          variant="body2"
          textAlign={"center"}
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign={"center"}>{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
