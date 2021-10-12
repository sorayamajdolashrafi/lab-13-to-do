import React, { Component } from 'react';
import './Signup.css';
import { signUp } from '../api-utils.js';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        const user = await signUp(this.state.email, this.state.password);

        this.props.handleTokenChange(user);
        this.props.history.push('/list');
    }

    render() {
        return (
            <div className="signupMain">
                <form 
                    className="signupForm"
                    onSubmit={this.handleSubmit}>
                    <h2>sign up:</h2>
                    
                    <label className="signupLabel">
                        <input 
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder="yikes@yikes.com"/>
                        <h3>email</h3>
                    </label>
                    
                    <label className="signupLabel">
                        <input 
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder="1234"/>
                        <h3>password</h3>
                    </label>

                    <button className="signupButton">get started!</button>
                </form>
                
            </div>
        )
    }
}
