import {
  SET_GENRES_LOADING,
  SET_GENRES_SUCCESS,
  SET_GENRES_ERROR,
} from "../actions/genres";

const initialState = {
  genres_loading: false,
  genres_error: {
    is_occured: false,
    msg: "",
  },
  genres: [],
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES_LOADING:
      return { ...state, genres_loading: true };

    case SET_GENRES_ERROR:
      return {
        ...state,
        genres_error: { is_occured: true, msg: action.error_msg },
        genres_loading: false,
      };

    case SET_GENRES_SUCCESS:
      return { ...state, genres: action.genres, genres_loading: false };
  }
  return state;
};
