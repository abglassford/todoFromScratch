import { takeEvery, put, call } from 'redux-saga/effects';
import { postTodo, getTodos, updateTodo, deleteTodo } from './routes';
import { updateTodoAction, addTodo,
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
  yield put(updateTodoAction(result.data));
}

export function* deleteSaga(action) {
  yield call(deleteTodo, action);
  yield getSaga();
}

export function* watchGetSaga() {
  yield takeEvery('GET_TODOS', getSaga);
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO_SAGA', addSaga);
}

export function* watchToggleSaga() {
  yield takeEvery('UPDATE_TODO_SAGA', updateSaga);
}

export function* watchDeleteSaga() {
  yield takeEvery('DELETE_TODO_SAGA', deleteSaga);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
    watchToggleSaga(),
    watchGetSaga(),
    watchDeleteSaga(),
  ];
}
