import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                

                {
                (!this.props.user || !this.props.user.token) && <>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/">home</NavLink>
                <NavLink to="/signup">sign up</NavLink>
                </>
                }

                {
                (this.props.user && this.props.user.token) && <>
                <NavLink to="/list">to do:</NavLink>
                <NavLink to="/">home</NavLink>
                <button 
                    className="headerButton"
                    onClick={this.props.handleSignOut}>sign out</button>
                </>
                }
            </div>
        )
    }
}
