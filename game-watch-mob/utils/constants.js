import { Genre, Game } from "./models";

const colors = {
  primary: "#bb2525",
  blackOpacity: "rgba(0, 0, 0, 0.3)",
  whiteOpacity: "rgba(255, 255, 255, 0.3)",
  background: "#222",
  drawer: "#444444",
  text: "#fff",
};

const GENRES = [
  new Genre(1, "horror"),
  new Genre(2, "puzzle"),
  new Genre(3, "adventure"),
  new Genre(4, "shooter"),
];

const GAMES = [
  new Game(1, 1, "resident evil", "../assets/images/image1.jpg", true),
  new Game(
    2,
    2,
    "prince of persia",
    require("../assets/images/image2.jpg"),
    false
  ),
  new Game(3, 1, "silent hill", "../assets/images/image3.jpg", false),
  new Game(4, 4, "gears of war", "../assets/images/image4.jpg", true),
];

export { colors, GENRES, GAMES };
