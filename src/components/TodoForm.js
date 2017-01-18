import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const TodoForm = ({ dispatch, todos }) => {
  let input;

  return (
  <div>
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addTodo(input.value))
        input.value = '';
      }}>
      <input ref={node => {
        input = node
      }}>
      </input>
      <button>Add Todo</button>
    </form>
    <TodoList />
  </div>
);}

export default connect()(TodoForm);
