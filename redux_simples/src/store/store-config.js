import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    console.log("numbers: ", state, " ", action);
    return {
      min: 1,
      max: 10,
    };
  },
  names: function (state, action) {
    console.log("names: ", state, " ", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
