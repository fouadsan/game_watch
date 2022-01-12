import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../utils/axios";

export const SET_AUTH_LOADING = "SET_AUTH_LOADING";
export const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export const authenticate = (accessToken, refreshToken) => {
  console.log(accessToken);
  return (dispatch) => {
    dispatch({
      type: SET_AUTH_SUCCESS,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_AUTH_LOADING,
      });

      const response = await axios.post("token/", {
        email: email,
        password: password,
      });

      if (response.status !== 200) {
        dispatch({
          type: SET_AUTH_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;
      dispatch(authenticate(data.access, data.refresh)),
        saveDataToStorage(data.access, data.refresh);
    } catch (error) {
      let msg = "network error";
      if (error.response.status === 401) {
        msg = "email or password false";
      }
      console.log(error.response.status);
      dispatch({
        type: SET_AUTH_ERROR,
        error_msg: msg,
      });
    }
    // await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwgME943HeTkyX9QJak260PNbYZfQI58Q",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );

    // if (!response.ok) {
    //   const errorResData = await response.json();
    //   const errorId = errorResData.error.message;
    //   let message = "Something went wrong!";
    //   if (errorId === "EMAIL_NOT_FOUND") {
    //     message = "This email could not be found!";
    //   } else if (errorId === "INVALID_PASSWORD") {
    //     message = "This password is not valid!";
    //   }
    //   throw new Error(message);
    // }

    // const resData = await response.json();
    // console.log(resData);
    // dispatch(
    //   authenticate(
    //     resData.localId,
    //     resData.idToken,
    //     parseInt(resData.expiresIn) * 1000
    //   )
    // );
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const signup = (email, username, password) => {
  return async (dispatch) => {
    const response = await axios.post("users/create/", {
      email: email,
      username: username,
      password: password,
    });
    console.log(response);
    dispatch({
      type: RESP,
      payload: response,
    });
    // await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwgME943HeTkyX9QJak260PNbYZfQI58Q",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );

    // if (!response.ok) {
    //   const errorResData = await response.json();
    //   const errorId = errorResData.error.message;
    //   let message = "Something went wrong!";
    //   if (errorId === "EMAIL_NOT_FOUND") {
    //     message = "This email could not be found!";
    //   } else if (errorId === "INVALID_PASSWORD") {
    //     message = "This password is not valid!";
    //   }
    //   throw new Error(message);
    // }

    // const resData = await response.json();
    // console.log(resData);
    // dispatch(
    //   authenticate(
    //     resData.localId,
    //     resData.idToken,
    //     parseInt(resData.expiresIn) * 1000
    //   )
    // );
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

const saveDataToStorage = (accessToken, refreshToken) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    })
  );
};
