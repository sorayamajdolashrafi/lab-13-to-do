import React, { Component } from 'react';
import './Login.css';
import { login } from '../api-utils.js';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        const user = await login(this.state.email, this.state.password);

        this.props.handleTokenChange(user);
        this.props.history.push('/list');
    }

    render() {
        return (
            <div className="loginMain">
                <form 
                    className="loginForm"
                    onSubmit={this.handleSubmit}>
                    <h2>login:</h2>
                    
                    <label className="loginLabel">
                        <input 
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder="ohno@yikes.com"/>
                        <h3>email</h3>
                    </label>
                    
                    <label className="loginLabel">
                        <input 
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder="1234"/>
                        <h3>password</h3>
                    </label>

                    <button className="loginButton">it's list time!</button>
                </form>
                
            </div>
        )
    }
}
