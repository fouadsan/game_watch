import axios from "../../utils/axios";
import { Game } from "../../utils/models";

export const SET_GAMES_LOADING = "SET_GAMES_LOADING";
export const SET_GAMES_SUCCESS = "SET_GAMES_SUCCESS";
export const SET_GAMES_ERROR = "SET_GAMES_ERROR";

export const fetchGames = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_GAMES_LOADING,
      });
      const response = await axios.get("games/");
      if (response.status !== 200) {
        dispatch({
          type: SET_GAMES_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      const loadedGames = [];

      data.map((game) => {
        loadedGames.push(
          new Game(
            game.id,
            game.genre,
            game.name,
            game.poster,
            game.platform,
            game.release_date,
            game.is_cracked,
            game.is_popular,
            game.image,
            game.description,
            game.rating,
            game.developer,
            game.publisher
          )
        );
      });
      console.log(loadedGames);
      dispatch({
        type: SET_GAMES_SUCCESS,
        games: loadedGames,
      });
    } catch (error) {
      dispatch({
        type: SET_GAMES_ERROR,
        error_msg: "network error",
      });
      console.log(error);
    }
  };
};
