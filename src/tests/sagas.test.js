import { put, call } from 'redux-saga/effects';
import { expect } from 'chai';
import * as routes from '../routes';
import * as set from '../actions/set.actions';
import * as dispatch from '../actions/dispatch.actions';
import * as sagas from '../sagas';

describe('setTodos', () => {
  const iterator = sagas.setTodos();
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(routes.getAllTodos));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(put(set.replaceTodos()));
  });
});

describe('addSaga', () => {
  const action = dispatch.addTodo();
  const iterator = sagas.addSaga(action);
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(routes.postTodo, action.text));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(sagas.setTodos()));
  });
});

describe('complete', () => {
  const action = dispatch.completeTodo();
  const iterator = sagas.complete(action);
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(routes.completeTodo, action));
  });
  it('must call second yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(put(set.setComplete()));
  });
});

describe('deleteSaga', () => {
  const action = dispatch.deleteTodo();
  const iterator = sagas.deleteSaga(action);
  it('must call first yield of generator function', () => {
    expect(iterator.next().value).to.deep.equal(call(routes.deleteTodo, action));
  });
  it('must call setTodos()', () => {
    expect(iterator.next().value).to.deep.equal(call(sagas.setTodos));
  });
});
