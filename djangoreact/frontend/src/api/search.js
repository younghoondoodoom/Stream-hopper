import { api } from "./instance";
import { atom, selector, selectorFamily, useRecoilValueLoadable } from "recoil";

export const queryAtom = atom({
  key: "queryAtom",
  default: "",
});

export const searchFilter = atom({
  key: "searchFilter",
  default: "all",
});

export const pageUrl = atom({
  key: "pageUrl",
  default: null,
});

export const searchProgram = selector({
  key: "searchProgram",

  get: async ({ get }) => {
    const filter = get(searchFilter);
    const query = get(queryAtom);
    const page = get(pageUrl);

    if (filter === "all") {
      if (page !== null) {
        const response = await api.get(page);
        const res = response.data;
        return res;
      } else {
        const response = await api.get(
          `/entertainment/content/search/?title=${query}&actor=${query}&director=${query}`
        );
        const res = await response.data;
        return res;
      }
    } else if (filter === "title") {
      const response = await api.get(
        `/entertainment/content/search/?title=${query}`
      );
      const res = await response.data;
      return res;
    } else if (filter === "actor") {
      const response = await api.get(
        `/entertainment/content/search/?actor=${query}`
      );
      const res = await response.data;
      return res;
    } else {
      const response = await api.get(
        `/entertainment/content/search/?director=${query}`
      );
      const res = await response.data;
      return res;
    }
  },
});

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
