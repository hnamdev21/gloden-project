export const isDev = process.env.NODE_ENV === "development";

export const BASE_URL = process.env.NEXT_APP_BASE_URL || "http://localhost:3000";
export const ENV = process.env.NEXT_PUBLIC_APP_ENV || "development";
export const API_LOCAL_URL = process.env.REACT_APP_API_LOCAL_URL || "http://localhost:4000";
