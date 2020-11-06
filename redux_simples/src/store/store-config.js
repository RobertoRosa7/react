import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case "MIN_NUMBER_CHANGED":
        return {
          ...state,
          min: action.payload,
        };
      case "MAX_NUMBER_CHANGED":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 7,
          max: 35,
        };
    }
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
