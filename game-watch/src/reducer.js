import {
  GET_POSTERS_BEGIN,
  GET_POSTERS_SUCCESS,
  GET_POSTERS_ERROR,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_POSTERS_BEGIN:
      return { ...state, posters_loading: true };

    case GET_POSTERS_SUCCESS:
      return { ...state, posters_loading: false, posters: action.payload };

    case GET_POSTERS_ERROR:
      return { ...state, posters_loading: false, posters_error: true };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
