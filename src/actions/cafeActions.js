export const FETCH_CAFES = 'FETCH_CAFES';
export const FETCH_CAFES_SUCCESS = 'FETCH_CAFES_SUCCESS';
export const FETCH_CAFES_FAILURE = 'FETCH_CAFES_FAILURE';

export const ADD_CAFES = 'ADD_CAFES';
export const ADD_CAFES_SUCCESS = 'ADD_CAFES_SUCCESS';
export const ADD_CAFES_FAILURE = 'ADD_CAFES_FAILURE';

export const EDIT_CAFES = 'EDIT_CAFES';
export const EDIT_CAFES_SUCCESS = 'EDIT_CAFES_SUCCESS';
export const EDIT_CAFES_FAILURE = 'EDIT_CAFES_FAILURE';

export const fetchCafes = (id) => ({
  type: FETCH_CAFES,
  payload : id,
});

export const fetchCafesSuccess = (cafes) => ({
  type: FETCH_CAFES_SUCCESS,
  payload: cafes,
});

export const fetchCafesFailure = (error) => ({
  type: FETCH_CAFES_FAILURE,
  payload: error,
});

export const addCafe = (cafe) => ({
  type: ADD_CAFES,
  payload: cafe,
});

export const addCafeSuccess = (cafe) => ({
  type: ADD_CAFES_SUCCESS,
  payload: cafe,
});

export const addCafeFailure = (error) => ({
  type: ADD_CAFES_FAILURE,
  payload: error,
});

export const editCafe = (cafe) => ({
  type: EDIT_CAFES,
  payload: cafe,
});

export const editCafeSuccess = (cafe) => ({
  type: EDIT_CAFES_SUCCESS,
  payload: cafe,
});

export const editCafeFailure = (error) => ({
  type: EDIT_CAFES_FAILURE,
  payload: error,
});
