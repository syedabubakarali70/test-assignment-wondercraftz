import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddCheckIn from "./AddCheckIn";

const HeroSection = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        px: 4,
        py: 8,
        borderRadius: 4,
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 10%, rgba(255, 255, 255, 0.1) 100%), url(heroSectionImage.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"flex-start"}
      gap={2}
    >
      <Typography variant="h3" color="white">
        Hi! 👋 James Doe
      </Typography>
      <Typography color="white">
        Lorem ipsus dolor sit amen, something important to say here
      </Typography>
      <AddCheckIn />
    </Box>
  );
};

export default HeroSection;
