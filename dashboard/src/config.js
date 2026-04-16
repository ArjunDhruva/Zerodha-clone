export const API_BASE_URL = "https://zerodha-clone-backend-c0ze.onrender.com";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const buildApiUrl = (path = "/") => {
  const normalizedBaseUrl = trimTrailingSlash(API_BASE_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};
