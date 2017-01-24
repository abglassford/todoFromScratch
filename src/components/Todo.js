import React, { PropTypes, Component } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';


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
  }

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  edit() {
    if (!this.props.completed) {
      this.setState({
        editable: true,
      });
    }
  }

  render() {
    if (this.state.editable) {
      return (
        <tr>
          <td>
            <form
              onSubmit={(e) => {
                e.preventDefault();
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
          </td>
        </tr>
      );
    }
    return (
      <tr>
        <td>
          <a
            className="todo"
            onClick={() => this.edit()}
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none',
            }}
          >
            {this.props.text}
          </a>
        </td>
        <td>
          <CompleteTodo
            onClick={this.props.completeTodo}
            completed={this.props.completed}
          />
        </td>
        <td>
          <DeleteTodo
            onClick={this.props.deleteTodo}
          />
        </td>
      </tr>
    );
  }
}

export default Todo;
