import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './home/Home.js';
import Login from './auth/Login.js';
import Signup from './auth/Signup.js';
import Todo from './todo/Todo.js';
import PrivateRoute from './components/PrivateRoute.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { putTokenInLocalStorage, getTokenFromLocalStorage } from './utils.js';

export default class App extends Component {
  state = {
    user: getTokenFromLocalStorage()
  }

  handleTokenChange = (user) => {
    this.setState({ user })

    putTokenInLocalStorage(user);
  }

  handleSignOut = () => {
    this.handleTokenChange({});
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <Header 
            user={this.state.user}
            handleSignOut={this.handleSignOut}/>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => 
                <Login 
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => 
                <Signup 
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps} />}
            />
            <PrivateRoute
              path="/list"
              exact
              token={user && user.token}
              render={(routerProps) => 
                <Todo 
                  user={this.state.user}
                  {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
