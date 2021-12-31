import { api } from "./instance";
import { selector, selectorFamily } from "recoil";

export const searchProgram = selectorFamily({
  key: "searchProgram",
  get: async (query) => {
    if (!query) return "...";
    // useRecoilCallback();
    const response = api.get(`/entertainment/content/search/?title=${query}`);
    const res = response.data;
    return res;
  },
});

//useRecoilCallback 사용해봐라
// TOP Rated 요청
export const topMovies = selector({
  key: "topMovies",
  get: async () => {
    try {
      const res = await api.get(`entertainment/content/list`);
      return res.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
});
