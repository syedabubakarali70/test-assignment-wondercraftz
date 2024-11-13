import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo.svg";
import Button from "@mui/material/Button";
import Bell from "../assets/Bell.svg";
import InfoCircle from "../assets/InfoCircle.svg";
import ArrowDown from "../assets/Arrow-Down.svg";
import Avatar from "../assets/Avatar.png";
const Header = () => {
  return (
    <Paper
      sx={{
        borderRadius: "999px",
        height: "64px",
        px: 4,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      elevation={1}
    >
      <Stack
      //   sx={{ width: "32px", height: "32px" }}
      >
        <img src={logo} alt="logo" width={"100%"} height={"100%"} />
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button variant="contained">Feedback</Button>
        <img src={Bell} alt="" />
        <img src={InfoCircle} alt="" />
        <img src={Avatar} alt="" />
        <img src={ArrowDown} alt="" />
      </Stack>
    </Paper>
  );
};

export default Header;
