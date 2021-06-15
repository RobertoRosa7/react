import React from "react";

import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";
import Dashboard from "../pages/dashboard/dashboard";
import BillingCycles from "../pages/billing-cycle/billing-cycle";
import App from '../app'

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="billing-cycles" component={BillingCycles} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
