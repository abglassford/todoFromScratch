import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { updateTodoSaga } from '../actions';
import Todo from './Todo';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

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
                  onClick={() => this.props.dispatch(updateTodoSaga(todo))}
                  completed={todo.completed}
                />
              </td>
              <td>
                <DeleteTodo
                  onClick={() => console.log('delete')}
                />
              </td>
              <td>
                <EditTodo
                  onClick={() => console.log('edit')}
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
