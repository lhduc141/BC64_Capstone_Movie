import axios from "axios";
import { store } from "../redux/store";
import {
  turnOffLoading,
  turnOnLoading,
} from "../redux/loadingReducer/loadingSlice";
export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const MA_NHOM = "GP09";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.OKsfWEoxxNGCfaW1Y-0XJaFv5CZv6A2aoWlqLkFT-TA";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

// ----------------------------------------------------------------------------------
// RREQUEST interceptor

// => Use this function for turn on loading animation
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(turnOnLoading());
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// ----------------------------------------------------------------------------------
// RESPONSE interceptor
// => Use this function for turn off loading animation => "response request"
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 1000);
    return response;
  },
  function (error) {
    // Do something with response error
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 1000);
    return Promise.reject(error);
  }
);
