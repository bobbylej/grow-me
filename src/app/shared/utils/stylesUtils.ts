export const htmlFontSize = 16;

export const pxToRem = (px: number): string =>
  `${px / htmlFontSize}rem`;
