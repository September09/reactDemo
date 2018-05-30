import React from 'react';
import { Route, hashHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './App';
// import Page1 from './page1';
// import Page2 from './page2';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

const RouteMap = () => (
  <HashRouter history={hashHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/stuff" component={Stuff} />
      <Route path="/contact" component={Contact} />
    </div>
  </HashRouter>
);

export default RouteMap;
