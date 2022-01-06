import axios from "../../utils/axios";
import { GameDetail } from "../../utils/models";

export const SET_GAME_LOADING = "SET_GAME_LOADING";
export const SET_GAME_SUCCESS = "SET_GAME_SUCCESS";
export const SET_GAME_ERROR = "SET_GAME_ERROR";

export const fetchGame = (gameId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_GAME_LOADING,
      });
      const response = await axios.get(`games/${gameId}/`);
      if (response.status !== 200) {
        dispatch({
          type: SET_GAME_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      const loadedGame = new GameDetail(
        data.id,
        data.genre,
        data.name,
        data.poster,
        data.platform,
        data.release_date,
        data.is_cracked,
        data.image,
        data.description,
        data.rating,
        data.developer,
        data.publisher
      );

      dispatch({
        type: SET_GAME_SUCCESS,
        game: loadedGame,
      });
    } catch (error) {
      dispatch({
        type: SET_GAME_ERROR,
        error_msg: "network error",
      });
      console.log(error);
    }
  };
};
