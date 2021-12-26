import { SET_GAMES } from "../actions/games";

const initialState = {
  games: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      console.log("dispatched");
      return { ...state };
  }
  return state;
};
