import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { completeTodoSaga, deleteTodoSaga } from '../actions';
import Todo from './Todo';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapState = state => ({
  todos: getTodos(state.todos, state.visibilityFilter),
});

class TodoList extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    todos: PropTypes.array,
    getTodos: PropTypes.func,
  }
  static defaultProps = {
    dispatch: () => {},
    todos: [],
    getTodos: () => {},
  }

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.todos.map(todo =>
            <tr
              key={todo.id}
            >
              <td>
                <Todo
                  text={todo.text}
                  completed={todo.completed}
                />
              </td>
              <td>
                <CompleteTodo
                  onClick={() => this.props.dispatch(completeTodoSaga(todo))}
                />
              </td>
              <td>
                <DeleteTodo
                  onClick={() => this.props.dispatch(deleteTodoSaga(todo))}
                />
              </td>
            </tr>,
          )}
        </tbody>
      </table>
    );
  }
}

export default connect(mapState)(TodoList);
