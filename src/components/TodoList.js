import React from 'react';
import { addTodo } from '../actions';

const TodoList = () => {
  let input;

  return (
  <div>
    <form onSubmit={(e) => {
        e.preventDefault()
        addTodo(input.value)
      }}>
      <input ref={node => {
        input = node
      }}>
      </input>
      <button>Add Todo</button>
    </form>
  </div>
);}

export default TodoList;
