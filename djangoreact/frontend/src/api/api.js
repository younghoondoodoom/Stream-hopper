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
  // login 정보를 서버로 post 후 에러처리
  try {
    const key = await api.post("users/auth/login/", login);
    const data = key.data["key"];
    //성공하면 localStorage에 토큰을 담음.
    localStorage.setItem("key", data);
  } catch (error) {
    // 에러처리
    const errorList = error.response.data;
    alert(error);
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
};

// 로그아웃 요청 API
export const signOut = async () => {
  // login 정보를 서버로 post 후 에러처리
  try {
    await api.post("users/auth/logout/");
  } catch (error) {
    // 에러처리
    return false;
  }
};

//회원가입 요청 API
export const signUp = async (register) => {
  try {
    const res = await api.post("users/auth/register/", register);
    console.log(res);
    alert("회원가입에 성공하였습니다.");
    // 분리해
    window.location.replace("/login");
  } catch (error) {
    // error 발생 시 서버에서 넘겨준 error 메시지 출력
    const errorList = error.response.data;
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
};

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
