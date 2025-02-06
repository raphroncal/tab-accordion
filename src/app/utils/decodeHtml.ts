export const decodeHtml = (input: string): string => {
  const e = document.createElement("div");
  e.innerHTML = input;
  return e.innerHTML || e.textContent || "";
};