import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  cafes: cafeReducer,
  employee: employeeReducer,
});

export default rootReducer;
