import { combineReducers } from "redux";
import TodoReducers from "../reducers/todo.reducers";

const rootReducers = combineReducers({
  todo: TodoReducers,
});

export default rootReducers;
