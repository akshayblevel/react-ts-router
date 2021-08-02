# react-ts-router

routeUrlConstant.ts

```js
export const ROUTER_URL_CONSTANT = {
  MAIN: '/',
  LOGIN: '/login',
  HOME: '/home',
  DASHBOARD: ''
};
```

Home.tsx

```js
import React from 'react';

export function home() {
  return <div>Home</div>;
}
```

Login.tsx

```js
import React from 'react';

export function login() {
  return <div>Login</div>;
}
```

App.tsx

```js
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
```
