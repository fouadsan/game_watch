import axios from "../../utils/axios";

export const authActions = {
  SET_REGISTER_LOADING: "SET_REGISTER_LOADING",
  SET_REGISTER_SUCCESS: "SET_REGISTER_SUCCESS",
  SET_REGISTER_ERROR: "SET_REGISTER_ERROR",

  SET_LOGIN_LOADING: "SET_LOGIN_LOADING",
  SET_LOGIN_SUCCESS: "SET_LOGIN_SUCCESS",
  SET_LOGIN_ERROR: "SET_LOGIN_ERROR",
};

export const signup = (email, username, password) => {
  const newUserData = { email, username, password };
  return async (dispatch) => {
    try {
      dispatch({ type: authActions.SET_REGISTER_LOADING });

      const response = await axios.post("users/create/", newUserData);
      if (response.status !== 201) {
        dispatch({
          type: authActions.SET_REGISTER_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: authActions.SET_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // error.response.status;
      dispatch({
        type: authActions.SET_REGISTER_ERROR,
        error_msg: "network error",
      });
      console.log(error);
    }
  };
};

export const login = (email, password) => {
  const UserData = { email, password };
  return async (dispatch) => {
    try {
      dispatch({ type: authActions.SET_LOGIN_LOADING });

      const response = await axios.post("token/", UserData);
      if (response.status !== 200) {
        dispatch({
          type: authActions.SET_LOGIN_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: authActions.SET_LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // error.response.status;
      dispatch({
        type: authActions.SET_LOGIN_ERROR,
        error_msg: "network error",
      });
      console.log(error);
    }
  };
};
