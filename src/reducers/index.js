import { combineReducers } from "redux";
import prompt from "./prompt";
import tournament from "./tournament";

const mainReducer = combineReducers({
  tournament,
  prompt
});

export default mainReducer;
