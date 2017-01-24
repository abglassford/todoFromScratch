import React, { PropTypes, Component } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';


class Todo extends Component {
  static propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    completeTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    completed: false,
    completeTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: this.props.text,
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
            <input
              className="todoEditInput"
              defaultValue={this.props.text}
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <button
              className="submitEdit"
              dangerouslySetInnerHTML={{
                __html: '&#x2713',
              }}
              onClick={(e) => {
                e.preventDefault();
                this.props.editTodo(this.state.value);
                this.setState({
                  editable: false,
                });
              }}
            />
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
          <DeleteTodo
            onClick={this.props.deleteTodo}
          />
        </td>
      </tr>
    );
  }
}

export default Todo;
