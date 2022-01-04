import axios from "axios";

//기본 api
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
});
