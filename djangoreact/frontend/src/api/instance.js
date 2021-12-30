import axios from "axios";

const KEY = localStorage.getItem("key");

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const loginAuth = api.create({
  headers: {
    Authorization: `Token ${KEY}`,
  },
});

// 함수형태로 만들어서 소문자로 naming 다시
