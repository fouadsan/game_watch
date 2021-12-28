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
        "https://8024-105-103-48-219.ngrok.io/api/games/"
      );

      if (!response.ok) {
        dispatch({
          type: SET_GAMES_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      const loadedGames = [];

      for (const key in data.results) {
        loadedGames.push(
          new Game(
            key,
            data.results[key].name,
            data.results[key].genre,
            data.results[key].poster,
            data.results[key].platform,
            data.results[key].release_date,
            data.results[key].is_cracked
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
