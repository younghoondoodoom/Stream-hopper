import axios from "axios";

const KEY = localStorage.getItem("key");

//기본 api
export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

//로그인만 확인하는 api
export const loginAuth = api.create({
  headers: {
    Authorization: `Token ${KEY}`,
  },
});
