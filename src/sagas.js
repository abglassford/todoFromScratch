import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getTodos, updateTodo, deleteTodo, editTodo } from './routes';
import { completeTodoAction, addTodo,
getAllTodos } from './actions';

export function* getSaga() {
  const result = yield call(getTodos);
  yield put(getAllTodos(result));
}

export function* addSaga(action) {
  const result = yield call(postTodo, action.text);
  yield put(addTodo(result));
}

export function* updateSaga(action) {
  const result = yield call(updateTodo, action);
  yield put(completeTodoAction(result.data));
}

export function* deleteSaga(action) {
  yield call(deleteTodo, action);
  yield getSaga();
}

export function* editSaga(action) {
  yield call(editTodo, action);
  yield getSaga();
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', getSaga);
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO_SAGA', addSaga);
}

export function* watchToggleSaga() {
  yield takeEvery('COMPLETE_TODO_SAGA', updateSaga);
}

export function* watchDeleteSaga() {
  yield takeEvery('DELETE_TODO_SAGA', deleteSaga);
}

export function* watchEditSaga() {
  yield takeEvery('EDIT_TODO_SAGA', editSaga);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
    watchToggleSaga(),
    watchGetSaga(),
    watchDeleteSaga(),
    watchEditSaga(),
  ];
}
