import React from 'react';
import { Route } from 'react-router-dom';
import AppLayout from './layout';
import Home from './pages/home';
import Like from './pages/like';
import Chat from './pages/chat';
import Shop from './pages/shop';
import Settings from './pages/setting';
import Profile from './pages/profile';
import Write from './pages/write';
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <AppLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/like" component={Like} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/write" component={Write} />
      </AppLayout>
    </>
  );
};

export default App;
