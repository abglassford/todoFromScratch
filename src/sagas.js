import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getTodos, toggleTodo } from './routes';
import { updateTodo } from './actions';

export function* addSaga(action) {
  const todo = yield call(postTodo, action.text);
  yield put({
    type: 'ADD_TODO',
    todo,
  });
}

export function* toggleSaga(action) {
  const result = yield call(toggleTodo, action);
  yield put(updateTodo(result.data));
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
