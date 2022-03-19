import axios from "../../utils/axios";

export const SET_FAV_LOADING = "SET_FAV_LOADING";
export const SET_FAV_SUCCESS = "SET_FAV_SUCCESS";
export const SET_FAV_ERROR = "SET_FAV_ERROR";

export const setFavorite = (gameId, token) => {
  const url = `games/${gameId}/`;
  console.log(token);
  return async (dispatch) => {
    try {
      console.log("salam");
      dispatch({
        type: SET_FAV_LOADING,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.patch(url);
      if (response.status !== 200) {
        dispatch({
          type: SET_FAV_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: SET_FAV_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SET_FAV_ERROR,
        error_msg: "network error",
      });
    }
  };
};
