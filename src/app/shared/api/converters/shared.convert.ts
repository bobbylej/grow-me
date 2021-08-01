export const convertNestedDataToApi = <T = unknown>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};
