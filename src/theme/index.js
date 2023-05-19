import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4D7DD",
    },
    secondary: {
      main: "rgba(31, 42, 60, 1)",
    },
    background: {
      // paper: "rgba(57, 75, 97, 1) ",
      paper: "rgba(31, 42, 60, 1)",
      default: "rgba(39, 50, 68, 1)",
    },
    drawer: {
      main: "#f50057",
    },
    action: {
      active: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(212, 215, 221, 1)",
    },
    info: {
      main: "rgba(0, 224, 255, 1)",
    },
    divider: "rgba(57, 75, 97, 1)",
  },
  text: {
    primary: "rgba(212, 215, 221, 1)",
    // secondary: "rgba(2, 2, 2, 1)",
    // disabled: "rgba(88, 94, 105, 1)",
    // danger: "rgba(213, 76, 90, 1)",
    // lightGray: "rgba(187, 187, 187, 1)",
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontWeight: "300",
      fontSize: "96px",
      lineHeight: "112px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "27.24px",
    },
    h3: {
      fontWeight: "400",
      fontSize: "48px",
      lineHeight: "56px",
    },
    h4: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "26px",
    },
    h5: {
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "31px",
    },
    h6: {
      fontWeight: "600",
      fontSize: "15px",
      lineHeight: "20px",
    },
    body1: {
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: "31px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18px",
    },
  },
});
export const paletteData = {
  common: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    main: "rgba(255, 255, 255, 1)",
  },
  secondary: {
    main: "rgba(223, 226, 233, 1)",
  },
  error: {
    main: "rgba(237, 76, 92, 1)",
  },
  warning: {
    main: "rgba(231, 187, 65, 1)",
  },
  success: {
    main: "rgba(39, 181, 109, 1)",
  },
  info: {
    main: "rgba(0, 156, 214, 1)",
  },
  white: {
    main: "rgba(255, 255, 255, 1)",
  },
  text: {
    primary: "rgba(25, 31, 44, 1)",
    secondary: "rgba(2, 2, 2, 1)",
    disabled: "rgba(88, 94, 105, 1)",
    danger: "rgba(213, 76, 90, 1)",
    lightGray: "rgba(187, 187, 187, 1)",
    tableheader: "rgba(88, 94, 105, 0.75)",
    formlink: "rgba(151, 158, 178, 1)",
  },
  background: {
    paper: "rgba(223, 226, 233, 1)",
    default: "rgba(223, 226, 233, 1)",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
  },
  divider: "rgba(105, 105, 105, 0.25)",
};

export default theme;
