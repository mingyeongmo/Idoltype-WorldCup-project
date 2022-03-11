import { combineReducers } from "redux";
// import { roundState } from "./round/reducer";
// import { roundReducer } from "./round/reducer";
import roundReducer from "./round/reducer";

// export interface RootState {
//   round: roundState;
// }

// const rootReducer = combineReducers<RootState>({
//   round: roundReducer,
// });

const rootReducer = combineReducers({
  rounds: roundReducer,
});

export default rootReducer;
