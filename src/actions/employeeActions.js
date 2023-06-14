export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const EDIT_EMPLOYEES = 'EDIT_EMPLOYEES';
export const EDIT_EMPLOYEES_SUCCESS = 'EDIT_EMPLOYEES_SUCCESS';
export const EDIT_EMPLOYEES_FAILURE = 'EDIT_EMPLOYEES_FAILURE';
export const FETCH_CAFE_EMPLOYEES = 'FETCH_CAFE_EMPLOYEES'; 
export const FETCH_CAFE_EMPLOYEES_SUCCESS = 'FETCH_CAFE_EMPLOYEES_SUCCESS'; 
export const FETCH_CAFE_EMPLOYEES_FAILURE = 'FETCH_CAFE_EMPLOYEES_FAILURE';

export const fetchEmployees = (id) => ({
  type: FETCH_EMPLOYEES,
  payload : id,
});

export const fetchEmployeeSuccess = (employee) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employee,
});

export const fetchEmployeeFailure = (error) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const addEmployeeSuccess = (employee) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const addEmployeeFailure = (error) => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload: error,
});

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEES,
  payload: employee,
});

export const editEmployeeSuccess = (employee) => ({
  type: EDIT_EMPLOYEES_SUCCESS,
  payload: employee,
});

export const editEmployeeFailure = (error) => ({
  type: EDIT_EMPLOYEES_FAILURE,
  payload: error,
});

export const fetchCafeEmployee = (id) => ({
  type: FETCH_CAFE_EMPLOYEES,
  payload : id,
});

export const fetchCafeEmployeeSuccess = (employee) => ({
  type: FETCH_CAFE_EMPLOYEES_SUCCESS,
  payload: employee,
});

export const fetchCafeEmployeeFailure = (error) => ({
  type: FETCH_CAFE_EMPLOYEES_FAILURE,
  payload: error,
});
