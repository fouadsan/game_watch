class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(id, genre, name, poster, platform, releaseData, isCracked) {
    this.id = id;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.platform = platform;
    this.releaseData = releaseData;
    this.isCracked = isCracked;
  }
}

export { Genre, Game };
