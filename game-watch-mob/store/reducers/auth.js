import {
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_AUTH_ERROR,
} from "../actions/auth";

const initialState = {
  auth_loading: false,
  auth_error: {
    is_occured: false,
    msg: "",
  },
  access_token: null,
  refresh_token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return { ...state, auth_loading: true };

    case SET_AUTH_ERROR:
      return {
        ...state,
        auth_error: { is_occured: true, msg: action.error_msg },
        auth_loading: false,
      };

    case SET_AUTH_SUCCESS:
      return {
        ...state,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
        auth_loading: false,
      };
    default:
      return state;
  }
};
