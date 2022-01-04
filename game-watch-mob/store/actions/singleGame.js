import axios from "../../utils/axios";

export const SET_GAME_LOADING = "SET_GAME_LOADING";
export const SET_GAME_SUCCESS = "SET_GAME_SUCCESS";
export const SET_GAME_ERROR = "SET_GAME_ERROR";

export const fetchGames = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_GAME_LOADING,
      });
      const response = await axios.get(`games/${id}`);
      if (response.status !== 200) {
        dispatch({
          type: SET_GAME_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      const loadedGame = new Game(
        data.id,
        data.genre,
        data.name,
        data.poster,
        data.platform,
        data.release_date,
        data.is_cracked,
        data.is_popular,
        data.image,
        data.description,
        data.rating,
        data.developer,
        data.publisher
      );

      dispatch({
        type: SET_GAME_SUCCESS,
        games: loadedGame,
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
