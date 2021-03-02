import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './home/Home.js';
import Login from './auth/Login.js';
import Signup from './auth/Signup.js';
import Todo from './todo/Todo.js';
// import PrivateRoute from './components/PrivateRoute.js';
import { Route, Router, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <Login {...routerProps} />}
            />
                        <Route
              path="/signup"
              exact
              render={(routerProps) => <Signup {...routerProps} />}
            />
                        <Route
              path="/list"
              exact
              render={(routerProps) => <Todo {...routerProps} />}
            />
          </Switch>
        </Router>

        
      </div>
    )
  }
}
