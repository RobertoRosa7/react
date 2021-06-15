import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import multi from 'redux-multi'
import reduxPromise from "redux-promise"
import thunk from 'redux-thunk'
import rootReducers from "./app/reducers/root"
import Routes from './app/routes/route'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, reduxPromise)(createStore)(rootReducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Routes />
  </Provider>,
  document.getElementById("app")
)
