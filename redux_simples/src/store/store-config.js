import { createStore, combineReducers } from "redux";
import reduxNumbers from "../reducers/numbers";

const reducers = combineReducers({
  numbers: reduxNumbers,
});

export default function storeConfig() {
  return createStore(reducers);
}
