export const findWord = (a?: string, b?: string) => {
  return a?.toLowerCase().includes((b || "")?.toLowerCase() || "");
};
