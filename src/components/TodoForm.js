import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onInputChange() {
    return (e) => {
      this.setState({value: e.target.value})
    };
  }
  submit() {
    return (e) => {
      e.preventDefault()
      const value = this.state.value;
      const dispatch = this.props.dispatch;
      if (value.trim()) {
        dispatch(addTodo(value));
        this.setState({value: ''});
      }
    };
  }
  render() {
    return (
    <div>
      <form onSubmit={this.submit()}>
        <input
          value={this.state.value}
          onChange={this.onInputChange()}
          />
        <button>Add Todo</button>
      </form>
      <TodoList />
    </div>
    );
  }
}

export default connect()(TodoForm);
