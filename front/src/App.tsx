import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Write from './pages/write';
const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/write" component={Write} />
    </>
  );
};

export default App;
