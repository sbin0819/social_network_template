import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import AppLayout from './layout';
const Home = lazy(() => import('./pages/home'));
const Like = lazy(() => import('./pages/like'));
const Friends = lazy(() => import('./pages/frineds'));
const Chat = lazy(() => import('./pages/chat'));
const Shop = lazy(() => import('./pages/shop'));
const Settings = lazy(() => import('./pages/setting'));
const Profile = lazy(() => import('./pages/profile'));
const Write = lazy(() => import('./pages/write'));

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/login' && pathname !== '/signup' && (
        <AppLayout>
          <Suspense fallback={<h1>loading...</h1>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/like" component={Like} />
              <Route exact path="/friends" component={Friends} />
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/Settings" component={Settings} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/write" component={Write} />
            </Switch>
          </Suspense>
        </AppLayout>
      )}
      <Suspense fallback={<h1>loading...</h1>}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Suspense>
    </>
  );
};

export default App;
