class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(genre, id, isCracked, name, poster) {
    this.genre = genre;
    this.id = id;

    this.isCracked = isCracked;
    this.name = name;
    this.poster = poster;
  }
}

export { Genre, Game };
