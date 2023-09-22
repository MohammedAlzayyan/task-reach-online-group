import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});

export { lightTheme, darkTheme };
