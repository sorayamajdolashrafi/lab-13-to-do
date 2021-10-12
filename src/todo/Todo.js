import React, { Component } from 'react';
import { completeTodo, createTodo, getTodos } from '../api-utils';
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
        
        await createTodo(this.state.hacer, this.state.color, this.props.user.token);
        await this.fetchList();

        this.setState({ hacer: '', color: '' })
        console.log('state:', this.state)
    }

    handleComplete = async(todoId) => {

        await completeTodo(todoId, this.props.user.token);

        this.fetchList();
    }

    render() {
        return (
            <div className="listMain">
                <h2>to do:</h2>

                <form
                    className="listForm"
                    onSubmit={this.handleSubmit}>

                    <input
                        placeholder="new task"
                        value={this.state.hacer}
                        onChange={this.handleHacerChange} />

                    
                    <select
                        value={this.state.color}                       
                        onChange={this.handleColorChange}>
                            <option value="">label by color</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                            <option value="orange">orange</option>
                            <option value="pink">pink</option>
                            <option value="purple">purple</option>
                            <option value="blue">blue</option>
                    </select>

                    <button>add to list</button>
                </form>

                <div className="listWrapper">
                    {this.state.list.map(todo =>
                        <label
                            key={`${todo.id}`}
                            onClick={() => this.handleComplete(todo.id)}
                            className={`todo_${todo.completed ? 'completed_' : ''}${todo.color}`}
                        >
                            <p>{todo.hacer}</p>

                        </label>
                    )}
                </div>
            </div>
        )
    }
}
