import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import App from "./main/app";
import TodoStore from "./store/todo.store";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const store = applyMiddleware(thunk, multi, promise)(createStore)(
  TodoStore,
  devTools
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);

// middleware multi para retornar dentro de uma action um array com mais de uma action
// assim sempre que houver qualquer evento alterando seu valor será chamado as demais actions

// middleware promise para resolver uma promise dentro de uma action

// middleware thunk para resolver a questão do middleware multi porque não espera resolver
// cada promise, é disparado todas de uma vez
