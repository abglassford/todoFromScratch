import { put, call } from 'redux-saga/effects';
import { assert, expect } from 'chai';
import { getTodos } from '../routes';
import { getAllTodos } from '../actions';
import { getSaga } from '../sagas';


describe('getSaga', () => {
  const iterator = getSaga();
  it('must call getTodos', () => {
    expect(iterator.next().value).to.deep.equal(call(getTodos));
  });
  it('must THEN call getAllTodos with the result of getTodos', () => {
    expect(iterator.next().value).to.deep.equal(put(getAllTodos(call(getTodos))));
  });
});
