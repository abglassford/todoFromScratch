import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddTodo, dispatchGetTodos } from '../actions/dispatch.actions';
import TodoList from './TodoList';

class TodoForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }
  static defaultProps = {
    dispatch: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onInputChange() {
    return (e) => {
      this.setState({ value: e.target.value });
    };
  }
  submit() {
    return (e) => {
      e.preventDefault();
      const value = this.state.value;
      const dispatch = this.props.dispatch;
      if (value.trim()) {
        dispatch(dispatchAddTodo(value));
        this.setState({ value: '' });
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
        <TodoList
          getTodos={() => this.props.dispatch(dispatchGetTodos())}
        />
      </div>
    );
  }
}

export default connect()(TodoForm);
