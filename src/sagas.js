import { takeEvery } from 'redux-saga/effects';

export function* addSaga() {
  yield console.log('Hello!');
}

export function* watchAddSaga() {
  yield takeEvery('ADD_TODO', addSaga);
}

export default function* rootSaga() {
  yield [
    watchAddSaga(),
  ];
}
