import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../theme";

const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState("light");

  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <button onClick={toggleTheme}>Toggle Mode</button>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
