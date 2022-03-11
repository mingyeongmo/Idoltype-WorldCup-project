import { ROUND_OF_16, ROUND_OF_8, ROUND_OF_4 } from "./types";
import {
  Choice_ROUND_OF_16,
  Choice_ROUND_OF_8,
  Choice_ROUND_OF_4,
} from "./actions";

export type roundAction =
  | ReturnType<typeof Choice_ROUND_OF_16>
  | ReturnType<typeof Choice_ROUND_OF_8>
  | ReturnType<typeof Choice_ROUND_OF_4>;

const initialState: roundState = {
  round: 8,
};

export type roundState = Readonly<{
  round: number;
}>;

const roundReducer = (state: roundState = initialState, action: any) => {
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

export default roundReducer;
