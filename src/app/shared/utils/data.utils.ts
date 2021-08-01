export const removeUndefinedValues = <
  T extends Record<string, unknown>
>(
  obj: T,
): void => {
  Object.keys(obj).forEach(
    (key: string) => obj[key] === undefined && delete obj[key],
  );
};
