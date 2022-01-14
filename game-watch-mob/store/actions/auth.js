import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../utils/axios";

export const authActions = {
  SET_REGISTER_LOADING: "SET_REGISTER_LOADING",
  SET_REGISTER_SUCCESS: "SET_REGISTER_SUCCESS",
  SET_REGISTER_ERROR: "SET_REGISTER_ERROR",

  SET_LOGIN_LOADING: "SET_LOGIN_LOADING",
  SET_LOGIN_SUCCESS: "SET_LOGIN_SUCCESS",
  SET_LOGIN_ERROR: "SET_LOGIN_ERROR",

  AUTHENTICATE: "AUTHENTICATE",
  LOGOUT: "LOGOUT",
  SET_DID_TRY_AL: "SET_DID_TRY_AL",
};

let timer;

export const setDidTryAL = () => {
  return { type: authActions.SET_DID_TRY_AL };
};

export const authenticate = (accessToken, refreshToken, lifeTime) => {
  return (dispatch) => {
    dispatch(setLogoutTimer(refreshToken, lifeTime));
    dispatch({
      type: authActions.AUTHENTICATE,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };
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
    fetchAuthData("token/", UserData, dispatch);
  };
};

export const logout = () => {
  clearLogoutTimer();
  // AsyncStorage.removeItem("userData");
  return { type: authActions.LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = (refreshToken, expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(reconnect(refreshToken));
    }, expirationTime);
  };
};

export const reconnect = (refresh) => {
  const refreshToken = { refresh };
  return async (dispatch) => {
    await fetchAuthData("token/refresh/", refreshToken, dispatch);
  };
};

const fetchAuthData = async (url, data, dispatch) => {
  const authData = data;
  try {
    dispatch({ type: authActions.SET_LOGIN_LOADING });

    const response = await axios.post(url, authData);
    if (response.status !== 200) {
      dispatch({
        type: authActions.SET_LOGIN_ERROR,
        error_msg: "somthing went wrong!",
      });
      throw new Error("Something went wrong!");
    }

    const data = await response.data;

    dispatch(authenticate(data.access, data.refresh, 60000));
    const expirationDate = new Date(new Date().getTime() + 60000 * 1000);

    saveDataToStorage(data.access, data.refresh, expirationDate);
  } catch (error) {
    // error.response.status;
    dispatch({
      type: authActions.SET_LOGIN_ERROR,
      error_msg: "network error",
    });
    console.log(error);
  }
};

const saveDataToStorage = (accessToken, refreshToken, expirationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiryDate: expirationDate.toISOString(),
    })
  );
};
