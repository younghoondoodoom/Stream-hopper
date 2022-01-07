import { atom } from "recoil";
// ott추천 서비스 조사 문항
export const ottTestAtom = atom({
  key: "ottTestAtom",
  default: {
    gender: "",
    age: "",
    first: "",
    second: "",
    third: "",
    member_number: "1",
    member_adult_count: "0",
    member_child_count: "0",
    pixel: "",
    price_range: "4000",
    genre: "",
    prefer_contents: [],
  },
});

// 페이지 num
export const pageAtom = atom({
  key: "pageAtom",
  default: 1,
});

// genre list
export const genre = [
  "Drama",
  "Comedy",
  "Show",
  "Action",
  "Adventure",
  "International",
  "Family",
  "Animation",
  "Horror",
  "Romance",
  "Thriller",
  "Fantasy",
  "Crime",
  "Kid",
  "Nature",
  "Reality",
  "ScienceFiction",
  "Arts",
  "Suspense",
  "Independent",
  "Documentary",
];
