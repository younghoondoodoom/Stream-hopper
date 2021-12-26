import { atom, selector } from "recoil";

// 회원가입 post 양식
export const registerState = atom({
  key: 'registerState',
  default: {
    "email" : "",
    "username" : "",
    "password1" : "",
    "password2" : "",
    "sex" : "",
    "age" : ""
  }
});

// 로그인 post 양식
export const loginState = atom({
  key: 'loginState',
  default: {
    "email" : "",
    "password" : ""
  }
});


// // 로그아웃
// export const logOutAtom = atom({
//   key: 'logout',
//   default: localStorage.removeItem()
// });



export const registerSelector = selector({
  key : 'registerSelector',
  get: ({ get }) => {
    const res = get(registerState);
    return console.log(res)
  }
});




