import axios from "axios";

import { Genre } from "../../utils/models";

export const SET_GENRES_LOADING = "SET_GENRES_LOADING";
export const SET_GENRES_SUCCESS = "SET_GENRES_SUCCESS";
export const SET_GENRES_ERROR = "SET_GENRES_ERROR";

export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_GENRES_LOADING,
      });
      const response = await fetch(
        "https://8024-105-103-48-219.ngrok.io/api/games/genres/"
      );

      if (!response.ok) {
        dispatch({
          type: SET_GENRES_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedGenres = [];

      for (const key in data) {
        loadedGenres.push(new Genre(key, data[key].name));
      }

      dispatch({
        type: SET_GENRES_SUCCESS,
        genres: loadedGenres,
      });
    } catch (error) {
      dispatch({
        type: SET_GENRES_ERROR,
        error_msg: "network error",
      });
      console.log(error);
    }
  };
};
