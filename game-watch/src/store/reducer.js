import { IMAGES } from "../utils/constants";
import { TEST } from "./actions";

const initialState = {
  images: IMAGES,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return { images: action.payload.images };
    default:
      return state;
  }
}

export default reducer;
