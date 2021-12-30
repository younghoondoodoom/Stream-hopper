import { axios, axiosAuth } from "./instance";
import { selector } from "recoil";

//로그인을 확인하는 API
export const validLogin = selector({
  key: 'validLogin',
  get: async () => {
    try {
      const response = await axiosAuth.get("/review/")
      return response
    } catch(e) {
      console.log(e)
      return false
    }
  }
});

// 로그인 요청 API
export const signIn = async (login) => {
    // login 정보를 서버로 post 후 에러처리
   try {
    const key = await axios.post("users/auth/login/", login)
    const data = key.data["key"]

    //성공하면 localStorage에 토큰을 담음.
    localStorage.setItem("key", data)

    window.location.replace("/main")
   } catch (error) {
    // 에러처리
    const errorList = error.response.data
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
}; 


// 로그아웃 요청 API
export const logout = async (login) => {
  // login 정보를 서버로 post 후 에러처리
 try {
  await axios.post("users/auth/logout/")
  //localStorage에 지움.
  localStorage.removeItem("key")
  // 홈페이지로 이동
  window.location.replace("/")
 } catch (error) {
  // 에러처리
  console.log(error)
}
}; 


//회원가입 요청 API
export const signUp = async(register) => {
  try {
    const res = await axios.post("users/auth/register", register)
    console.log(res)
    alert("회원가입에 성공하였습니다.")
    window.location.replace("/login")
  } catch (error) {
    // error 발생 시 서버에서 넘겨준 error 메시지 출력
    const errorList = error.response.data
    for (const [key, value] of Object.entries(errorList)) {
      alert(`${key} : ${value}`);
    }
  }
}
