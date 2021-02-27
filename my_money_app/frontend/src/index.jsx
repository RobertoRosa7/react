import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reduxPromise from "redux-promise"
import App from "./app/app"
import rootReducers from "./app/reducers/root"
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, reduxPromise)(createStore)(rootReducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
