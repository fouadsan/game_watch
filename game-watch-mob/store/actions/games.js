import axios from "axios";

export const SET_GAMES = "SET_GAMES";

export const fetchGames = async (dispatch, getState) => {
  try {
    const response = await axios.get("http://127.0.0.1/api/games/");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    console.log(response);
    dispatch({
      type: SET_GAMES,
    });
  } catch (error) {
    throw error;
  }
};
