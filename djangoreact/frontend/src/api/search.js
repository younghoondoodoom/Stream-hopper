import { axios } from "./instance";
import { selector, selectorFamily } from "recoil";


//프로그램 검색
// export const searchProgram = selectorFamily({
//   key: 'searchProgram',
//   get: async (str) => {
//     try {
//       const res = await axios.get(`entertainment/movie/?search=${str}`)
//       return res.data
//     } catch(e) {
//       console.log(e)
//       return false
//     }
//   }
// });

export const searchProgram = selectorFamily({
  key: 'searchProgram',
  get: (str) => async () => {
    if (!str) return '...';
    const response = await axios.get(`entertainment/movie/?search=${str}`);
    const res = await response.data;
    return res;
  }
});

// TOP Rated 요청
export const topMovies = selector({
  key: 'topMovies',
  get: async () => {
    try {
      const res = await axios.get(`entertainment/movie/list`)
      return res.data
    } catch(e) {
      console.log(e)
      return false
    }
  }
});

