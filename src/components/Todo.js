import React, { PropTypes, Component } from 'react';
import EditableTodo from './EditableTodo';
import Uneditabletodo from './UneditableTodo';

class Todo extends Component {
  static propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
    renameTodo: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    completed: false,
    onComplete: () => {},
    onDelete: () => {},
    renameTodo: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: this.props.text,
    };
  }

  rename() {
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
          onClick={() => this.rename()}
        />
      );
    }
    return (
      <Uneditabletodo
        onComplete={this.props.onComplete}
        text={this.props.text}
        completed={this.props.completed}
        onDelete={this.props.onDelete}
        enableEdit={() => this.enableEdit()}
      />
    );
  }
}

export default Todo;
