import { api } from "./instance";
import { atom, selector } from "recoil";
const KEY = localStorage.getItem("key");

const header = api.create({
  headers: {
    Authorization: `Token ${KEY}`,
  },
});

//로그인을 확인하는 API
export const validLogin = selector({
  key: "validLogin",
  get: async () => {
    try {
      const response = await header.get("users/auth/permission");
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
    await api.post("users/auth/register/", register);
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
      const response = await header.get("service/genretoptwo");
      return response.data.results;
    } catch (error) {
      return false;
    }
  },
});

// ott추천 서비스 post 요청
export const postOttData = async (ottTestAtom) => {
  try {
    const response = await header.post("service/ott", ottTestAtom);
    return response.data;
  } catch (error) {
    return false;
  }
};

// 콘텐츠 추천 서비스 api
export const getContentsRecommended = selector({
  key: "getContentsRecommended",
  get: async () => {
    try {
      const response = await header.get("service/content");
      return response.data.results;
    } catch (error) {
      return false;
    }
  },
});

// 콘텐츠 likeList post
export const postLikeList = async (like) => {
  try {
    const response = await header.post("mypage/contents/create", like);
    return response.data;
  } catch (e) {
    return false;
  }
};

//delete id
export const deleteIdAtom = atom({
  key: "deleteIdAtom",
  default: "",
});

// 콘텐츠 like delete
export const deleteLikeList = selector({
  key: "deleteLikeList",
  get: async ({ get }) => {
    const del = get(deleteIdAtom);
    try {
      const response = await header.delete(`mypage/contents/destroy/${del}`);
      return response.data;
    } catch (e) {
      return false;
    }
  },
});

// 마이페이지 contents 요청
export const mypageContents = selector({
  key: "mypageContents",
  get: async ({ get }) => {
    get(deleteIdAtom);
    get(deleteLikeList);
    try {
      const response = await header.get("mypage/contents/list");
      return response.data.results;
    } catch (error) {
      return false;
    }
  },
});

// 마이페이지 ott 요청
export const mypageOtt = selector({
  key: "mypageOtt",
  get: async () => {
    try {
      const response = await api.get("mypage/ott/list", {
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
