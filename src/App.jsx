import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CheckIns from "./components/CheckIns";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7B5AFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        outlined: {
          borderRadius: "999px",
        },
        contained: {
          borderRadius: "999px",
          textTransform: "none",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Stack gap={2}>
          <Header />
          <HeroSection />
          <CheckIns />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
