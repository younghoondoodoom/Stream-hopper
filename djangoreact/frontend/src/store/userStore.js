import { atom, selector } from "recoil";

export const registerState = atom({
  key: 'registerState',
  default: {
    "user_email" : "",
    "user_name" : "",
    "password" : "",
    "sex" : "",
    "age" : ""
  }
});

export const registerSelector = selector({
  key : 'registerSelector',
  get: ({ get }) => {
    const res = get(registerState);
    return console.log(res)
  }
});