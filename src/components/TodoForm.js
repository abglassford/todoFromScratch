import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/dispatch.actions';

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
  onChange() {
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
        dispatch(addTodo(value));
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
            onChange={this.onChange()}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(TodoForm);
