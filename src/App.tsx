import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, HashRouter, Redirect } from 'react-router-dom';
import './App.css';

import { URLS } from './_config';

import requireNoAuth from './_common/hoc/reqNoAuth'
import requireAuth from './_common/hoc/reqAuth'

import Dashboard from './containers/dashboard'
import Login from './containers/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={URLS.HOME} component={() => (
          <Redirect to={URLS.USER.HOME}/>
        )} />
        <Route exact path={URLS.USER.HOME} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
