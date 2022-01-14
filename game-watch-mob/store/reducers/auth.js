import { authActions } from "../actions/auth";
import axios from "../../utils/axios";

const initialState = {
  auth_loading: false,
  auth_error: {
    is_occured: false,
    msg: "",
  },
  token: {
    access: "",
    refresh: "",
  },
  didTryAutoLogin: false,
  status: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_REGISTER_LOADING:
      return { ...state, auth_loading: true };

    case authActions.SET_REGISTER_ERROR:
      return {
        ...state,
        auth_error: { is_occured: true, msg: action.error_msg },
        status: "",
        auth_loading: false,
      };

    case authActions.SET_REGISTER_SUCCESS:
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${action.payload.access}`;
      return { ...state, status: "registered", auth_loading: false };

    case authActions.SET_LOGIN_LOADING:
      return { ...state, auth_loading: true };

    case authActions.SET_LOGIN_ERROR:
      return {
        ...state,
        auth_error: { is_occured: true, msg: action.error_msg },
        status: "",
        auth_loading: false,
      };

    case authActions.AUTHENTICATE:
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${action.payload.access}`;
      const newTokenState = {
        access: action.accessToken,
        refresh: action.refreshToken,
      };
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${action.accessToken}`;
      return {
        ...state,
        token: newTokenState,
        auth_loading: false,
      };

    case authActions.SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };

    case authActions.LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true,
      };

    default:
      return state;
  }
};
