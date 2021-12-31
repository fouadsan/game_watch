import {
  SET_GAMES_LOADING,
  SET_GAMES_SUCCESS,
  SET_GAMES_ERROR,
} from "../actions/games";

const initialState = {
  games_loading: false,
  games_error: {
    is_occured: false,
    msg: "",
  },
  games: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES_LOADING:
      return { ...state, games_loading: true };

    case SET_GAMES_ERROR:
      return {
        ...state,
        games_error: { is_occured: true, msg: action.error_msg },
        games_loading: false,
      };

    case SET_GAMES_SUCCESS:
      return { ...state, games: action.games, games_loading: false };
      console.log(games);
  }
  return state;
};
