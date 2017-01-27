import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { dispatchCompleteTodo, dispatchDeleteTodo, dispatchRenameTodo, dispatchGetTodos } from '../actions/dispatch.actions';
import Todo from './Todo';


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
  }
  static defaultProps = {
    dispatch: () => {},
    todos: [],
  }

  componentWillMount() {
    this.props.dispatch(dispatchGetTodos());
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              renameTodo={text => this.props.dispatch(dispatchRenameTodo(todo, text))}
              completeTodo={() => this.props.dispatch(dispatchCompleteTodo(todo))}
              deleteTodo={() => this.props.dispatch(dispatchDeleteTodo(todo))}
            />,
          )}
        </tbody>
      </table>
    );
  }
}

export default connect(mapState)(TodoList);
