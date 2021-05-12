import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import AppLayout from './layout';
const Home = lazy(() => import('./pages/home'));
const Like = lazy(() => import('./pages/like'));
const Chat = lazy(() => import('./pages/chat'));
const Shop = lazy(() => import('./pages/shop'));
const Settings = lazy(() => import('./pages/setting'));
const Profile = lazy(() => import('./pages/profile'));
const Write = lazy(() => import('./pages/write'));

const App = () => {
  return (
    <>
      <AppLayout>
        <Suspense fallback={<h1>loading...</h1>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/like" component={Like} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/write" component={Write} />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default App;
