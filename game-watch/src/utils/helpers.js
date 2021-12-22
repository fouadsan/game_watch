import { Image } from "./models";

export const getPosters = () => {
  let posters = [];

  for (let idx = 1; idx <= 297; idx++) {
    const url = process.env.PUBLIC_URL + `posters/image${idx}.jpg`;
    const image = new Image(idx, url, "game poster");
    console.log(image);
    posters.push(image);
  }
  return posters;
};
