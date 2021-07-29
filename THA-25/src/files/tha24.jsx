import React, { useState } from "react";
import "./Router.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Dashboard from "./router/Dashboard";
import Profile from "./router/Profile";
import { AuthContext } from "./files/AuthContext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/day-24">Home</Link>
            </li>
            <li>
              <Link to="/day-24/about">About</Link>
            </li>
            <li>
              <Link to="/day-24/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/day-24/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AuthContext>
            <Route exact path="/day-24" component={Home} />
            <Route path="/day-24/about" component={About} />
            <Route exact path="/day-24/dashboard" component={Dashboard} />
            <Route exact path="/day-24/profile" component={Profile} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
