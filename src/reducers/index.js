import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';
import employeeReducer from './employeeReducer';
// import employeeReducerAddEdit from './employeeReducerAddEdit';
// import cafeReducerAddEdit from './cafeReducerAddEdit';

const rootReducer = combineReducers({
  cafes: cafeReducer,
  employee: employeeReducer,
  // AddEditEmployee: employeeReducerAddEdit,
  // AddEditCafe: cafeReducerAddEdit,
});

export default rootReducer;
