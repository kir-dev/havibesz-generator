import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "120rem",
  },
  colors: {
    theme: {
      100: "#d1d5db",
      200: "#a3abb7",
      300: "#768194",
      400: "#485770",
      500: "#1a2d4c",
      600: "#15243d",
      700: "#101b2e",
      800: "#0a121e",
      900: "#05090f",
    },
  },
});
