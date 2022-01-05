import { atom } from "recoil";

export const ottTestAtom = atom({
  key: "ottTestAtom",
  default: {
    gender: "",
    age: "",
    member_number: 0,
    member_adult_count: 0,
    member_teenager_count: 0,
    member_child_count: 0,
    pixel: "",
    price_range: "",
    genre: "",
    prefer_contents: "",
  },
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