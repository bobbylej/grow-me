export const removeBlankLines = (text: string): string =>
  text.replace(/^\s*[\r\n]/gm, '');
