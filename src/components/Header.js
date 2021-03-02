import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/">home</NavLink>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/signup">sign up</NavLink>
                <NavLink to="/list">to do:</NavLink>
                <button onClick={this.props.handleLogout}>sign out</button>
            </div>
        )
    }
}
