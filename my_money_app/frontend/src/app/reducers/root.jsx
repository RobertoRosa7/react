import { combineReducers } from "redux"
import dashboard from "./dashboard"
import tabReducer from "./tab-reducer"
import billingCyclesList from "./billing-cycles-reducers"
import { reducer as formReducers } from 'redux-form'
import { reducer as toastrReducers } from 'react-redux-toastr'

const root = combineReducers({
  dashboard,
  tab: tabReducer,
  billing_cycles: billingCyclesList,
  form: formReducers,
  toastr: toastrReducers
})

export default root
