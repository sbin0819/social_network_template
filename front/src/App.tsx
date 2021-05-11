import React from 'react';
import { Route } from 'react-router-dom';
// import Header from './components/header';

import AppLayout from './layout';
import Home from './pages/home';
import Profile from './pages/profile';
import Write from './pages/write';
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <AppLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/write" component={Write} />
      </AppLayout>
    </>
  );
};

export default App;
