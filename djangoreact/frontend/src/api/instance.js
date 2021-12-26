import Axios from "axios";

const KEY = localStorage.getItem("key");

export const axios = Axios.create({
  "baseURL": 'http://127.0.0.1:8000/',
})

export const axiosAuth = axios.create({
  headers: { "Authorization" : `Token ${KEY}` }
});

