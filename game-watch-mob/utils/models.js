class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(
    id,
    genre,
    name,
    poster,
    platform,
    releaseData,
    isCracked,
    isPopular
  ) {
    this.id = id;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.platform = platform;
    this.releaseData = releaseData;
    this.isCracked = isCracked;
    this.isPopular = isPopular;
  }
}

class GameDetail {
  constructor(
    id,
    genre,
    name,
    poster,
    platform,
    releaseData,
    isCracked,
    image,
    description,
    rating,
    developer,
    publisher
  ) {
    this.id = id;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.platform = platform;
    this.releaseData = releaseData;
    this.isCracked = isCracked;
    this.image = image;
    this.description = description;
    this.rating = rating;
    this.developer = developer;
    this.publisher = publisher;
  }
}

export { Genre, Game, GameDetail };
