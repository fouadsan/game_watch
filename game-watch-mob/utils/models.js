class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(id, genreId, name, poster, isCracked) {
    this.id = id;
    this.genreId = genreId;
    this.name = name;
    this.poster = poster;
    this.isCracked = isCracked;
  }
}

export { Genre, Game };
