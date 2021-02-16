import { combineReducers } from "redux";
import dashboard from "./dashboard";
import tabReducer from "./tab-reducer";

const root = combineReducers({
  dashboard,
  tab: tabReducer,
});

export default root;
