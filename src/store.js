import { createStore } from "redux";
import mainReducer from "./reducers";

function configureStore() {
  return createStore(mainReducer);
}

export default configureStore;
