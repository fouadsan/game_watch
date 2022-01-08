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
    description,
    rating,
    developer,
    publisher,
    gameModes,
    gameEngines,
    playerPerspective,
    themes,
    storyline,
    screenshots,
    artworks
  ) {
    this.id = id;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.platform = platform;
    this.releaseData = releaseData;
    this.isCracked = isCracked;
    this.description = description;
    this.rating = rating;
    this.developer = developer;
    this.publisher = publisher;
    this.gameModes = gameModes;
    this.gameEngines = gameEngines;
    this.playerPerspective = playerPerspective;
    this.themes = themes;
    this.storyline = storyline;
    this.screenshots = screenshots;
    this.artworks = artworks;
  }
}

export { Genre, Game, GameDetail };
