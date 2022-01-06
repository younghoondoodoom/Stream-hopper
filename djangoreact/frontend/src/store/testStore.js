import { atom } from "recoil";

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

export const pageAtom = atom({
  key: "pageAtom",
  default: 1,
});

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
  "Children",
  "Action-Adventure",
  "Suspense",
  "Science",
  "Fiction",
  "Sci-Fi",
  "Independent",
  "Documentary",
];
