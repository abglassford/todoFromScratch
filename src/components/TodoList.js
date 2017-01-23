import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { updateTodoSaga } from '../actions';
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
      <div>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            text={todo.text}
            onClick={() => this.props.dispatch(updateTodoSaga(todo))}
            completed={todo.completed}
          />,
        )}
      </div>
    );
  }
}

export default connect(mapState)(TodoList);
