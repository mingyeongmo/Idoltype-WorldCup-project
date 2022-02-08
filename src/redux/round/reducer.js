import { ROUND_OF_16, ROUND_OF_8, ROUND_OF_4 } from "./types";

const initialState = {
  round: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUND_OF_16:
      return {
        ...state,
        round: 16,
      };
    case ROUND_OF_8:
      return {
        ...state,
        round: 8,
      };
    case ROUND_OF_4:
      return {
        ...state,
        round: 4,
      };
    default:
      return state;
  }
};

export default reducer;
