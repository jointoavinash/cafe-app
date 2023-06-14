import {
    FETCH_CAFES_SUCCESS,
    FETCH_CAFES_FAILURE,
  } from '../actions/cafeActions';
  
  const initialState = {
    cafes: [],
    error: null,
  };
  
  const cafeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CAFES_SUCCESS:
        return {
          ...state,
          cafes: action.payload,
          error: null,
        };
      case FETCH_CAFES_FAILURE:
        return {
          ...state,
          cafes: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cafeReducer;
  