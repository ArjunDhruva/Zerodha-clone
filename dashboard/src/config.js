export const API_BASE_URL = "https://zerodha-clone-mg3y.onrender.com";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const buildApiUrl = (path = "/") => {
  const normalizedBaseUrl = trimTrailingSlash(API_BASE_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};
