import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App, Whoops404 } from './components';
import AllIngredients from './components/containers/AllIngredients';
import Dashboard from './components/containers/Dashboard';

const routes = (
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='ingredients' component={AllIngredients}/>
    <Route path='*' component={Whoops404} />
  </Route>
</Router>
);

export default routes;
