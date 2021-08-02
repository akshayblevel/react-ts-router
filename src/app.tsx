import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from './constant/routeUrlConstant';
import { login } from './pages/login/login';
import { home } from './pages/home/home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={ROUTER_URL_CONSTANT.LOGIN} />}
          />
          <Route path={ROUTER_URL_CONSTANT.LOGIN} component={login} />
          <Route path={ROUTER_URL_CONSTANT.HOME} component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
