import React from "react";
import { useMediaQuery } from "react-responsive";

export const ResponsiveDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: "1024px" });

  return isDesktop ? children : null;
};
export const ResponsiveTablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });

  return isTablet ? children : null;
};
export const ResponsiveMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  return isMobile ? children : null;
};
