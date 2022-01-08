import { api } from "./instance";
import { atom, selector } from "recoil";

// 검색값
export const queryAtom = atom({
  key: "queryAtom",
  default: "",
});

// 검색 필터(제목,배우, 감독 등)
export const searchFilter = atom({
  key: "searchFilter",
  default: "all",
});

//검색값 페이지네이션 url
export const pageUrl = atom({
  key: "pageUrl",
  default: null,
});

// 검색함수 (search filter)
export const searchProgram = selector({
  key: "searchProgram",

  get: async ({ get }) => {
    const filter = get(searchFilter);
    const query = get(queryAtom);
    const page = get(pageUrl);

    let requestUrl = null;

    if (page !== null) {
      const response = await api.get(page);
      return response.data;
    }

    if (filter === "all") {
      requestUrl = `/entertainment/content/search/?title=${query}&actor=${query}&director=${query}`;
    }

    if (filter === "title") {
      requestUrl = `/entertainment/content/search/?title=${query}`;
    }

    if (filter === "actor") {
      requestUrl = `/entertainment/content/search/?actor=${query}`;
    }

    if (filter === "director") {
      requestUrl = `/entertainment/content/search/?director=${query}`;
    }

    if (requestUrl !== null) {
      const { data } = await api.get(requestUrl);
      return data;
    }
  },
});

// TOP Rated Movie 요청
export const topMovies = selector({
  key: "topMovies",
  get: async () => {
    try {
      const res = await api.get(`entertainment/content/list`);
      return res.data.results;
    } catch (e) {
      return false;
    }
  },
});
