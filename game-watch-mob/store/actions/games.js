import axios from "axios";

import { Game } from "../../utils/models";

export const SET_GAMES = "SET_GAMES";

export const fetchGames = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://c102-154-247-92-176.ngrok.io/api/games/"
    );
    const data = await response.json();
    console.log(data);
    dispatch({
      type: SET_GAMES,
    });
  };
};
