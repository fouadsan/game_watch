import React, { useContext, useReducer, useEffect } from "react";

import reducer from "./reducer";
import { posters_url } from "./utils/constants";

import {
  GET_POSTERS_BEGIN,
  GET_POSTERS_SUCCESS,
  GET_POSTERS_ERROR,
} from "./actions";

const initialState = {
  posters_loading: false,
  posters_error: false,
  posters: [],
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPosters = async () => {
    dispatch({ type: GET_POSTERS_BEGIN });
    try {
      const response = await fetch(posters_url);
      const data = await response.json();
      dispatch({ type: GET_POSTERS_SUCCESS, payload: data.results[0] });
    } catch (error) {
      dispatch({ type: GET_POSTERS_ERROR });
    }
  };

  useEffect(() => {
    fetchPosters();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, fetchPosters }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
