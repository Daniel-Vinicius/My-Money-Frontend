import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../dashboard/dashboard";
// import Dashboard2 from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";
import Error from "../common/404/404";
export default props => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/BillingCycles' component={BillingCycle} />
      <Route path='/404' component={Error} />
      <Redirect from='*' to='/404' />
    </Switch>
  </div>
);
