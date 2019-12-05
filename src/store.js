import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

function configureStore() {
  const store = createStore(mainReducer, persistedState, applyMiddleware(thunk));
  store.subscribe(() => {
    saveState(store.getState().tournament.tournaments);
  });
  return store;
}

export default configureStore;
