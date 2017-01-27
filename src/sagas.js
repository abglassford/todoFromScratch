import { takeEvery, put, call } from 'redux-saga/effects';
import { addTodo, getTodos, completeTodo, deleteTodo, renameTodo } from './routes';
import { setComplete, setAddTodo, setGetTodos } from './actions/set.actions';

export function* setTodos() {
  const result = yield call(getTodos);
  yield put(setGetTodos(result));
}

export function* addSaga(action) {
  const result = yield call(addTodo, action.text);
  yield put(setAddTodo(result));
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
  yield takeEvery('DISPATCH_GET_TODOS', setTodos);
}

export function* watchAddSaga() {
  yield takeEvery('DISPATCH_ADD_TODO', addSaga);
}

export function* watchComplete() {
  yield takeEvery('DISPATCH_COMPLETE_TODO', complete);
}

export function* watchDeleteSaga() {
  yield takeEvery('DELETE_TODO_SAGA', deleteSaga);
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
