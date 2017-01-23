import { assert, expect } from 'chai';
import uuidv1 from 'uuid';
import todoApp from './src/reducers';

const id = uuidv1();

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


const add = {
  type: 'ADD_TODO',
  todo: {
    text: 'HEYO!',
    completed: false,
    id,
  },
};

const get = {
  type: 'GET_ALL_TODOS',
  todos: testState.todos,
};

const update = {
  type: 'UPDATE_TODO',
  todo: {
    text: 'Sleep',
    completed: true,
    id: '2',
  },
};

describe('todoApp', () => {
  it('should return an object no matter what case is passed', () => {
    assert.typeOf(todoApp({}, {}), 'object');
    assert.typeOf(todoApp({}, 'Monkey'), 'object');
    assert.typeOf(todoApp({}, { type: 'LALALA', todos: ['1', '2', '3'] }), 'object');
  });
  it('should return an object with with a new todo when passed "ADD_TODO"', () => {
    expect(todoApp(testState, add)).to.deep.equal(
      {
        visibilityFilter: 'SHOW_ALL',
        todos: [...testState.todos, {
          text: 'HEYO!',
          completed: false,
          id,
        },
        ],
      },
    );
  });
  it('should get all of the todos in state when passed "GET_ALL_TODOS"', () => {
    expect(todoApp(testState, get)).to.deep.equal({
      visibilityFilter: 'SHOW_ALL',
      todos: testState.todos,
    });
  });
  it('should update the selected todo when passed "UPDATE_TODO"', () => {
    expect(todoApp(testState, update)).to.deep.equal({
      visibilityFilter: 'SHOW_ALL',
      todos: [
        {
          text: 'Eat',
          completed: false,
          id: '1',
        },
        {
          text: 'Sleep',
          completed: true,
          id: '2',
        },
        {
          text: 'Code',
          completed: false,
          id: '3',
        },
      ],
    });
  });
});
