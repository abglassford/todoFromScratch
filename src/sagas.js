import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getAllTodos, completeTodo, deleteTodo, renameTodo } from './routes';
import { setComplete, addTodo, replaceTodos } from './actions/set.actions';

export function* setTodos() {
  const result = yield call(getAllTodos);
  yield put(replaceTodos(result));
}

export function* addSaga(action) {
  const result = yield call(postTodo, action.text);
  yield put(addTodo(result));
}

export function* complete(action) {
  const result = yield call(completeTodo, action);
  yield put(setComplete(result));
}

export function* deleteSaga(action) {
  yield call(deleteTodo, action);
  yield call(setTodos);
}

export function* editSaga(action) {
  yield call(renameTodo, action);
  yield setTodos();
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', setTodos);
}

export function* watchAddSaga() {
  yield takeEvery('DISPATCH_ADD_TODO', addSaga);
}

export function* watchComplete() {
  yield takeEvery('COMPLETE_TODO', complete);
}

export function* watchDeleteSaga() {
  yield takeEvery('DELETE_TODO', deleteSaga);
}

export function* watchEditSaga() {
  yield takeEvery('DISPATCH_RENAME_TODO', editSaga);
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
