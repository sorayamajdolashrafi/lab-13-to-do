import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="homeMain">
                <div className="homeWrapper">
                    <h2>to do:</h2>
                    <label>
                        <p>make a list</p>
                    </label>
                    <label>
                        <p>eat some snacks</p>
                    </label>
                    <label>
                        <p>dance in socks</p>
                    </label>
                </div>
            </div>
        )
    }
}
