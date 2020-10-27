import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './store/action';

class App extends Component {

  state = {
    value: ''
  }

  addTodoValue = () => {
    this.props.addtodo(this.state.value);
    this.setState({ value: '' })
  }
  render() {
    const { todos } = this.props
    return (
      <div className="App">
        <h1>Todo App</h1>

        <input type="text" value={this.state.value} placeholder="Enter Something..." onChange={(e) => this.setState({ value: e.target.value })} />
        <button onClick={() => this.addTodoValue()} >Add Todo</button>

        <ul>
          {
            todos.map((todo, index) => {
              return <li key={index} >
                {todo}
              </li>
            })
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  addtodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);