import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const TodoForm = ({ dispatch }) => {
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

  </div>
);}

export default connect()(TodoForm);
