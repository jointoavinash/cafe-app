import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  FETCH_EMPLOYEES, 
  fetchEmployeeSuccess, 
  fetchEmployeeFailure,
  ADD_EMPLOYEE,
  addEmployeeSuccess,
  addEmployeeFailure,
  EDIT_EMPLOYEES,
  editEmployeeSuccess,
  editEmployeeFailure,
  FETCH_CAFE_EMPLOYEES, 
  fetchCafeEmployeeSuccess, 
  fetchCafeEmployeeFailure,
} from '../actions/employeeActions';
import * as employeeService from '../services/employeeService';

function* fetchEmployeeSaga(action) {
  try {
    const employee = yield call(employeeService.getEmployees, action.payload);
    yield put(fetchEmployeeSuccess(employee));
  } catch (error) {
    yield put(fetchEmployeeFailure(error.message));
  }
}

function* addEmployeeSaga(action) {
  try {
    const employee = yield call(employeeService.addEmployee, action.payload);
    yield put(addEmployeeSuccess(employee));
  } catch (error) {
    yield put(addEmployeeFailure(error.message));
  }
}

function* editEmployeeSaga(action) {
  try {
    const employee = yield call(employeeService.editEmployee, action.payload);
    yield put(editEmployeeSuccess(employee));
  } catch (error) {
    yield put(editEmployeeFailure(error.message));
  }
}

function* fetchCafeEmployeeSaga(action) {
  try {
    const employee = yield call(employeeService.getCafeEmployees, action.payload);
    yield put(fetchCafeEmployeeSuccess(employee));
  } catch (error) {
    yield put(fetchCafeEmployeeFailure(error.message));
  }
}

function* employeeSaga() {
  yield takeEvery(FETCH_EMPLOYEES, fetchEmployeeSaga);
  yield takeEvery(ADD_EMPLOYEE, addEmployeeSaga);
  yield takeEvery(EDIT_EMPLOYEES, editEmployeeSaga);
  yield takeEvery(FETCH_CAFE_EMPLOYEES, fetchCafeEmployeeSaga);
}

export default employeeSaga;
