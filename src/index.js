import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'


import App from './components/App';
import Code404 from './components/code404';
import LoggIn from './components/logg-in';
import './styles/reset.css';
import './styles/style.css';

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ LoggIn } />
          <Route name="mainApp" path="/home/:name" exact component={ App } />
          <Route component={ Code404 } />
        </Switch>
      </div>
    </Router>
  )
};

const wrapper = document.querySelector('#wrapper');
wrapper.style.minHeight = `${window.innerHeight}px`;
ReactDOM.render( <Routes /> , wrapper);
