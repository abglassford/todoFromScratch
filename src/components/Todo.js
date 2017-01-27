import React, { PropTypes, Component } from 'react';
import EditableTodo from './EditableTodo';
import Uneditabletodo from './UneditableTodo';


class Todo extends Component {
  static propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    completeTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
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

  render() {
    if (this.state.editable) {
      return (
        <EditableTodo
          text={this.props.text}
          parent={this}
        />
      );
    }
    return (
      <Uneditabletodo
        completeTodo={this.props.completeTodo}
        text={this.props.text}
        completed={this.props.completed}
        deleteTodo={this.props.deleteTodo}
      />
    );
  }
}

export default Todo;
