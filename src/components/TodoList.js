import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo, rename, getTodos } from '../actions/dispatch.actions';
import { getVisibleTodos } from '../helper';
import Todo from './Todo';

const mapState = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
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
    this.props.dispatch(getTodos());
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
              renameTodo={text => this.props.dispatch(rename(todo, text))}
              onComplete={() => this.props.dispatch(completeTodo(todo))}
              onDelete={() => this.props.dispatch(deleteTodo(todo))}
            />,
          )}
        </tbody>
      </table>
    );
  }
}

export default connect(mapState)(TodoList);
