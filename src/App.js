import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Home from './Home';
import Exercise1 from "./exercise1/Exercise1";
import Exercise2 from "./exercise2/Exercise2";
import Exercise3 from "./exercise3/Exercise3";
import Exercise4 from "./exercise4/Exercise4";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <nav>
            <ul className="header__list">
              <li className="header__item">
                <Link to="/"><img src="/E710.png" className="e710"></img></Link>
              </li>
              <li className="header__item">
                <Link to="/exercise1">Ejercicio 1</Link>
              </li>
              <li className="header__item">
                <Link to="/exercise2">Ejercicio 2</Link>
              </li>
              <li className="header__item">
                <Link to="/exercise3">Ejercicio 3</Link>
              </li>
              <li className="header__item">
                <Link to="/exercise4">Ejercicio 4</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/exercise1">
            <Exercise1 />
          </Route>
          <Route path="/exercise2">
            <Exercise2 />
          </Route>
          <Route path="/exercise3">
            <Exercise3 />
          </Route>
          <Route path="/exercise4">
            <Exercise4 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
