import React, { Component } from 'react';
import { createTodo, getTodos } from '../api-utils';
import './Todo.css';

export default class Todo extends Component {
    state = {
        list: [],
        hacer: '',
        color: '',
    }

    componentDidMount = async () => {
        await this.fetchList();
    }

    fetchList = async () => {
        const list = await getTodos(this.props.user.token);

        this.setState({ list: list });
    }

    handleHacerChange = (e) => this.setState({ hacer: e.target.value })

    handleColorChange = (e) => this.setState({ color: e.target.value })

    handleSubmit = async (e) => {
        e.preventDefault();

        // const todo = { hacer: this.state.hacer, color: this.state.color, completed: this.state.completed, user_id: this.props.user.id }
        
        await createTodo(this.state.hacer, this.state.color, this.props.user.token);
        await this.fetchList();

        this.setState({ hacer: '', color: '' })
        console.log('state:', this.state)
    }

    render() {
        return (
            <div>
                <h2>to do:</h2>
                <form
                    onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            placeholder="new task"
                            value={this.state.hacer}
                            onChange={this.handleHacerChange} />
                    </label>
                    
                    <h3>color label:</h3>
                    <select
                        value={this.state.color}
                        onChange={this.handleColorChange}>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                            <option value="orange">orange</option>
                            <option value="pink">pink</option>
                            <option value="purple">purple</option>
                            <option value="blue">blue</option>
                    </select>

                    <button>make it!</button>
                </form>

                {this.state.list.map(todo =>
                    <p
                        key={`${todo.id}`}
                        // className={`${todo.color}`}
                    >
                        {todo.hacer}
                    </p>
                )}
            </div>
        )
    }
}
