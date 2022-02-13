import { combineReducers } from "redux";
import roundReducer from "./round/reducer";

const rootReducer = combineReducers({
  rounds: roundReducer,
});

export default rootReducer;
