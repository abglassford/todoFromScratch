import React, { PropTypes, Component } from 'react';


class Todo extends Component {
  static propTypes = {
    completeTodo: PropTypes.func,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }

  static defaultProps = {
    completeTodo: () => {},
    text: '',
    completed: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  edit() {
    this.setState({
      editable: true,
    });
  }

  render() {
    if (this.state.editable) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.completeTodo();
            this.setState({
              editable: false,
            });
          }}
        >
          <input
            className="todoEdit"
            defaultValue={this.props.text}
          />
          <button
            className="edit"
          >
          Submit
        </button>
        </form>
      );
    }
    return (
      <a
        className="todo"
        onClick={() => this.edit()}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
      >
        {this.props.text}
      </a>
    );
  }
}

export default Todo;
