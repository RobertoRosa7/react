import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./main/app";
import TodoStore from "./store/todo.store";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(TodoStore, devTools);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
