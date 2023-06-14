import { all } from 'redux-saga/effects';
import cafeSaga from './cafeSaga';
import employeeSaga from './employeeSaga';
// import cafeReducerAddEdit from '../reducers/cafeReducerAddEdit';

function* rootSaga() {
  yield all([cafeSaga(), employeeSaga()]);
  // yield all([cafeSaga(), employeeSaga(), cafeReducerAddEdit]);
}

export default rootSaga;
