import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getTodos, toggleTodo } from './routes';

export function* addSaga() {
  yield call(postTodo, 'taco');
  yield put({
    type: 'ADD_TODO',
  });
}

export function* toggleSaga(action) {
  const todo = yield call(toggleTodo, action);
  yield put({
    type: 'TOGGLE_TODO',
    todo,
  });
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO_SAGA', addSaga);
}

export function* getSaga() {
  const todos = yield call(getTodos);
  yield put({
    type: 'GET_ALL_TODOS',
    todos,
  });
}

export function* watchToggleSaga() {
  yield takeEvery('TOGGLE_TODO_SAGA', toggleSaga);
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', getSaga);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
    watchToggleSaga(),
    watchGetSaga(),
  ];
}
