import {
  SET_FAV_LOADING,
  SET_FAV_SUCCESS,
  SET_FAV_ERROR,
} from "../actions/fav";

const initialState = {
  fav_loading: false,
  fav_error: {
    is_occured: false,
    msg: "",
  },
  fav_success: false,
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV_LOADING:
      return { ...state, fav_loading: true };

    case SET_FAV_ERROR:
      return {
        ...state,
        fav_error: { is_occured: true, msg: action.error_msg },
        fav_loading: false,
      };

    case SET_FAV_SUCCESS:
      return { ...state, fav_success: true, fav_loading: false };

    default:
      return state;
  }
};
