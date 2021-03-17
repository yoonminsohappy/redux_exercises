import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Route.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
