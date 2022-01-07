import { api } from "./instance";
import { selector } from "recoil";
const KEY = localStorage.getItem("key");

//로그인을 확인하는 API
export const validLogin = selector({
  key: "validLogin",
  get: async () => {
    try {
      const response = await api.get("users/auth/permission", {
        headers: {
          Authorization: `Token ${KEY}`,
        },
      });
      return response;
    } catch (e) {
      return false;
    }
  },
});

// 로그인 요청 API
export const signIn = async (login) => {
  try {
    const key = await api.post("users/auth/login/", login);
    const data = key.data["key"];
    localStorage.setItem("key", data);
  } catch (error) {
    const errorList = error.response.data;
    alert(error);
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
};

// 로그아웃 요청 API
export const signOut = async () => {
  try {
    await api.post("users/auth/logout/");
  } catch (error) {
    return false;
  }
};

//회원가입 요청 API
export const signUp = async (register) => {
  try {
    const res = await api.post("users/auth/register/", register);
    console.log(res);
    alert("회원가입에 성공하였습니다.");
    window.location.replace("/login");
  } catch (error) {
    const errorList = error.response.data;
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
};

// ott추천 서비스 선호 영화 검사 api
export const genreTopMovie = selector({
  key: "genreTopMovie",
  get: async () => {
    try {
      const response = await api.get("service/genretoptwo", {
        headers: {
          Authorization: `Token ${KEY}`,
        },
      });
      return response.data.results;
    } catch (error) {
      return false;
    }
  },
});

// ott추천 서비스 post 요청
export const postOttData = async (ottTestAtom) => {
  try {
    const response = await api.post("service/ott", ottTestAtom, {
      headers: {
        Authorization: `Token ${KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

// 영화 추천 서비스 api
export const getContentsRecommended = selector({
  key: "getContentsRecommended",
  get: async () => {
    try {
      const response = await api.get("service/content", {
        headers: {
          Authorization: `Token ${KEY}`,
        },
      });
      return response.data.results;
    } catch (error) {
      return false;
    }
  },
});
