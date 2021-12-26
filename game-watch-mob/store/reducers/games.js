import { SET_GAMES } from "../actions/games";

const initialState = {
  games: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return { games: ["salam"] };
  }
  return state;
};
