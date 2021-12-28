import { axios } from "./instance";

//프로그램 검색
export const searchProgram = async(str) => {
  try {
    const res = await axios.get(`entertainment/movie/?search=${str}`)
    console.log(res)
  } catch (error) {
    // error 발생 시 서버에서 넘겨준 error 메시지 출력
    const errorList = error.response.data
    // for (const [key, value] of Object.entries(errorList)) {
    //   alert(`${key} : ${value}`);
    // }
  }
}

// TOP Rated 요청

export const topMovies = async() => {
  try {
    const res = await axios.get(`entertainment/movie/list`)
    console.log(res)
  } catch (error) {
    // error 발생 시 서버에서 넘겨준 error 메시지 출력
    const errorList = error.response.data
    // for (const [key, value] of Object.entries(errorList)) {
    //   alert(`${key} : ${value}`);
    // }
  }
}