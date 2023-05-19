import { useMediaQuery } from "@mui/material";

const useGetMediaQueryUp = (key) => {
  const isSizeUp = useMediaQuery((theme) => theme.breakpoints.up(key), {
    noSsr: true,
  });

  return isSizeUp;
};
const useGetMediaQueryDown = (key) => {
  const isSizeDown = useMediaQuery((theme) => theme.breakpoints.down(key), {
    noSsr: true,
  });

  return isSizeDown;
};

export { useGetMediaQueryUp, useGetMediaQueryDown };
