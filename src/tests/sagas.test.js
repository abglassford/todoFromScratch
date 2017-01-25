import { put, call } from 'redux-saga/effects';
import { expect } from 'chai';
import { getTodos, postTodo, completeTodo } from '../routes';
import { getAllTodos, addTodoSaga, addTodo, completeTodoSaga, setVisibilityFilter, completeTodoAction, deleteTodoSaga, editTodoSaga } from '../actions';
import { getSaga, addSaga, completeSaga, deleteSaga, editSaga } from '../sagas';


describe('getSaga', () => {
  const iterator = getSaga();
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(getTodos));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(put(getAllTodos()));
  });
});

describe('addSaga', () => {
  const action = addTodoSaga();
  const iterator = addSaga(action);
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(postTodo, action.text));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(put(addTodo()));
  });
});

describe('completeSaga', () => {
  const action = completeTodoSaga();
  const iterator = completeSaga(action);
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(completeTodo, action));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(put(completeTodoAction()));
  });
});
