import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Home from './containers/Home';

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} props={childProps} />
      <Route path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes;
