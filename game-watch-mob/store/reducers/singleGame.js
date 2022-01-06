import {
  SET_GAME_LOADING,
  SET_GAME_SUCCESS,
  SET_GAME_ERROR,
} from "../actions/singleGame";

const initialState = {
  game_loading: false,
  game_error: {
    is_occured: false,
    msg: "",
  },
  game: {},
};

export const singleGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_LOADING:
      return { ...state, game_loading: true };

    case SET_GAME_ERROR:
      return {
        ...state,
        game_error: { is_occured: true, msg: action.error_msg },
        game_loading: false,
      };

    case SET_GAME_SUCCESS:
      return { ...state, game: action.game, game_loading: false };
  }
  return state;
};
