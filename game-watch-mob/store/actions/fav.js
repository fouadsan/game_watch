import axios from "../../utils/axios";
import { Game } from "../../utils/models";

export const SET_FAV_LOADING = "SET_FAV_LOADING";
export const SET_FAV_SUCCESS = "SET_FAV_SUCCESS";
export const SET_FAV_ERROR = "SET_FAV_ERROR";

export const setFavorite = (userId) => {
  let url = "games/";
  if (userId) {
    url = `games?users=${userId}/`;
  }

  return async (dispatch) => {
    try {
      dispatch({
        type: SET_FAV_LOADING,
      });
      const response = await axios.get(url);
      if (response.status !== 200) {
        dispatch({
          type: SET_FAV_ERROR,
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
            game.is_popular
          )
        );
      });

      dispatch({
        type: SET_FAV_SUCCESS,
        games: loadedGames,
      });
    } catch (error) {
      dispatch({
        type: SET_FAV_ERROR,
        error_msg: "network error",
      });
    }
  };
};
