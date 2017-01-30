import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getAllTodos, completeTodo, deleteTodo, renameTodo } from './routes';
import { replaceTodos } from './actions/set.actions';

export function* set() {
  const result = yield call(getAllTodos);
  yield put(replaceTodos(result));
}

export function* add(action) {
  yield call(postTodo, action.text);
  yield call(set);
}

export function* complete(action) {
  yield call(completeTodo, action);
  yield call(set);
}

export function* remove(action) {
  yield call(deleteTodo, action);
  yield call(set);
}

export function* rename(action) {
  yield call(renameTodo, action);
  yield call(set);
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', set);
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO', add);
}

export function* watchComplete() {
  yield takeEvery('COMPLETE_TODO', complete);
}

export function* watchDeleteSaga() {
  yield takeEvery('DELETE_TODO', remove);
}

export function* watchEditSaga() {
  yield takeEvery('RENAME_TODO', rename);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
    watchComplete(),
    watchGetSaga(),
    watchDeleteSaga(),
    watchEditSaga(),
  ];
}
