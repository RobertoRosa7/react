import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";

import App from "./main/app";
import TodoStore from "./store/todo.store";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise)(createStore)(TodoStore, devTools);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
