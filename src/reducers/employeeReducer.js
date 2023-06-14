import {
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE,
    FETCH_CAFE_EMPLOYEES_SUCCESS,
    FETCH_CAFE_EMPLOYEES_FAILURE
  } from '../actions/employeeActions';

  const initialState = {
    employee: [],
    error: null,
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EMPLOYEES_SUCCESS:
      case FETCH_CAFE_EMPLOYEES_SUCCESS:
        return {
          ...state,
          employee: action.payload,
          error: null,
        };
        case FETCH_EMPLOYEES_FAILURE:
        case FETCH_CAFE_EMPLOYEES_FAILURE:
            return {
          ...state,
          employee: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  