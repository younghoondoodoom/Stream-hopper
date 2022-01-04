import { atom } from "recoil";

// 모달을 띄울 index값
export const topMovieIdx = atom({
  key: "topMovieIdx",
  default: 0,
});

export const movieIdx = atom({
  key: "movieIdx",
  default: 0,
});
