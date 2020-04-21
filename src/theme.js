import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#a6d4fa",
      main: "#90caf9",
      dark: "#648dae",
    },
    secondary: {
      light: "#f6a5c0",
      main: "#f48fb1",
      dark: "#aa647b",
    },
  },
});

export default theme;
