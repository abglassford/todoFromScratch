import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getTodos, toggleTodo } from './routes';
import { updateTodo, addTodo,
getAllTodos } from './actions';

export function* getSaga() {
  const result = yield call(getTodos);
  yield put(getAllTodos(result));
}

export function* addSaga(action) {
  const result = yield call(postTodo, action.text);
  yield put(addTodo(result));
}

export function* toggleSaga(action) {
  const result = yield call(toggleTodo, action);
  yield put(updateTodo(result.data));
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', getSaga);
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO_SAGA', addSaga);
}

export function* watchToggleSaga() {
  yield takeEvery('UPDATE_TODO_SAGA', toggleSaga);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
    watchToggleSaga(),
    watchGetSaga(),
  ];
}
