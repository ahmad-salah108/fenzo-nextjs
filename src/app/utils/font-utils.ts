import { cairo, azeretMono } from "../fonts";

export const getFontClassName = (locale: string): string => {
  return locale === "ar" ? cairo.className : azeretMono.className;
};
