import { atom } from "recoil";

export const ottTestAtom = atom({
  key: "ottTestAtom",
  default: {
    sex: "",
    age: "",
    adult: 0,
    teen: 0,
    child: 0,
    quality: "",
    price: "",
    genre: "",
    contents: "",
  },
});
