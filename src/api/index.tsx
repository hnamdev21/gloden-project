import axios from "axios";

import { API_LOCAL_URL } from "@/constants/env";
import STATUS_CODE from "@/constants/statusCode";

export const axiosInstance = axios.create({
  baseURL: API_LOCAL_URL + "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      //
    }
    if (error.response.status === STATUS_CODE.UNAUTHORIZED) window.location.href = "/login";

    return Promise.reject(error);
  }
);
