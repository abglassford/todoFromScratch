import { assert, expect } from 'chai';
import uuidv1 from 'uuid';
import todoApp from '../reducers';
import * as set from '../actions/set.actions';

const testState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Eat',
      completed: false,
      id: '1',
    },
    {
      text: 'Sleep',
      completed: false,
      id: '2',
    },
    {
      text: 'Code',
      completed: false,
      id: '3',
    },
  ],
};

describe('todoApp', () => {
  it('should return an object no matter what case is passed', () => {
    assert.typeOf(todoApp({}, {}), 'object');
    assert.typeOf(todoApp({}, 'Monkey'), 'object');
    assert.typeOf(todoApp({}, { type: 'LALALA', todos: ['1', '2', '3'] }), 'object');
  });
  it('should return an object with with a new todo', () => {
    const todo = {
      text: 'lalallala',
      completed: false,
      id: uuidv1(),
    };
    const state = todoApp(testState, set.addTodo(todo));
    expect(state.todos).to.include(todo);
  });
  it('should get all of the todos in state', () => {
    const state = todoApp(testState, set.replaceTodos(testState.todos));
    expect(state.todos).to.deep.equal(testState.todos);
  });
  it('should update the selected todo to completed', () => {
    const todo = {
      text: 'Code',
      completed: true,
      id: '3',
    };
    const state = todoApp(testState, set.setComplete(todo));
    expect(state.todos[2].completed).to.equal(true);
  });
  it('should update the visibility filter when prompted', () => {
    const state = todoApp(testState, set.setVisibilityFilter('SHOW_ACTIVE'));
    expect(state.visibilityFilter).to.equal('SHOW_ACTIVE');
  });
});
