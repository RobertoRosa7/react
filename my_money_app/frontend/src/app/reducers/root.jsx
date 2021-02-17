import { combineReducers } from "redux";
import dashboard from "./dashboard";
import tabReducer from "./tab-reducer";
import billingCyclesList from "./billing-cycles-reducers";

const root = combineReducers({
  dashboard,
  tab: tabReducer,
  billing_cycles: billingCyclesList,
});

export default root;
