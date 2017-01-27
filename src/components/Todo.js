import React, { PropTypes, Component } from 'react';
import EditableTodo from './EditableTodo';
import Uneditabletodo from './UneditableTodo';

class Todo extends Component {
  static propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    completeTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    renameTodo: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    completed: false,
    completeTodo: () => {},
    deleteTodo: () => {},
    renameTodo: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: this.props.text,
    };
  }

  dispatchEdit() {
    this.props.renameTodo(this.state.value);
    this.setState({
      editable: false,
    });
  }

  watchChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  enableEdit() {
    if (!this.props.completed) {
      this.setState({
        editable: true,
      });
    }
  }

  render() {
    if (this.state.editable) {
      return (
        <EditableTodo
          text={this.props.text}
          onChange={e => this.watchChange(e)}
          onClick={() => this.dispatchEdit()}
        />
      );
    }
    return (
      <Uneditabletodo
        completeTodo={this.props.completeTodo}
        text={this.props.text}
        completed={this.props.completed}
        deleteTodo={this.props.deleteTodo}
        enableEdit={() => this.enableEdit()}
      />
    );
  }
}

export default Todo;
