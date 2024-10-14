import { Theme } from "../../types/themeTypes";

export const colors: Theme = {
  primary: "#DC3545",
  mainBg: "#F4F5F7",
  white: "#FFF",
};

export const abilitiesColor: Theme = {
  노말: "#949495",
  격투: "#E09C40",
  비행: "#A2C3E7",
  독: "#735198",
  땅: "#9C7743",
  바위: "#BFB889",
  벌레: "#9FA244",
  고스트: "#684870",
  강철: "#69A9C7",
  불꽃: "#e56c3e",
  물: "#5185C5",
  풀: "#66A945",
  전기: "#F6D851",
  에스퍼: "#DD6B7B",
  얼음: "#6DC8EB",
  드래곤: "#535CA8",
  악: "#4C4948",
  페어리: "#DAB4D4",
};

export const flexStyles = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  gap = 0
): string => {
  return `
  display:flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap:${gap}px;
  `;
};

export const mediaQueries: Theme = {
  mobile: "@media (max-width: 650px)",
  tablet: "@media (min-width: 651px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1220px)",
  largeDesktop: "@media (min-width: 1221px) and (max-width: 1440px)",
  extraLargeDesktop: "@media (min-width: 1441px)",
};
