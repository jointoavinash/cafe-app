import { all } from 'redux-saga/effects';
import cafeSaga from './cafeSaga';
import employeeSaga from './employeeSaga';

function* rootSaga() {
  yield all([cafeSaga(), employeeSaga()]);
}

export default rootSaga;
