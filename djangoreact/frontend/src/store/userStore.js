import { atom } from "recoil";

// 회원가입 post 양식
export const registerState = atom({
  key: "registerState",
  default: {
    email: "",
    username: "",
    password1: "",
    password2: "",
  },
});

// 로그인 post 양식
export const loginState = atom({
  key: "loginState",
  default: {
    email: "",
    password: "",
  },
});
