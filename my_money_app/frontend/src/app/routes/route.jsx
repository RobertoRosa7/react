import React from "react";

import { Router, Route, Redirect, hashHistory } from "react-router";
import Dashboard from "../pages/dashboard/dashboard";
import BillingCycles from "../pages/billing-cycle/billing-cycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/billing-cycles" component={BillingCycles} />
    <Redirect from="*" to="/" />
  </Router>
);
