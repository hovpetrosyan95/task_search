import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import Search from "./screens/Search";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Search />
  </Provider>,
  document.getElementById("container")
);
