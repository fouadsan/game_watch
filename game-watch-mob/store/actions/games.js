import axios from "axios";

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
      const response = await fetch(
        "https://ced8-105-103-180-33.ngrok.io/api/games/"
      );

      if (!response.ok) {
        dispatch({
          type: SET_GAMES_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedGames = [];

      for (const key in data.results) {
        loadedGames.push(
          new Game(
            data.results[key].genre,
            key,
            data.results[key].is_cracked,
            data.results[key].name,
            data.results[key].poster
          )
        );
      }

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
