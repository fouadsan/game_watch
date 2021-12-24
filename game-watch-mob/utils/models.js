class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(id, genreId, name, poster, is_cracked) {
    this.id = id;
    this.genreId = genreId;
    this.name = name;
    this.poster = poster;
    this.is_cracked = is_cracked;
  }
}

export { Genre, Game };
