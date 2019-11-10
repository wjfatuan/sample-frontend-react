import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import './App.css';
import Menu from './components/Menu.js';
import Page1 from './Page1.js';
import Home from './Home.js';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/page1">
          <Page1/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
