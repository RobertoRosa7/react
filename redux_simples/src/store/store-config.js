import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    return {
      min: 7,
      max: 35,
    };
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
