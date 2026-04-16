export const API_BASE_URL = process.env.REACT_APP_API_URL || "https://zerodha-clone-backend-c0ze.onrender.com";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const buildApiUrl = (path = "/") => {
  const normalizedBaseUrl = trimTrailingSlash(API_BASE_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};

const getDefaultDashboardBaseUrl = () => {
  if (typeof window === "undefined") {
    return "https://zerodha-clone-backend-c0ze.onrender.com";
  }

  return `${window.location.protocol}//${window.location.hostname}:3001`;
};

const DASHBOARD_BASE_URL = trimTrailingSlash(
  "https://zerodha-clone-mg3y.onrender.com" || getDefaultDashboardBaseUrl()
);

export const DASHBOARD_URL = DASHBOARD_BASE_URL;
export const getDashboardUrl = (path = "/") =>
  `${DASHBOARD_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
