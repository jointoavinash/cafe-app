import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  FETCH_CAFES, 
  fetchCafesSuccess, 
  fetchCafesFailure, 
  ADD_CAFES, 
  addCafeSuccess, 
  addCafeFailure, 
  EDIT_CAFES, 
  editCafeSuccess, 
  editCafeFailure 
} from '../actions/cafeActions';
import * as cafeService from '../services/cafeService';

function* fetchCafesSaga(action) {
  try {
    const cafes = yield call(cafeService.getCafes, action.payload);
    yield put(fetchCafesSuccess(cafes));
  } catch (error) {
    yield put(fetchCafesFailure(error.message));
  }
}

function* addCafeSaga(action) {
  try {
    console.log('from addCafeSaga');
    const cafe = yield call(cafeService.addCafe, action.payload);
    yield put(addCafeSuccess(cafe));
  } catch (error) {
    yield put(addCafeFailure(error.message));
  }
}

function* editCafeSaga(action) {
  try {
    const cafe = yield call(cafeService.editCafe, action.payload);
    yield put(editCafeSuccess(cafe));
  } catch (error) {
    yield put(editCafeFailure(error.message));
  }
}

function* cafeSaga() {
  yield takeEvery(FETCH_CAFES, fetchCafesSaga);
  yield takeEvery(ADD_CAFES, addCafeSaga);
  yield takeEvery(EDIT_CAFES, editCafeSaga);
}

export default cafeSaga;
