import axios from "axios";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.36nQu-fyhBElKov0sWvrvwuO832nQWmfRIHcRVPB7Mw";
export const MA_NHOM = "GP09";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});
