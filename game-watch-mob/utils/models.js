class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Game {
  constructor(id, genre, name, poster, releaseData, isReleased, isPopular) {
    this.id = id;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.releaseData = releaseData;
    this.isReleased = isReleased;
    this.isPopular = isPopular;
  }
}

class GameDetail {
  constructor(
    id,
    users,
    genre,
    name,
    poster,
    platforms,
    releaseDate,
    isReleased,
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
    this.users = users;
    this.genre = genre;
    this.name = name;
    this.poster = poster;
    this.platforms = platforms;
    this.releaseDate = releaseDate;
    this.isReleased = isReleased;
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
